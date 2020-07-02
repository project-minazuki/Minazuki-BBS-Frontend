import React, {FC, memo} from "react";

import {HomepageProps} from "../containers/pages/homepage";
import '../styles/homepage.scss';
import Card from '../components/Card';
import atri_2 from "../images/bg-atri-2.png";
import BgImg from "../components/BgImg";
import CateItem from "../components/CateItem";
import {Category} from "../configs/types";

const Homepage: FC<HomepageProps> = memo(({}) => {

    return (
        <div id='page-homepage' className='page'>
          <BgImg src={atri_2} />
          <Card style={{width: '600px', height: '1800px'}}>
            <div className='card-container'>
                <CateItem info={{} as Category} />
            </div>
          </Card>
          <CateItem info={{} as Category} />
        </div>
    );
});

export default Homepage;
