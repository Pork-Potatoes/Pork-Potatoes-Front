import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@material-ui/core';

function ImgSlide(props)
{
    var items = [
        {
            name: "윤지님이 뽑은 이대 밥약 맛집 100선",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "해린님이 뽑은 이대 술집 TOP3",
            description: "Hello World!"
        },
        {
            name: "드림님이 뽑은 이색 맛집 TOP5",
            description: "Hello World!"
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
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
        </Paper>
    )
}

export default ImgSlide;