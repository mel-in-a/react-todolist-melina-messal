import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
      <FontAwesomeIcon icon="clipboard-list" size="2x"/>
      </div>

      <div className="title">ToDo List</div>
    </div>
  );
};

export default Header;
