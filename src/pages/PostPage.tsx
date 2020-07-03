import React, {FC, memo} from "react";

import {PostPageProps} from "../containers/pages/PostPage";
import '../styles/Categorypage.scss';
import {Announcement, Category, User} from "../configs/types";
import PostTools from "../components/PostTools";
import CateCard from "../components/CateCard";
import NewReply from "../components/NewReply";


const PostPage: FC<PostPageProps> = memo(({}) => {


    return (
        <div id='page-Post' className='page'>
            <NewReply/>
            {/*<PostTools/>
            <CateCard info={{}as Category}/>*/}
        </div>

    )

});

export default PostPage;
