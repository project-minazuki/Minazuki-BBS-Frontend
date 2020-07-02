import React, {FC, memo} from "react";

import {HomepageProps} from "../containers/pages/homepage";
import '../styles/homepage.scss';
import Card from '../components/Card';
import CateItem from "../components/CateItem";
import {Announcement, Category, User} from "../configs/types";
import AnnouncementCard1 from "../components/AnnouncementCard1";

const Homepage: FC<HomepageProps> = memo(({}) => {

    return (
        <div id='page-homepage' className='page'>
          <Card style={{width: '600px', height: '1800px'}}>
            <div className='card-container'>
                <div className = 'Test' /* 待删除*/>
                    <AnnouncementCard1 editor={{} as User}    info={{} as Announcement}>

                    </AnnouncementCard1>
                </div>
            </div>

          </Card>
        </div>
    );
});

export default Homepage;
