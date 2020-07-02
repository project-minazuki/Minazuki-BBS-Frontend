import React, {CSSProperties, FC, HTMLProps, memo} from "react";
import '../styles/components/ThemeItem.scss';

import {Avatar, Input, message, Popover,Radio} from 'antd';
import {useHistory} from "react-router";
import DynamicTag from "./DynamicTag";
import '../styles/components/CateSearch.scss'

interface IProps {

}

const SearchBar: FC<{} & HTMLProps<any>> = memo((props) => {

    const trySearch = (value: string) => {
        // TODO: 搜索逻辑
        if (value !== '') message.info(`将要搜索 "${value}"`)
    }

    return <div className={`comp-search-bar ${props.className}`}>
        <Input.Search placeholder='查找板块内内容……' className='input-search' onSearch={trySearch}/>
    </div>
})

const CateSearch: FC<IProps> = memo((props) => {

    const history = useHistory();
    const backToHome = () => history.push('/')

    const radioStyle = {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
    };
    //TODO:事件监听
    return <div id='comp-cate-Search' className='container'>
        <div className='title'>板块内搜索</div>
        <SearchBar className='search-bar'/>
        <div className='related-tag-radio-Group'>相关标签</div>
        <div className='Dynamic-Tag-radio-Group'>
            <DynamicTag/>
        </div>
        <div className='related-tag-radio-Group'>搜索选项</div>
        <div className='Dynamic-Tag-radio-Group'>
        <Radio.Group >
            <Radio style={radioStyle} value={1}>
                只看主题帖
            </Radio>
            <Radio style={radioStyle} value={2}>
                时间倒序
            </Radio>
            <Radio style={radioStyle} value={3}>
                相关性排序
            </Radio>
        </Radio.Group>
        </div>
        <div className='senior-search'>高级搜索……</div>
    </div>;
})
export default CateSearch;
