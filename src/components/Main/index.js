import React, { useState, useCallback } from 'react';
import { Title, SubTitle, Container, Form, SearchButton, List, DeleteRepo } from '../../Styles/styled';
import { FaGithub, FaSearch, FaBars, FaTrash } from 'react-icons/fa';
import api from '../../services/api';





function Main() {
  const [ input, setInput ] = useState('');
  const [ repositories, setRepositories ] = useState([]);



  function handleInput(e){
      setInput(e.target.value);
  }




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
              console.log(data.name, data.createAt);
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
              placeholder="Type here your Repository"
              value={input}
              onChange={handleInput}
            />

            <SearchButton onClick={handleSubmit}><FaSearch /></SearchButton>
          </Form>


          <List>
              {repositories.map((repos) => (
                    <li key={repos}>
                      <span>
                          <a href="/"><FaBars size={15}/></a>
                      </span>
                      {repos.name}{repos.createAt}
                        <DeleteRepo onClick={() => {handleDeleteRepository(repos.name)}}><FaTrash size={15}/></DeleteRepo>
                    </li>
              ))}
          </List>


      </Container>
  )
}

export default Main;