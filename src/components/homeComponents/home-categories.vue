<template>
    <div class="categories" @click="show = true">
        <div class="left">
            <span class="text">入住</span>
            <span class="beginTime">{{ beginTime }}</span>
        </div>
        <div class="center">共{{ days }}晚</div>
        <div class="right">
            <span class="text">入住</span>
            <span class="beginTime">{{ endTime }}</span>
        </div>
    </div>
    <div class="bottom">
        <div class="left">价格不限</div>
        <div class="right">人数不限</div>
    </div>
    <div class="tip">
        关键字/位置/民宿名
    </div>
    <van-calendar color="#ff9645" :round="false" v-model:show="show" type="range" @confirm="onConfirm" />
</template>

<script setup>
import { ref } from 'vue'

import { formatTime, getDays } from '@/utils/formatTime';
const show = ref(false)
const nowTime = new Date()
const finaTime = new Date(nowTime)
const days = ref(1)
finaTime.setDate(nowTime.getDate() + 1)
const beginTime = ref(formatTime(nowTime))
const endTime = ref(formatTime(finaTime))

// 计算获取日期
const onConfirm = (values) => {
    // console.log(values[0]);
    beginTime.value = formatTime(values[0])
    endTime.value = formatTime(values[1])
    days.value = getDays(values[1], values[0])
    show.value = false;
}
</script>


<style scoped lang="less">
.categories {
    box-sizing: border-box;
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    border-bottom: 2px solid #faf8f9;

    .left,
    .right {
        width: auto;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 14px;

        .text {
            font-size: 12px;
            color: #666;
        }
    }

    .center {
        flex: 1;
        text-align: center;

    }
}

.bottom {
    height: 6vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 20px;
    color: #999;
    font-size: 14px;
    border-bottom: 2px solid #faf8f9;
}

.tip {
    height: 7vh;
    color: #999;
    font-size: 14px;
    border-bottom: 2px solid #faf8f9;
    margin: 0 20px;
    line-height: 6vh;
}
</style>