import React, { useEffect, useState } from 'react';

import { Container, Loading, Owner } from './style';
import api from '../../services/api';

function Repositories({ match }) {
  const [repoData, setRepoData] = useState([]);
  const [issueData, setIssueData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadRepositoryDetails() {
      // Get repositorie and issues via params
      const repoDetail = decodeURIComponent(match.params.repositories);
      const [repositorieData, issuesData] = await Promise.all([
        api.get(`/repos/${repoDetail}`),
        api.get(`/repos/${repoDetail}/issues`, {
          params: {
            state: 'open',
            per_page: 5,
          },
        }),
      ]);
      setRepoData(repositorieData.data);
      setIssueData(issuesData.data);
      setLoading(false);
    }
    loadRepositoryDetails();
  }, [match]);

  if (loading) {
    return <Loading style={{ color: 'white' }}>Testing...</Loading>;
  }

  return (
    <Container>
      <Owner>
        <img src={repoData.owner.avatar_url} alt={repoData.name} />
        <h1>Repositorie: {repoData.name} </h1>
        <h3>URL: {repoData.url} </h3>
        <h4>Description: {repoData.description}</h4>
        <h5>{issueData.data}</h5>
      </Owner>
    </Container>
  );
}

export default Repositories;
