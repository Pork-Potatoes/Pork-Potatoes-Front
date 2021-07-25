import React, { useState } from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import ReviewPage from "../pages/ReviewPage";

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

const Review = ({ id, image, content, restaurantName, menuName, tagFood, tagMood, score }) => {
    const [ modalOpen, setModalOpen ] = useState(false);
    const openModal = () => {setModalOpen(true);}
    const closeModal = () => {setModalOpen(false);}
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
        <div>
        <Container onClick={openModal}>
            <ImageWrapper onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <Image src={image}></Image>
                {
                    hover==='on' && <Content>{content.length>80?content.slice(0,80)+"···":content}</Content>
                }
            </ImageWrapper>
            <Wrapper>
                <h3 style={{color: "black", fontWeight:"bold", margin:"0px"}}>{restaurantName.length>8?restaurantName.slice(0,6)+"···":restaurantName}</h3>
                <h5 style={{color: "black",  margin:"0px"}}>{menuName.length>11?menuName.slice(0,10)+"···":menuName}</h5>
                <div>
                    <Tag>{tagFood}</Tag>
                    <Tag>{tagMood}</Tag>
                </div>
                <div>
                    {
                        rating(score)
                    }
                </div>
            </Wrapper>
        </Container>
        <ReviewPage open={ modalOpen } close={ closeModal } header="Modal heading"></ReviewPage>
        </div>
    );
  }

export default Review;