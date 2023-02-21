import './App.css';
import logo from './resource/homelogo.svg';
import React, { useState, useEffect } from 'react';
import {
  Dialog,
  Button,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
} from '@mui/material';

function App() {
  const [open, setOpen] = useState(false);
  const handleToClose = () => {
    setOpen(!open);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logo">
          <img src={logo}></img>
        </div>
        <button onClick={handleToClose}>
          <p className="button_text">Ask a question</p>
        </button>
        <Dialog open={open} onClose={handleToClose}>
          <DialogTitle>{'How are you?'}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              I am Good, Hope the same for you!
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleToClose} color="primary" autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </header>
      <div className="card_margin">
        <div className="card_container">
          <div className="protocol_card">
            <p className="card_title"> Near Protocol </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
