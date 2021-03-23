import React, { useState, useCallback, useEffect } from 'react';
import {
  FaGithub,
  FaSearch,
  FaTrash,
  FaSpinner,
  FaGreaterThan,
} from 'react-icons/fa';

import { Link } from 'react-router-dom';
import {
  Title,
  SubTitle,
  Container,
  Form,
  SearchButton,
  List,
  DeleteRepo,
  RepoName,
} from '../../styles/styled';

import api from '../../services/api';

function Main() {
  const [input, setInput] = useState('');
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [voidInput, setVoidInput] = useState(null);

  // Get repos saved in localStorage
  useEffect(() => {
    const repoStorage = localStorage.getItem('@favorite/repos');
    // If exists data in localstorage, set data in repositories state
    if (repoStorage) {
      setRepositories(JSON.parse(repoStorage));
    }
  }, []);

  // Save repos in localStorage
  useEffect(() => {
    localStorage.setItem('@favorite/repos', JSON.stringify(repositories));
  }, [repositories]);

  // Filter and remove Repositories from states
  const handleDeleteRepository = useCallback(
    (repo) => {
      const repoDelete = repositories.filter(
        (filtered) => filtered.name !== repo,
      );
      setRepositories(repoDelete);
      localStorage.removeItem(repoDelete);
    },
    [repositories],
  );

  // Get Repositories and set in State
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setLoading(true);
      setVoidInput(null);

      async function getRepositories() {
        try {
          if (input !== '') {
            const responseData = await api.get(`repos/${input}`);
            const data = {
              name: responseData.data.full_name,
              url: responseData.data.url,
            };
            setRepositories([...repositories, data]);
            setInput('');
          } else {
            setVoidInput(true);
          }

          // Checks if repository already exists
          const repoAlready = repositories.find((repo) => repo.name === input);
          if (repoAlready) {
            throw new Error('Repository already!');
          }
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      }
      getRepositories();
    },
    [input, repositories],
  );

  const handleInputChange = useCallback((e) => {
    setInput(e.target.value);
    setVoidInput(null);
  }, []);

  return (
    <Container>
      <Title>
        <FaGithub size={30} color="#000" />
        Repositories
      </Title>
      <SubTitle>Sub Title</SubTitle>

      <Form error={voidInput}>
        <input
          type="text"
          placeholder="Type here some Repository"
          value={input}
          onChange={handleInputChange}
        />

        {/* Change icon button search  */}
        <SearchButton onClick={handleSubmit} loading={loading ? 1 : 0}>
          {loading ? <FaSpinner /> : <FaSearch />}
        </SearchButton>
      </Form>

      <List>
        {repositories.map((repos) => (
          <div key={repos.name}>
            <li>
              <Link to={`/repositories/${encodeURIComponent(repos.name)}`}>
                <FaGreaterThan size={16} color="#006600" />
              </Link>
              <RepoName>
                <span>{repos.name}</span>
              </RepoName>
              <h6>
                <span>{repos.url}</span>
              </h6>
              <DeleteRepo
                onClick={() => {
                  handleDeleteRepository(repos.name);
                }}
              >
                <FaTrash size={16} color="red" />
              </DeleteRepo>
            </li>
          </div>
        ))}
      </List>
    </Container>
  );
}

export default Main;
