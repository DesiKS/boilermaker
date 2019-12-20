import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
// import { allStudentsReducer, singleStudentReducer } from './studentsReducer'
// import { loadingReducer } from './loadingReducer'

const rootReducer = combineReducers({
  user: userReducer
  //   allStudents: allStudentsReducer,
  //   singleCampus: singleCampusReducer,
  //   singleStudent: singleStudentReducer,
  //   loading: loadingReducer
});

// function rootReducer(state = {}, action) {
//   // DELETE
//   return state;
// }

export default rootReducer;
