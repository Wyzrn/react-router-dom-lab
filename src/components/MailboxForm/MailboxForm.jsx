// src/components/MailboxForm/MailboxForm.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MailboxForm = (props) => {
  const [formData, setFormData] = useState({ boxOwner: '', boxSize: 'Small' });
  const navigate = useNavigate();

  // Handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    props.addBox(formData);
    navigate('/mailboxes');
  };

  return (
    <div className="mail-box">
      <h2>New Mailbox</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Box Owner:
          <input
            type="text"
            name="boxOwner"
            value={formData.boxOwner}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Box Size:
          <select name="boxSize" value={formData.boxSize} onChange={handleInputChange}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </label>
        <button type="submit">Add Mailbox</button>
      </form>
    </div>
  );
};

export default MailboxForm;