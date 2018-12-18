import React from 'react';
import TestMain from './TestMain/TestMain';
import SolicitudBar from './SolicitudBar/SolicitudBar';
import OrderText from './OrderText/OrderText';
import CambiosBar from './CambiosBar/CambiosBar';
import TestRequestConfirmAprove from './TestMain/TestRequestConfirm/TestRequestConfirmAprove';
import TestRequestConfirmDenied from './TestMain/TestRequestConfirm/TestRequestConfirmDenied';
import TestRequestAproveAll from './TestMain/TestRequestConfirm/TestRequestAproveAll';
import TestRequestCancelAll from './TestMain/TestRequestConfirm/TestRequestCancelAll';

const CancelContent = ({
  data,
  // todes,
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
  handleClickAproveAll,
  handleClickDeniedAll,
  toogleCAll,
  toogleDAll,
  handleClickCAllN,
  handleClickCAllY,
  handleClickDAllN,
  handleClickDAllY,
}) => (
  <div>
    <SolicitudBar
      handleClickAproveAll={handleClickAproveAll}
      handleClickDeniedAll={handleClickDeniedAll}
    />
    <OrderText />
    <div>
      {data.map(d => (
        <TestMain
          object={d}
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
          toogleCAll={toogleCAll}
          toogleDAll={toogleDAll}
          handleClickCAllN={handleClickCAllN}
          handleClickCAllY={handleClickCAllY}
          handleClickDAllY={handleClickDAllY}
          handleClickDAllN={handleClickDAllN}
        />
      ))}
    </div>
    {/* <TestMain
      object={todes}
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
      toogleCAll={toogleCAll}
      toogleDAll={toogleDAll}
      handleClickCAllN={handleClickCAllN}
      handleClickCAllY={handleClickCAllY}
      handleClickDAllY={handleClickDAllY}
      handleClickDAllN={handleClickDAllN}
    /> */}
    <CambiosBar />
    <TestRequestConfirmAprove
      toogle={toogleConfirmA}
      handleClickAN={handleClickAN}
      handleClickAY={handleClickAY}
    />
    <TestRequestConfirmDenied
      toogle={toogleConfirmD}
      handleClickDN={handleClickDN}
      handleClickDY={handleClickDY}
    />
    <TestRequestAproveAll
      toogle={toogleCAll}
      handleClickCAllN={handleClickCAllN}
      handleClickCAllY={handleClickCAllY}
    />
    <TestRequestCancelAll
      toogle={toogleDAll}
      handleClickDAllY={handleClickDAllY}
      handleClickDAllN={handleClickDAllN}
    />
  </div>
);

export default CancelContent;
