import React, {CSSProperties, FC, memo} from "react";
import {message, Space} from "antd";
import CateItem from "./CateItem";
import {Category, User, Theme} from "../configs/types";
import {RedoOutlined} from '@ant-design/icons';
import ThemeItem from "./ThemeItem";
import {category} from "../configs/api";
import Card from "./Card";
import '../styles/components/NewestTheme1.scss'

interface IProps {
    classname?: string | undefined;
    style?: Partial<CSSProperties>
}

const NewestTheme1: FC<IProps> = memo(props => {
    const $class = props.classname ?? '';
    const $style = props.style;

    const refresh = () => {message.info("你试图刷新最新主题")}

    return(
        <div id = 'comp-newest-theme' style ={$style}>
            <div className = {`container ${$class}`}>
                <Card style={{  width: '720px', height: '500px'}}>
                    <div>
                        <div className="top">
                            <div className='text-newest'>
                                最新主题
                            </div>
                            <RedoOutlined className='refresh' onClick = {refresh}/>
                        </div>
                        <div className="new-themes">
                            <Space direction="vertical">
                                <ThemeItem info_Theme={{} as Theme} info_Cate={{} as Category} info_User={{} as User}></ThemeItem>
                                <ThemeItem info_Theme={{} as Theme} info_Cate={{} as Category} info_User={{} as User}></ThemeItem>
                                <ThemeItem info_Theme={{} as Theme} info_Cate={{} as Category} info_User={{} as User}></ThemeItem>
                                <ThemeItem info_Theme={{} as Theme} info_Cate={{} as Category} info_User={{} as User}></ThemeItem>
                                <ThemeItem info_Theme={{} as Theme} info_Cate={{} as Category} info_User={{} as User}></ThemeItem>
                            </Space>
                        </div>
                    </div>
                </Card>



            </div>
        </div>
    )
})
export default NewestTheme1;