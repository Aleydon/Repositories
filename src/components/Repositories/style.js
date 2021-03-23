import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background: #fff;
  border-radius: 10px;
  margin: 60px auto;
  padding: 30px;
  width: 73%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
`;

export const Loading = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Owner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    border-radius: 50%;
    height: 150px;
    width: 150px;
    margin: 20px 0;
  }

  h1 {
    color: #f00;
    font-size: 30px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #000;
    text-align: center;
    line-height: 1.4;
    max-width: 400px;
  }
`;

export const BackButton = styled(Link)`
  border: 0;
  outline: 0;
  background: transparent;
`;
