import React, {FC, memo, useEffect} from "react";

import {HomepageProps} from "../containers/pages/homepage";
import '../styles/homepage.scss';
import {LoadingIcon} from '../utils/items';
import {Announcement, Category, Theme, User} from "../configs/types";

import atri from '../images/bg-atri-2.png';

import CategoryCard1 from "../components/CategoryCard1";
import DecorateCard1 from "../components/DecorateCard1";
import NewestTheme1 from "../components/NewestTheme1";
import NewestReplyTheme1 from "../components/NewestReplyTheme1";
import {Space, message} from "antd";
import BgImg from "../components/BgImg";



const Homepage: FC<HomepageProps> = memo(props => {

    const {newTheme, newReply, categories, text} = props

    useEffect(() => {
        if (!props.load) props.loadInfo();
    }, [])

    return (
        <div id='page-homepage' className='page'>
            <BgImg src={atri} />{!props.load ? LoadingIcon :
            <div className='container'>
                <Space align="start" size = {'large'}>
                    <Space direction="vertical" align="start" size = {'large'}>
                        <DecorateCard1  text={text}/>
                    </Space>
                    <Space direction="vertical" align="start" size = {'large'}>
                        <NewestReplyTheme1 newReplies={newReply}>

                        </NewestReplyTheme1>
                        <NewestTheme1 newThemes={newTheme}>

                        </NewestTheme1>
                    </Space>
                    <Space direction="vertical" align="start" size = {'large'}>
                        <CategoryCard1 cates={categories} />
                    </Space>
                </Space>
            </div>}
        </div>
    );
});


export default Homepage;
