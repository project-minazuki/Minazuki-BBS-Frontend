import React, {FC, memo} from "react";

import {PageFrameProps} from "../containers/PageFrame";
import '../styles/components/PageFrame.scss';
import TopBar from "./TopBar";

const PageFrame: FC<PageFrameProps> = memo((props: PageFrameProps) => {

    return (
        <div id='comp-page-frame'>
            <TopBar />
        </div>
    );
});

export default PageFrame;
