// src/components/MailboxDetails/MailboxDetails.jsx
import { useParams } from 'react-router-dom';

const MailboxDetails = (props) => {
  const { mailboxId } = useParams();
  const selectedBox = props.mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  );

  return (
    <div className="mail-box">
      <h2>Mailbox Details</h2>
      {selectedBox ? (
        <div>
          <p>Box Number: {selectedBox._id}</p>
          <p>Box Owner: {selectedBox.boxOwner}</p>
          <p>Box Size: {selectedBox.boxSize}</p>
        </div>
      ) : (
        <p>Mailbox Not Found!</p>
      )}
    </div>
  );
};

export default MailboxDetails;