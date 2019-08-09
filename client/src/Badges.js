import React from 'react';

//Displays the nav-bar
const Badges = ({usersOnline, currentUser}) => {
  const userStyle = {
    color: currentUser.color,
  };

    return (
    <nav className="navbar">
      <a href="/" className="navbar-brand">Chatty</a>
      <div className="currentUser" style={userStyle}>{currentUser.name}</div>
      <div className="usersOnline"> {`${usersOnline} user(s) online`}</div>
    </nav>
    );
};
export default Badges;