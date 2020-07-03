import React, {FC, memo} from "react";

import {CategoryPageProps} from "../containers/pages/CategoryPage";
import '../styles/Categorypage.scss';
import {Announcement, Category, Post, Theme, User} from "../configs/types";

// @ts-ignore
import CateIntro from '../components/CateIntro'
import NewestTheme1 from "../components/NewestTheme1";
import NewestReplyTheme1 from "../components/NewestReplyTheme1";
import AnnouncementCard1 from "../components/AnnouncementCard1";
import CateSearch from "../components/CateSearch";
import Reply from "../components/Reply";
import Card from "../components/Card";
import ThemeContentCard from "../components/ThemeContentCard";
import {user} from "../configs/api";

const ThemePage: FC<CategoryPageProps> = memo(({}) => {


    return (
        <div id='test' className='page'>

            <ThemeContentCard editor={{} as User} theme={{} as Theme}>
            </ThemeContentCard>
            <Reply post={{} as Post} user={{}  as User}>
            </Reply>
        </div>

    )

});

export default ThemePage;
