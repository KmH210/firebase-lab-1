import './ShoutOutCard.css';
import ShoutOut from "../model/shoutOuts";

interface Props {
  shoutOut: ShoutOut;
  onDelete: () => void;
}

function ShoutOutCard({ shoutOut, onDelete }: Props) {
  return (
    <div className="ShoutOutCard">
        <h3 className="ShoutOutTo">Shout out to {shoutOut.to}</h3>
        <p className="ShoutOutFrom">From {shoutOut.from}</p>
        <p className="ShoutOutMessage">{ shoutOut.message}</p>
      <button className="Delete" onClick={onDelete}>Delete</button>
    </div>
  );
}

export default ShoutOutCard;