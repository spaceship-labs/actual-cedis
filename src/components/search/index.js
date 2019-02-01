import React from 'react';
import { Row, Col, Select, Input } from 'antd';

const { Option } = Select;
const SearchBar = props => {
  const {
    onChangeCategory,
    searchOrder,
    onChangeKeyWord,
    keyword,
    categoryFilter,
  } = props;
  const { folio } = categoryFilter;
  return (
    <div>
      <Row type="flex" justify="center" align="middle">
        <Col xs={12} sm={4} md={3} lg={2} xl={2}>
          Categoria:
        </Col>
        <Col xs={12} sm={8} md={8} lg={6} xl={6}>
          <Select
            defaultValue={folio}
            style={{ width: 200 }}
            onChange={onChangeCategory}
          >
            {Object.keys(categoryFilter).map(item => (
              <Option key={`#value-${item}`} value={item}>
                {categoryFilter[item]}
              </Option>
            ))}
          </Select>
        </Col>
        <Col xs={12} sm={6} md={4} lg={2} xl={2}>
          Buscar:
        </Col>
        <Col xs={12} sm={6} md={6} lg={5} xl={5}>
          <Input
            value={keyword}
            onChange={onChangeKeyWord}
            onPressEnter={searchOrder}
          />
        </Col>
      </Row>
    </div>
  );
};

export default SearchBar;
