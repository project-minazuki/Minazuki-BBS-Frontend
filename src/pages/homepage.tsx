import React, {FC, memo} from "react";

import {HomepageProps} from "../containers/pages/homepage";
import '../styles/homepage.scss';
import Card from '../components/Card';
import atri_2 from "../images/bg-atri-2.png";
import BgImg from "../components/BgImg";

const Homepage: FC<HomepageProps> = memo(({}) => {

    return (
        <div id='page-homepage' className='page'>
          <BgImg src={atri_2} />
          <Card style={{width: '600px', height: '1800px'}}>
            <div className='card-container'>
            </div>
          </Card>
        </div>
    );
});

export default Homepage;
