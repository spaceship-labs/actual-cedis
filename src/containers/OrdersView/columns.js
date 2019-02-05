import clone from 'clone';
import { renderCell, LinkCell } from '../../components/TableList/helperCells';

const statusText = {
  paid: 'Pagado',
  canceled: 'Cancelado',
  partiallyCanceled: 'Parcialmente Cancelado',
};

const columns = [
  {
    title: 'Folio Mi Actual',
    key: 'folio',
    width: 300,
    render: object => renderCell(object, 'TextCell', 'folio'),
  },
  {
    title: 'Folio SAP',
    key: 'folioSap',
    width: 300,
    render: object => {
      const { OrdersSap } = object;
      const string = OrdersSap.map(({ invoiceSap, document }) => {
        if (invoiceSap) return `${invoiceSap}, `;
        return `${document} `;
      });
      return renderCell(string.toString(), 'TextCell');
    },
  },
  {
    title: 'Cliente',
    key: 'Client',
    width: 300,
    render: object => renderCell(object, 'TextCell', 'CardName'),
  },
  {
    title: 'Total',
    key: 'total',
    width: 300,
    render: object => renderCell(object, 'CurrencyCell', 'total'),
  },
  {
    title: 'Monto Cobrado',
    key: 'monto',
    width: 300,
    render: object => renderCell(object, 'CurrencyCell', 'ammountPaid'),
  },
  {
    title: 'Venta',
    key: 'venta',
    width: 300,
    render: object => renderCell(object, 'DateCell', 'createdAt'),
  },
  {
    title: 'Estatus',
    key: 'status',
    width: 300,
    render: ({ status }) => renderCell(statusText[status], 'TextCell'),
  },
  {
    title: 'Acceder',
    key: 'id',
    render: object => LinkCell('Acceder', `/dashboard/order/${object.id}`),
  },
  /*
	{
		title: 'Eliminar',
		key: 'delete',
		render: object => {
			return <DeleteCellWrapper id={object.id} />
		}
	}	
	*/
];

export default clone(columns);
