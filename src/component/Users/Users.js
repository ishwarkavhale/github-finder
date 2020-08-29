import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../Context/gitHub/GithubContext';
import NotFound from '../layout/Notfound';

const Users = () => {
  const githubContext = useContext(GithubContext);

  const { loading, users } = githubContext;

  if (loading) {
    return (
      <h2 style={{ textAlign: 'center', lineHeight: '-5px' }}>
        <Spinner />
        Loading...
      </h2>
    );
  } else {
      return (
        <div style={userStyle} className="container">
          {users.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
        </div>
      );
  }
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem',
};

export default Users;
