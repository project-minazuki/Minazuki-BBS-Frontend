import React, {FC, memo} from "react";
import {Post, User} from "../configs/types";
import {Avatar, message} from "antd";
import {defaultAvatar} from "../configs/consts";
import '../styles/components/Reply.scss'
import Card from "./Card";
interface IProps {
    className?: string | undefined;
    post: Post;
    user: User;

}

const Reply: FC<IProps> = memo(props => {
    const $class = props.className;
    const $user = props.user;

    const newReply = (() =>{
        message.info('新回复');
    })
    const expandReply = (() => {
        message.info('展开回复');
    })

    return(
        <div id = "comp-reply">
            <Card style={{width: '834px',height: '152px'}}>
                <div className='container' >
                    <div className='left-and-center'>
                        <div className='left'  >
                            <div className='avatar'>
                                <Avatar src={$user.avatar ?? defaultAvatar} size={82}/>
                            </div>
                            <div className = 'number-of-floor'>
                                <p /*TODO 具体楼层数没改*/>
                                    #1
                                </p>
                            </div>
                        </div>
                        <div className='center' >
                            <div className='username' >
                                {$user.username ?? 'username'}
                            </div>
                            <div className='reply-content'/*TODO 没有回复的内容*/>
                                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
                            </div>
                        </div>
                    </div>
                    <div className='right' >
                        <div className='reply-time' /*TODO*/>
                            2020-6-18 23:59:59
                        </div>
                        <div className='buttons' >
                            <div style = {{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}>
                                <p className='new-reply' onClick={newReply}>
                                    新回复
                                </p>

                                <p className='expand-reply' onClick={expandReply}/*TODO 具体有多少回复数可以展开*/>
                                    展开回复(114)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>



    );
})

export default Reply;