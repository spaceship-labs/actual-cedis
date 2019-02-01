import styled from 'styled-components';
import { Col } from 'antd';

export const LoadingContainer = styled(Col)`
  text-align: center;
  margin-top: 100px;
`;

export const LoadingTxt = styled.span`
  font-size: 25px;
`;

export const StyledSpinner = styled.svg`
  animation: rotate 2s linear infinite;
  margin: -25px 0 0 -25px;
  width: 150px;
  height: 150px;

  position: fixed; /* or absolute */
  top: 40%;
  left: 50%;

  & .path {
    stroke: #122442;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;
