import ReactModal from 'react-modal';

interface DetailModalProps {
  detail: string;
  isModalOpen: boolean;
  toggleModal: () => void;
}

const DetailModalStyles = {
  content: {
    width: 300,
    height: 200,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
};

export const DetailModal = ({
  detail,
  isModalOpen,
  toggleModal,
}: DetailModalProps) => {
  return (
    <ReactModal
      isOpen={isModalOpen}
      contentLabel="Detail Modal"
      style={DetailModalStyles}
    >
      <button
        onClick={toggleModal}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl z-10 cursor-pointer"
        type="button"
        aria-label="닫기"
      >
        ×
      </button>
      <div className="mt-10 text-sm text-gray-700 relative z-0">{detail}</div>
    </ReactModal>
  );
};
