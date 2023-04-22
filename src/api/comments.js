import { fetchWithAuth } from "./fetchWithAuth";

export async function getAllCommentsPost(postId) {
  const response = await fetchWithAuth(`/posts/${postId}/comments`);
  return response.json();
}

export async function postCommentOnPost({ postId, name, email, body }) {
  const response = await fetchWithAuth(`/posts/${postId}/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, body }),
  });

  const responseJson = await response.json();

  if (!responseJson?.id) {
    const [{ field, message }] = responseJson;
    throw new Error(`${field} ${message}`);
  }

  return responseJson;
}
