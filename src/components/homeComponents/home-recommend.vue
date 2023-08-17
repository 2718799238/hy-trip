<template>
    <div class="box">
        <div class="recommend-category">
            <template v-for="item in recommendCategory" :key="item.id">
                <div class="item">
                    <img :src="item.pictureUrl" alt="">
                    <span class="title">{{ item.title }}</span>
                </div>
            </template>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
    recommendCategory: {
        type: Array,
        default: () => []
    }
})
</script>


<style scoped lang="less">
.box {
    // height: 20vw;
    // position: relative;
    overflow: hidden;

    .recommend-category {
        // position: absolute;
        // left: 0;
        overflow-x: scroll;
        display: flex;
        justify-content: left;
        align-items: center;
        padding-bottom: 5px;

        .item {
            width: 18.6vw;
            display: flex;
            flex-direction: column;
            align-items: center;

            img {
                width: 32px;
                height: 32;
            }

            .title {
                width: 100px;
                font-size: 12px;
                text-align: center;
                margin-top: 10px;
            }
        }
    }

    .recommend-category::-webkit-scrollbar {
        display: none;
    }
}
</style>