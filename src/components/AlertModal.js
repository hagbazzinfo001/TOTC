// src/components/AlertModal.js
import "../assets/css/modal.css";

function AlertModal({ message, type, onClose }) {
  if (!message) return null; // Guard clause

  return (
    <div className="modal-overlay">
      <div className={`modal-content ${type}`}>
        <p>{message}</p>
        <button onClick={onClose} className="close-button">
          Close
        </button>
      </div>
    </div>
  );
}

export default AlertModal;
