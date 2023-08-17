<template>
    <van-index-bar sticky="false" highlight-color="#ff9645" :index-list="indexList">
        <van-index-anchor index="热门" />
        <div class="hotCity">
            <ul>
                <template v-for="item in hotCity" :key="item.cityId">
                    <li @click="onClickCity(item.cityName)" class="item">{{ item.cityName }}</li>
                </template>
            </ul>
        </div>
        <template v-for="(item) in cities" :key="item.group">
            <van-index-anchor :index="item.group" />
            <template v-for="iten in item.cities" :key="iten.cityId">
                <van-cell @click="onClickCity(item.cityNameitem.cityName)" :title="iten.cityName" />
            </template>
        </template>
    </van-index-bar>
</template>

<script setup>
import { defineProps, computed, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import { useCityStore } from '@/stores/city';
const props = defineProps({
    cities: {
        type: Array,
        default: () => []
    },
    hotCity: {
        type: Array,
        default: () => []
    }
})

// 滚动条
const indexList = computed(() => {
    const listarr = props.cities.map(item => item.group)
    listarr.unshift('#')
    return listarr
})

// 点击城市返回首页
const router = useRouter()
const CityStore = useCityStore()
const onClickCity = (city) => {
    const { currentCity } = toRefs(CityStore)
    currentCity.value = city
    router.back()
}
</script>


<style scoped lang="less">
.hotCity {
    width: 100%;

    ul {
        display: flex;
        justify-content: left;
        align-items: center;
        flex-wrap: wrap;
        margin-left: 15px;

        .item {
            width: 70px;
            height: 28px;
            margin: 6px 6px;
            border-radius: 15px;
            background-color: #fff4ec;
            text-align: center;
            line-height: 28px;
            font-size: 12px;
        }
    }
}
</style>