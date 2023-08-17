import request from "..";

function getHotSuggest() {
    return request.get({ url: '/home/hotSuggests' })
}

// eslint-disable-next-line no-unused-vars
function getRecommendCategory() {
    return request.get({ url: 'home/categories' })
}

function getHouseContent(page = 1) {
    return request.get({
        url: `/home/houselist?page=${page}`
    })
}

export { getHotSuggest, getRecommendCategory, getHouseContent } 