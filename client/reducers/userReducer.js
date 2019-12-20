import { GET_USER } from './userActionCreators';

export function userReducer(state = {}, action) {
  switch (action.type) {
    case GET_USER:
      return action.user;
    default:
      return state;
  }
}
