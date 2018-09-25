import React from 'react'

import PeopleList from './PeopleList[strip_state]';
import DataComponent from './DataComponent'

const RandomMeUsers = DataComponent(
  PeopleList,
  "https://randomuser.me/api/"
)

export default RandomMeUsers