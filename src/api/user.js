import { fetchWithAuth } from "./fetchWithAuth";

async function registerAndPatchUser({ userId = "", method, data }) {
  const response = await fetchWithAuth(`/users/${userId}`, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const responseJson = await response.json();

  if (!responseJson?.id) {
    if (responseJson?.message) throw new Error(responseJson.message);
    const [{ field, message }] = responseJson;
    throw new Error(`${field} ${message}`);
  }

  return responseJson;
}

async function register({ name, email, gender, status }) {
  return registerAndPatchUser({
    method: "POST",
    data: { name, email, gender, status },
  });
}
async function patchUser({ userId, name, email, gender, status }) {
  return registerAndPatchUser({
    userId,
    method: "PATCH",
    data: { name, email, gender, status },
  });
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
  patchUser,
  getOwnProfile,
  getAllUserBlogPosts,
  getLocalStorage,
  putLocalStorage,
};
