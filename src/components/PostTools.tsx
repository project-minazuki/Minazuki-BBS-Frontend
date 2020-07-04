import React, {CSSProperties, FC, HTMLProps, memo, useState} from "react";

import {message, Pagination, Radio, Drawer, Button, Form, Input} from 'antd';
import {useHistory} from "react-router";
import '../styles/components/PostTools.scss'

import {
    WarningOutlined, CommentOutlined
} from '@ant-design/icons';
import ThemeItem from "./ThemeItem";
import {Category, Theme, User} from "../configs/types";

interface IProps {
}


const PostTools: FC<IProps> = memo((props) => {

    const [open, setOpen] = useState({on: false});//todo：无作用
    const history = useHistory();
    const [form] = Form.useForm();
    const formValues = {

    }

    const handleSubmit = () => {
        // todo
    }

    const backToHome = () => history.push('/')
    const handleClickTipOff = () => {
        message.info('你正在尝试举报')
    }
    const handleReply = () => {
        setOpen({on: true});
    }
    const onClose = () => {
        const old = open;
        setOpen({on: false});
        console.log('onClose', old, open)
    }

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
            <div className='tip-off' onClick={handleClickTipOff}>
                <WarningOutlined/>
                <div className='tip-off-word'>举报</div>

            </div>
            <div className='return' onClick={handleReply}>
                <CommentOutlined/>
                <div className='return-word'>回复</div>
                <Drawer width={480}
                    className='Drawer'
                    placement="right"
                    closable={true}
                    onClose={onClose}
                    forceRender
                    visible={open.on}//todo:这个visible不起作用
                >
                    {/*<div className='new-reply-post-word'>新建回复贴</div>*/}
                    {/*<div className='new-will-reply-post-word'>您要回复的主题帖</div>*/}
                    {/*<div className='new-reply-post'>*/}
                    {/*    <ThemeItem*/}
                    {/*        info_Theme={{} as Theme}info_Cate={{}as Category} info_User={{}as User}*/}
                    {/*        className='new-will-reply-post'>*/}
                    {/*    </ThemeItem>*/}
                    {/*</div>*/}
                    {/*<div className='new-will-reply-post-word'>您要回复的内容</div>*/}
                    <div className='drawer-container'>
                        <div className='drawer-title'>
                            新建回复贴
                        </div>
                        <div className='desc-content'>
                            请在下面的文本框中输入你要进行回复的内容
                        </div>
                        <Form form={form} initialValues={formValues} onFinish={handleSubmit}
                              className='new-form'>
                            <Form.Item name='content'>
                                <Input.TextArea />
                            </Form.Item>
                            <Form.Item className='buttons'>
                                <Button shape='round' onClick={() => setOpen({on: false})}
                                        className='button' size='large'>
                                    取消
                                </Button>
                                <Button shape='round' htmlType='submit' type='primary'
                                        className='button' size='large'>
                                    提交
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </Drawer>
            </div>
        </div>
    </div>;
})
export default PostTools;
