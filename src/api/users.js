import { config } from "@/utils/config";

async function getAllUsers() {
  const response = await fetch(`${config.api_host}/users`);
  return response.json();
}

async function getUser(userId) {
  const response = await fetch(`${config.api_host}/users/${userId}`);
  return response.json();
}

export { getAllUsers, getUser };
