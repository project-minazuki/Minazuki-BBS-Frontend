import React, {FC, memo} from "react";

import {PageFrameProps} from "../containers/PageFrame";
import '../styles/components/PageFrame.scss';
import TopBar from "./TopBar";
import BgImg from "./BgImg";

import atri_2 from '../images/bg-atri-2.png';

const PageFrame: FC<PageFrameProps> = memo((props: PageFrameProps) => {

    return (
        <div id='comp-page-frame'>
            <BgImg src={atri_2} />
            <TopBar />
        </div>
    );
});

export default PageFrame;
