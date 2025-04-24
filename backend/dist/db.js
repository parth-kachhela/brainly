"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.contenModel = exports.linkModel = exports.tagModel = exports.UserModel = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const UserSchema = new mongoose_1.Schema({
    username: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
});
const tagSchema = new mongoose_1.Schema({
    title: {
        type: String,
        require: true,
    },
});
const linkSchema = new mongoose_1.Schema({
    hash: { type: String, require: true },
    userId: {
        type: mongoose_1.default.Types.ObjectId,
        ref: "User",
        require: true,
    },
});
const contentTypes = ["image", "video", "article", "audio"]; // Extend as needed
const contentSchema = new mongoose_1.Schema({
    link: { type: String, required: true },
    type: { type: String, required: true },
    title: { type: String, required: true },
    tags: [{ type: mongoose_1.default.Types.ObjectId, ref: "Tag" }],
    userId: { type: mongoose_1.default.Types.ObjectId, ref: "User", required: true },
});
const UserModel = (0, mongoose_1.model)("User", UserSchema);
exports.UserModel = UserModel;
const tagModel = (0, mongoose_1.model)("Tag", tagSchema);
exports.tagModel = tagModel;
const linkModel = (0, mongoose_1.model)("Link", linkSchema);
exports.linkModel = linkModel;
const contenModel = (0, mongoose_1.model)("Content", contentSchema);
exports.contenModel = contenModel;
