import React, {FC, memo} from "react";
import {Avatar, message, Space} from "antd";
import '../styles/components/DecorateCard1.scss'
import Card from "./Card";

import favicon from '../images/favicon.svg';

interface IProps {
    className?: string|undefined;
    text: any;
}

const DecorateCard1: FC<IProps> = memo((props) => {
    const $class = props.className ?? '';
    const text = props.text;

    return(
        <div id='comp-decorate-card'>
            <div className={`container ${$class}`}>
                <Card className='card-container'>
                    <Space direction="vertical" align='center' style={{width:'100%',height:"100%"}}>
                        <Space className='top'>
                            <div className='icon'>
                                <Avatar src={favicon} size={132}
                                        className='avatar'/>
                            </div>
                        </Space>
                        <Space className='center'>
                            <div className='para1'>
                                {text.content}
                            </div>
                        </Space>
                        <Space className='bottom'>
                            <div className='para2'>
                                {text.footer}
                            </div>
                        </Space>
                    </Space>

                </Card>

            </div>
        </div>
    )
})

export default DecorateCard1;
