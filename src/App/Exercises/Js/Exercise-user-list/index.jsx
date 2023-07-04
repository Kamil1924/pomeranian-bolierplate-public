import React from 'react';
import './styles.css';

export function UserList() {
  const [inputValue, setInputValue] = React.useState('')

  const [users, setUsers] = React.useState([]);

  const changeInputValue = (event) => {
    setInputValue(event.target.value);
  }

  const sendFormValue = () => {
    setUsers((prevState) => [...prevState, { name: inputValue }]);

    setInputValue('');
  }

  return (
    <div className="Users-list">
      <div className="users-list-input-wrapper">
        <div className="users-list-input">
          <div>NICK</div>
          <div>
            <input
              type="text"
              placeholder="new nick"
              onChange={changeInputValue}
              value={inputValue}
              name="Nick input"
            />
          </div>
        </div>
        <button
          onClick={sendFormValue}
          disabled={!inputValue.length}
        >
          Dodaj
        </button>
      </div>
      <div className="users-list-list-wrapper"></div>
    </div>
  );
}
