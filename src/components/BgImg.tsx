import React, {FC, HTMLProps, memo} from "react";

import '../styles/components/BgImg.scss';

interface IProps {
    src: string;
    zIndex?: number;
}

const BgImg: FC<IProps & HTMLProps<any>> = memo((props) => {
    return (
        <div id='comp-bg-img' className={`${props.className}`}
             style={{
             backgroundImage: `url(${props.src})`,
             zIndex: props.zIndex ?? 0,}} />
    );
});

export default BgImg;
