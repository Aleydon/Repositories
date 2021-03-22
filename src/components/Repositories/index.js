import React, { useEffect } from 'react';

import { Container } from './style';
import api from '../../services/api';

function Repositories({ match }) {
  useEffect(() => {
    async function loadRepositoryDetails() {
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
      console.log(repositorieData.data, issuesData.data);
    }
    loadRepositoryDetails();
  }, [match]);

  return (
    <Container>
      <h3>Repositories {decodeURIComponent(match.params.repositories)}</h3>
    </Container>
  );
}

export default Repositories;
