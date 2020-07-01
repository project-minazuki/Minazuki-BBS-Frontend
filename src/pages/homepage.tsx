import React, {FC, memo} from "react";

import {HomepageProps} from "../containers/pages/homepage";
import '../styles/homepage.scss';
import Card from '../components/Card';

const Homepage: FC<HomepageProps> = memo(({}) => {

    return (
        <div id='page-homepage' className='page'>
          <Card style={{width: '600px', height: '1800px'}}>

          </Card>
        </div>
    );
});

export default Homepage;
