import React, {CSSProperties, FC, memo} from "react";
import CateItem from "./CateItem";
import {Category} from "../configs/types";
import {message} from "antd";

import '../styles/components/CategoryCard1.scss'

interface IProps {
    classname?: string | undefined;
    style?: Partial<CSSProperties>
}

const CategoryCard1: FC<IProps> = memo(props => {
    const $style = props.style;

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
                <CateItem info={{} as Category}></CateItem>
                <CateItem info={{} as Category}></CateItem>
                <CateItem info={{} as Category}></CateItem>
                <CateItem info={{} as Category}></CateItem>
            </div>
        </div>
    )

})

export default CategoryCard1;