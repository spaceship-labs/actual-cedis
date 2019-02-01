import React from 'react';
import { Row, Col, Select } from 'antd';
import Numeral from 'numeral';
import moment from 'moment';
import {
  OrderItems,
  RowItem,
  DeleteItems,
} from '../../containers/Order/single.style';

const urlImg = 'https://d116li125og699.cloudfront.net/uploads/products/';
const sizeImg = '?d=100x100';
const { Option } = Select;
const ItemsPurchased = ({
  showCancel,
  order: { Details },
  cancelquantity,
  products,
  cancelAll,
}) => (
  <div>
    <h3>
      <strong>ARTÍCULOS ADQUIRIDOS</strong>
    </h3>
    <OrderItems>
      <div>
        <Row>
          <Col span={showCancel ? 4 : 7} />
          <Col span={showCancel ? 3 : 3}>
            <strong>CANTIDAD</strong>
          </Col>
          <Col span={showCancel ? 3 : 3}>
            <strong>CANTIDAD CANCELADA</strong>
          </Col>
          <Col span={showCancel ? 5 : 6}>
            <strong>ENTREGA APROXIMADA</strong>
          </Col>
          <Col span={showCancel ? 4 : 5}>
            <strong>PRECIO</strong>
          </Col>
          {showCancel && <Col span={5} />}
        </Row>
        {Details.map(
          ({
            Product,
            id,
            quantity,
            quantityCanceled,
            immediateDelivery,
            quantityAvailable,
            shipDate,
            total,
          }) => (
            <RowItem key={id}>
              <Col span={showCancel ? 4 : 7}>
                <h3>{products[Product].Name || ''}</h3>
                <Col span={12}>
                  {' '}
                  <img
                    src={urlImg + products[Product].icon_filename + sizeImg}
                    // src={urlImg + products[Product].icon_filename}
                    alt={products[Product].ItemName}
                  />
                </Col>
                <Col span={12}>
                  <p>{products[Product].CodeBars}</p>
                  <p>{products[Product].DetailedColor}</p>
                </Col>
              </Col>
              <Col span={showCancel ? 3 : 3}>
                <p>{quantity}</p>
              </Col>
              <Col span={showCancel ? 3 : 3}>
                <p>{quantityCanceled}</p>
              </Col>
              <Col span={showCancel ? 5 : 6}>
                <p>
                  {moment(shipDate).format('DD/MM/YYYY')}{' '}
                  {immediateDelivery ? 'Entrega en tienda' : ''}
                </p>
              </Col>
              <Col span={showCancel ? 4 : 5}>
                <p>{Numeral(total).format('$0,0.00')}</p>
              </Col>
              {showCancel && (
                <Col span={5}>
                  {/* <DeleteItems span={6}>
                    <CursorPointer>
                      <Icon type="delete" />
                      <p>CANCELAR ARTICULO</p>
                    </CursorPointer>
                  </DeleteItems> */}
                  <DeleteItems span={12}>
                    <Select
                      defaultValue={0}
                      onChange={cancelquantity}
                      disabled={cancelAll}
                    >
                      {[...Array(quantityAvailable + 1)].map((x, i) => (
                        <Option key={`#value${x}`} value={i} id={id}>
                          {i}
                        </Option>
                      ))}
                    </Select>
                    <p>PIEZAS A CANCELAR</p>
                  </DeleteItems>
                </Col>
              )}
            </RowItem>
          )
        )}
      </div>
    </OrderItems>
  </div>
);

export default ItemsPurchased;
