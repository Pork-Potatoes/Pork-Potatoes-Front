import React from "react";
import styled from "styled-components";

import logo from "../assets/logo.png";
import search from "../assets/search.png";

import MyButton from "./MyButton";

const Wrapper = styled.div`
    position: fixed;
    background-color: white;
    border-bottom: 1px solid #e0e0e0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 70px;
    z-index: 100;
`
const Input = styled.div`
    display:flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 4px;
    box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.08), 0px 4px 16px rgba(51, 51, 51, 0.08);
    width:500px;
    height:50px;
    border: none;
`
const InputConsol = styled.input`
    margin-left: 10px;
    border: none;
    outline: none;
    width: 400px;
`  
const Button = styled.button`
    background-color: white;
    border: none;
    width: 40px;
    height: 40px
`


function Header() {
    return (
        <Wrapper>
            <img src={logo} alt="logo" height="40px" style={{marginLeft: "30px"}}/>
            <Input>
                <InputConsol placeholder="식당 혹은 메뉴"/>
                <Button><img src={search} alt="search" height="15px"/></Button>
            </Input>
            <MyButton />
        </Wrapper>
    );
}

export default Header;