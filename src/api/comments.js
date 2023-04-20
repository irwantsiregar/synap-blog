import { config } from "@/utils/config";

export async function getAllCommentsPost(postId) {
  const response = await fetch(`${config.api_host}/posts/${postId}/comments`, {
    headers: {
      Authorization: `Bearer ${config.token}`,
    },
  });
  return response.json();
}

export async function postCommentOnPost({ postId, name, email, body }) {
  const response = await fetch(`${config.api_host}/posts/${postId}/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${config.token}`,
    },
    body: JSON.stringify({ name, email, body }),
  });
  return response.json();
}
