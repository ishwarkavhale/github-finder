import React, { useState, useContext } from 'react';
import GithubContext from '../Context/gitHub/GithubContext';
import AlertContext from '../Context/alert/AlertContext';
function Search() {
  const [text, setText] = useState('');
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const onSubmit = (event) => {
    event.preventDefault();
    // event.stopPropagation();

    if (text === '') {
      alertContext.setAlert('Search fild cannot be empty', 'light');
    } else {
      githubContext.userSearch(text);
      setText('');
    }
  };
  const onChange = (e) => {
    setText([e.target.value]);
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          value={text}
          placeholder="Search"
          onChange={onChange}
          style={SearchStyle}
        />
        <input
          type="submit"
          value="Search"
          style={{
            margin: '20px auto',
            borderRadius: '10px',
          }}
          className="btn btn-dark btn-block"
        />
      </form>
      {githubContext.users.length > 0 && (
        <button
          className="btn btn-light btn-block"
          onClick={githubContext.clearUsers}
          style={SearchStyle}
        >
          Clear
        </button>
      )}
    </div>
  );
}

const SearchStyle = {
  border: '1px solid #999',
  borderRadius: '10px',
  boxShadow: '1px 2px 1px #bfbfbf',
  margin: '20px auto',
  // width: '65rem',
  color: 'gray',
};

export default Search;
