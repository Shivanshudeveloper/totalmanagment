/**
 * Tables Routes
 */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Compensation from './Compensation';
import Contact from './Contact';
import Overview from './Overview';

import Personal from './Personal';
import PersonalInformation from './PersonalInformation';
import Time from './Time';
import TimeOff from './TimeOff';

const Othersroute = ({ match }) => {
  console.log(match.url);
  return (
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/personal`} />
      <Route path={`${match.url}/personal`} component={Personal} />
      <Route path={`${match.url}/compensation`} component={Compensation} />
      <Route
        path={`${match.url}/personalinformation`}
        component={PersonalInformation}
      />
      <Route path={`${match.url}/contact`} component={Contact} />
      <Route path={`${match.url}/overview`} component={Overview} />
      <Route path={`${match.url}/time`} component={Time} />
      <Route path={`${match.url}/timeoff`} component={TimeOff} />
    </Switch>
  );
};

export default Othersroute;
