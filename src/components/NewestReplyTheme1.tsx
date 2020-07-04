import React, {CSSProperties, FC, memo} from "react";
import {message, Space, Empty} from "antd";
import CateItem from "./CateItem";
import {Category, Theme, User} from "../configs/types";
import Card from "./Card";
import ThemeItem from "./ThemeItem";
import {RedoOutlined} from '@ant-design/icons';
import '../styles/components/NewestReplyTheme1.scss'
import {category} from "../configs/api";

interface IProps {
    classname?: string | undefined;
    style?: Partial<CSSProperties>
    newReplies: Theme[]
    describe: String;
}

const NewestReplyTheme1: FC<IProps> = memo(props => {
    const $class = props.classname ?? '';
    const $style = props.style;
    const newReplies = props.newReplies;
    const $describe = props.describe;
    let links = [];

    if(newReplies.length === 0){
        links.push(<Empty />)
    }
    else{
        for(let i =0; i<newReplies.length;i++){
            //TODO info_Cate 和 info_User 将来需要使用正确的值
            links.push(<ThemeItem info_Theme={newReplies[i]} info_Cate={{} as Category} info_User={{} as User} />)
        }


    }

    const refresh = () => {message.info("你试图刷新最新回复")}


    return(
        <div id = 'comp-newest-reply-theme' style ={$style}>
                <div className = {`container ${$class}`}>
                    <Card style={{  width: '720px', height: '500px'}}>
                        <div className = 'card-container'>
                            <div className="top">
                                <div className='text-newest-reply'>
                                    {$describe ?? '最新回复'}
                                </div>
                                <RedoOutlined className='refresh' onClick = {refresh}/>
                            </div>
                            <div className="new-themes-reply">
                                <Space direction="vertical" style = {{display: "flex",alignItems: "center",justifyContent: "center"}}>
                                    {links}
                                </Space>
                            </div>
                        </div>
                    </Card>
                </div>
        </div>
    )
})
export default NewestReplyTheme1;
