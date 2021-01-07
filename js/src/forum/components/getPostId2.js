import {extend} from 'flarum/extend';
import app from 'flarum/app';
import CommentPost from 'flarum/components/CommentPost';
import FieldsViewer from '../../../../../../fof/mason/js/src/forum/components/FieldsViewer';
import Component from 'flarum/Component';

//const discussion = this.props.discussion;
 
/**
   * Generate a URL to a post.
   *
   * @param {Post} post
   * @return {String}
   */
const post = app.route.post;
export const PostId = (post) => {
    return post.number();
};

