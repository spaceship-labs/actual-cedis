import styled from 'styled-components';

export const RequestContent = styled.div`
  white-space: nowrap;

  .height100 {
    height: 100px;
  }

  .flex {
    display: flex;
  }

  .column {
    flex-direction: column;
  }

  .row {
    flex-direction: row;
  }

  .start {
    justify-content: flex-start;
  }

  .center {
    justify-content: center;
  }
  .end {
    justify-content: flex-end;
  }
  .around {
    justify-content: space-around;
  }
  .between {
    justify-content: space-between;
  }

  .trash-logo {
  }

  @media only screen and (max-width: 1036px) {
    font-size: 12px;
  }
`;

export const RequestPop = styled.div`
  background-color: #f8f8f8;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  bottom: 17%;
  width: 500px;
  height: auto;
  z-index: 9;
  box-shadow: -5px 5px 5px -4px #888888;

  .height70 {
    height: 70px;
  }
  .flex {
    display: flex;
  }

  .column {
    flex-direction: column;
  }

  .row {
    flex-direction: row;
  }

  .start {
    justify-content: flex-start;
  }

  .center {
    justify-content: center;
  }
  .end {
    justify-content: flex-end;
  }
  .around {
    justify-content: space-around;
  }
  .between {
    justify-content: space-between;
  }

  .request-bar-item {
    columns: black;
    text-align: left;
    font-family: Roboto, 'Helvetica Neue', sans-serif;
    font-size: 18px;
    text-transform: uppercase;
    height: 100%;
    width: 100%;
    line-height: 200%;
    padding: 2% 14%;
  }
`;

export const RequestIcon = styled.img`
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.margin};
  cursor: ${props => props.cursor};
`;

export const RequestSpan = styled.span`
  text-transform: ${props => props.transform};
  font-weight: ${props => props.weight};
  padding: ${props => props.padding};
  font-size: ${props => props.font};
  color: ${props => props.color};
  @media only screen and (max-width: 1036px) {
    font-size: 12px;
  }
`;

export const RequestH3 = styled.h3`
  text-transform: ${props => props.transform};
  font-weight: ${props => props.weight};
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  font-size: ${props => props.font};
  color: ${props => props.color};
  cursor: ${props => props.cursor};
  text-decoration: ${props => props.decoration};
  white-space: ${props => props.space};
  width: ${props => props.width};
  text-align: ${props => props.align};
  @media only screen and (max-width: 1036px) {
  }
`;

export const RequestP = styled.p`
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
  RequestContent,
  RequestPop,
  RequestIcon,
  RequestSpan,
  RequestH3,
};
