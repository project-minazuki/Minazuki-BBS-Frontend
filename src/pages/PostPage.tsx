import React, {FC, memo, useContext, useEffect} from "react";

import {PostPageProps} from "../containers/pages/PostPage";
import '../styles/PostPage.scss';
import {Announcement, Category, Post, User, Theme} from "../configs/types";
import PostTools from "../components/PostTools";
import CateCard from "../components/CateCard";
import atri from "../images/bg-atri.png";
import BgImg from "../components/BgImg";
import Reply from "../components/Reply";
import ThemeContentCard from "../components/ThemeContentCard";
import {RouteContext} from "../components/PageFrame";


const PostPage: FC<PostPageProps> = memo(({}) => {

    const route = useContext(RouteContext);
    const id = route.match.params.themeId;

    useEffect(() => {

    }, [])

    return (
        <div id='page-Post' className='page container'>
            <BgImg src={atri}/>
            <div className='left'>
                <ThemeContentCard editor={{} as User} theme={{} as Theme}/>
                <Reply post={{} as Post} user={{} as User}/>
            </div>
            <div className='right'>
                <PostTools/>
                <CateCard info={{} as Category}/>
            </div>
        </div>

    )

});

export default PostPage;
