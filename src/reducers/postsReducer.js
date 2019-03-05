let initialState = {
  posts: [],
};

const postsReducer = (state = initialState, action) => {
  let { type, response } = action;
  switch (type) {
    case 'ADD_POST_SUCCESS': {
      return {
        ...state,
        posts: [
          ...state.posts,
          response,
        ]
      };
    }
    case 'GET_POSTS_SUCCESS': {
      return {
        ...state,
        posts: response,
      }
    }
    default: {
      return state;
    }
  }
}

export default postsReducer;

