import React from 'react';
import { connect } from 'react-redux';


import { getFriendsData } from '../actions/index.js';
import Friend from './Friends';

const FriendsList = props => {
  return (
    <div >
      <div>
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
  { getFriendsData }
)(FriendsList);