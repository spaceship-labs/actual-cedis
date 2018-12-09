import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import columns from './columns';
import { containerSelector } from './selectors';
import actions from './actions';
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

const mapDispatchToProps = dispatch => {
  const { changePage, getAlerts } = actions;
  return bindActionCreators({ changePage, getAlerts }, dispatch);
};

export default connect(
  containerSelector,
  mapDispatchToProps
)(AlertsList);
