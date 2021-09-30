import React from "react";
import styled from "styled-components";

const Container = styled.a`
    border: 1px solid lightgray;
    border-radius: 20px;
    margin: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 150px;
    cursor: pointer;
`
const Content = styled.button`
    background-color: white;
    font-size: x-large;
    font-weight: bold;
    color: gray;
    border: none;
    cursor: pointer;
`
const List = ({ content, url }) => {
    return (
        <Container href={url}>
            <Content>{content}</Content>
        </Container>
    );
}

export default List;