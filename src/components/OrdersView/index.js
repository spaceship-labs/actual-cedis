import React, { Component } from 'react';
import { Select, Input } from 'antd';
import TableList from '../TableList';

class OrdersView extends Component {
  constructor(props) {
    super(props);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.state = {
      filterCategory: '',
      filterTxt: '',
    };
  }

  onChangeCategory = (x, { props: { value } }) => {
    this.setState({
      filterCategory: value,
    });
  };

  onChangeKeyWord = e => {
    const {
      target: { value },
    } = e;
    this.setState({
      filterTxt: value,
    });
  };

  render() {
    const category = {
      folioSap: 'Folio Sap',
      folioActual: 'Folio mi actual',
      client: 'Cliente',
    };

    const {
      getOrders,
      pagination,
      loading,
      orders,
      columns,
      rowKey,
    } = this.props;
    const { Option } = Select;
    const { filterCategory, filterTxt } = this.state;
    return (
      <div>
        <div>
          <div>Categoria</div>
          <Select
            defaultValue={filterCategory}
            style={{ width: 120 }}
            onChange={this.onChangeCategory}
          >
            {Object.keys(category).map(item => (
              <Option key={`#value-${item}`} value={item}>
                {category[item]}
              </Option>
            ))}
          </Select>
          <div>Palabra clave</div>
          <div>
            <Input
              placeholder="key word"
              value={filterTxt}
              onChange={this.onChangeKeyWord}
            />
          </div>
        </div>

        <h3>Pedidos</h3>
        <TableList
          onChange={getOrders}
          rowKey={rowKey}
          pagination={pagination}
          loading={loading}
          entries={orders}
          columns={columns}
        />
      </div>
    );
  }
}

export default OrdersView;
