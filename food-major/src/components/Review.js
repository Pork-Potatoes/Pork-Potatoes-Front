import React from "react";
import styled from "styled-components";

import reviewImg from "../assets/reviewImg.png";

const Wrapper = styled.a`
    background-color: black;
    margin: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 300px;
    height: 150px;
    text-decoration: none;
    :hover{
        background-color: white;
    }
`
const Image = styled.img`
    width: 150px;
    height: 130px;
`
const Contents = styled.div`
    background-color: gray;
    width: 140px;
    height: 130px;
    display: flex;
    flex-direction: column;
`

function Review() {
    return (
        <Wrapper href="http://www.naver.com">
            <Image src={reviewImg}></Image>
            <Contents>
                <h2 style={{color: "black", fontWeight:"bold"}}>산타비</h2>
                <h5 style={{color: "black"}}>이대</h5>

            </Contents>
        </Wrapper>
    );
}

export default Review;