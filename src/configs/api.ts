import {ApiServer, MockServer} from './consts';
import axios from 'axios';

const header = (!!0 ? ApiServer : MockServer);
const userHeader = `${header}/user`;
const cateHeader = `${header}/category`;
const inboxHeader = `${header}/inbox`;
const postHeader = `${header}/post`;
const favoriteHeader = `${header}/favorite`;
const historyHeader = `${header}/historyViewed`;
const themeHeader = `${header}/theme`;
const noticeHeader = `${header}/notice`;

interface AxiosRequest {
    method: RequestMethod;
    url: string;
    data?: object;
}

type RequestMethod = `GET` | 'POST' | 'DELETE';

export class Request {

    body: AxiosRequest;

    constructor(desc: AxiosRequest) {
        this.body = desc;
    }

    exec = () => axios(this.body);

}

export namespace test {

    export const testGetMethod = () => new Request({
        method: 'GET', url: `${MockServer}/test/testGetMethod`
    });

    export const fetchMyInfo = () => new Request({
        method: 'GET', url: `${MockServer}/user/me`
    });

    export const login = () => new Request({
        method: 'GET', url: `${MockServer}/user/login`
    });

    export const getUserInfo = (uid: string) => new Request({
        method: 'GET', url: `${header}/user/getInfo/${uid}`
    });

}

export namespace category {

    export namespace moderator {

        export const getByCateId = (id: string) => new Request({
            method: 'GET', url: `${cateHeader}/${id}/moderator`
        });

        export const dismissById = (cid: string, mid: string) => new Request({
            method: 'DELETE', url: `${cateHeader}/${cid}/moderator/${mid}`
        });
    }

    export const getOpening = () => new Request({
        method: 'GET',  url: `${cateHeader}`
    });

    export const getInfoById = (id: string) => new Request({
        method: 'GET', url: `${cateHeader}/${id}`
    });

    export const deleteById = (id: string) => new Request({
        method: 'DELETE', url: `${cateHeader}/${id}`
    });

    export const closeById = (id: string) => new Request({
        method: 'GET', url: `${cateHeader}/${id}/close`
    });

    export const openById = (id: string) => new Request({
        method: 'GET', url: `${cateHeader}/${id}/open`
    });

    export const getAll = () => new Request({
        method: 'GET', url: `${cateHeader}/all`
    });

    export const create = (param: {
        name: string;
        description: string;
    }) => new Request({
        method: 'POST',
        url: `${cateHeader}/create`,
        data: param
    });

    export const getManage = () => new Request({
        method: 'GET', url: `${cateHeader}/manager`
    });

    export const update = (param: {
        id: number;
        name?: string;
        description?: string;
        coverUrl?: string;
    }) => new Request({
        method: 'POST',
        url: `${cateHeader}/update`,
        data: {
            name: null,
            description: null,
            coverUrl: null,
            ...param
        }
    });

}

export namespace user {

    export const register = (param: {
        username: string;
        password: string;
        nickname: string;
        email: string;
        phoneNumber: string;
    }) => new Request({
        method: 'POST',
        url: `${userHeader}/signUp`,
        data: param
    });

    export const login = (param: {
        username: string;
        password: string;
    }) => new Request({
        method: 'POST',
        url: `${userHeader}/signIn`,
        data: param
    });

    export const search = (keyword: string) => new Request({
        method: 'GET', url: `${userHeader}/search?keyword=${keyword}`
    });

    export const getMyInfo = () => new Request({
        method: 'GET', url: `${userHeader}/current`
    });

    export const getInfoById = (id: string) => new Request({
        method: 'GET', url: `${userHeader}/${id}`
    });

    export const update = (param: {
        id: number,
        nickname?: string,
        signature?: string,
        avatarUrl?: string,
        privacyShow?: boolean
    }) => new Request({
        method: 'POST',
        url: `${userHeader}/update`,
        data: {
            ...param,
            privacyShow: param.privacyShow ? 1 : 0
        }
    });

}

export namespace notice {
    export const all = (id: string) => new Request({
        method: "GET", url: `${noticeHeader}/${id}/all`
    })

    export const deleteNotice = (id: string) => new Request({
        method: "DELETE", url: `${noticeHeader}/${id}/delete`
    });

    export const getById = (id: string) => new Request({
        method: "GET", url: `${noticeHeader}/${id}/getNoticeById`
    });

    export const creat = (param: {
        categoryId: number,
        content: string,
        creatorId: number,
        title: string
    }) => new Request({
        method: "POST",
        url: `${noticeHeader}/create`,
        data: param
    });

    export const update = (param: {
        allNull: boolean,
        content: string,
        id: number,
        title: string
    }) => new Request({
        method: "POST",
        url: `${noticeHeader}/update`,
        data: param
    });
}

export namespace theme {
    /*export const _ = (id: String) => new Request({
            method: ,
            url: `${themeHeader}/`,
        })*/

    export const all= (id: string) => new Request({
        method: "GET",
        url: `${themeHeader}/${id}/all`,
    })

    export const highQuality = (id: string) => new Request({
        method: "GET",
        url: `${themeHeader}/${id}/highQuality`,
    })

    export const selectByTag = (id: string) => new Request({
        method: "GET",
        url: `${themeHeader}/${id}/selectByTag`,
    })

    export const top = (id: string) => new Request({
        method: "GET",
        url: `${themeHeader}/${id}/top`,
    })

    /*
    *查看主题帖详情
    */
    export const viewDetails = (id: string) => new Request({
        method: "GET",
        url: `${themeHeader}/${id}`,
    })

    export const deleteTheme = (id: string) => new Request({
        method: "DELETE",
        url: `${themeHeader}/${id}`,
    })

    export const cancelSetHighQuality = (id: string) => new Request({
        method: "GET",
        url: `${themeHeader}/${id}/cancelSetHighQuality`,
    })

    export const cancelSetTop = (id: string) => new Request({
        method: "GET",
        url: `${themeHeader}/${id}`,
    })

    export const setHighQuality = (id: string) => new Request({
        method: "GET",
        url: `${themeHeader}/${id}/setHighQuality`,
    })

    export const setTop = (id: string) => new Request({
        method: "GET",
        url: `${themeHeader}/${id}/setTop`,
    })

    export const create = (param: {
        categoryId: number,
        creatorId: number,
        tags: {
            id: number,
            name: string,
        }[],
        title: string
    }) => new Request({
        method: "POST",
        url: `${themeHeader}/create`,
        data: param
    })

    export const report = (param: {
        reason: string,
        reporterId: number,
        themeId: number
    }) => new Request({
        method: "POST",
        url: `${themeHeader}/report`,
        data: param
    })

    export const search = (keyword: string) => new Request({
        method: "GET",
        url: `${themeHeader}/search?keyword=${keyword}`,
    })

    export const tag = () => new Request({
        method: "GET",
        url: `${themeHeader}/tag`,
    })

    export const addTag = (param: {
        tagId: number,
        themeId: number
    }) => new Request({
        method: "POST",
        url: `${themeHeader}/tag/add`,
        data: param
    })

    export const removeTag = (param: {
        tagId: number,
        themeId: number
    }) => new Request({
        method: "POST",
        url: `${themeHeader}/tag/remove`,
        data: param
    })

    export const top10ByReplyCount = () => new Request({
        method: "GET",
        url: `${themeHeader}/top10/byThemeReplyCount`,
    })

    export const top10ByVisitsCount = () => new Request({
        method: "GET",
        url: `${themeHeader}/top10/top10ByVisitsCount`,
    })

    export const update = (param: {
        id: number,
        noTitle: boolean,
        title: string
    }) => new Request({
        method: "POST",
        url: `${themeHeader}/`,
        data: param
    })
}

export namespace history {
    export const deleteHistory = (id: string) => new Request({
        method: "DELETE",
        url: `${historyHeader}/${id}/delete`,
    })

    export const getHistoryViewed = (id: string) => new Request({
        method: "GET",
        url: `${historyHeader}/${id}/getHistoryViewed`,
    })

    // export const _ = (param: {
    //     ownerId: number,
    //     viewedThemeId: number
    // }) => new Request({
    //     method: "POST",
    //     url: `${historyHeader}/create`,
    //     data: param
    // })

    export const myHistories= () => new Request({
        method: "GET",
        url: `${historyHeader}/myHistories`,
    })
}

export namespace favorite {
    export const deleteFavorite = (id: string) => new Request({
        method: "DELETE",
        url: `${favoriteHeader}/${id}/delete`,
    })

    export const getAndUpdate = (id: string) => new Request({
        method: "GET",
        url: `${favoriteHeader}/${id}/getAndUpdate`,
    })

    export const create = (param: {
        ownerId:number,
        themeId:number
    }) => new Request({
        method: "POST",
        url: `${favoriteHeader}/create`,
        data: param
    })

    export const myFavorite = () => new Request({
        method: "GET",
        url: `${favoriteHeader}/myFavorite`,
    })

}

export namespace post {
    export const viewDetails = (id: string) => new Request({
        method: "GET",
        url: `${postHeader}/${id}`,
    })

    export const deletePost = (id: string) => new Request({
        method: "DELETE",
        url: `${postHeader}/${id}`,
    })

    export const like = (id: string) => new Request({
        method: "GET",
        url: `${postHeader}/like`,
    })

    export const unlike = (id: string) => new Request({
        method: "GET",
        url: `${postHeader}/unlike`,
    })

    export const create = (param: {
        content: string,
        creatorId: number,
        number: number,
        themeId: number
    }) => new Request({
        method: "POST",
        url: `${postHeader}/create`,
        data: param
    })

    export const deleteReply = (id: string) => new Request({
        method: "DELETE",
        url: `${postHeader}/reply/${id}/delete`,
    })

    export const createReply = (param: {
        content: string,
        postReplyCreatorId: number,
        targetPostId: number
    }) => new Request({
        method: "POST",
        url: `${postHeader}/reply/create`,
        data: param
    })

    /*
     * 获取指定主题帖下的所有帖子
     */
    export const getAllPostsUnderATheme= (id: string) => new Request({
        method: "GET",
        url: `${postHeader}/theme`,
    })

    export const update = (param: {
        content: string,
        postId: number
    }) => new Request({
        method: "POST",
        url: `${postHeader}/`,
        data: param
    })
}

export namespace inbox {
    export const deleteInbox = (id: string) => new Request({
        method: "DELETE",
        url: `${inboxHeader}/${id}/delete`,
    })

    export const get = (id: string) => new Request({
        method: "GET",
        url: `${inboxHeader}/${id}/get`,
    })

    export const myInbox = (id: string) => new Request({
        method: "GET",
        url: `${inboxHeader}/${id}/myInbox`,
    })

    export const countAllUnchecked = (id: string) => new Request({
        method: "GET",
        url: `${inboxHeader}/${id}/myInbox/countAllUnchecked`,
    })

    export const myOutbox = (id: string) => new Request({
        method: "GET",
        url: `${inboxHeader}/${id}/myOutbox`,
    })

    export const create = (param: {
        content: string,
        recipientId: number,
        senderId: number
    }) => new Request({
        method: "POST",
        url: `${inboxHeader}/create`,
        data: param
    })
}
