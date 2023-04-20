import { getAllPosts, getPostDetail } from "../api/posts";
import { getUser } from "../api/users";
import { getAllCommentsPost } from "../api/comments";

async function receiveAllPosts() {
  try {
    const posts = await getAllPosts();
    return posts;
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
