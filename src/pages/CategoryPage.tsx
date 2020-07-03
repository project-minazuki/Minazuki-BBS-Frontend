import React, {FC, memo, useContext, useEffect} from "react";

import {CategoryPageProps} from "../containers/pages/CategoryPage";
import '../styles/Categorypage.scss';
import {Announcement, Category, Theme, User} from "../configs/types";

import CateIntro from '../components/CateIntro'
import NewestTheme1 from "../components/NewestTheme1";
import NewestReplyTheme1 from "../components/NewestReplyTheme1";
import AnnouncementCard1 from "../components/AnnouncementCard1";
import CateSearch from "../components/CateSearch";
import {RouteContext} from "../components/PageFrame";
import {useHistory} from "react-router";

import {message} from 'antd';
import * as url from '../configs/url';
import {LoadingIcon} from "../utils/items";
import {defaultAvatar} from "../configs/consts";


const CategoryPage: FC<CategoryPageProps> = memo(({store, loadData, userDB}) => {

    const route = useContext(RouteContext);
    const cid = route.match.params.cateId;
    const history = useHistory();

    const unload = store.loaded != cid;         // TODO: ！== => 6 ≠ 6

    const $db = ($uid: number) => {
        return userDB[$uid] ?? {
            avatar: defaultAvatar,
            nickname: '加载中……',
            isAdmin: false,
            manageCateId: 0,
            createdAt: '加载中……',
            lastSignIn: '加载中……',
            signature: '加载中……',
            username: '加载中……',
            _id: 0,
        }
    }

    const {announce, highQuality, pinned, info} = store;

    useEffect(() => {
        if (cid === undefined) {
            message.info('查看所有版块的页面正在开发中，即将回到首页');
            history.push(url.root);
        } else if (store.loaded !== cid) {
            message.loading('加载数据中');
            loadData(cid);
        } else message.success('加载成功');
    }, [])
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
            {unload ? LoadingIcon : <div className='container'>
                <div className='left'>
                    <CateIntro
                        info_Cate={{} as Category} info_User={{} as User} className={'cate-intro'}/>

                <AnnouncementCard1
                    info={nextAnnouncement} editor={{} as User} className={'cate-intro'}/>
                </div>
                <div className='mid'>
                    <div className='up'>
                        <NewestReplyTheme1 newReplies={highQuality} />
                    </div>
                    <div className='bottom'>
                        <NewestTheme1 newThemes={pinned} />
                    </div>
                </div>
                    <div className='right'>
                        <CateSearch />
                    </div>
                </div>}
        </div>

    )

});

export default CategoryPage;
