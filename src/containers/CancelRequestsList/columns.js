import clone from 'clone';
import { renderCell } from '../../components/TableList/helperCells';

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
    render: object => renderCell(statusText[object.status], 'TextCell'),
    sorter: true,
  },
];

export default clone(columns);
