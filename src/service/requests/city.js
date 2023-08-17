import request from "..";

const getCityAll = function () {
    return request.get({ url: '/city/all' })
}
export default getCityAll