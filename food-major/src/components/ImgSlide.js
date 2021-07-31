import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@material-ui/core';

function ImgSlide(props)
{
    var items = [
        {
            name: "윤지님이 뽑은 이대 밥약 맛집 100선",
            Image: "https://cdn.pixabay.com/photo/2017/11/16/18/51/kagyana-2955466_960_720.jpg"
        },
        {
            name: "해린님이 뽑은 이대 술집 TOP3",
            Image: "https://cdn.pixabay.com/photo/2019/07/30/14/12/woman-4373078_960_720.jpg"
        },
        {
            name: "드림님이 뽑은 이색 맛집 TOP5",
            Image: "https://cdn.pixabay.com/photo/2019/11/23/15/26/salmon-4647406_960_720.jpg"
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
            <img src={props.item.Image} />
        </Paper>
    )
}

export default ImgSlide;