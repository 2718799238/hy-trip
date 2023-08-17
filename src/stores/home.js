import { defineStore } from "pinia";
import { getHotSuggest, getRecommendCategory, getHouseContent } from "@/service/requests/home.js"

export const useHomeStore = defineStore('home', {
    state: () => {
        return {
            hotSuggest: [],
            category: [],
            houseContent: [],
            page: 1,
            screenTop: null
        }
    },
    actions: {
        async fetchGetHotSuggest() {
            const res = await getHotSuggest()
            // console.log(res);
            this.hotSuggest = res.data.data
        },
        async fetchGetCategory() {
            const res = await getRecommendCategory()
            console.log();
            this.category = res.data.data
        },
        async fetchGetHouseContent(b) {
            const res = await getHouseContent(this.page)
            // console.log(res.data.data);
            this.houseContent = [...this.houseContent, ...res.data.data]
            if (b) this.page++
        },
        getScrollTop(top) {
            this.screenTop = top
        }
    }
})

