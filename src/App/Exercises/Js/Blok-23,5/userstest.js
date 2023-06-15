import React, { useEffect, useId, useState } from 'react';
import './style.css';

import db from './db.json';

// export const User = ({ i, name, age, setUsers }) => {
//   const changeUserName = (newNameLetter) => {
//     if (newNameLetter === '') return;
//     setUsers((prevUsers) => {
//       const certainUser = { ...prevUsers[i] };
//       certainUser.name = newNameLetter;
//       prevUsers.splice(i, 1, certainUser);
//       // TODO: Users overwrite each other on change

//       return [...prevUsers];
//     });
//   };

//   return (
//     <div>
//       {i + 1}user: {name} is {age} old but prefers to be named:
//       {name && (
//         <input type="text" onChange={(e) => changeUserName(e.target.value)} />
//       )}
//     </div>
//   );
// };

// export const Users = () => {
//   const [users, setUsers] = useState([
//     {
//       name: 'Lukas',
//       age: 9999,
//     },
//     {
//       name: 'Lukas',
//       age: 2,
//     },
//   ]);

//   return users.map((user, index) => (
//     <User
//       key={index}
//       i={index}
//       age={user.age}
//       name={user.name}
//       setUsers={setUsers}
//     />
//   ));
// };

const Cell = ({ value, clicked }) => {
  const uniqueID = useId();
  return (
    <div
      className={`Y ${clicked ? 'clicked' : ''}`}
      // onClick={() => handleClick(uniqueID)}
    >
      {/* {uniqueID} */}
    </div>
  );
};

const MemoBoard = ({ board }) => {
  return board.map((X, xindex) => (
    <div key={`X-${xindex}`} className="X">
      {X.map((Y, yindex) => (
        <Cell
          key={`Y-${yindex}`}
          value={Y.value}
          clicked={Y.clicked}
          // handleClick={handleClick}
        />
      ))}
    </div>
  ));
};
const rand = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const Timer = () => {
  // TODO: When timer hit 0 we should alert alert("Game over!")
  const MIN_TIMER_VAL = 0;
  // That's the amount we initially want to start the game with
  const [chosenTime, setChosenTime] = useState(3 * 1000);
  // That's the time left in game to finish it
  const [timer, setTimer] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    setTimer(chosenTime);
  }, [chosenTime]);

  const changeTimer = (chosenTime) => {
    setChosenTime(chosenTime * 1000);
  };

  const startGame = () => {
    setGameStarted(true);
  };

  useEffect(() => {
    if (gameStarted) {
      let timerInterval = setInterval(() => {
        setTimer((currentTimer) => {
          return currentTimer > MIN_TIMER_VAL
            ? currentTimer - 1000
            : currentTimer;
        });
      }, 1000);
      return () => clearInterval(timerInterval);
    }
  }, [timer, gameStarted]);

  return (
    <>
      You've chosen to play for {chosenTime / 1000} seconds and you're left
      with: <span className="time-left">{timer / 1000} seconds</span>
      <div className="buttons-wrapper">
        <button className="diff-button" onClick={() => changeTimer(30)}>
          30
        </button>
        <button className="diff-button" onClick={() => changeTimer(60)}>
          60
        </button>
        <button className="diff-button" onClick={() => changeTimer(120)}>
          120
        </button>
      </div>
      <button className="diff-button" onClick={() => startGame()}>
        Start!
      </button>
    </>
  );
};

const Difficulty = ({ changeBoardGrid }) => {
  const [diff, setDiff] = useState(4);
  const changeDif = (newDif) => {
    setDiff(newDif);
  };

  useEffect(() => {
    changeBoardGrid(diff);
  }, [diff]);

  return (
    <>
      <p>
        Current difficulty {diff}x{diff} grid
      </p>
      <p>Select on of the difficulties:</p>
      <div className="buttons-wrapper">
        <button className="diff-button" onClick={() => changeDif(2)}>
          2
        </button>
        <button className="diff-button" onClick={() => changeDif(4)}>
          4
        </button>
        <button className="diff-button" onClick={() => changeDif(6)}>
          6
        </button>
      </div>
    </>
  );
};

export const Exercise = () => {
  // TODO: When all tiles turned and timer > 0 alert("Win!")
  // TODO: Fill with names
  const [namesToFillTheBoard, setNamesToFillTheBoard] = useState(
    new Array(4).fill('')
  );
  const [board, setBoard] = useState(
    new Array(4).fill(
      new Array(4).fill({
        value: '',
        clicked: false,
        isTurned: false,
        id: '',
      })
    )
  );

  useEffect(() => {
    console.log(board.length);

    setNamesToFillTheBoard((prev) =>
      prev.map((el, index) => {
        let randomIndex = rand(index, board.length);
        if (namesToFillTheBoard.includes(db.names[randomIndex])) {
          randomIndex = rand(index, board.length);
          return db.names[randomIndex];
        }

        return db.names[randomIndex];
      })
    );

    console.log(namesToFillTheBoard);
  }, [board]);

  const handleClick = (id) => {
    console.log(id);

    // TODO: Get element and change it's clicked value
  };

  const changeBoardGrid = (gridSize) => {
    setBoard(
      new Array(gridSize).fill(
        new Array(gridSize).fill({ value: '', clicked: false })
      )
    );
  };

  return (
    <>
      <Timer />
      <Difficulty changeBoardGrid={changeBoardGrid} />
      <div
        className="wrapper"
        style={{ gridTemplateColumns: `repeat(${board.length}, 1fr)` }}
      >
        <MemoBoard board={board} />
      </div>
    </>
  );
};
