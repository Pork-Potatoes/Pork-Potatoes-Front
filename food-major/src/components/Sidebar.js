import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Side = styled.div`
  display: inline-block;
  border-right: 1px solid #e0e0e0;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 300px;
`

const Menu = styled.div`
  margin-top: 60px;
  margin-left: 30px;
  width: 200px;
  display: flex;
  flex-direction: column;
`

function Sidebar() {
  const menus = [
    { name: "내가 쓴 리뷰", path: "/mypage/myreview" },
    { name: "내가 만든 맛집 리스트", path: "/mypage/mylist" },
    { name: "좋아요 한 맛집 리스트", path: "/mypage/likedlist" },
    { name: "설정", path: "/mypage/setting"}
  ];
  return (
    <Side>
      <Menu>
        {menus.map((menu, index) => {
          return (
            <NavLink
              exact
              style={{color: "gray", textDecoration: "none"}}
              to={menu.path}
              key={index}
              activeStyle={{color: "black", fontWeight: "bold"}}
            >
              <p>{menu.name}</p>
            </NavLink>
          );
        })}
      </Menu>
    </Side>
  );
}

export default Sidebar;