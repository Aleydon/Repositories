import React from 'react';
import { Title, SubTitle, Container, Form, SearchButton } from '../../Styles/styled';
import { FaGithub, FaSearch } from 'react-icons/fa';




function Main() {
  return(
      <Container>
          <Title><FaGithub size={30} color="#000"  />Aleydon Repositories</Title>
          <SubTitle>Sub Title</SubTitle>

          <Form>
            <input type="text" placeholder="Type here your Repository" style={{width: 400}} />
            <SearchButton><FaSearch size={16} /></SearchButton>
          </Form>
      </Container>
  )
}

export default Main;