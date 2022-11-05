
import Nav from 'react-bootstrap/Nav';
import './navbar.css';

function Navbar() {
  return (
    <div className="nav">

    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>    
        <Nav.Link href="/home">Acceuil</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">PikPAk Box</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
    
    </Nav>
   
    </div>
  );
}

export default Navbar ;
