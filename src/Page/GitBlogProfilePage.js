import React, { useEffect, useState } from "react";
import { FormControl, FormGroup, Row } from "react-bootstrap";
import IssueHomeCardComponent from "../Component/IssueHomeCardComponent";
import { getData } from "../Utils/GetData";
import { Endpoints } from "../Utils/Endpoints";

const GitBlogProfilePage = () => {
  const [issues, setIssues] = useState([]);
  const [filteredIssues, setFilteredIssues] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getData(Endpoints.issuesEndpoint, setIssues);
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const queryLower = searchQuery.toLowerCase();
      const filtered = issues.filter(issue =>
        issue.title.toLowerCase().includes(queryLower) ||
        issue.body.toLowerCase().includes(queryLower) ||
        issue.labels.some(label => label.name.toLowerCase().includes(queryLower)) ||
        issue.user.login.toLowerCase().includes(queryLower)
      );
      setFilteredIssues(filtered);
    } else {
      setFilteredIssues(issues);
    }
  }, [searchQuery, issues]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <FormGroup className="w-75 mt-5" controlId="searchQuery">
        <FormControl
          type="text"
          style={{ background: "#040F1A", color: "white" }}
          placeholder="Digite o texto da busca"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </FormGroup>
      <Row className="min-vh-100 py-5 justify-content-center">
        {filteredIssues.length > 0 ? (
          filteredIssues.map((issue, i) => (
            <IssueHomeCardComponent issue={issue} key={i} />
          ))
        ) : (
          <p>{searchQuery ? `Nenhuma issue encontrada com: ${searchQuery}` : 'Carregando issues...'}</p>
        )}
      </Row>
    </div>
  );
};

export default GitBlogProfilePage;
