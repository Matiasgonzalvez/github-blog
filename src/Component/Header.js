import {DataContext} from "../Utils/UserDataProvider";
import {useContext} from "react";
import {Card, Col, Row} from "react-bootstrap";
import {Link, useLocation} from "react-router-dom";
import UserProfileComponent from "./UserProfileComponent";
import IssueInfoCardComponent from "./IssueInfoCardComponent";

const Header = () => {
  const {user} = useContext(DataContext);
  const location = useLocation();

  return (
    <div className="w-100 p-3 header" style={{background: "#0c2239", color: "white",
      backgroundImage: `url('/background.svg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <Row className="justify-content-center">
        <Col xs="auto"> <Link to="/">
          <img className="d-flex float-left rounded" alt="Logo"
               src="/logo.svg"/>
        </Link>
        </Col>
      </Row>
      {location.pathname === "/" && <UserProfileComponent user={user}/>}
    </div>
  );
};

export default Header;