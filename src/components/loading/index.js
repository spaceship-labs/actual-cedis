import React from 'react';
import { Button, Row } from 'antd';
import { LoadingContainer } from './loading.style';

const Loading = () => (
  <div>
    <Row type="flex" justify="center" align="top">
      <LoadingContainer>
        <Button shape="circle" loading />
      </LoadingContainer>
    </Row>
  </div>
);

export default Loading;
