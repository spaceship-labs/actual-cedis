import React from 'react';
// import RequestContent from './RequestContent';
import TestMain from './TestMain';
import SolicitudBar from './SolicitudBar';
import OrderText from './OrderText';
import CambiosBar from './CambiosBar';

const CancelContent = ({
  object,
  toogleOption,
  handleClickAprove,
  handleClickDenied,
  toogleBack,
  autorizado,
  rechazado,
  goBack,
  toogleConfirmA,
  handleClickAN,
  handleClickAY,
  toogleConfirmD,
  handleClickDN,
  handleClickDY,
}) => (
  <div>
    <SolicitudBar />
    <OrderText />
    <TestMain
      object={object}
      toogleOption={toogleOption}
      handleClickAprove={handleClickAprove}
      handleClickDenied={handleClickDenied}
      toogleBack={toogleBack}
      autorizado={autorizado}
      rechazado={rechazado}
      goBack={goBack}
      toogleConfirmA={toogleConfirmA}
      handleClickAN={handleClickAN}
      handleClickAY={handleClickAY}
      toogleConfirmD={toogleConfirmD}
      handleClickDN={handleClickDN}
      handleClickDY={handleClickDY}
    />
    <CambiosBar />
  </div>
);

export default CancelContent;
