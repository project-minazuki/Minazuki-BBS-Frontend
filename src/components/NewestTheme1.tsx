import React, {CSSProperties, FC, memo} from "react";
import {message, Space,Empty} from "antd";
import CateItem from "./CateItem";
import {Category, User, Theme} from "../configs/types";
import {RedoOutlined} from '@ant-design/icons';
import ThemeItem from "./ThemeItem";
import {category} from "../configs/api";
import Card from "./Card";
import '../styles/components/NewestTheme1.scss'

interface IProps {
    classname?: string | undefined;
    style?: Partial<CSSProperties>;
    newThemes: Theme[];
    describe: string;
}

const NewestTheme1: FC<IProps> = memo(props => {
    const $class = props.classname ?? '';
    const $style = props.style;
    const $newThemes = props.newThemes;
    const $describe = props.describe;
    let links = [];

    if($newThemes.length ===0){
        links.push(<Empty></Empty>)
    }
    else {
        for (let i = 0; i < $newThemes.length; i++) {
            links.push(<ThemeItem info_Theme={$newThemes[i]} info_Cate={{} as Category}
                                  info_User={{} as User}></ThemeItem>)
        }
    }

    const refresh = () => {message.info("你试图刷新最新主题")}

    return(
        <div id = 'comp-newest-theme' style ={$style}>
            <div className = {`container ${$class}`}>
                <Card style={{  width: '720px', height: '500px'}}>
                    <div className='card-container'>
                        <div className="top">
                            <div className='text-newest'>
                                {$describe ?? '最新主题'}
                            </div>
                            <RedoOutlined className='refresh' onClick = {refresh}/>
                        </div>
                        <div className="new-themes">
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
export default NewestTheme1;