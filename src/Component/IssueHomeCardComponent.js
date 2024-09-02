import {Card} from "react-bootstrap";
import moment from "moment";
import 'moment/locale/pt-br';

const IssueHomeCardComponent = ({issue}) => {
  const timeAgo = moment(issue.created_at).fromNow();

  return (
    <Card  className="card w-25 h-35 m-3 text-white" style={{background: "#112131"}}>
      <Card.Header>
        <h6>{issue.title}</h6>
      </Card.Header>
      <Card.Body>
        {issue.body}
        <a href={`/issue/${issue?.number}`} className="stretched-link"></a>
      </Card.Body>
      <Card.Footer>
        Criado {timeAgo}
      </Card.Footer>
    </Card>
  )
}

export default IssueHomeCardComponent;