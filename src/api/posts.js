import { fetchWithAuth } from "./fetchWithAuth";

async function getAllPosts() {
  const response = await fetchWithAuth("/posts");
  return response.json();
}

async function getPostDetail(postId) {
  const response = await fetchWithAuth(`/posts/${postId}`);
  return response.json();
}

async function postBlogPosts({ userId, title, body }) {
  const response = await fetchWithAuth(`/users/${userId}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, body }),
  });
  const responseJson = await response.json();

  if (!responseJson?.id) {
    throw new Error(responseJson.message);
  }

  return responseJson;
}

export { getPostDetail, getAllPosts, postBlogPosts };
