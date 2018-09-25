import React from 'react';
import ReactDOM from 'react-dom';

import HiddenMessages from './components/HiddenMessages'
import Display from './components/Display'
import registerServiceWorker from './registerServiceWorker';
import WhenTruthy from './components/WhenTruthy';
import WhenFalsy from './components/WhenFalsy';
import CountryList from './components/CountryList';
import TimeLine from './components/TimeLine';
import historicDatesForSkiing from './historicDatesForSkiing';
import PeopleList from './components/PeopleList';
import RandomMeUsers from './components/RandomMeUsers';
import CountryDropDown from './components/CountryDropDown';
import PopUpButton from './components/MenuButton';

//ReactDOM.render(<HiddenMessages />, document.getElementById('root'));

/* USING REACT.CHILD
const age = 19

ReactDOM.render(
  <Display ifTruthy={age >= 21}>
    <WhenTruthy>
      <h1>You can enter</h1>
    </WhenTruthy>
    <WhenFalsy>
      <h1>Beat it Kid</h1>
    </WhenFalsy>
  </Display>,
  document.getElementById('root')
)
*/

/*
ReactDOM.render(
  <CountryList />,
  document.getElementById('root')
)
*/

/*
ReactDOM.render(
  <TimeLine name="History of Skiing"
    data={historicDatesForSkiing} />,
  document.getElementById('root')
)
*/

/*
ReactDOM.render(
  <PeopleList />,
  document.getElementById('root')
)
*/

/*
ReactDOM.render(
  <RandomMeUsers count={10} />,
  document.getElementById('root')
)
*/

/*
ReactDOM.render(
  <CountryDropDown selected="United States" />,
  document.getElementById('root')
)
*/

ReactDOM.render(
  <PopUpButton hidden={true} txt="toggle popup">
    <h1>Hidden Conponent</h1>
    <p>This content will start off hidden</p>
  </PopUpButton>,
  document.getElementById('root')
)

registerServiceWorker();