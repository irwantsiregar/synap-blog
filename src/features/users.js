import { getAllUsers } from "../api/users";

export async function receiveAllUser() {
  try {
    return await getAllUsers();
  } catch (error) {
    return error;
  }
}
