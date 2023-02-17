import img from './not-faund.jpg';
import { Link } from 'react-router-dom';
const notFaund = () => {
  return (
    <div className="notFaund">
      <img className="notFaund-img" src={img} alt="page not faund" />
      <Link className="link" to="/">
        Home page
      </Link>
    </div>
  );
};

export default notFaund;
