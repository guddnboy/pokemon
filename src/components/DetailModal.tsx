import ReactModal from 'react-modal';

interface DetailModalProps {
  detail: string;
  isModalOpen: boolean;
  toggleModal: () => void;
}

const customStyles = {
  content: {
    width: 400,
    height: 400,
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
      style={customStyles}
    >
      <button onClick={toggleModal}>닫기</button>
      <div className="text-sm text-gray-700">{detail}</div>
    </ReactModal>
  );
};
