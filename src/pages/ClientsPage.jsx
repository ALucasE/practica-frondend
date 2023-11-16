import TablaClientes from "../components/clients/TablaClientes"
import { Card } from "react-bootstrap"

const ClientsPage = () => {
    const clientes = [
        {
            id: '1',
            name: 'Lucas',
            mobile: '3875638609',
            orders: {
                Products: {
                    name: 'test 01',
                    price: 1500
                }
            }
        },{
            id: '2',
            name: 'Matias',
            mobile: '3875638608'
        },{
            id: '3',
            name: 'Lorena',
            mobile: '3875638607'
        },{
            id: '4',
            name: 'Maria',
            mobile: '3875638606'
        },{
            id: '5',
            name: 'Silvia',
            mobile: '3875638605'
        },{
            id: '6',
            name: 'Sofia',
            mobile: '3875638604'
        },
    ]

    return(
        
        <>
            <Card.Title className="text-center"><h1>Clientes</h1></Card.Title>
            <Card.Body><TablaClientes clientes={clientes}/></Card.Body>
        </>

    )
  };
  
  export default ClientsPage;