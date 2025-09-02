// src/App.jsx
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import NavBar from './components/NavBar/NavBar';
import MailboxList from './components/MailboxList/MailboxList';
import MailboxForm from './components/MailboxForm/MailboxForm';
import MailboxDetails from './components/MailboxDetails/MailboxDetails';

const App = () => {
  // Initialize state for mailboxes
  const [mailboxes, setMailboxes] = useState([]);

  // Add new mailbox
  const addBox = (formData) => {
    const newId = mailboxes.length + 1;
    setMailboxes([...mailboxes, { ...formData, _id: newId }]);
  };

  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<h1>Post Office</h1>} />
          <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
          <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
          <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;