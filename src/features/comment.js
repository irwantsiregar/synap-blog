import { postCommentOnPost } from "../api/comments";

export async function addCommentOnPost({ postId, name, email, body }) {
  try {
    return await postCommentOnPost({ postId, name, email, body });
  } catch (error) {
    return error;
  }
}
