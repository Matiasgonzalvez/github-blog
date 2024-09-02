import {Card, Row} from "react-bootstrap";
import Markdown from "react-markdown";

const IssueInfoCardBody = ({issue}) => {

  return(<Row className="justify-content-center">
    <Card className="w-75 text-white" style={{background:"#112131"}}>
      <Card.Body>
        <Markdown>{issue?.body}</Markdown>
      </Card.Body>
    </Card>
    </Row>
  )
}

export default IssueInfoCardBody;