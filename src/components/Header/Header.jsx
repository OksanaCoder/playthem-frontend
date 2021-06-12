import React from 'react';
import Navbar from './Navbar';
import background from '../../assets/img/background.png';

import { Wrapper, ImgBack } from './StyledComponets';
import Drawer from '../Drawer';
import StartText from './StartText';
import StartBtn from '../Buttons/StartBtn';
import WatchBtn from '../Buttons/WatchBtn/WatchBtn';
import {
  WrapperStartBlock,
  StartBtnWrapper
} from './StartText/StyledComponents';

const Header = () => {
  return (
    <Wrapper>
      <Drawer />
      <Navbar />
      <WrapperStartBlock>
        <StartText />
        <StartBtnWrapper>
          <StartBtn width="60%" />
          <WatchBtn />
        </StartBtnWrapper>
      </WrapperStartBlock>
      <ImgBack src={background} alt="background" />
    </Wrapper>
  );
};

export default Header;