import { Container, Button } from 'react-floating-action-button';
import { HiPencil } from "react-icons/hi";
import React, { Component,useState } from "react";
import WriteReviewPage from "../pages/WriteReviewPage";

const WriteReviewButton = () =>{
    const [ modalIsOpen, setModalIsOpen ] = useState(false);

    return(
    <>
    <Container styles={{bottom:'3vh', right: '3vw'}}>
        <Button
        styles={{
            backgroundColor:'#F06D58',
            width: '63px',
            height: '63px',
            cursor: 'pointer'
        }}
        onClick={() => setModalIsOpen(true)}>
        <HiPencil size="40px" color="white"/>
        </Button>
    </Container>
    <WriteReviewPage open={ modalIsOpen } closeModal={()=>setModalIsOpen(false)} />
    </>
    );
}

export default WriteReviewButton;
