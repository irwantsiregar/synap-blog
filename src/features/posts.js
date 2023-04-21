import { getUser } from "../api/users";
import { getAllPosts, getPostDetail } from "../api/posts";
import { getAllCommentsPost } from "../api/comments";

async function receiveAllPosts() {
  try {
    return await getAllPosts();
  } catch (error) {
    return error;
  }
}

async function receivePostDetail(postId) {
  try {
    const detail = await getPostDetail(postId);
    const user = await getUser(detail.user_id);
    const comments = await getAllCommentsPost(detail.id);
    return { ...detail, author: user.name, comments };
  } catch (error) {
    return error;
  }
}

export { receiveAllPosts, receivePostDetail };
