import {Card, Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import moment from "moment/moment";

const IssueInfoCardComponent = ({issue}) => {
  const timeAgo = moment(issue?.created_at).fromNow();

  return (
    <Row className="justify-content-center">
      <Card className="w-75 m-5  pb-0" style={{height: "15%", background: "#112131"}}>
        <Card.Body>
          <div className="d-flex ">
            <Link to="/" style={{marginRight: "3rem", color:"#354C63"}} className="text-decoration-none">
              <img
                style={{height: "1.2rem", marginRight: "1rem"}}
                className="rounded"
                alt="git logo"
                src="/left-arrow.svg"
              /> Voltar
            </Link>
            <div className="w-75 p-5">
              <h4 className="text-white pb-5">{issue?.title}</h4>
              <Row className="d-flex flex-row">
                <Col>
                  <Link to={issue?.user?.html_url} className="d-flex align-items-center text-decoration-none text-white "
                        target={"_blank"}>
                    <img
                      style={{height: "1.2rem", marginRight: "1rem"}}
                      className="rounded"
                      alt="git logo"
                      src="/githubicon.svg"
                    />
                    <span className="ml-2">{issue?.user?.login}</span>
                  </Link>
                </Col>
                <Col>
                  <Link className="d-flex align-items-center text-decoration-none text-white" to={issue?.html_url}
                        target={"_blank"}>
                    <img
                      style={{height: "1.2rem", marginRight: "1rem"}}
                      className="rounded"
                      alt="projeto logo"
                      src="/calendar.svg"
                    />
                    <span className="ml-2">{timeAgo}</span>
                  </Link>
                </Col>
                <Col>
                  <Link
                    to={issue?.html_url}
                    target={"_blank"}
                    className="d-flex align-items-center text-decoration-none text-white"
                  >
                    <img
                      style={{height: "1.2rem", marginRight: "1rem"}}
                      className="rounded"
                      alt="Comentários"
                      src="/chat.svg"
                    />
                    <span className="ml-2">{issue?.comments}</span>
                  </Link>
                </Col>
              </Row>
            </div>
            <Link to={issue?.html_url} target="_blank" style={{marginRight: "3rem", color:"#354C63"}} className="text-decoration-none">
              <p>Ver no Github
              <img
                style={{height: "1.2rem", marginLeft: "1rem"}}
                className="rounded"
                alt="git logo"
                src="/external.svg"
              />
              </p>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Row>
  )
}

export default IssueInfoCardComponent;