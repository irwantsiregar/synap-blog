import { postCommentOnPost } from "../api/comments";

export async function addCommentOnPost({ postId, name, email, body }) {
  try {
    const comment = await postCommentOnPost({ postId, name, email, body });
    return comment;
  } catch (error) {
    return error;
  }
}
