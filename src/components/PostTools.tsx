import React, {CSSProperties, FC, HTMLProps, memo} from "react";
import '../styles/components/ThemeItem.scss';

import {Pagination, Radio} from 'antd';
import {useHistory} from "react-router";
import '../styles/components/PostTools.scss'
import returnIcon from "../images/returnIcon.png";
import tipOff from "../images/tip-off.png";

interface IProps {

}


const PostTools: FC<IProps> = memo((props) => {

    const history = useHistory();
    const backToHome = () => history.push('/')


    //TODO:事件监听
    return <div id='comp-post-tools' className='container'>
        <div className='page'>
            <div className='page-word'>页面</div>
            <Pagination simple defaultCurrent={2} total={500} className='Pagination'/>
        </div>
        <div className='post'>
            <div className='post-word'>看帖</div>
            <Radio.Group className='Radio-Group'>{/*onChange={this.onChange} value={this.state.value} antd上的接口*/}
                <Radio value={1}>只看楼主</Radio>
                <Radio value={2}>倒序查看</Radio>
            </Radio.Group>
        </div>
        <div className='operate'>
            <div className='operate-word'>操作</div>
            <div className='tip-off'>
                <div className='tip-off-word'>举报</div>
                <img src={tipOff} alt='いいね！'  className='tip-off-Icon'/>
            </div>
            <div className='return'>
                <div className='return-word'>回复</div>
                <img src={returnIcon} alt='いいね！' className='return-Icon'/>
            </div>
        </div>

    </div>;
})
export default PostTools;
