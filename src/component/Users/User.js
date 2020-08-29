import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Repos from '../repos/Repos';
import GithubContext from '../Context/gitHub/GithubContext';
function User({ match }) {
  const githubContext = useContext(GithubContext);
  const { getUser, loading, user, getUserRepos, repos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
  }, []);

  const {
    name,
    following,
    followers,
    blog,
    location,
    bio,
    company,
    hireable,
    avatar_url,
    html_url,
    public_gists,
    login,
    public_repos,
  } = user;

  if (loading) {
    return (
      <h2 style={{ textAlign: 'center' }}>
        Loading...
        <Spinner />
      </h2>
    );
  }
  return (
    <Fragment>
      <Link to="/" className="btn btn-light">
        <i className="fa fa-arrow-left" /> Back to homepage
      </Link>
      Hireable:{' '}
      {hireable ? (
        <i className="fa fa-check-circle text-success" />
      ) : (
        <i className="fa fa-times-circle text-danger" />
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            alt="avatar"
            className="round-img"
            style={{ width: '140px' }}
          />
          <h2> {name}</h2>
          <p>Location:{location}</p>
        </div>
        <div>
          <p>
            <h3>Bio</h3>
            {bio}
          </p>
          <a href={html_url} className="btn btn-dark my-1">
            Visit Github Profile
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Username:</strong>
                  {login}
                </Fragment>
              )}
            </li>
            <li>
              {company && (
                <Fragment>
                  <strong>company:</strong>
                  {company}
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong>Website:</strong>
                  {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <p className="badge badge-primary">Following {following}</p>
        <p className="badge badge-success">Followers {followers}</p>
        <p className="badge badge-light">Public Repos {public_repos}</p>
        <p className="badge badge-dark">Public Gists {public_gists}</p>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
}

User.propTypes = {
  loading: PropTypes.bool.isRequired,
  getUser: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
  getUserRepos: PropTypes.func.isRequired,
};
export default User;
