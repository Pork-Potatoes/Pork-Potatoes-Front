import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@material-ui/core';

function ImgSlide(props)
{
    var items = [
        {
            name: "윤지님이 뽑은 이대 밥약 맛집 100선",
            Image: "https://cdn.pixabay.com/photo/2018/09/25/19/57/tomatoes-3702962_960_720.jpg"
        },
        {
            name: "해린님이 뽑은 이대 술집 TOP3",
            Image: "https://cdn.pixabay.com/photo/2014/09/15/16/53/tomatoes-447170_960_720.jpg"
        },
        {
            name: "드림님이 뽑은 이색 맛집 TOP5",
            Image: "https://cdn.pixabay.com/photo/2018/05/27/16/10/cherries-3433775_960_720.jpg"
        }
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper>
            <img src={props.item.Image}/>
        </Paper>
    )
}

export default ImgSlide;