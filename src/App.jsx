// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import NavBar from './components/NavBar/NavBar';
import MailboxList from './components/MailboxList/MailboxList';
import MailboxForm from './components/MailboxForm/MailboxForm';
import MailboxDetails from './components/MailboxDetails/MailboxDetails';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<h1>Post Office</h1>} />
          <Route path="/mailboxes" element={<MailboxList />} />
          <Route path="/new-mailbox" element={<MailboxForm />} />
          <Route path="/mailboxes/:mailboxId" element={<MailboxDetails />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;