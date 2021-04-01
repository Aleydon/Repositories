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
    -webkit-transition: 0.3s ease-in !important;
    -moz-transition: 0.3s ease-in !important;
    -o-transition: 0.3s ease-in !important;
    transition: 0.3s ease-in !important;
  }

  img:hover {
    width: 170px;
    height: 170px;
    -webkit-transition: 0.2s ease-in !important;
    -moz-transition: 0.2s ease-in !important;
    -o-transition: 0.2s ease-in !important;
    transition: 0.2s ease-in !important;
    cursor: pointer;
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

export const IssuesList = styled.ul`
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid #ccc;
  list-style: none;

  li {
    display: flex;
    padding: 10px 15px;

    & + li {
      margin-top: 12px;
    }
  }

  img {
    width: 36px;
    height: 36px;
    border-radius: 50px;
    border: 2px solid #0d2636;
  }

  div {
    flex: 1;
    margin-left: 12px;

    span {
      background: #222;
      color: #fff;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 200;
      margin-left: 3px;
    }

    p {
      font-size: 14px;
    }
  }

  strong {
    font-size: 15px;

    a {
      text-decoration: none;
      color: #222;
      transform: 0.2s;

      &:hover {
        color: #0071bd;
      }
    }
  }
`;

export const Pagination = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & button {
    outline: 0;
    border: 0;
    background: transparent;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.3;
    }
  }
`;

export const FilterList = styled.div`
  margin: 15px 0;

  button {
    padding: 8px;
    border: 0;
    outline: 0;
    border-radius: 4px;
    margin: 0 3px;

    &:hover {
      background-color: #0d2636;
      color: #fff;
    }

    &:nth-child(${(props) => props.active + 1}) {
      background: #006600;
      color: #fff;
    }
  }
`;
