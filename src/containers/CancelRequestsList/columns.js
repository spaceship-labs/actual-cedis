import React from 'react';
// import { connect } from 'react-redux';
import clone from 'clone';
import {
  renderCell,
  LinkCell,
  // DeleteCell
} from '../../components/TableList/helperCells';
// import actions from './actions';

// const deleteCellDispatcher = (dispatch, ownProps) => ({
// 		onDeleteCell: () => dispatch(actions.deleteEntry(ownProps.id))
// 	});

// const selectorCellDispatcher = props => ({});
// const DeleteCellWrapper = connect(
//   selectorCellDispatcher,
//   deleteCellDispatcher
// )(DeleteCell);

const statusText = {
  paid: 'Pagado',
  canceled: 'Cancelado',
  partiallyCanceled: 'Parcialmente Cancelado',
};
/*
ESTE ES EL BUENO:

{key: ‘createdAt’, label:‘Fecha’},
{key: ‘Order.folio’, label:‘Folio’}
{key: ‘reason’, label: ‘Motivos’},
{key:‘status’, label:‘Estatus’}
*/
const columns = [
  {
    title: 'Fecha',
    key: 'venta',
    width: 300,
    render: object => renderCell(object, 'DateCell', 'createdAt'),
    sorter: true,
  },
  {
    title: 'Folio',
    key: 'folio',
    width: 300,
    render: object => renderCell(object.Order, 'TextCell'),
    sorter: true,
  },
  {
    title: 'Motivos',
    key: 'status',
    width: 300,
    render: object => renderCell(object, 'TextCell'),
    sorter: true,
  },
  {
    title: 'Estatus',
    key: 'status',
    width: 300,
    render: object => {
      console.log(object);
      return renderCell(statusText[object.status], 'TextCell');
    },
    sorter: true,
  },
];

export default clone(columns);
