import React, {FC, memo} from "react";

import {CategoryPageProps} from "../containers/pages/CategoryPage";
import '../styles/Categorypage.scss';
import {Announcement, Category, User} from "../configs/types";

// @ts-ignore
import CateIntro from '../components/CateIntro'
import NewestTheme1 from "../components/NewestTheme1";
import NewestReplyTheme1 from "../components/NewestReplyTheme1";
import AnnouncementCard1 from "../components/AnnouncementCard1";
import CateSearch from "../components/CateSearch";

const CategoryPage: FC<CategoryPageProps> = memo(({}) => {


    return (
        <div id='page-Category' className='page'>
            <div className='left'>
                <CateIntro
                    info_Cate={{} as Category} info_User={{} as User} className={'cate-intro'}/>

                <AnnouncementCard1
                    info={{} as Announcement} editor={{} as User} className={'cate-intro'}/>
            </div>
            <div className='mid'>
                <div className='up'>
                    <NewestReplyTheme1>

                    </NewestReplyTheme1>
                </div>
                <div className='buttom'>
                    <NewestTheme1>

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
