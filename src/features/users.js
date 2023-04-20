/* eslint-disable no-console */
import { getAllUsers } from "../api/users";

export async function receiveAllUser() {
  try {
    const users = await getAllUsers();
    return users;
  } catch (error) {
    return error;
  }
}
