import React, {FC, memo} from "react";

import {HomepageProps} from "../containers/pages/homepage";
import '../styles/homepage.scss';
import Card from '../components/Card';
import CateItem from "../components/CateItem";
import {Announcement, Category, User} from "../configs/types";



// @ts-ignore
import CategoryCard1 from "../components/CategoryCard1";
import DecorateCard1 from "../components/DecorateCard1";

const Homepage: FC<HomepageProps> = memo(({}) => {

    return (
        <div id='page-homepage' className='page'>
          <Card style={{width: '600px', height: '1800px'}}>
            <div className='card-container'>
                <div className = 'Test' /* 待删除*/>
                    <DecorateCard1>

                    </DecorateCard1>
                </div>
            </div>

          </Card>
        </div>
    );
});

export default Homepage;
