import React from 'react';
import { Row, Col, Icon, Select } from 'antd';
import Numeral from 'numeral';
import {
  OrderItems,
  RowItem,
  DeleteItems,
  CursorPointer,
} from '../../containers/Order/single.style';

const { Option } = Select;
const ItemsPurchased = ({
  showCancel,
  order: { Details },
  cancelquantity,
  products,
}) => (
  <div>
    <h3>
      <strong>
        <i className="icon-checkout-ticket" /> ARTÍCULOS ADQUIRIDOS
      </strong>
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
        {Details.map(item => (
          <RowItem>
            <Col span={showCancel ? 4 : 7}>
              <h3>{products[item.Product].name || ''}</h3>
              <Col span={12}>
                {' '}
                <img src="./../orquideas.jpg" alt="articulo" />
              </Col>
              <Col span={12}>
                <p>{products[item.Product].name}</p>
                <p>{products[item.Product].name}</p>
              </Col>
            </Col>
            <Col span={showCancel ? 3 : 3}>
              <p>{}</p>
            </Col>
            <Col span={showCancel ? 3 : 3}>
              <p>{products[item.Product].name}</p>
            </Col>
            <Col span={showCancel ? 5 : 6}>
              <p>
                {/* {fechaEntrega} {entregainmediata ? 'Entrega en tienda' : ''} */}
              </p>
            </Col>
            <Col span={showCancel ? 4 : 5}>
              <p>{Numeral(4544.1).format('$0,0.00')}</p>
            </Col>
            {showCancel && (
              <Col span={5}>
                <DeleteItems span={6}>
                  <CursorPointer>
                    <Icon type="delete" />
                    <p>CANCELAR ARTICULO</p>
                  </CursorPointer>
                </DeleteItems>
                <DeleteItems span={6}>
                  <Select defaultValue={0}>
                    {[...Array(10 + 1)].map((x, i) => (
                      <Option value={`value-${i}`} onChange={cancelquantity(i)}>
                        {i}
                      </Option>
                    ))}
                  </Select>
                  <p>PIEZAS A CANCELAR</p>
                </DeleteItems>
              </Col>
            )}
          </RowItem>
        ))}
      </div>
    </OrderItems>
  </div>
);

export default ItemsPurchased;
