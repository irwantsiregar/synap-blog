import {
  register,
  login,
  putUserId,
  getUserId,
  putAuthUser,
} from "../api/user";

async function registerUser({ name, email, gender, status }) {
  try {
    const registered = await register({ name, email, gender, status });
    putUserId(registered?.id);
    return registered;
  } catch (error) {
    return error;
  }
}

async function loginUser({ email }) {
  try {
    const user = await login(getUserId());
    if (user?.email !== email) return {};
    putAuthUser(user.id);
    return user;
  } catch (error) {
    return error;
  }
}

export { registerUser, loginUser };
