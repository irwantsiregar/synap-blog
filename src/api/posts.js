import { fetchWithAuth } from "./fetchWithAuth";

async function getAllPosts() {
  const response = await fetchWithAuth("/posts");
  return response.json();
}

async function getPostDetail(postId) {
  const response = await fetchWithAuth(`/posts/${postId}`);
  return response.json();
}

export { getPostDetail, getAllPosts };
