import React, { useState } from "react";
import styled from "styled-components";
import { FaStar, FaHeart, FaRegHeart } from "react-icons/fa";

const Container = styled.div`
    border-top: 1px solid lightgray;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 450px;
    height: 70px;
    padding: 20px;
    margin: 10px;
    border: solid 1px #D1D1D1;
    border-radius: 15px;
`
const Wrapper = styled.a`
    width: 550px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-decoration: none;
`


const Restaurant = ({ key, restaurantName, score, number, like }) => {
    const [liked, setLiked] = useState(like);
    const rating = (score, number) => {
        const result = [];
        for (let i = 5; i > 0; i--){
            score--;
            if (score>=0){
                result.push(<FaStar size="12" color="#d57358"></FaStar>);
            }
            else {
                result.push(<FaStar size="12" color="lightgray"></FaStar>);
            }
        }
        result.push(<small style={{color: "gray"}}> 리뷰 {number}개</small>);
        return result;
    }

    return (
        <Container>
            <Wrapper href="http://www.naver.com">
                <h3 style={{color: "black", fontWeight:"bold", margin:"0px"}}>{restaurantName}</h3>   
                <div>
                    {
                        rating(score, number)
                    }
                </div>
            </Wrapper>
            {liked ? <FaHeart onClick={()=>setLiked(!liked)} color="#d57358" size="22"/> : <FaRegHeart onClick={()=>setLiked(!liked)} color="#d57358" size="22"/>}
        </Container>
    );
  }

export default Restaurant;