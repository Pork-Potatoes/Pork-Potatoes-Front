import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { FaStar, FaHeart, FaRegHeart, FaRegBookmark,FaBookmark } from "react-icons/fa";
import { render } from "@testing-library/react";
import { withRouter } from "react-router-dom";
import axios from 'axios';
import https from "https";

const Container = styled.div`
    border-top: 1px solid lightgray;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 25vw;
    height: 150px;
    padding-left: 20px;
    margin: 10px;
    border: solid 1px #D1D1D1;
    border-radius: 15px;
`
const Wrapper = styled.a`
    width: 25vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-decoration: none;
`

const Tag = styled.button`
    background-color: #d57358;
    font-size: xx-small;
    color: white;
    padding-inline: 10px;
    border: none;
    height: 20px;
    border-radius: 50px;
    margin-right: 5px;
    margin-bottom: 3px;
    cursor: pointer;
`

const agent = new https.Agent({
    rejectUnauthorized: false
  });

class NewRestaurant extends React.Component{
    state={
        restaurant:'',
        liked:'like'
    };

    rating = (avgScore) => {
        const result = [];
        for (let i = 5; i > 0; i--){
            avgScore--;
            if (avgScore>=0){
                result.push(<FaStar size="12" color="#d57358"></FaStar>);
            }
            else {
                result.push(<FaStar size="12" color="lightgray"></FaStar>);
            }
        }
        return result;
    }

    getRestaurant = async (restaurantNum) => {
        try{
            const url="https://matzipmajor.com/api/restaurants/"+restaurantNum.toString();
            const restaurantdata = await axios.get(url, {httpsAgent: agent});
            this.setState({ restaurant:restaurantdata.data });
        }
        catch(e){
          console.log("getRestaurant error");
        }
      }

    render(){
        const { restaurantNum, restaurantName, avgScore }=this.props;
        this.getRestaurant(restaurantNum);
    return (
        <Container>
            <Wrapper onClick={()=>this.props.history.push({
                pathname:'/detailpage',
                state:{
                    restaurantNum:this.state.restaurant.restaurantNum,
                    restaurantName:this.state.restaurant.restaurantName,
                    address:this.state.restaurant.address,
                    phoneNum:this.state.restaurant.phoneNum,
                    businessHour:this.state.restaurant.businessHour,
                    snsAccount:this.state.restaurant.snsAccount,
                    avgScore:this.state.restaurant.avgScore,
                }
                    
                })
            }>
                <h3 style={{color: "black", fontWeight:"bold", margin:"0px"}}>{restaurantName}</h3> <br/><br />
                <div>
                    {
                        this.rating(avgScore)
                    } 평점 {avgScore}
                </div>
            </Wrapper>
        </Container>
    );
  }}

export default withRouter(NewRestaurant);