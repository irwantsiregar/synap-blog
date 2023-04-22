import { fetchWithAuth } from "./fetchWithAuth";

async function getAllUsers() {
  const response = await fetchWithAuth("/users");
  return response.json();
}

async function getUser(userId) {
  const response = await fetchWithAuth(`/users/${userId}`);
  return response.json();
}

export { getAllUsers, getUser };
