interface ConfirmDeleteModalProps {
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmDeleteModal = ({
  onConfirm,
  onCancel,
}: ConfirmDeleteModalProps) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-slate-500 p-4 rounded-lg shadow-md">
        <p className="text-black">Tem certeza que deseja excluir este item?</p>
        <div className="flex justify-end gap-4 mt-4">
          <button
            onClick={onCancel}
            className="bg-gray-200 text-black p-2 rounded hover:bg-slate-300"
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            className="bg-red-500 hover:bg-red-600 text-white p-2 rounded"
          >
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
