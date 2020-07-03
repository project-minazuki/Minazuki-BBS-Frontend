import React, {FC, memo} from "react";

import {PostPageProps} from "../containers/pages/PostPage";
import '../styles/Categorypage.scss';
import {Announcement, Category, User} from "../configs/types";
import PostTools from "../components/PostTools";
import CateCard from "../components/CateCard";
import NewReply from "../components/NewReply";
import atri from "../images/bg-atri.png";
import BgImg from "../components/BgImg";


const PostPage: FC<PostPageProps> = memo(({}) => {


    return (
        <div id='page-Post' className='page'>
            <BgImg src={atri} />
            <NewReply/>
            <PostTools/>
            <CateCard info={{}as Category}/>
        </div>

    )

});

export default PostPage;