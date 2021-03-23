import styled, { keyframes, css } from 'styled-components';

export const Title = styled.h1`
  display: flex;
  flex-direction: row;
  color: #f00;
  font-style: italic;
  margin-right: 200px;

  /* Margin on Icon */
  svg {
    margin-right: 20px;
    margin-top: 3px;
  }
`;

export const SubTitle = styled.h3`
  color: #fff;
  margin-top: 10px;
`;

export const Container = styled.div`
  background: #fff;
  border-radius: 10px;
  margin: 60px auto;
  padding: 30px;
  width: 73%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
`;

const buttonRotateAnimation = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
}`;

export const SearchButton = styled.button.attrs((props) => ({
  type: 'button',
  disabled: props.loading,
}))`
  display: flex;
  width: 90px;
  height: 30px;
  background: #0d2636;
  color: #e3e3e3;
  border-radius: 7px;
  margin-left: 15px;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.7;
  }

  /* If loading is true, active animation */
  ${(props) =>
    props.loading &&
    css`
            svg{
                animation: ${buttonRotateAnimation} 2s linear infinite; */
            }
        `}
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    height: 30px;
    padding-left: 10px;
    border: 1px solid ${(props) => (props.error ? '#f00' : '#D3D3D3')};
    border-radius: 5px;
  }
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;
  li {
    padding: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  & + li {
    border-top: 1px solid #000;
  }
`;

export const DeleteRepo = styled.button.attrs({
  type: 'button',
})`
  border: 0;
  outline: 0;
  background: transparent;
  margin-right: 10px;
`;

export const RepoName = styled.h5`
  margin-right: 60%;
`;
