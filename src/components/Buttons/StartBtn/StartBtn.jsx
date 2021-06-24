import React from 'react';

import StyledStartBtn from './StyledComponent';

const StartBtn = ({ width, background }) => {

  return (
    <StyledStartBtn background={background} w={width}>
     <a href="https://60d3c5895cb94045fecc2ace--determined-payne-766135.netlify.app/#/login">Get Started Now</a>
    </StyledStartBtn>
  );
};

export default StartBtn;
