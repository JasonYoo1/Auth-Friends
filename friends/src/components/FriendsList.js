import React from 'react';
import { connect } from 'react-redux';


import { createPost } from '../actions/index.js';
import Friend from './Friends';

const FriendsList = props => {
  return (
    <div className="friends-list-container">
      <div className="friends-btn" onClick={props.createPost}>
          <button>Get Friends</button>
      </div>
      hello
      <div className="friendscard">
        {props.friends && props.friends.map(friend => 
        <Friend key={friend.id} friend={friend} />)}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    friends: state.friends
  };
};

export default connect(mapStateToProps,{ createPost })(FriendsList);