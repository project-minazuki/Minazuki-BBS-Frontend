import React, {FC, memo} from "react";
import {Post, Theme, User} from "../configs/types";
import {Avatar, message} from "antd";
import {defaultAvatar} from "../configs/consts";
import Card from "./Card";
import moment from "moment";
import "../styles/components/ThemeContentCard.scss"

interface IProps {
    className?: string | undefined;
    editor: User;
    theme : Theme;
}

const ThemeContentCard : FC<IProps> = memo(props => {
    const $editor = props.editor;
    const $theme = props.theme;

    const updateTimeFromNow = moment($theme.updateTime).fromNow()

    return(
        <div id = "comp-theme-content-card">
            <Card style={{width : '834px',height: '769px'}}>
                <div className='container' >
                    <div className='top-and-center'>
                        <div className='top'>
                            <div className='title'>
                                {$theme.title ?? "亲民船最亲民"}
                            </div>
                            <div className='theme-info'>
                                <Avatar className='avatar' src={$editor.avatar ?? defaultAvatar} />
                                <div className='editor-name-and-edit-time'>
                                    {($editor.username ?? 'nanashi')
                                    + ' - '
                                    + updateTimeFromNow
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='center'>
                            {"在不远的未来，海平面原因不明地急速上升,导致了地表多数都沉入海中。\n小时候因为事故而失去一条腿的少年・斑鸠夏生，\n厌倦了都市的生活，移居到了海边的乡村小镇。\n\n曾经身为海洋地质学家的祖母留给他的、\n就只有船、潜水艇还有债务。\n\n夏生为了取回“失去的未来”，与迷之讨债人凯瑟琳一起，\n潜海前往据说保存着祖母遗产的海底仓库。\n\n在那里，\n他遇到了一位沉睡在如同棺材一般装置中不可思议的少女――亚托莉。\n\n她是一位构造精密到与人类别无二致，而又丰富感情的机器人。\n从海底被打捞起来的亚托莉如是说到。\n\n「我想完成主人留给我的最后的命令。 　\n在此之前，我会成为夏生先生的腿！」\n\n在一个逐渐沉入海中的平和小镇，\n少年和机器人少女的难忘夏日就这么开始了——"}
                        </div>
                    </div>

                    <div className= 'bottom'>
                        <div className='tags'>

                        </div>
                        <div className='theme-info-2'>
                            <div className = 'reply-and-read-number'>
                                {'回复数 '+ ($theme.replies ?? '0')
                                    + '  浏览数' + ($theme.visits ?? '0')
                                }
                            </div>
                            <div className='update-time'>
                                {
                                    '最后更新于 ' + ($theme.updateTime ?? '2020-06-18 23:00:00')

                                }
                            </div>

                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
})

export default ThemeContentCard;