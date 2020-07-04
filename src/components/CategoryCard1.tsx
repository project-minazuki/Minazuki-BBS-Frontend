import React, {CSSProperties, FC, memo} from "react";
import CateItem from "./CateItem";
import {Category} from "../configs/types";
import {message, Space,Empty} from "antd";

import '../styles/components/CategoryCard1.scss'

interface IProps {
    classname?: string | undefined;
    style?: Partial<CSSProperties>;
    cates: Category[]
}

const CategoryCard1: FC<IProps> = memo(props => {
    const $style = props.style;
    const $cates = props.cates;
    let links = [];

    if($cates.length === 0){
        links.push(<Empty key={0}/>)
    }
    else{
        for(let i = 0; i < $cates.length; i ++){
            links.push(<CateItem info={$cates[i]} key={i}/>)
        }
    }

    const readMore = () => {
        message.info(`即将 查看更多内容`)
    }

    return(
        <div id = 'comp-category-card' style={$style}>
            <div className="top">
                <div className='text-category'>
                    板块分区
                </div>
                <div className="read-more" onClick = {readMore}>
                    查看更多 >
                </div>
            </div>
            <div className="categories">
                <Space direction='vertical' size = {20}>
                    {links}
                </Space>

            </div>
        </div>
    )

})

export default CategoryCard1;
