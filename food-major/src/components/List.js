import React from "react";
import styled from "styled-components";

const Container = styled.a`
    background-color: white;
    margin: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 300px;
    height: 150px;
    text-decoration: none;
`
const Image = styled.img`
    width: 300px;
    height: 150px;
    object-fit: cover;
`
const Content = styled.button`
    background-color: white;
    font-size: x-large;
    font-weight: bold;
    color: black;
    width: 300px;
    height: 150px;
    position: absolute;
    border: none;
    cursor: pointer;
`
const List = ({ key, image, content, url }) => {
    return (
        <Container href={url}>
            {/* <Image src={image} alt={content}></Image> */}
            <Content>{content}</Content>
        </Container>
    );
  }

export default List;