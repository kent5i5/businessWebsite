
import { ADD_ARTICLE } from "../constants/action-types";

//action creator

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}

export const fetchPostsIfNeeded = subreddit => (dispatch, getState) => {
  if (shouldFetchPosts(getState(), subreddit)) {
    return dispatch(fetchPosts(subreddit))
  }
}