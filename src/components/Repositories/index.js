import React, { useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';

import { Container, Loading, Owner, BackButton } from './style';
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
      <BackButton to="/">
        <FaArrowLeft color="#000" size={20} />
      </BackButton>
      <Owner>
        <img src={repoData.owner.avatar_url} alt={repoData.name} />
        <h1>{repoData.name}</h1>
        <p>{repoData.description}</p>
        <h5>{issueData.data}</h5>
      </Owner>
    </Container>
  );
}

export default Repositories;
