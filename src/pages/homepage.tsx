import React, {FC, memo} from "react";

import {HomepageProps} from "../containers/pages/homepage";
import '../styles/homepage.scss';
import {Announcement, Category, Theme, User} from "../configs/types";

import atri from '../images/bg-atri-2.png';

import CategoryCard1 from "../components/CategoryCard1";
import DecorateCard1 from "../components/DecorateCard1";
import NewestTheme1 from "../components/NewestTheme1";
import NewestReplyTheme1 from "../components/NewestReplyTheme1";
import { Space ,message} from "antd";
import AnnouncementCard1 from "../components/AnnouncementCard1";
import BgImg from "../components/BgImg";



const Homepage: FC<HomepageProps> = memo(props => {

    const {newTheme, newReply ,categories,announcement} = props;
    let nextAnnouncement : Announcement;
    nextAnnouncement = {} as Announcement;
    let i =0;
    const setNextAnnouncement = (i: number) => {
        if(announcement.length !== 0 ){
            if(i >= announcement.length ) i=0
            nextAnnouncement = announcement[i];
            i++;
        }

        //message.info(i++ +"");
        return i;
    }



    setInterval(() =>{i = setNextAnnouncement(i)},10000)//10秒切一个公告



    return (
        <div id='page-homepage' className='page'>
            <BgImg src={atri} />
            <div className='container'>
                <Space align="start" size = {'large'}>
                    <Space direction="vertical" align="start" size = {'large'}>
                        <DecorateCard1>

                        </DecorateCard1>

                        <AnnouncementCard1 info={nextAnnouncement} editor={{} as User}>

                        </AnnouncementCard1>
                    </Space>
                    <Space direction="vertical" align="start" size = {'large'}>
                        <NewestReplyTheme1 newReplies={newReply}>

                        </NewestReplyTheme1>
                        <NewestTheme1 newThemes={newTheme}>

                        </NewestTheme1>
                    </Space>
                    <Space direction="vertical" align="start" size = {'large'}>
                        <CategoryCard1 cates={categories}>

                        </CategoryCard1>
                    </Space>
                </Space>
            </div>

        </div>
    );
});


export default Homepage;
