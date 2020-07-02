/**
 *
 * @param dateString 'YYYY-MM-DD hh:mm:ss' 型的日期字符串
 *
 * @desc  进行字符串修改，创建 Date 对象
 */
export function stringToDate(dateString: string) {
    return new Date(dateString.replace(/-/g, '/'))
}

export function stringToDateBackend(date: string) {
    const s = date.replace(/-/g, '/')
        .replace(/T/g, ' ')
        .substr(0, 19);
    return new Date(s);
}
