import styled from 'styled-components';

export const Title = styled.h1`
  font-family: sans-serif;
  font-size: 24px;
  margin-bottom: 8px;
`;

export const PageLabel = styled.h1`
    font-family: sans-serif;
    font-size: 30px;
    margin-top: 10px;
    margin-bottom: 10px
`;

export const SubTitle = styled.h3`
  font-family: sans-serif;
  font-size: 18px;
  margin-top: 0;
`;

export const ButtonBox = styled.a`
    padding: 10px 20px;
    margin-top: 50px;
    border-radius: 25px;
    text-decoration: none;
    color: white;
    display: flex;
    flex-direction: row;
    font-weight: bold;
    align-items: center;
    background-color: #34c9eb;
    justify-content: space-around;
    &:hover {
        background-color: #cfc9eb;
        text-decoration: none;
        color: #fff
    }
`;
