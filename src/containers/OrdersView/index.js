import React, { Component } from 'react';
import { connect } from 'react-redux';
import columns from './columns';
import { containerSelector } from './selectors';
import dispatcher from './dispatcher';
import OrdersViewStyled from '../../components/OrdersView';
import SearchBar from '../../components/search';
import Loading from '../../components/loading';

class OrdersView extends Component {
  constructor(props) {
    super(props);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.state = {
      category: 'folioActual',
      keyword: '',
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
    const { keyword, category } = this.state;
    const { filterOrders, getOrders } = this.props;
    if (keyword.length > 0) filterOrders({ category, keyword });
    else getOrders();
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
    const { pagination, changePage, filterOrders, loading } = this.props;
    const newProps = {
      ...this.props,
      pagination: { ...pagination, onChange: changePage },
    };
    const { keyword, category } = this.state;
    const categoryFilter = {
      folioSap: 'Folio SAP',
      folio: 'Folio mi actual',
      cardName: 'Cliente',
    };
    if (loading) return <Loading />;
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
