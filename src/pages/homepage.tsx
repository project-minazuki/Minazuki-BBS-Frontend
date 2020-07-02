import React, {FC, memo} from "react";

import {HomepageProps} from "../containers/pages/homepage";
import '../styles/homepage.scss';
import CateIntro from "../components/CateIntro";
import {Announcement, Category, User} from "../configs/types";


// @ts-ignore
import CategoryCard1 from "../components/CategoryCard1";
import DecorateCard1 from "../components/DecorateCard1";

const Homepage: FC<HomepageProps> = memo(({}) => {

    return (
        <div id='page-homepage' className='page'>
            <CateIntro info_Cate={{} as Category} info_User={{} as User}/>

        </div>
    );
});

export default Homepage;
