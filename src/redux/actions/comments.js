import axios from '../axios-config';
import { commentsSelector } from '../selectors';

export const setComments = (comments) => ({
  type: 'SET_COMMENTS',
  comments,
});

export const updateComment = (id, updates) => ({
  type: 'UPDATE_COMMENT',
  id,
  updates,
});

export const deleteComment = (id) => ({
  type: 'DELETE_COMMENT',
  id,
});
