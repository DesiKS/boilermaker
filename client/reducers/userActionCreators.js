import Axios from 'axios';

export const GET_USER = 'GET_USER';

export const gotMe = user => ({
  type: GET_USER,
  user
});

export const getMe = () => dispatch => {
  return Axios.get('api/auth/me')
    .then(res => res.data)
    .then(user => dispatch(gotMe(user)))
    .catch(console.error.bind(console));
};

export const login = formData => dispatch => {
  return Axios.put('api/auth/login', formData)
    .then(res => res.data)
    .then(user => dispatch(gotMe(user)))
    .catch(console.error.bind(console));
};

export const logout = () => dispatch => {
  return Axios.delete('api/auth/logout')
    .then(() => dispatch(gotMe({})))
    .catch(console.error.bind(console));
};
