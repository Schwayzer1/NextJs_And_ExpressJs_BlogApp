const express = require("express");
const {
  getPosts,
  createPosts,
  deletePost,
  getSinglePost,
} = require("../controllers/posts");
// const {} = require("../controllers/posts")

const router = express.Router();

router.get("/", getPosts);

router.get("/:id", getSinglePost);

router.post("/", createPosts);

// router.patch("/:id", updatePost);

router.delete("/:id", deletePost);

module.exports = router;
