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

async function login(userId = 0) {
  const response = await fetchWithAuth(`/users/${userId}`);
  const responseJson = await response.json();

  if (!responseJson?.id) {
    throw new Error(responseJson.message);
  }

  return responseJson;
}

function putUserId(id) {
  localStorage.setItem("userId", id);
}

function getUserId() {
  return localStorage.getItem("userId");
}

function putAuthUser(id) {
  localStorage.setItem("authUser", id);
}

function getAuthUser() {
  localStorage.getItem("authUser");
}

export { register, login, putUserId, getUserId, putAuthUser, getAuthUser };
