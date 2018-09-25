import React, { Component } from 'react'

import getFakeMembers from '../fakeMembers'
import Member from './Member'

export default class MemberList extends Component {
  constructor() {
    super()
    this.state = {
      members: [],
      loading: false,
      error: null
    }
  }

  componentWillMount() {
    this.setState({loading: true})
    getFakeMembers(this.props.count).then(
      members => {
        this.setState({members, loading: false})
      },
      error => {
        this.setState({error, loading: false})
      }
    )
  }

  componentWillUpdate() {
    console.log('updating lifecycle')
  }

  render() {
    const { members, loading, error } = this.state
    return (
      <div className="member-list">
        {(loading) ?
          <span>Loading Members</span> :
          (members.length) ?
            members.map((user, i) =>
              <Member key={i} {...user}/>
            ) :
            <span>0 members loaded...</span>
        }
        {(error) ? <p>Error loading Members: error</p> : ""}
      </div>
    )
  }
}