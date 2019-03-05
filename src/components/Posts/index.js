import {connect} from 'react-redux';
import * as postActions from '../../actions/postActions';
import Posts from './Posts';

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
      getPosts: () => { return dispatch(postActions.getPosts()); },
    };
};

const PostsContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Posts);

export default PostsContainer;