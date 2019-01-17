import React, { Component } from 'react';
import { connect } from 'react-redux';
import columns from './columns';
import { containerSelector } from './selectors';
import dispatcher from './dispatcher';
import OrdersViewStyled from '../../components/OrdersView';
import SearchBar from '../../components/search';

class OrdersView extends Component {
  constructor(props) {
    super(props);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.state = {
      category: 'folioActual',
      keyword: '',
      filter: false,
    };
  }

  componentDidMount() {
    const { getOrders } = this.props;
    getOrders();
  }

  onChangeCategory = (x, { props: { value } }) => {
    this.setState({
      category: value,
    });
  };

  searchOrder = () => {
    const { filterOrders } = this.props;
    const { category, keyword } = this.state;
    if (keyword.length > 0) {
      this.setState({
        filter: true,
      });
    } else {
      this.setState({
        filter: false,
      });
    }

    const data = { category, keyword };
    console.log('datos del estado', this.state);
    filterOrders(data);
  };

  onChangeKeyWord = e => {
    const {
      target: { value },
    } = e;
    this.setState({
      keyword: value,
    });
  };

  render() {
    const { pagination, changePage, filterOrders } = this.props;
    const newProps = {
      ...this.props,
      pagination: { ...pagination, onChange: changePage },
    };
    const { keyword, category, filter } = this.state;
    const categoryFilter = {
      folioSap: 'Folio Sap',
      folio: 'Folio mi actual',
      cardName: 'Cliente',
    };
    return (
      <div>
        <SearchBar
          onChangeCategory={this.onChangeCategory}
          searchOrder={this.searchOrder}
          onChangeKeyWord={this.onChangeKeyWord}
          keyword={keyword}
          category={category}
          categoryFilter={categoryFilter}
        />
        <OrdersViewStyled
          {...newProps}
          columns={columns}
          rowKey={item => `orden-${item.id}-view`}
          filter={filter}
          filterOrders={filterOrders}
          keyword={keyword}
          category={category}
        />
      </div>
    );
  }
}

export default connect(
  containerSelector,
  dispatcher
)(OrdersView);
