import clone from 'clone';
import { renderCell, LinkCell } from '../../components/TableList/helperCells';

const statusText = {
  paid: 'Pagado',
  canceled: 'Cancelado',
  partiallyCanceled: 'Parcialmente Cancelado',
};

const columns = [
  {
    title: 'Folio',
    key: 'folio',
    width: 300,
    render: object => renderCell(object, 'TextCell', 'folio'),
    sorter: true,
  },
  {
    title: 'Cliente',
    key: 'Client',
    width: 300,
    render: object => renderCell(object, 'TextCell', 'CardName'),
    sorter: true,
  },
  {
    title: 'Broker',
    key: 'broker',
    width: 300,
    render: object => {
      const { Broker } = object;
      const string = Broker ? Broker.Name || 'No Registrado' : 'No Aplica';
      return renderCell(string, 'TextCell');
    },
    sorter: true,
  },
  {
    title: 'Total',
    key: 'total',
    width: 300,
    render: object => renderCell(object, 'CurrencyCell', 'total'),
    sorter: true,
  },
  {
    title: 'Monto Cobrado',
    key: 'monto',
    width: 300,
    render: object => renderCell(object, 'CurrencyCell', 'ammountPaid'),
    sorter: true,
  },
  {
    title: 'Venta',
    key: 'venta',
    width: 300,
    render: object => renderCell(object, 'DateCell', 'createdAt'),
    sorter: true,
  },
  {
    title: 'Estatus',
    key: 'status',
    width: 300,
    render: ({ status }) => renderCell(statusText[status], 'TextCell'),
    sorter: true,
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
