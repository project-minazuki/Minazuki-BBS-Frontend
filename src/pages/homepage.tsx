import React, {FC, memo} from "react";

import {HomepageProps} from "../containers/pages/homepage";
import '../styles/homepage.scss';
import Card from '../components/Card';
import CateItem from "../components/CateItem";
import {Announcement, Category, User} from "../configs/types";



// @ts-ignore
import CategoryCard1 from "../components/CategoryCard1";
import DecorateCard1 from "../components/DecorateCard1";
import NewestTheme1 from "../components/NewestTheme1";
import NewestReplyTheme1 from "../components/NewestReplyTheme1";
import { Space } from "antd";
import AnnouncementCard1 from "../components/AnnouncementCard1";

const Homepage: FC<HomepageProps> = memo(({}) => {


    return (
        <div id='page-homepage' className='page'>
            <Space align="start" size = {'large'}>
                <Space direction="vertical" align="start" size = {'large'}>
                    <DecorateCard1>

                    </DecorateCard1>

                    <AnnouncementCard1 info={{} as Announcement} editor={{} as User}>

                    </AnnouncementCard1>
                </Space>
                <Space direction="vertical" align="start" size = {'large'}>
                    <NewestReplyTheme1>

                    </NewestReplyTheme1>
                    <NewestTheme1>

                    </NewestTheme1>
                </Space>
                <Space direction="vertical" align="start" size = {'large'}>
                    <CategoryCard1>

                    </CategoryCard1>
                </Space>
            </Space>

        </div>
    );
});


export default Homepage;
