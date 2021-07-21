import React, { useState } from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";

const Container = styled.a`
    margin: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 300px;
    height: 150px;
    text-decoration: none;
`
const ImageWrapper = styled.div`
    width: 160px;
    height: 130px;
    position: relative;
`
const Image = styled.img`
    width: 160px;
    height: 130px;
    position: absolute;
`
const Content = styled.button`
    background-color: rgba(0,0,0,0.5);
    color: white;
    width: 160px;
    height: 130px;
    position: absolute;
    border: none;
    cursor: pointer;
`
const Wrapper = styled.div`
    width: 130px;
    height: 130px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const Tag = styled.button`
    background-color: #d57358;
    font-size: xx-small;
    color: white;
    padding-inline: 10px;
    border: none;
    height: 20px;
    border-radius: 50px;
    margin-right: 3px;
    margin-top: 50px;
    cursor: pointer;
`

const Review = ({ id, image, content, restaurantName, tags, score }) => {
    const [hover, setHover] = useState('off');
    const onMouseEnter = () => setHover('on');
    const onMouseLeave = () => setHover('off');
    const rating = (score) => {
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
        return result;
    }

    return (
        <Container href="http://www.naver.com">
            <ImageWrapper onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <Image src={image}></Image>
                {
                    hover==='on' && <Content>{content}</Content>
                }
            </ImageWrapper>
            <Wrapper>
                <h3 style={{color: "black", fontWeight:"bold", margin:"0px"}}>{restaurantName}</h3>
                <div>
                    {
                        tags.map(tag => (
                            <Tag>{tag}</Tag>
                        ))
                    }
                </div>
                <div>
                    {
                        rating(score)
                    }
                </div>
            </Wrapper>
        </Container>
    );
  }

export default Review;