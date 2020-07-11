import React from 'react';

import { Input } from './styles';

function Screen({ result }) {
  return (
    <>
      <Input value={result} type="text" readOnly />
    </>
  );
}

export default Screen;
