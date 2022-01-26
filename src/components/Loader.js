import React from 'react';
import styledComponents, {keyframes} from 'styled-components';
import colors from '../style/colors';

const lineAnimation = keyframes`
    to {
        transform: rotate(-360deg);
    }
`
const Line = styledComponents.div`
display: flex;
  justify-content: center;
  width: 45px;
  height:45px;
  margin-bottom:20px;
  margin-top:20px;
  border-top:3px solid ${colors.shadow};
  border-radius: 200px;
  transform: rotate(360deg);
  animation: 1.5s ${lineAnimation} infinite linear;
`

const Loader = () => {
    return (
        <div>
            <Line></Line>
        </div>
    );
};

export default Loader;