import React from 'react'
import { Link } from 'react-router-dom';
import Home from '../landingPage/Home';

function Modal({toCloseModal}) {

  const closeModal = () => {
    toCloseModal(false)
  }
  const refresh = () =>{
    window.location.reload();
    alert("Again!!! Thank you for your Purchase. This ends the demo page experience.")
  }

  return (
    <div className='background-modal'>
      <div className="modal-container">
        <div className="header-modal">
          <button className='cancel-x' onClick={closeModal}><i className="fa-solid fa-circle-xmark fa-10px"></i></button>
        </div>
        <div className='title-modal'>
          <h1>Thank you for your purchase!!</h1>
        </div>
        <hr/>
        <div className='body-modal'>
          <h6>**Note**</h6>
          <p>This is just a sample webpage, No purchases or orders were made and therefore you will not be charged of any actions regarding the process made in this page. But feel free to make purchase or orders on your favorite pizza house if you feel the desire to eat pizza Thank you.<i className="fa-solid fa-face-grin-wink fa-xl"></i></p>
        </div>
        <div className='btn-modal-cont'>
          <button className='cancel' onClick={closeModal}>Cancel</button>

              <button className='proceed' onClick={refresh}{...Home}>Ok</button>


        </div>
      </div>
    </div>

  )
}

export default Modal
