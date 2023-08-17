
export function formatTime(time) {
    // console.log(time);
    let month = time.getMonth() + 1
    month = month < 10 ? '0' + month : month
    let day = time.getDate()
    day = day < 10 ? '0' + day : day
    return month + '月' + day + '日'
}
export function getDays(fTime, eTime) {
    return (fTime - eTime) / 1000 / 60 / 60 / 24
}
