import React from 'react';
import { useHistory } from 'react-router';
import StyledStartBtn from './StyledComponent';

const StartBtn = ({ width, background }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push('https://60d3c5895cb94045fecc2ace--determined-payne-766135.netlify.app/#/login');
  };
  return (
    <StyledStartBtn background={background} w={width} onClick={handleClick}>
      Get Started Now
    </StyledStartBtn>
  );
};

export default StartBtn;
