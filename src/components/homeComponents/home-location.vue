<template>
    <div class="home-location">
        <div class="city" @click="onToCity()">{{ currentCity }}</div>
        <div class="right">
            <span class="text">我的位置</span>
            <img src="../../asset/image/location.png" alt="">
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
import { toRefs } from 'vue'
import { useCityStore } from '@/stores/city';

const CityStore = useCityStore()
const { currentCity } = toRefs(CityStore)

const onToCity = () => {
    router.push({
        name: 'city',
    })
}
</script>


<style scoped lang="less">
.home-location {
    width: 100%;
    height: 45px;
    display: flex;
    justify-content: left;
    align-items: center;

    .city {
        flex: 1;
        margin-left: 20px;
        color: #333;
        font-size: 15px;
    }

    .right {
        width: 90px;
        margin-right: 5px;

        span {
            height: 18px;
            font-size: 12px;
            color: #666;
            margin-right: 7px;
        }

        img {
            width: 18px;
            height: 18px;

        }
    }
}
</style>