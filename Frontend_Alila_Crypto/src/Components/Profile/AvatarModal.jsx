import { Modal } from "react-bootstrap";

const AvatarModal = ({ show, handleClose, avatarURL }) => {
  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>👤 Immagine del Profilo</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <img
          src={avatarURL}
          alt="Avatar ingrandito"
          style={{ maxWidth: "100%", maxHeight: "80vh", borderRadius: "10px" }}
        />
      </Modal.Body>
    </Modal>
  );
};

export default AvatarModal;