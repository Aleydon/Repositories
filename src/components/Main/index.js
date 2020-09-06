import React, { useState, useEffect } from 'react';
import { Title, SubTitle, Container, Form, SearchButton } from '../../Styles/styled';
import { FaGithub, FaSearch } from 'react-icons/fa';




function Main() {
  const [ input, setInput ] = useState('');
  const [ repos, setRepos ] = useState([]);


  return(
      <Container>
          <Title><FaGithub size={30} color="#000" />Repositories</Title>
          <SubTitle>Sub Title</SubTitle>

          <Form>
            <input type="text" placeholder="Type here your Repository"/>
            <SearchButton><FaSearch /></SearchButton>
          </Form>
      </Container>
  )
}

export default Main;