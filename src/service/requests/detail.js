import request from "..";

export function getHouseDetail(id) {
    return request.get({
        url: `/detail/infos?houseId=${id}`
    })
}