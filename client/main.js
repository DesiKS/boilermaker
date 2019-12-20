import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Root from './components/root';
import UserAuthentication from './components/userIndex';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserPage from './components/userPage';
// import AllCampusesContainer from './components/allCampusesContainer'
// import AllStudentsContainer from './components/allStudentsContainer'
// import SingleCampusContainer from './components/singleCampusContainer'
// import SingleStudentContainer from './components/singleStudentContainer'
// import Error from './components/error'
import '../public/index.css';

ReactDOM.render(
  <h1>HERE</h1>,
  // <Provider store={store}>
  //   <Router>
  //     <Switch>
  //       {/* <Route exact path="/" component={Root} /> */}
  //       <Route exact path="/auth" component={UserAuthentication} />
  //       <Route path="/home" component={UserPage} />
  //       {/* <Route exact path="/campuses" component={AllCampusesContainer} />
  //       <Route exact path="/students" component={AllStudentsContainer} />
  //       <Route
  //         path="/campuses/:campusId"
  //         render={routeProps => (
  //           <SingleCampusContainer id={routeProps.match.params.campusId} />
  //         )}
  //       />
  //       <Route
  //         path="/students/:studentId"
  //         render={routeProps => (
  //           <SingleStudentContainer id={routeProps.match.params.studentId} />
  //         )}
  //       />
  //       <Route component={Error} /> */}
  //     </Switch>
  //   </Router>
  // </Provider>,
  document.getElementById('app')
);

//npm run start-dev
