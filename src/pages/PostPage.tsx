import React, {FC, memo} from "react";

import {PostPageProps} from "../containers/pages/PostPage";
import '../styles/Categorypage.scss';
import {Announcement, Category, Post, User} from "../configs/types";
import PostTools from "../components/PostTools";
import CateCard from "../components/CateCard";
import NewReply from "../components/NewReply";
import atri from "../images/bg-atri.png";
import BgImg from "../components/BgImg";
import Reply from "../components/Reply";


const PostPage: FC<PostPageProps> = memo(({}) => {


    return (
        <div id='page-Post' className='container'>
            <BgImg src={atri}/>
            <div className='left'>
                <Reply post={{} as Post} user={{} as User}/>
            </div>
            <PostTools/>
            <CateCard info={{} as Category}/>
        </div>

    )

});

export default PostPage;