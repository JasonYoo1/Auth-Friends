import React from 'react'


import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { friendsData } from '../actions/index'

class Friends extends React.Component {
    componentDidMount() {
        this.props.friendsData();
    }

    render() {
        return (
            <div className='App-wrapper'>
                <h2 id='list'>List of friends:</h2>
                {this.props.friends.map(friend => {
                    return (
                        <div className='friends' key={friend.id}>
                            <strong>{friend.name}</strong>
                            <p>Age: {friend.age}</p>
                            <p>Email: {friend.email}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        friends: state.friends
    }
}

export default connect(
    mapStateToProps,
    { friendsData }
)(Friends) 
