import { defineStore } from "pinia";
import { getHouseDetail } from "@/service/requests/detail";

export const useDetailStore = defineStore('detail', {
    state: () => {
        return {
            detail: {}
        }
    },
    actions: {
        async fetchHouseDetail(id) {
            const res = await getHouseDetail(id)
            // console.log(res);
            this.detail = res.data.data
        }
    }
})
