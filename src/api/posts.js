import { config } from "@/utils/config";

async function getAllPosts() {
  const response = await fetch(`${config.api_host}/posts`, {
    headers: {
      Authorization: `Bearer ${config.token}`,
    },
  });
  return response.json();
}

async function getPostDetail(postId) {
  const response = await fetch(`${config.api_host}/posts/${postId}`, {
    headers: {
      Authorization: `Bearer ${config.token}`,
    },
  });
  return response.json();
}

export { getPostDetail, getAllPosts };
