import styled from 'styled-components';

export const StatusBar = styled.div`
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

  .status-text {
    white-space: nowrap;
  }

  .buttons {
  }

  .buttons button {
    text-transform: uppercase !important;
    font-size: 10px;
  }

  .uppercase {
    text-transform: uppercase;
  }

  .solicitud-bar {
    background-color: #f8f8f8;
    width: 100%;
    height: auto;
    z-index: 9;
  }

  .solicitud-bar a {
    color: black;
  }

  .solicitud-bar-item {
    columns: black;
    text-align: left;
    font-family: Roboto, 'Helvetica Neue', sans-serif;
    font-size: 18px;
    text-transform: uppercase;
    height: 100%;
    width: 100%;
    line-height: 200%;
  }

  .order-text-block {
    padding: 12px;
    margin: 10px 0;
  }

  .cambios-bar {
    background-color: #f8f8f8;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    z-index: 9;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;

export const StatusIcon = styled.img`
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.margin};
`;

export const StatusSpan = styled.span`
  text-transform: ${props => props.transform};
  font-weight: ${props => props.weight};
  padding: ${props => props.padding};
  @media only screen and (max-width: 1036px) {
    font-size: 12px;
  }
`;

export const StatusH3 = styled.h3`
  text-transform: ${props => props.transform};
  font-weight: ${props => props.weight};
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  font-size: ${props => props.font};
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
  @media only screen and (max-width: 1036px) {
  }
`;

export default { StatusBar, StatusIcon, StatusSpan, StatusH3, StatusP };
