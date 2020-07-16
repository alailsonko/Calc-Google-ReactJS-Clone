import React from 'react';

import { Container } from './styles';

function Screen({ result, calc, transition }) {
  return (
    <Container transition={transition}>
      {result ? (
        <label id="result" htmlFor="screen">
          {result}
        </label>
      ) : result ? (
        <label id="result" htmlFor="screen">
          Ans = {result}
        </label>
      ) : null}
      {transition ? (
        <label id="calc" htmlFor="screen">
          {calc} =
        </label>
      ) : (
        <label id="calc" htmlFor="screen">
          {calc}
        </label>
      )}
      <input value="" id="screen" readOnly />
    </Container>
  );
}

export default Screen;
