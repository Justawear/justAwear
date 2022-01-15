import React from 'react';
function Modal({currentPhoto}) {
    const {name, category, description, index} = currentPhoto;
    
    const toggleModal = (image, i) => {
        setCurrentPhoto({...image, index: i});
        setIsModalOpen(!isModalOpen);
      }
      {isModalOpen && (
        <Modal currentPhoto={currentPhoto} onClose={toggleModal} />
      )}
      const Modal = ({ onClose, currentPhoto }) => {

    return (
      <div className="modalBackdrop">
        <div className="modalContainer">
          <h3 className="modalTitle">{name}</h3>
          <img src={require(`../../assets/large/${category}/${index}.jpg`)} alt="current category" />
          <p>{description}</p>
         ...
        
         <button onClick={onClose} type="button">Close this modal</button>
    <button type="button">
      Close this modal
    </button>
  </div>
</div>
      // JSX
    );
  }
  
  export default Modal;