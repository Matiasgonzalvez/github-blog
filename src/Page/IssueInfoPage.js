import IssueInfoCardComponent from "../Component/IssueInfoCardComponent";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {Endpoints} from "../Utils/Endpoints";
import IssueInfoCardBody from "../Component/IssueInfoCardBody";
import {getData} from "../Utils/GetData";

const IssueInfoPage = () => {
  const location = useLocation();
  const [issue, setIssue] = useState([]);

  useEffect(() => {
    const pathParts = location.pathname.split("/");
    const issueNumber = pathParts[pathParts.length - 1];
    if (issueNumber) {
      getData(`${Endpoints.issuesEndpoint}/${issueNumber}`,setIssue);
    }
  }, [location]);

  return (
    <div className="w-100 vh-100">
      {issue && <div>
        <IssueInfoCardComponent issue={issue}/>
        <IssueInfoCardBody issue={issue}/>
      </div>
      }
    </div>
  )
}

export default IssueInfoPage;