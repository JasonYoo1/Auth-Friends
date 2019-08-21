import React from 'react';
import { connect } from 'react-redux';


import { login } from '../actions/index.js';
import Friend from './Friends';

const FriendsList = props => {
  return (
    <div className="friends-list-container">
      <div className="friends-btn" onClick={props.login}>
          <button className="friends-btn">Get Friends</button>
      </div>
      hello
      <div className="friendscontainer">
        {props.friends && 
          props.friends.map(friend => <Friend key={friend.id} props={friend} />)}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    dataIsLoading: state.isLoadingSmurf,
    friends: state.friends
  };
};

export default connect(
  mapStateToProps,
  { login }
)(FriendsList);