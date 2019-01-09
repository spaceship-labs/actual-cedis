import React, { Component } from 'react';
import { connect } from 'react-redux';
import columns from './columns';
import { containerSelector } from './selectors';
import dispatcher from './dispatcher';
import AlertsListStyled from '../../components/Alerts';

class AlertsList extends Component {
  componentDidMount() {
    const { getAlerts } = this.props;
    getAlerts();
  }

  render() {
    const { pagination, changePage } = this.props;
    const newProps = {
      ...this.props,
      pagination: { ...pagination, onChange: changePage },
    };
    return (
      <AlertsListStyled
        {...newProps}
        columns={columns}
        rowKey={item => `orden-${item.id}-view`}
      />
    );
  }
}

export default connect(
  containerSelector,
  dispatcher
)(AlertsList);
