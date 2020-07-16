import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  input {
    width: 100%;
    height: 65px;
    margin-bottom: 10px;
    border-radius: 10px;
  }

  #result {
    border: 2px solid red;
    position: absolute;
    top: ${(props) => (props.transition ? '36px' : '10px')};
    right: 20px;
    font-size: ${(props) => (props.transition ? '25px' : 'none')};

    transition: ease all 2s;
  }

  #calc {
    position: absolute;
    border: 2px solid green;
    top: ${(props) => (props.transition ? '10px' : '36px')};

    right: 20px;
    font-size: ${(props) => (props.transition ? 'none' : '25px')};
    transition: ease all 2s;
  }

  /* &:hover {
    #calc {
      border: 2px solid red;
      position: absolute;
      top: 10px;
      right: 20px;
    }

    #result {
      position: absolute;
      border: 2px solid green;
      top: 36px;
      right: 20px;
      font-size: 25px;
    }
  } */
`;
