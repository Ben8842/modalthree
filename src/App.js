
import './App.css';
import Modal from 'react-modal'
import React, { useState } from 'react'

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  return (
    <div className="App">
      <button onClick={() => setModalIsOpen(true)}>Open super awesome Modal</button>
    <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
      <h2>Modal HELLOOWHELO</h2>
      <p>body of mOdal oh yeah</p>
      <div>
        <button onClick={() => setModalIsOpen(false)}>close super fun modal</button>
      </div>
    </Modal>
    </div>
  );
}

export default App;
