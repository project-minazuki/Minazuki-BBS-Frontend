import React, {CSSProperties, FC, memo} from "react";
import {Announcement, User} from "../configs/types";
import {stringToDate} from "../utils/DateTimes";
import moment from "moment";
import "../styles/components/AnnouncementCard1.scss"
import {message} from "antd";

interface IProps {
    className?: string | undefined;
    msg?: number | undefined;
    info: Announcement;
    editor: User;
    style?: Partial<CSSProperties>;
}

const AnnouncementCard1: FC<IProps> = memo(props => {
    const $class = props.className ?? " ";
    const $Announcement = props.info;
    const $style = props.style ?? {};
    const $editor = props.editor;

    const readMore = () => {
        message.info(`即将 查看更多内容`)
    }

    const updateTimeFromNow = moment($Announcement.updateTime).fromNow()
    return(
        <div id="comp-announcement-card-1" style={$style}>
            <div className={`container ${$class}`}>
                <div className = "announcement">
                    <div className='text-announcement'>

                        论坛公告
                    </div>
                    <div className="read-more" onClick = {readMore}>
                        查看更多 >
                    </div>
                </div>

                <div className="announcement-title" /*TODO 公告标题没找到是哪一个*/>
                    Clover Day's Plus 剧情简介
                </div>
                <div className="announcement-basic-info">
                    <div className="editor">
                        {$editor.username ?? '田所浩二'}
                    </div>

                    <div className = "edit-time" /*TODO 距离上一次编辑的时间 (未测试）*/>
                        {updateTimeFromNow ?? "114514年前"}
                    </div>
                </div>
                <div className = "announcement-content">
                    {$Announcement.content ?? "一些内容一些内容一些内容一些内容一些内容一些内容\n" +
                    "一些内容一些内容一些内容一些内容一些内容一些内容一些内容\n" +
                    "一些内容一些内容一些内容一些内容一些内容一些内容\n"}
                </div>
            </div>
        </div>
    )
})

export default AnnouncementCard1;