import React, {CSSProperties, FC, memo} from "react";
import {Avatar, message, Space} from "antd";
import {defaultAvatar} from "../configs/consts";
import '../styles/components/DecorateCard1'
import Card from "./Card";

interface IProps {
    className?: string|undefined;

}

const DecorateCard1: FC<IProps> = memo((props) => {
    const $class = props.className ?? '';

    return(
        <div id='comp-decorate-card'>
            <div className={`container ${$class}`}>
                <Card style={ {width: "411px",height: '413px'}}>
                    <Space direction="vertical" align='center' style={{width:'100%',height:"100%"}}>
                        <Space className='top'>
                            <div className='icon' style={{padding : '30px'}}>
                                <Avatar src={defaultAvatar} size={132}
                                        className='avatar'/>
                            </div>
                        </Space>

                        <Space className='center'>
                            <div className='para1' style={{padding: "16px",fontSize:"20px"}}>


                            </div>
                        </Space>
                        <Space className='bottom'>
                            <div className='para2' style={{padding: "16px",fontSize:"20px"}}>
                                「恋 × シンアイ彼女」
                            </div>
                        </Space>

                    </Space>

                </Card>

            </div>
        </div>
    )
})

export default DecorateCard1;
