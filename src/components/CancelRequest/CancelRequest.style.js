import styled from 'styled-components';
import { Row, Col, Button, Icon } from 'antd';

// SolicitudBar Component css
export const SolicitudContainer = styled.div`
  background-color: #f8f8f8;
  width: 100%;
  height: auto;
  z-index: 9;
`;

export const SolicitudItem = styled(Row)`
  columns: black;
  text-align: left;
  font-family: Roboto, 'Helvetica Neue', sans-serif;
  font-size: 18px;
  text-transform: uppercase;
  height: 100%;
  width: 100%;
  line-height: 200%;
`;

export const LogoCol = styled(Col)`
  display: flex !important;
  justify-content: center !important;
`;

export const TextCol = styled(Col)`
  white-space: nowrap;
`;

export const ButtonsCol = styled(Col)`
  text-transform: uppercase !important;
  display: flex !important;
  justify-content: space-around !important;
`;

export const ItemCol = styled(Col)`
  columns: black;
  text-align: left;
  font-family: Roboto, 'Helvetica Neue', sans-serif;
  font-size: 18px;
  text-transform: uppercase;
  height: 100%;
  width: 100%;
  line-height: 200%;
  padding: 2% 14%;
`;

export const ColCenter = styled(Col)`
  display: flex !important;
  justify-content: center !important;
  flex-direction: column !important;
  height: ${props => props.height};
`;

export const ColEnd = styled(Col)`
  display: flex !important;
  justify-content: flex-end !important;
  flex-direction: column !important;
`;

export const AllButton = styled(Button)`
  color: ${props => props.color};
  text-transform: ${props => props.transform};
  background-color: ${props => props.bgcolor};
  font-size: ${props => props.font};
`;

export const StatusIcon = styled.img`
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.margin};
  cursor: ${props => props.cursor};
  fill: ${props => props.fill};
`;

export const StatusSpan = styled.span`
  text-transform: ${props => props.transform};
  font-weight: ${props => props.weight};
  padding: ${props => props.padding};
  @media only screen and (max-width: 1036px) {
    font-size: 12px;
  }
`;

// OrderText Component css
export const TextBlock = styled.div`
  padding: 12px;
  margin: 10px 0;
`;
// CambiosBar Component css
export const BarChanges = styled.div`
  background-color: #f8f8f8;
  height: 60px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const RequestIcon = styled(Icon)`
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.margin};
  font-size: ${props => props.font};
  cursor: ${props => props.cursor};
`;

export const StatusContent = styled.div`
  @media only screen and (max-width: 1036px) {
    font-size: 12px;
  }
`;

export const StatusPop = styled.div`
  background-color: #f8f8f8;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  bottom: 40%;
  width: 500px;
  height: auto;
  z-index: 9;
  box-shadow: -5px 5px 5px -4px #888888;
`;

export const StatusH3 = styled.h3`
  text-transform: ${props => props.transform};
  font-weight: ${props => props.weight};
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  font-size: ${props => props.font};
  cursor: ${props => props.cursor};
  line-height: ${props => props.lheight};
  color: ${props => props.color};
  text-align: ${props => props.align};
  white-space: ${props => props.space};
  width: ${props => props.width};
  text-decoration: ${props => props.decoration};
  @media only screen and (max-width: 1036px) {
  }
`;

export const StatusP = styled.p`
  text-transform: ${props => props.transform};
  font-weight: ${props => props.weight};
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  font-size: ${props => props.font};
  text-align: ${props => props.align};
  color: ${props => props.color};
  white-space: ${props => props.space};
  cursor: ${props => props.cursor};
  @media only screen and (max-width: 1036px) {
  }
`;

export default {
  SolicitudContainer,
  SolicitudItem,
  LogoCol,
  TextCol,
  ButtonsCol,
  ItemCol,
  ColCenter,
  ColEnd,
  AllButton,
  StatusIcon,
  RequestIcon,
  StatusContent,
  StatusSpan,
  TextBlock,
  StatusH3,
  StatusP,
};
