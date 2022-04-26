import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import commentsReducer from '../reducers/comments';
import { saveState } from '../../localStorage';

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const configureStore = () => {
  const rootReducer = combineReducers({
    comments: commentsReducer,
  });

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );

  store.subscribe(() => {
    saveState(store.getState().auth, 'authState');
  });

  return store;
};

const store = configureStore();

export default store;
