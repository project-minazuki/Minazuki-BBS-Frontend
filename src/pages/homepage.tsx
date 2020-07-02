import React, {FC, memo} from "react";

import {HomepageProps} from "../containers/pages/homepage";
import '../styles/homepage.scss';
import Card from '../components/Card';
import CateItem from "../components/CateItem";
import {Category} from "../configs/types";

const Homepage: FC<HomepageProps> = memo(({}) => {

    return (
        <div id='page-homepage' className='page'>
          <Card style={{width: '600px', height: '1800px'}}>
            <div className='card-container'>
            </div>
          </Card>
        </div>
    );
});

export default Homepage;
