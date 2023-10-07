import { useThemeContext } from '../../../../context/theme';
import './ConfirmDialog.css';

const ConfirmDialog = ({ deleteId, onDelete }) => {
  const { setShowDialog, showDialog } = useThemeContext();

  const handleCancel = () => {
    setShowDialog(false);
  };

  const onConfirm = () => {
    onDelete(deleteId);
    setShowDialog(false);
  };

  return (
    <div className='confirm-dialog'>
      <p>Are you sure you want to delete this item?</p>
      <button className='cancel-button' onClick={handleCancel}>
        Cancel
      </button>
      <button className='confirm-button' onClick={onConfirm}>
        Confirm
      </button>
    </div>
  );
};

export default ConfirmDialog;
