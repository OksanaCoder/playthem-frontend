import React from 'react';
import { useHistory } from 'react-router';
import StyledStartBtn from './StyledComponent';

const StartBtn = ({ width, background }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push('https://nexo-front-constructor.herokuapp.com/#/login');
  };
  return (
    <StyledStartBtn background={background} w={width} onClick={handleClick}>
      Get Started Now
    </StyledStartBtn>
  );
};

export default StartBtn;
