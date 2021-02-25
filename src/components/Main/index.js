import React, { useState, useCallback } from 'react';
import { FaGithub, FaSearch, FaTrash } from 'react-icons/fa';

import { Title, SubTitle, Container, Form, SearchButton, List, DeleteRepo } from '../../Styles/styled';
import api from '../../services/api';





function Main() {
  const [ input, setInput ] = useState('');
  const [ repositories, setRepositories ] = useState([]);



  // Filter and remove Repositories from states
  const handleDeleteRepository = useCallback((repo) => {
      const find = repositories.filter(filtered => filtered.name !== repo);
      setRepositories(find);
    }, [repositories]);



  // Get Repositories and set in State
  const handleSubmit = useCallback((e) => {
      e.preventDefault();

      async function getRepositories(){
        try{
         if(input !== ""){
              const responseData = await api.get(`repos/${input}`);
              const data = { 
                  name: responseData.data.full_name,
                  createAt: responseData.data.created_at
              }
              setRepositories([...repositories, data]);
              setInput('');
            }
        }
        catch(error){
          console.log(error);
        }
      }

      getRepositories();
  }, [input, repositories]);



  return(
      <Container>
          <Title><FaGithub size={30} color="#000" />Repositories</Title>
          <SubTitle>Sub Title</SubTitle>

          <Form>
            <input 
              type="text" 
              placeholder="   Type here your Repository"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />

            <SearchButton onClick={handleSubmit}><FaSearch /></SearchButton>
          </Form>


          <List>
              {repositories.map((repos, index) => (
                <div key={index}>
                    <li>
                      {/* <span>
                          <a href="/"><FaBars size={15}/></a>
                      </span> */}
                        <h4>Repo: <span>{repos.name}</span></h4>
                        <h5>Created At:<span>{repos.createAt}</span></h5>
                          <DeleteRepo onClick={() => {handleDeleteRepository(repos.name)}}><FaTrash size={15}/></DeleteRepo>
                    </li>
                </div>
              ))}
          </List>


      </Container>
  )
}

export default Main;