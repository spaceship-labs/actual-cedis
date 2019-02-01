import React, { Component } from 'react';
import { connect } from 'react-redux';
import columns from './columns';
import { containerSelector } from './selectors';
import CancelRequestsListStyled from '../../components/CancelRequestsList';
import dispatcher from './dispatcher';
import SearchBar from '../../components/search';
import Loading from '../../components/loading';

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
    const { keyword, category } = this.state;
    const { filterCancel, getOrders } = this.props;
    if (keyword.length > 0) filterCancel({ category, keyword });
    else getOrders();
  };

  render() {
    const { pagination, changePage, filterCancel, loading } = this.props;
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
        <CancelRequestsListStyled
          {...newProps}
          columns={columns}
          rowKey={item => `orden-${item.id}-view`}
          filter={filter}
          filterCancel={filterCancel}
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
