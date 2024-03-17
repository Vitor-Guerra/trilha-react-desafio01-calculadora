import styled from 'styled-components';

export const ButtonContainer = styled.button`
    max-height: 55px;
    padding: 20px;
    border: 1px solid #d0cccc90;
    border-radius: 3px;
    background-color: #ffffffdb;
    color: black;
    font-size: 15px;
    font-weight: 500;
    flex: 1;
    box-shadow: 0px 1px 0px #00000017;
    
    &:hover {
        opacity: 0.8;
    }
`

export const CustomButton = styled.button`
    background-color: #1f1fb5f0;
    max-height: 55px;
    padding: 20px;
    border: 1px solid #d0cccc90;
    border-radius: 3px;
    color: white;
    font-size: 15px;
    font-weight: 500;
    flex: 1;
    box-shadow: 0px 1px 0px #00000017;
    
    &:hover {
        opacity: 0.8;
    }
`