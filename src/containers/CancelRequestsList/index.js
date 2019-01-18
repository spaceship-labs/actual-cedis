import React, { Component } from 'react';
import { connect } from 'react-redux';
import columns from './columns';
import { containerSelector } from './selectors';
import CancelRequestsListStyled from '../../components/CancelRequestsList';
import dispatcher from './dispatcher';
import SearchBar from '../../components/search';

class CancelRequestsList extends Component {
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
    const { getCancelRequests } = this.props;
    getCancelRequests();
  }

  onChangeCategory = (x, { props: { value } }) => {
    this.setState({
      category: value,
    });
  };

  onChangeKeyWord = e => {
    const {
      target: { value },
    } = e;
    this.setState({
      keyword: value,
    });
  };

  searchOrder = () => {
    const { keyword } = this.state;
    if (keyword.length > 0) {
      this.setState({
        filter: true,
      });
    } else {
      this.setState({
        filter: false,
      });
    }
    // this.onSearch(filter);
  };

  // onSearch = filter => {
  //   const { filterCancel, getOrders } = this.props;
  //   const { category, keyword } = this.state;
  //   if (!filter) filterCancel ({ category, keyword });
  //   else getOrders();
  // };

  render() {
    const { pagination, changePage, filterCancel } = this.props;
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
        <CancelRequestsListStyled
          {...newProps}
          columns={columns}
          rowKey={item => `orden-${item.id}-view`}
          filter={filter}
          filterOrders={filterCancel}
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
)(CancelRequestsList);
