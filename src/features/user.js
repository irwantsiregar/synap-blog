import {
  register,
  patchUser,
  getOwnProfile,
  getAllUserBlogPosts,
} from "../api/user";

async function registerUser({ name, email, gender, status }) {
  try {
    const registered = await register({ name, email, gender, status });
    return registered;
  } catch (error) {
    return error;
  }
}

async function updateUser({ userId, name, email, gender, status }) {
  try {
    const updated = await patchUser({ userId, name, email, gender, status });
    return updated;
  } catch (error) {
    return error;
  }
}

async function loginUser({ email, userId }) {
  try {
    const user = await getOwnProfile(userId);
    if (user?.email !== email) return {};
    return user;
  } catch (error) {
    return error;
  }
}

async function receiveUserProfile(userId) {
  try {
    const user = await getOwnProfile(userId);
    return user;
  } catch (error) {
    return error;
  }
}

async function receiveUserBlogPosts(userId) {
  try {
    const userPost = await getAllUserBlogPosts(userId);
    return userPost;
  } catch (error) {
    return error;
  }
}

export {
  registerUser,
  updateUser,
  loginUser,
  receiveUserProfile,
  receiveUserBlogPosts,
};
