import React from "react";
import styled from "styled-components";


const Line_style = styled.div`
  border-top: #EFEFEF solid 1px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 15px;
  margin-top: 10px;
  margin-bottom: 10px;
`
const Select = styled.select`
  border: 1px solid silver;
  outline:none;
  width: 150px;
  height: 30px;
`
  
  const Sort = () => (
    <Line_style>
        <Select>
            <option selected value="최신순">최신순으로</option>
            <option value="별점순">별점순으로</option>
            <option value="좋아요순">인기순으로</option>
        </Select>
    </Line_style>
  )

export default Sort;