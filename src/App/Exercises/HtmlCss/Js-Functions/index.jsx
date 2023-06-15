import './styles.css';
import { useState } from 'react';
export function JsFunctions() {
  const [planet, setPlanet] = useState(0);
  const planets = [
    'Słońce',
    'Merkury',
    'Wenus',
    'Ziemia',
    'Mars',
    'Jowisz',
    'Saturn',
    'Uran',
    'Neptun',
  ];
  const checkPlanet = (par) => {
    return planets[par - 1];
  };
  const handleOnChance = (e) => {
    setPlanet(e.target.value);
  };
  return (
    <div>
      <intput type="number" min={1} max={9} onChange={handleOnChance} />
      <h1>{checkPlanet(planet)}</h1>
    </div>
  );

}




// const checkNumber = (num1, num2) => {
//   if (num1 >= 50) {
//     return num1 + num2;
//   } else {
//     return num1;
//   }

// }

// console.log(checkNumber(51));

// return <div>Js Functions </div>




