"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const mongoose_1 = __importDefault(require("mongoose"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const db_1 = require("./db");
const middleware_1 = require("./middleware");
app.use(express_1.default.json());
const config_1 = require("./config");
//cpnnet with mongo db
mongoose_1.default
    .connect("mongodb://127.0.0.1:27017/brain")
    .then(() => {
    console.log("db connected..!");
})
    .catch((err) => {
    console.log("db not connected..!");
});
//for signup
app.post("/api/v1/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    const hashpass = yield bcrypt_1.default.hash(password, 10);
    const duplicateUser = yield db_1.UserModel.findOne({ username: username });
    if (duplicateUser) {
        res.status(403).json({
            error: "user already exist",
        });
    }
    const user = yield db_1.UserModel.create({
        username: username,
        password: hashpass,
    });
    if (user) {
        res.status(200).json({
            message: "signup successfull",
        });
    }
    else {
        res.status(500).json({
            message: "internal server error",
        });
    }
}));
//for signin
app.post("/api/v1/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.body.username;
    const password = req.body.password;
    const ans = yield db_1.UserModel.findOne({
        username: username,
    });
    if (!ans || !ans.password) {
        res.status(404).json({
            message: "user not found",
        });
    }
    const matchpass = yield bcrypt_1.default.compare(password, ans === null || ans === void 0 ? void 0 : ans.password);
    if (matchpass) {
        const token = jsonwebtoken_1.default.sign({
            id: ans === null || ans === void 0 ? void 0 : ans._id.toString(),
        }, config_1.JWT_PASSWORD);
        res.status(201).json({
            message: "signin success",
            token: token,
        });
    }
    else {
        res.status(403).json({
            message: "worng password",
        });
    }
}));
//for add a new content
app.post("/api/v1/content", middleware_1.userMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const link = req.body.link;
    const type = req.body.type;
    const title = req.body.title;
    const ans = yield db_1.contenModel.insertMany({
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
    }
    else {
        res.status(500).json({
            error: "internal server error",
        });
    }
})); //to fetch all the content
app.get("/api/v1/content", middleware_1.userMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ans = yield db_1.contenModel
        .find({
        //@ts-ignore
        userId: req.userId,
    })
        .populate("userId", "username");
    res.status(200).json({
        consent: ans,
    });
}));
//for delete a content
app.delete("/api/v1/content", middleware_1.userMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contentId = req.body.contentId;
    const ans = yield db_1.contenModel.deleteMany({
        _id: contentId,
        //@ts-ignore
        userId: req.userId,
    });
    res.status(200).json({
        ans: ans,
        message: "content is deleted..!",
    });
}));
//foe share a link
app.post("/api/v1/brain/share", (req, res) => { });
//for fetch another user share link
app.get("/api/v1/brain/:shareLink", (req, res) => { });
app.listen(8080, () => {
    console.log("app is listen..!");
});
