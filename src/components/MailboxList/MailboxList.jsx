// src/components/MailboxList/MailboxList.jsx
import { Link } from 'react-router-dom';

const MailboxList = (props) => {
  return (
    <div className="mail-box">
      <h2>Mailboxes</h2>
      <ul>
        {Array.isArray(props.mailboxes) && props.mailboxes.length > 0 ? (
          props.mailboxes.map((mailbox) => (
            <li key={mailbox._id} className="mail-box">
              <Link to={`/mailboxes/${mailbox._id}`}>
                Box #{mailbox._id}
              </Link>
            </li>
          ))
        ) : (
          <li>No mailboxes available</li>
        )}
      </ul>
    </div>
  );
};

export default MailboxList;