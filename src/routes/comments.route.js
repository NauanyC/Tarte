const express = require("express")
const router  = express.Router();

const CommentsController = require("../controllers/comments.controller");

/* all comments of a specific dish */
router.get("/", CommentsController.index);

/* post a new comment */
router.get("/New", CommentsController.newCommentForm);
router.post("/", CommentsController.create);

/* edit a comment */
router.get("/:id/Edit", CommentsController.editCommentForm);
router.put("/:id", CommentsController.update);

/* delete a comment*/
router.delete("/:id", CommentsController.delete);

module.exports = router;

