import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaForward, FaBackward } from 'react-icons/fa';

import {
  Container,
  Loading,
  Owner,
  BackButton,
  IssuesList,
  Pagination,
} from './style';
import api from '../../services/api';

function Repositories({ match }) {
  const [repoData, setRepoData] = useState([]);
  const [issueData, setIssueData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageAction, setPageAction] = useState(1);

  // Get repositorie and issues via params
  useEffect(() => {
    async function loadRepositoryDetails() {
      const repoDetail = decodeURIComponent(match.params.repositories);
      const [repositorieData, issuesData] = await Promise.all([
        api.get(`/repos/${repoDetail}`),
        api.get(`/repos/${repoDetail}/issues`, {
          params: {
            state: 'all',
            per_page: 5,
          },
        }),
      ]);
      setRepoData(repositorieData.data);
      setIssueData(issuesData.data);
      setLoading(false);
    }
    loadRepositoryDetails();
  }, [match.params.repositories]);

  // Set Pagination on api params
  useEffect(() => {
    async function loadPageIssue() {
      const repoDetail = decodeURIComponent(match.params.repositories);
      const response = await api.get(`repos/${repoDetail}/issues`, {
        params: {
          state: 'all',
          page: pageAction,
          per_page: 5,
        },
      });
      setIssueData(response.data);
    }
    loadPageIssue();
  }, [match.params.repositories, pageAction]);

  // Page Navigation
  const handlePagination = (action) => {
    setPageAction(action === 'nextPage' ? pageAction + 1 : pageAction - 1);
  };

  if (loading) {
    return <Loading style={{ color: '#fff' }}>Loading...</Loading>;
  }

  return (
    <Container>
      {/* Header of Repo Details */}
      <BackButton to="/">
        <FaArrowLeft color="#000" size={20} />
      </BackButton>
      <Owner>
        <img src={repoData.owner.avatar_url} alt={repoData.name} />
        <h1>{repoData.name}</h1>
        <p>{repoData.description}</p>
      </Owner>

      <IssuesList>
        {issueData.map((issue) => (
          <li key={issue.id}>
            <img src={issue.user.avatar_url} alt={issue.user.login} />
            <div>
              <strong>
                <a href={issue.html_url} alt="issue-link">
                  {issue.title}
                </a>
              </strong>

              <p>{issue.user.login}</p>
              {issue.labels.map((label) => (
                <span key={label.id}>{label.name}</span>
              ))}
            </div>
          </li>
        ))}
      </IssuesList>

      <Pagination>
        <button
          onClick={() => handlePagination('previousPage')}
          type="button"
          disabled={pageAction < 2}
        >
          <FaBackward />
        </button>
        {pageAction}
        <button onClick={() => handlePagination('nextPage')} type="button">
          <FaForward />
        </button>
      </Pagination>
    </Container>
  );
}

export default Repositories;
