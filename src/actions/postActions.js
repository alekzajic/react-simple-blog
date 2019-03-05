export const addPost = (payload = {}) => {
  return {
      type: 'ADD_POST',
      payload,
  };
};

export const getPosts = (payload = {}) => {
  return {
      type: 'GET_POSTS',
      payload,
  };
};
