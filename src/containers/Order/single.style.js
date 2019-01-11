import styled from 'styled-components';
import { Row, Col, Modal as modalCnl, Button } from 'antd';

// export const Container = styled.div`
//   padding-left: 6%;
//   padding-right: 60px;
//   padding-top: 15px;
//   margin: 40px auto;
//   width: 100%;
//   background: white;
// `;

export const Seccion = styled.div`
  border-bottom: 1px solid #000;
  margin: 10px 0;
`;

export const BtnPrint = styled(Button)`
  font-size: 20px;
  background: #3dad1b !important;
  border-style: none !important;
  width: 100%;
`;
export const BtnCancel = styled(Button)`
  font-size: 20px;
  background: red !important;
  border-style: none !important;
  width: 100%;
`;
export const CancelAll = styled.div`
  color: red;
  text-align: right;
  text-decoration: underline;
  align-content: center;
`;
export const Order = styled.div`
  height: 10%;
  justify-content: center;
  align-items: center;

  .ant-row {
    background: #eaecef;
    margin-top: 10px;
    padding: 10px;
  }
`;

export const ColBtn = styled(Col)`
  align-content: center;
  height: 40px;
  h3,
  span,
  .ant-btn {
    display: flex;
    justify-content: center;
    align-items: center;
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
export const Rowpay = styled(Row)`
  line-height: 0%;
  text-align: right;
`;
export const RowSale = styled(Row)`
  padding: 10px 0px;
  background: #eaecef;
`;
export const RowTaxes = styled(Row)`
  text-align: left;
  margin-top: 50%;
  padding: 5% 0;
`;
export const OrderPago = styled.div`
  margin: 25px 0px;
  padding: 4px 12px;
  .ant-row {
    margin: 20px 0px;
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
    line-height: 100%;
  }
`;
export const Sap = styled.div`
  margin: 10px 0px;
  font-size: 13px;
  line-height: 70%;
`;
export const CancelSap = styled.div`
  margin: 10px 0px;
  font-size: 13px;
  padding: 20px 20px;
`;
export const Asesor = styled.div`
  margin: 10px 0px;
  font-size: 13px;
  line-height: 70%;
  padding: 4px 12px;
`;
export const CancelBanner = styled.div`
  width: 100%;
  text-align: center;
  background: #bf0101;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  padding: 10px 0px;
  p {
    margin: 0px;
  }
`;
const stateColor = {
  authorized: 'green',
  rejected: 'red',
  pending: 'gray',
};
export const TxtStrong = styled.p`
  font-weight: bold;
`;
export const TitleModal = styled.div`
  text-align: center;
`;
export const TxtData = styled.span`
  font-weight: normal;
  text-decoration: underline;
`;
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
  color: ${({ auth }) => stateColor[auth]};
`;
export const DeleteItems = styled(Row)`
  color: red;
  text-align: center;
  font-size: 25px;
`;
export const CursorPointer = styled.div`
  cursor: pointer;
`;
export const RowItem = styled(Row)`
  margin: 25px 0px;
  display: flex !important;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #d8d8d8;
  .Delete-iems p {
    font-size: 10px;
  }
  .anticon {
    font-size: 10px;
  }
  p {
    font-size: 12px;
    margin-bottom: 2px;
  }
  img {
    width: 20px;
    height: 25px;
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
`;

export const SubmitMsj = styled.div`
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
  svg {
    font-size: 25px;
  }
  p {
    text-decoration: underline;
    font-size: 15px;
  }
`;
export const WayToPay = styled.div`
  margin: 25px 0px;
  width: 100%;
`;
