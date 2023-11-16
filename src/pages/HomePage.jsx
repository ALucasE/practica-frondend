import Login from '../components/Login'
import { Card } from "react-bootstrap"
const HomePage = () => {
    return(
        
            <div className="d-flex justify-content-center mt-5">
                <Card>
                    <Card.Body><Login/></Card.Body>
                </Card>
            </div>
        
    )
  };
  
  export default HomePage;