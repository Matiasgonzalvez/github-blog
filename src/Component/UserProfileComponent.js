import {Card, Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const UserProfileComponent = ({user}) => {

  return (
    <Row className="justify-content-center">
      <Card className="w-75 p-2 pb-0" style={{height: "15%", background: "#112131"}}>
        <Card.Body>
          <div className="d-flex ">
            <div style={{marginRight: "3rem"}}>
              <img
                style={{height: "120px"}}
                className="d-flex rounded"
                alt="Imagem do perfil"
                src={user?.avatar_url}
              />
            </div>
            <div className="w-75">
              <h4 className="text-white">{user?.name}</h4>
              <p className="text-white">{user?.bio ? user?.bio : "Sem Bio"}</p>
              <Row className="d-flex flex-row">
                <Col>
                  <Link to={user?.html_url} className="d-flex align-items-center text-decoration-none text-white"
                        target={"_blank"}>
                    <img
                      style={{height: "1.2rem", marginRight: "1rem"}}
                      className="rounded"
                      alt="git logo"
                      src="/githubicon.svg"
                    />
                    <span className="ml-2">{user?.login}</span>
                  </Link>
                </Col>
                <Col>
                  <Link className="d-flex align-items-center text-decoration-none text-white" to={user?.html_url}
                        target={"_blank"}>
                    <img
                      style={{height: "1.2rem", marginRight: "1rem"}}
                      className="rounded"
                      alt="projeto logo"
                      src="/company.svg"
                    />
                    <span className="ml-2">{user?.login}</span>
                  </Link>
                </Col>
                <Col>
                  <Link
                    to={user?.html_url + `?tab=followers`}
                    target={"_blank"}
                    className="d-flex align-items-center text-decoration-none text-white"
                  >
                    <img
                      style={{height: "1.2rem", marginRight: "1rem"}}
                      className="rounded"
                      alt="seguidores"
                      src="/followers.svg"
                    />
                    <span className="ml-2">{user?.followers}</span>
                  </Link>
                </Col>
              </Row>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Row>
  )
}

export default UserProfileComponent;