<template>
    <KeepAlive>
        <div class="city">
            <div class="tab-header">
                <!-- 搜索框 -->
                <form action="/">
                    <van-search v-model="value" shape="round" show-action placeholder="请输入搜索关键词" @search="onSearch"
                        @cancel="onCancel" />
                </form>
                <!-- tab栏 -->
                <van-tabs v-model:active="tabActive">
                    <van-tab :title="allCity?.cityGroup?.title">
                    </van-tab>
                    <van-tab :title="allCity?.cityGroupOverSea?.title">
                    </van-tab>
                </van-tabs>
            </div>
            <div class="tab-item">
                <cityGroup v-show="tabActive === 0" :cities="allCity.cityGroup?.cities"
                    :hot-city="allCity.cityGroup?.hotCities">
                </cityGroup>
                <cityGroup v-show="tabActive === 1" :cities="allCity.cityGroupOverSea?.cities"
                    :hot-city="allCity.cityGroupOverSea?.hotCities"></cityGroup>
            </div>
        </div>
    </KeepAlive>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref, } from 'vue';
import { storeToRefs } from 'pinia'
import { useCityStore } from '@/stores/city.js'

import cityGroup from "@/components/cityComponents/cityGroup.vue"
const value = ref('')
const router = useRouter()

//获取city

const cityStore = useCityStore()
cityStore.fetchAllCity()
const { allCity } = storeToRefs(cityStore)

const tabActive = ref(0);
// const cityGroup = computed((item) => {
//     item.
// })


const onSearch = () => {
    console.log(value.value)
}
const onCancel = () => {
    router.back()
}

// 滚动

</script>


<style scoped lang="less">
.tab-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    position: relative;
    z-index: 9;
}

.tab-item {
    height: calc(100vh - 98px);
    overflow-y: scroll;
}
</style>