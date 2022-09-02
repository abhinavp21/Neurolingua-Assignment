import React, { useEffect, useState } from 'react';
import './App.css';
import Modal from './Component/Modal.js';
import Detail from './Component/Detail';
import plusIcon from "./Images/plus32px.png"

function App() {
  const [details, setDetails] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [editDetail, setEditDetail] = useState({})


  function closeModal() {
    setEditDetail({})
    setIsOpen(false);
  }
  function createNewDetail() {
    setIsOpen(true)
  }
  function removeDetail(id) {
    setDetails((details) => {
      return details.filter((detail) => {
        return detail.id !== id;
      })
    })
  }

  return (
    <div className="App">
      <header>Sessions</header>
      {details.map((detail) =>
        <Detail key={detail.id} detail={detail} removeDetail={removeDetail} setEditDetail={setEditDetail} setIsOpen={setIsOpen} />
      )}
      {modalIsOpen ? <Modal closeModal={closeModal} details={details} setDetails={setDetails} editDetail={editDetail} /> : null}
      <footer>
        <button onClick={createNewDetail}>
          <img src={plusIcon} />
          Sessions
        </button>
      </footer>
    </div>
  );
}
export default App;
