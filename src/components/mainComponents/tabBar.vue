<template>
    <div class="tab-bar">
        <template v-for="item, index in tabBar" :key="item.id">
            <div class="item" @click="onItemClick(index)">
                <router-link :to="item.path">
                    <div class="icon">
                        <img v-if="!(currentId === index)" :src="getAssetUrl(item.image)" alt="">
                        <img v-else :src="getAssetUrl(item.imageActive)" alt="">
                    </div>
                    <div :class="currentId === index ? 'active' : ''">{{ item.text }}</div>
                </router-link>
            </div>
        </template>
    </div>
</template>

<script setup>

import { ref } from 'vue'
import tabBarData from '@/mock/tabBarData'
import { getAssetUrl } from "@/utils/getAssetUrl"

const tabBar = ref(tabBarData)
const currentId = ref(0)
// console.log(tabBar.value)
function onItemClick(id) {
    currentId.value = id
    // console.log(currentId.value)
}

</script>


<style scoped lang="less">
.tab-bar {
    width: 100%;
    height: 12vw;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;

    .item {
        height: 100%;
        width: 25%;
        padding: 0 20px;
        margin: 0 10px;
        font-size: 12px;
        text-align: center;

        .icon {
            height: 7vw;
            margin-bottom: 3px;

            img {
                width: 100%;
            }
        }
    }

    .active {
        color: var(--primary-color);
    }
}
</style>