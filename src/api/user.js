import { fetchWithAuth } from "./fetchWithAuth";

async function register({ name, email, gender, status }) {
  const response = await fetchWithAuth("/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, gender, status }),
  });
  const responseJson = await response.json();

  if (!responseJson?.id) {
    const [{ field, message }] = responseJson;
    throw new Error(`${field} ${message}`);
  }

  return responseJson;
}

async function getOwnProfile(userId = 0) {
  const response = await fetchWithAuth(`/users/${userId}`);
  const responseJson = await response.json();

  if (!responseJson?.id) {
    throw new Error(responseJson.message);
  }

  return responseJson;
}

async function getAllUserBlogPosts(userId = 0) {
  const response = await fetchWithAuth(`/users/${userId}/posts`);
  const responseJson = await response.json();
  return responseJson;
}

function getLocalStorage(key) {
  if (typeof window !== "undefined") return localStorage.getItem(key);
  return "";
}

function putLocalStorage(key, value) {
  if (typeof window !== "undefined") localStorage.setItem(key, value);
}

export {
  register,
  getOwnProfile,
  getAllUserBlogPosts,
  getLocalStorage,
  putLocalStorage,
};
