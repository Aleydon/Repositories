import styled from 'styled-components';




export const Title = styled.h1`
    display: flex;
    flex-direction: row;
    color: #f00;
    font-style: italic;
    margin-right: 200px;



    /* Margin on Icon */
    svg{
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
    width: 60%;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
`;



export const SearchButton = styled.button.attrs({
    type: 'button'
})`
    width: 90px;
    height: 30px;
    background: #0D2636;
    color: #e3e3e3;
    border-radius: 7px;
    margin-left: 15px;
    justify-content: center;
    align-items: center;
`;



export const Form = styled.form`
    display: flex;
    flex-direction: row;

    input{
        flex: 1;
        height: 30px;
    }
`;



export const List = styled.ul`
    list-style: none;
    margin-top: 30px;

    li{
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




export  const DeleteRepo = styled.button.attrs({
    type: 'button'
})`

`;