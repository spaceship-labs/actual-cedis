import styled from 'styled-components';
import { Row, Modal as modalCnl } from 'antd';
export const Container = styled.div`
  padding-left: 6%;
  padding-right: 60px;
  padding-top: 15px;
  margin: 80px auto;
  width: 100%;
  background: white;
`;

export const Seccion = styled.div`
  border-bottom: 1px solid #000;
  margin: 10px 0;
`;
export const Order = styled.div`
  .ant-row h3,
  .ant-btn {
    font-size: 20px;
    margin: 20px 15px;
  }
  .ant-col-3 {
    margin: 25px 0px;
  }
  .ant-row h3 span {
    text-decoration: underline;
  }
  .ant-row {
    background: #eaecef;
  }
  .ant-btn {
    background: #3dad1b;
  }
  .ant-btn span {
    color: white;
  }
  .ant-btn:hover,
  .ant-btn:focus.ant-btn:hover,
  .ant-btn:focus {
    background: #3dad1b;
    border-color: #46c61f;
  }
  .ant-btn:hover,
  .ant-btn:focus span {
    color: white;
  }
  .ant-btn::selection {
    background: #3dad1b;
    border-color: #46c61f;
  }
  .ant-btn::selection span {
    color: white;
  }
  .Btn-cancel {
    font-size: 13px;
    background: red;
  }
  .Btn-cancel:hover,
  .Btn-cancel:focus.Btn-cancel:hover,
  .Btn-cancel:focus {
    background: red;
    border-color: #46c61f;
  }
  .Btn-cancel:hover,
  .Btn-cancel:focus span {
    color: white;
  }
  .Btn-cancel::selection {
    background: red;
    border-color: #46c61f;
  }
  .Btn-cancel::selection span {
    color: white;
  }
  .ant-btn::selection span {
    color: white;
  }

  .text-fact {
    font-size: 13px;
    float: right;
    margin-right: 15px;
  }
  .cancelAll {
    color: red;
    text-align: right;
    text-decoration: underline;
  }
`;
export const OrderTextBlock = styled.div`
  margin: 25px 0px;
  h3 {
    margin: 6px 0;
  }
  p {
    margin: 4px 0;
    font-size: 13px;
    line-height: 70%;
  }
`;

export const OrderItems = styled.div`
  margin: 25px 0px;
  padding: 4px 12px;
  text-align: right;
`;
export const OrderPago = styled.div`
  margin: 25px 0px;
  padding: 4px 12px;

  .venta {
    padding: 10px 0px;
    background: #eaecef;
  }
  .taxes {
    text-align: left;
    margin-top: 10px;
    padding: 5% 0;
  }
  p {
    margin: 4px 0;
    line-height: 80%;
  }
  .ant-col-4 {
    text-align: right;
  }
`;
export const OrderEnvio = styled.div`
  margin: 10px 0px;
  font-size: 13px;
  padding: 4px 12px;
  .ant-row .ant-col-12 {
    line-height: 60%;
  }
`;
export const Sap = styled.div`
  margin: 10px 0px;
  font-size: 13px;
  line-height: 70%;
`;
export const Asesor = styled.div`
  margin: 10px 0px;
  font-size: 13px;
  line-height: 70%;
  padding: 4px 12px;
`;
export const CancelBanner = styled.div`
  width: 100%;
  height: 40px;
  background: #bf0101;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    margin: 0px;
  }
  strong {
    font-size: 20px;
  }
  span {
    text-decoration: underline;
    font-size: 20px;
  }
  .click {
    text-decoration: none;
    font-size: 15px;
  }
`;
const stateColor = {
  auth: 'green',
  nauth: 'red',
};
export const Modal = styled(modalCnl)`
  .title-cnl {
    text-align: center;
  }
  .ant-row {
    border-bottom: 1px solid #000;
    margin: 25px 0;
    line-height: 60%;
  }
`;
export const StateClr = styled.p`
  text-align: right;
  margin-right: 20px;
  color: ${({ stclr }) => stateColor[stclr]};
`;
export const RowItem = styled(Row)`
  margin: 25px 0px;
  display: flex !important;
  justify-content: center;
  align-items: center;
  .Delete-items {
    color: red;
    text-align: center;
  }
  .Delete-items .trash {
    font-size: 25px;
  }
  .Delete-iems p {
    font-size: 10px;
  }
  .anticon {
    font-size: px;
  }
`;

export const ReasonCancel = styled.div`
  margin: 25px 0px;
  width: 100%;
  textarea {
    width: 80%;
    height: 150px;
    float: left;
    display: block;
  }
  .btn-send-arrow {
    float: left;
    display: block;
    height: 150px;
    width: 20%;
    text-align: center;
    color: green;
    margin-top: 10px;
    display: flex !important;
    justify-content: center;
    align-items: center;
  }
  .btn-send-arrow svg {
    font-size: 25px;
  }
  .btn-send-arrow p {
    text-decoration: underline;
    font-size: 15px;
  }
`;
