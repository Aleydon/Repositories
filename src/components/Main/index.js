import React, { useState, useCallback } from 'react';
import { Title, SubTitle, Container, Form, SearchButton } from '../../Styles/styled';
import { FaGithub, FaSearch } from 'react-icons/fa';
import api from '../../services/api';





function Main() {
  const [ input, setInput ] = useState('');
  const [ repositories, setRepositories ] = useState([]);



  function handleInput(e){
      setInput(e.target.value);
  }




  // Get Repositories and set in State
  const handleSubmit = useCallback((e) => {
      // e.prevent.default();

      async function getRepositories(){
        try{
          const responseData = await api.get(`repos/${input}`);
          const data = { 
              name: responseData.data.full_name,
              createAt: responseData.data.created_at
          }
          setRepositories([...repositories, data]);
          setInput('');
          console.log(data.name, data.createAt);
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
      </Container>
  )
}

export default Main;