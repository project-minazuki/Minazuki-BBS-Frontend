import React, {FC, memo} from "react";

import {HomepageProps} from "../containers/pages/homepage";
import '../styles/homepage.scss';
import CateIntro from "../components/CateIntro";
import {Announcement, Category, User} from "../configs/types";

import CateSearch from "../components/CateSearch";
import PostTools from "../components/PostTools";

const Homepage: FC<HomepageProps> = memo(({}) => {

    return (
        <div id='page-homepage' className='page'>
            <PostTools></PostTools>

        </div>
    );
});

export default Homepage;
