import clone from 'clone';
import { renderCell, LinkCell } from '../../components/TableList/helperCells';

const statusText = {
  pending: 'Pendiente',
  reviewed: 'Revisado',
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
    title: 'Folio Mi Actual',
    key: 'folio',
    width: 300,
    render: object => renderCell(object.Order, 'TextCell', 'folio'),
    sorter: true,
  },
  {
    title: 'Cliente',
    key: 'client',
    width: 300,
    render: object => {
      const {
        Order: { CardName },
      } = object;
      return renderCell(CardName, 'TextCell');
    },
    sorter: true,
  },
  {
    title: 'Motivos',
    key: 'reason',
    width: 300,
    render: object => renderCell(object, 'TextCell', 'reason'),
    sorter: true,
  },
  {
    title: 'Fecha',
    key: 'venta',
    width: 300,
    render: object => renderCell(object, 'DateCell', 'createdAt'),
    sorter: true,
  },
  {
    title: 'Estatus',
    key: 'status',
    width: 300,
    render: object => renderCell(statusText[object.status], 'TextCell'),
    sorter: true,
  },
  {
    title: 'Acceder',
    key: 'id',
    render: object =>
      LinkCell('Acceder', `/dashboard/cancel-request/${object.id}`),
  },
];

export default clone(columns);
