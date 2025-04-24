import express from "express";
const app = express();
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bycrypt, { hash } from "bcrypt";
import { contenModel, linkModel, UserModel } from "./db";
import { userMiddleware } from "./middleware";
app.use(express.json());
import { JWT_PASSWORD } from "./config";
import { random } from "./utils";
//cpnnet with mongo db
mongoose
  .connect("mongodb://127.0.0.1:27017/brain")
  .then(() => {
    console.log("db connected..!");
  })
  .catch((err) => {
    console.log("db not connected..!");
  });

//for signup
app.post("/api/v1/signup", async (req, res) => {
  const { username, password } = req.body;
  const hashpass = await bycrypt.hash(password, 10);
  const duplicateUser = await UserModel.findOne({ username: username });
  if (duplicateUser) {
    res.status(403).json({
      error: "user already exist",
    });
  }

  const user = await UserModel.create({
    username: username,
    password: hashpass,
  });

  if (user) {
    res.status(200).json({
      message: "signup successfull",
    });
  } else {
    res.status(500).json({
      message: "internal server error",
    });
  }
});

//for signin
app.post("/api/v1/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const ans = await UserModel.findOne({
    username: username,
  });

  if (!ans || !ans.password) {
    res.status(404).json({
      message: "user not found",
    });
  }

  const matchpass = await bycrypt.compare(password, ans?.password as string);

  if (matchpass) {
    const token = jwt.sign(
      {
        id: ans?._id.toString(),
      },
      JWT_PASSWORD
    );
    res.status(201).json({
      message: "signin success",
      token: token,
    });
  } else {
    res.status(403).json({
      message: "worng password",
    });
  }
});

//for add a new content
app.post("/api/v1/content", userMiddleware, async (req, res) => {
  const link: string = req.body.link;
  const type: string = req.body.type;
  const title: string = req.body.title;
  const ans = await contenModel.insertMany({
    link: link,
    type: type,
    title: title,
    //@ts-ignore
    userId: req.userId,
  });

  if (ans) {
    res.status(200).json({
      message: "insert sucess",
    });
  } else {
    res.status(500).json({
      error: "internal server error",
    });
  }
}); //to fetch all the content
app.get("/api/v1/content", userMiddleware, async (req, res) => {
  const ans = await contenModel
    .find({
      //@ts-ignore
      userId: req.userId,
    })
    .populate("userId", "username");
  res.status(200).json({
    consent: ans,
  });
});

//for delete a content
app.delete("/api/v1/content", userMiddleware, async (req, res) => {
  const contentId = req.body.contentId;
  const ans = await contenModel.deleteMany({
    _id: contentId,
    //@ts-ignore
    userId: req.userId,
  });
  res.status(200).json({
    ans: ans,
    message: "content is deleted..!",
  });
});

//foe share a link
app.post("/api/v1/brain/share", userMiddleware, async (req, res) => {
  const share = req.body.share;
  if (share) {
    const existingLink = await linkModel.findOne({
      //@ts-ignore
      userId: req.userId,
    });
    if (existingLink) {
      res.status(411).json({
        Message: "user already exist",
      });
      return;
    }
    let hash = random(10);
    const ans = await linkModel.create({
      //@ts-ignore
      userId: req.userId,
      hash: hash,
    });
    res.status(200).json({
      Message: "like is" + hash,
    });
  } else {
    let ans = await linkModel.deleteMany({
      //@ts-ignore
      userId: req.userId,
    });
    res.status(200).json({
      Message: "like removed",
      ans: ans,
    });
  }
});

//for fetch another user share link
app.get("/api/v1/brain/:shareLink", (req, res) => {});

app.listen(8080, () => {
  console.log("app is listen..!");
});
