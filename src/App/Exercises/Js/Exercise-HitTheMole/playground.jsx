import './styles.css';
import { Button } from './SettingButton/SettingButton';
import { Tile } from './Tile/Tile';
import { useEffect, useState } from 'react';


export function Playground(props) {
    const { playTime, moleCount, onStop } = props
    const [remainingPlaytime, setRemainingPlaytime] = useState(playTime * 60 * 1000)
    const [points, setPoints] = useState(0)
    const [tiles, setTiles] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    const [timeoutHandles, setTimeoutHandles] = useState({})

    useEffect(function () {
        const c = setInterval(function () {

            setRemainingPlaytime(function (r) {
                if (r <= 0) {
                    onStop()
                }
                return r - 1000
            })

        }, 1000)

        return function () {
            clearInterval(c)
        }
    }, [])

    function showMole(moleNumber) {


        setTiles(function (tiles) {
            let newTiles = []
            for (let i = 0; i < tiles.length; i = i + 1) {
                newTiles.push(tiles[i])
            }
            const min = 0;
            const max = tiles.length;
            const x = Math.floor(Math.random() * (max - min) + min);
            newTiles[x] = moleNumber
            return newTiles
        })
        timeoutHandles[moleNumber] = setTimeout(function () { hideMole(moleNumber) }, 700)
        /*   TODO:  nakładanie się kretów!!!!   */

    }

    function hideMole(moleNumber) {


        setTiles(function (tiles) {
            let newTiles = []
            for (let i = 0; i < tiles.length; i = i + 1) {
                if (tiles[i] == moleNumber) {
                    tiles[i] = 0
                }
                newTiles.push(tiles[i])
            }
            return tiles
        })

        timeoutHandles[moleNumber] = setTimeout(function () { showMole(moleNumber) }, 1000)

    }
    useEffect(function () {
        for (let i = 1; i <= moleCount; i = i + 1) {
            hideMole(i)
        }
        return function () {
            for (let i = 1; i <= moleCount; i = i + 1) {
                clearTimeout(timeoutHandles[i]);
            }
        }
    }, [])

    return (
        <div>
            <div className="hit-the-mole"></div>
            <h4>Hit The Mole</h4>
            <p>
                Gra polegająca na podążaniu za kretem i klikaniem w niego gdy się pojawi.
            </p>

            <div className="settings-container">
                <div className="label">Czas gry</div>
                <Button>{remainingPlaytime / 1000}</Button>

            </div>
            <div className="settings-container">
                <div className="label">Wynik</div>
                <Button>{points}</Button>

            </div>
            <div className="button">
                <div className="label">Stop</div>
                <Button onClick={function () { onStop() }}>Stop</Button>
            </div>

            <div className='tile-container'>
                {tiles.map(function (e, i) {
                    return <Tile key={i} onClick={function () {
                        if (e != 0) {
                            setPoints(points + 1)
                            clearTimeout(timeoutHandles[e])
                            hideMole(e)
                        }
                    }} >{e}</Tile>



                })}
            </div>

        </div>
    )
}