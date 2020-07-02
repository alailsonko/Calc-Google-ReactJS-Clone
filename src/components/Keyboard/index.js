import React from 'react';
import Screen from '../Screen';

import { Container, Button } from './styles';

import keys from '../../static/keyboard/keys.json';

function keyboard() {
  function handleClick(num) {
    console.log(num);
  }
  const typeDegree = {
    Rad: 'Rad',
    Deg: 'Rad',
  };

  return (
    <Container>
      <Screen />
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

export default keyboard;
