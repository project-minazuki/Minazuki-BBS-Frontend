import React, {CSSProperties, FC, HTMLProps, memo} from "react";
import '../styles/components/ThemeItem.scss';

import {Pagination, Radio} from 'antd';
import {useHistory} from "react-router";
import '../styles/components/PostTools.scss'

interface IProps {

}


const PostTools: FC<IProps> = memo((props) => {

    const history = useHistory();
    const backToHome = () => history.push('/')


    //TODO:事件监听
    return <div id='comp-post-tools' className='container'>
        <div>
            <div className='page'>页面</div>
            <Pagination simple defaultCurrent={2} total={500}/>
        </div>
        <div>
            <div className='post'>看帖</div>
            <Radio.Group>{/*onChange={this.onChange} value={this.state.value} antd上的接口*/}
                <Radio value={1}>只看楼主</Radio>
                <Radio value={2}>倒序查看</Radio>
            </Radio.Group>
        </div>
        <div>
            <div className='operate'>操作</div>
            <Pagination simple defaultCurrent={2} total={500}/>
        </div>
    </div>;
})
export default PostTools;
