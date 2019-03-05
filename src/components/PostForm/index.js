import {connect} from 'react-redux';
import * as postActions from '../../actions/postActions';
import PostsForm from './PostForm';

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (payload) => { return dispatch(postActions.addPost(payload)); },
    };
};

const PostFormContainer = connect(
    null,
    mapDispatchToProps
)(PostsForm);

export default PostFormContainer;