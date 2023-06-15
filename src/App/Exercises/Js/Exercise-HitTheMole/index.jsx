import './styles.css';
import { Button } from './SettingButton/SettingButton';
// import { Tile } from './Tile/Tile';
import { useState } from 'react';
import { Playground } from './playground';

export function HitTheMole() {
  const [isInGame, setIsInGame] = useState(false)
  const [time, setTime] = useState(1)
  const [mole, setMole] = useState(1)


  if (!isInGame) {
    return (
      <div>
        <div className="hit-the-mole"></div>
        <h4>Hit The Mole</h4>
        <p>
          Gra polegająca na podążaniu za kretem i klikaniem w niego gdy się pojawi.
        </p>

        <div className="settings-container">
          <div className="label">Czas gry</div>
          <Button isActive={time == 1} onClick={function () { setTime(1) }}>1 minuta</Button>
          <Button isActive={time == 2} onClick={function () { setTime(2) }}>2 minuty</Button>
          <Button isActive={time == 3} onClick={function () { setTime(3) }}>3 minuty</Button>
        </div>
        <div className="settings-container">
          <div className="label">Liczba kretów</div>
          <Button isActive={mole == 1} onClick={function () { setMole(1) }}>1 kret</Button>
          <Button isActive={mole == 2} onClick={function () { setMole(2) }}>2 krety</Button>
          <Button isActive={mole == 3} onClick={function () { setMole(3) }}>3 krety</Button>
        </div>
        <div className="settings-container">
          <div className="label">Start</div>
          <Button onClick={function () { setIsInGame(true) }}>Start</Button>
        </div>
      </div>
    )
  } else {
    return <Playground playTime={time} moleCount={mole} onStop={function () { setIsInGame(false) }}></Playground>
  }
}


