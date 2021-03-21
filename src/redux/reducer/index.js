
import { combineReducers } from 'redux'
import { ADD_ARTICLE , ADD_AUTHOR} from "../constants/action-type";

const initialState = {
  articles: [
    // {"id":  "123"},
    // {"title": "abc"}
  ],
  author:[]
};

const addArticle  = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return  Object.assign({}, state, {articles: state.articles.concat(action.payload)});
    default:
      return state
  }
}

const addAuthor  = (state = initialState, action) => {
  switch (action.type) {
    case ADD_AUTHOR:
      return  Object.assign({}, state, {articles: state.author.concat(action.payload)});
    default:
      return state
  }
}
function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  return state;
}

// const rootReducer = combineReducers({
//   addArticle,
//   addAuthor
// })



export default rootReducer;