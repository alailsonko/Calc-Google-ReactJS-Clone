import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-items: center;
  flex-direction: column;
  max-width: 588px;
  margin-top: 160px;
  background: yellow;
  padding: 15px;
  border-radius: 10px;
  flex-wrap: wrap;
  .merge-btn {
    background: gray;
    border-radius: 10px;
    button {
    }
  }
  .gray {
    background: blue;
  }
  div {
    display: flex;
    flex-wrap: wrap;
    .child {
      flex: 0 0;
    }

    /* flex-direction: row; */
  }
`;

export const Button = styled.button`
  width: 80px;
  height: 50px;
  margin: 2px;
  border-radius: 10px;
`;
