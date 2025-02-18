export default function Modal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Confirm Clear List</h2>
        <p>Are you sure you want to clear the entire list?</p>
        <button onClick={onConfirm}>Yes, Clear List</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}
