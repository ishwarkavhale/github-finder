import React from 'react';
import { Link } from 'react-router-dom';

const UserItem = (props) => {
  //  const state = {
  //     login: "mojombo",
  //     avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
  //     html_url: "https://github.com/mojombo",
  //   };
  // w an de structure the state element for avoiding repetation of the this.state for each item as follows
  //  const {html_url, login,avatar_url} = this.state
  // after this not need to write this.state for element can get direct access by calling element name
  const { avatar_url, login } = props.user;
  return (
    <div className="card text-center ">
      <img
        src={avatar_url}
        alt="profile"
        className="round-img"
        style={{ width: '70px' }}
      />
      <h3>{login}</h3>
      <Link to={`user/${login}`} className="btn btn-dark btn-sm my-1">
        More..
      </Link>
    </div>
  );
};

export default UserItem;
