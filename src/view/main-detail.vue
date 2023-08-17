<template>
    <div class="detail">
        <div class="header">
            <RouterLink to="/">
                <div class="left">
                    <van-icon name="arrow-left" />
                    旅途
                </div>
            </RouterLink>
            <div class="right">房屋详情</div>
        </div>
        <div class="house-swipe">
            <van-swipe :height="250" :autoplay="3000" lazy-render>
                <van-swipe-item v-for="image in housePic.housePics" :key="image.orderIndex">
                    <img :src="image.url" />
                </van-swipe-item>
                <template #indicator="{ active }">
                    <div class="custom-indicator">
                        <template v-for="(value, key) in custom" :key="key">
                            <span v-if="housePic.housePics[active]?.enumPictureCategory" class="custom"
                                :class="housePic.housePics[active]?.enumPictureCategory == key ? active : active">
                                {{ getName(value[0].title) }}
                                <span class="j" v-show="housePic.housePics[active]?.enumPictureCategory == key">{{
                                    getActiveIndex(housePic?.housePics[active], key) }}/{{
        value.length
    }}</span>
                            </span>
                        </template>
                    </div>
                </template>
            </van-swipe>
        </div>
        <DetailInfo :data="detail?.mainPart"></DetailInfo>
        <div id="contain">

        </div>
    </div>
</template>

<script setup>

import DetailInfo from '@/components/detailComponents/detail-info.vue'
import { useDetailStore } from '@/stores/detail'
import { watch, ref, computed, onMounted } from 'vue'
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router'

import baiduMap from '@/hooks/baiMap'
const route = useRoute()
const id = route.query.houseId
const detailStore = useDetailStore()
detailStore.fetchHouseDetail(id)
const { detail } = storeToRefs(detailStore)
// 轮播数据
const housePic = ref({})
const custom = {}
watch(detail, (newValue) => {
    housePic.value = newValue.mainPart.topModule.housePicture


    newValue.mainPart.topModule?.housePicture.housePics?.map((item) => {
        const key = item.enumPictureCategory
        if (!custom[key]) custom[key] = []
        custom[key].push(item)
    })

})

const Reg = /[^(【】)]{2,5}/
const getName = computed(() => {
    return title => {
        return Reg.exec(title).toString()
    }
})

const getActiveIndex = (item) => {
    const arr = custom[item.enumPictureCategory]
    return arr.findIndex(value => value === item) + 1
}
onMounted(() => {
    // function loadScript() {
    //     return new Promise((resolve, reject) => {
    //         var script = document.createElement("script");
    //         script.src = "https://api.map.baidu.com/api?v=1.0&type=webgl&ak=SUZTj0XMgP6Q8RuiwAgrzIWiuA2kK3C4&callback=initialize";
    //         document.head.appendChild(script)

    //     })
    // }

    baiduMap('SUZTj0XMgP6Q8RuiwAgrzIWiuA2kK3C4')
        .then((BMap) => {
            console.log(BMap)
            console.log("加载成功...")
            var mp = new BMap.Map('contain');
            mp.centerAndZoom(new BMap.Point(121.491, 31.233), 11);
        })
})


// custom = new Set(custom)


</script>


<style scoped lang="less">
.detail {
    .header {
        height: 45px;
        display: flex;
        justify-content: left;
        align-items: center;
        position: relative;

        .left {
            position: absolute;
            left: 20px;
            color: #ffa476;
            font-size: 14px;
            width: 60px;
        }

        .right {
            flex: 1;
            text-align: center;
        }
    }

    .house-swipe {

        img {
            width: 100%;
        }

        .custom-indicator {
            position: absolute;
            bottom: 0px;
            right: 5px;
            z-index: 9;

            .custom {
                font-size: 12px;
                padding: 3px 3px;
                background-color: #2c2b2c;
                color: #fff;

            }

            .active {
                background-color: #fff;
                color: #2c2b2c;
            }
        }

    }

    #contain {
        width: 100%;
        height: 300px;
    }
}
</style>