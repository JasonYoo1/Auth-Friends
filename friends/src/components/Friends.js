import React from 'react';

const Friend = ({ props }) => {
  return (
    <div className="container">
      <h2 className="name">{props.name}</h2>
      <p className="age">{props.age}</p>
      <p className="email">{props.email}</p>
    </div>
  );
};

export default Friend;
