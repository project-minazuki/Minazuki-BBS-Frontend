import React, {FC, memo} from "react";

import {CategoryPageProps} from "../containers/pages/CategoryPage";
import '../styles/Categorypage.scss';
import {Announcement, Category, Theme, User} from "../configs/types";

import CateIntro from '../components/CateIntro'
import NewestTheme1 from "../components/NewestTheme1";
import NewestReplyTheme1 from "../components/NewestReplyTheme1";
import AnnouncementCard1 from "../components/AnnouncementCard1";
import CateSearch from "../components/CateSearch";
import {theme} from "../configs/api";


const CategoryPage: FC<CategoryPageProps> = memo(props => {
    const {tags,announce,info,highQuality,pinned} = props;

    let nextAnnouncement : Announcement;
    nextAnnouncement = {} as Announcement;
    let i =0;
    const setNextAnnouncement = (i: number) => {
        if(announce.length !== 0 ){
            if(i >= announce.length ) i=0
            nextAnnouncement = announce[i];
            i++;
        }

        //message.info(i++ +"");
        return i;
    }
    setInterval(() =>{i = setNextAnnouncement(i)},10000)//10秒切一个公告



    return (
        <div id='page-Category' className='page'>
            <div className='left'>
                <CateIntro
                    info_Cate={info} info_User={{} as User} className={'cate-intro'}/>

                <AnnouncementCard1
                    info={nextAnnouncement} editor={{} as User} className={'cate-intro'}/>
            </div>
            <div className='mid'>
                <div className='up'>
                    <NewestReplyTheme1 newReplies={highQuality}>

                    </NewestReplyTheme1>
                </div>
                <div className='bottom'>
                    <NewestTheme1 newThemes={pinned}>

                    </NewestTheme1>
                </div>
            </div>
            <div className='right'>
                <CateSearch></CateSearch>
            </div>

        </div>

    )

});

export default CategoryPage;
