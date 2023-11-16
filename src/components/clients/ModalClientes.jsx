import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ClienteModal(props) {
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            Nombre: {props.clinetId}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h4>Celular: </h4>
            <h5>Ordenes</h5>
            <p>Nombre del producto:</p>
            <p>Precio del producto:</p>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
        </Modal>
    );
    }

export default ClienteModal;