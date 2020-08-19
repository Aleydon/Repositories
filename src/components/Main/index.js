import React from 'react';
import { Title, SubTitle, Container } from '../../Styles/styled';
import { FaGithub } from 'react-icons/fa';




function Main() {
  return(
      <Container>
          <Title><FaGithub size={30} color="#fff" />Aleydon Repositories</Title>
          <SubTitle>Sub Title</SubTitle>
      </Container>
  )
}

export default Main;