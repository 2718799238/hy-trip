import { defineStore } from 'pinia'

import requestCity from '@/service/requests/city.js'
export const useCityStore = defineStore('City', {
    state: () => {
        return {
            allCity: {},
            currentCity: '河南'
        }
    },
    actions: {
        async fetchAllCity() {
            const res = await requestCity()
            this.allCity = res.data.data
        }
    }
})