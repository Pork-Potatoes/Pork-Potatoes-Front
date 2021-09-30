import React from 'react';
import _ from 'lodash';
import styled from "styled-components";

const Button = styled.button`
  background-color: lightgray;
  color: white;
  height: 30px;
  width: 30px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  margin-top: 50px;
`

const Pagination = ({ itemsCount, currentPage, onPageChange }) => {
  const pageCount = Math.ceil(itemsCount / 6);
  if (pageCount === 1) return null; 
  
  const pages = _.range(1, pageCount + 1);

  return (
    <div>
        {pages.map(page => (
            page === currentPage
            ? <Button onClick={() => onPageChange(page)}>{page}</Button>
            : <Button onClick={() => onPageChange(page)} style={{color: "lightgray", backgroundColor:"white", border:"1px solid lightgray"}}>{page}</Button>
        ))}
    </div>
  );
}

export default Pagination;