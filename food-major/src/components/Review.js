import React, { useState } from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import ReviewPage from "../pages/ReviewPage";
import logo from "../assets/icon.png"
import { withRouter } from "react-router-dom";
import { useHistory } from "react-router";
import axios from 'axios';
import https from "https";
import { render } from "@testing-library/react";

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
    object-fit: cover;
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
const agent = new https.Agent({
    rejectUnauthorized: false
  });

class Review extends React.Component{
    state = {
        review: '',
        isModalOpen:false,
        hover:'off'
    };

    openModal = () => this.setState({isModalOpen:true});
    closeModal = () => this.setState({isModalOpen:false});
    onMouseEnter = () => this.setState({hover:'on'});
    onMouseLeave = () => this.setState({hover:'off'});
    rating = (score) => {
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

    getReview = async (reviewNum) => {
        try{
            const url="https://www.matzipmajor.com/api/reviews/"+reviewNum.toString();
            const reviewdata = await axios.get(url, {httpsAgent: agent});
            console.log(reviewdata.data)
            this.setState({ review:reviewdata.data });
        }
        catch(e){
          console.log("getReview error");
        }
      }

    render(){
        const {reviewNum, image, content, restaurantName, menuName, tagFood, tagMood, score}=this.props;
        this.getReview(reviewNum);
    return (
        <div>
        <Container onClick={this.openModal}>
            <ImageWrapper onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                {
                    image===null ? <Image src={logo}></Image> : <Image src={image}></Image>
                }
                {
                    this.state.hover==='on' && <Content>{content.length>80?content.slice(0,80)+"···":content}</Content>
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
                        this.rating(score)
                    }
                </div>
            </Wrapper>
        </Container>
        <ReviewPage open={ this.state.isModalOpen } close={ this.closeModal }
            reviewNum={this.state.review.reviewNum}
            restaurantName={this.state.review.restaurantName}
            menuName={this.state.review.menuName}
            content={this.state.review.content}
            tagFood={this.state.review.tagFood}
            tagMood={this.state.review.tagMood}
            score={this.state.review.score}
            createdDate={this.state.review.createdDate}
            likedCnt={this.state.review.likedCnt}
            image={this.state.review.filePath}
        ></ReviewPage>
        </div>
    );
  }}

export default withRouter(Review);