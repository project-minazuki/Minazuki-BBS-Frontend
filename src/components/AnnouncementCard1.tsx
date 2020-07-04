import React, {CSSProperties, FC, memo} from "react";
import {Announcement, User} from "../configs/types";
import {stringToDate} from "../utils/DateTimes";
import moment from "moment";
import "../styles/components/AnnouncementCard1.scss"
import {message, Empty} from "antd";
import {announcement} from "../configs/url";
import Card from "./Card";

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

    let link;
    if($Announcement=== ({} as Announcement) || $Announcement === undefined){
        link = <Empty></Empty>;
    }
    else{
        link = $Announcement.content ?? " ";
    }

    return(
        <div id="comp-announcement-card-1" style={$style}>
            <Card>
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
                        没找到标题是哪一个
                    </div>
                    <div className="announcement-basic-info">
                        <div className="editor">
                            {$editor.username ?? ' '}
                        </div>

                        <div className = "edit-time" /*TODO 距离上一次编辑的时间 (未测试）*/>
                            {updateTimeFromNow ?? " "}
                        </div>
                    </div>
                    <div className = "announcement-content">
                        {link}
                    </div>
                </div>
            </Card>
        </div>
    )
})

export default AnnouncementCard1;