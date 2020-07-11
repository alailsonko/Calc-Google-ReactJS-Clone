import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import Screen from '../Screen';
import { Container, Button } from './styles';

import keys from '../../static/keyboard/keys.json';

function Keyboard() {
  const [calc, setCalc] = useState('');
  const [result, setResult] = useState('');
  function handleClick(num) {
    console.log(num);
    setCalc([...calc, num]);
    console.log([...calc, num]);
  }

  function handleClickCalc(resultArray) {
    const index = resultArray.indexOf('x');

    if (index !== -1) {
      resultArray[index] = '*';
    }
    const parsedArray = resultArray.join('');
    console.log(parsedArray);
    setResult(evaluate(parsedArray));
  }

  const typeDegree = {
    Rad: 'Rad',
    Deg: 'Rad',
  };

  return (
    <Container>
      <Screen result={result} />
      <div>
        <div className="merge-btn">
          <Button>{typeDegree.Rad}</Button>
          <Button>{typeDegree.Deg}</Button>
        </div>
        {keys.map((k) => {
          return (
            <div className="child" key={k.id}>
              {k.key === '1' ||
              k.key === '2' ||
              k.key === '3' ||
              k.key === '4' ||
              k.key === '5' ||
              k.key === '6' ||
              k.key === '7' ||
              k.key === '8' ||
              k.key === '9' ||
              k.key === '0' ||
              k.key === '.' ? (
                <Button className="gray" onClick={() => handleClick(k.key)}>
                  {k.key}
                </Button>
              ) : k.key === '=' ? (
                <Button className="" onClick={() => handleClickCalc(calc)}>
                  {k.key}
                </Button>
              ) : k.key === '-' ||
                k.key === '+' ||
                k.key === '/' ||
                k.key === 'x' ? (
                <Button className="" onClick={() => handleClick(k.key)}>
                  {k.key}
                </Button>
              ) : k.key === 'AC' ? (
                <Button
                  className=""
                  onClick={(() => setResult(''), setCalc([]))}
                >
                  {k.key}
                </Button>
              ) : (
                <Button onClick={() => handleClick(k.key)}>{k.key}</Button>
              )}
            </div>
          );
        })}
      </div>
    </Container>
  );
}

export default Keyboard;
