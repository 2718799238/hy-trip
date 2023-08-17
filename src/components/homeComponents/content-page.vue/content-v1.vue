<template>
    <div class="inner">
        <div class="content-v1">
            <img :src="content.image.url" alt="" class="bg">
            <div class="d">
                <div class="summary">{{ content.summaryText }}</div>
                <div class="house-name">{{ content.houseName }}</div>
                <div class="commentScore">
                    <van-rate v-model="value" :size="17" color="#ffd21e" void-icon="star" void-color="#eee" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, ref } from 'vue'

const props = defineProps({
    content: {
        type: Object,
        default: () => { }
    }
})

const value = ref(parseFloat(props.content.commentScore))

</script>


<style scoped lang="less">
.inner {
    .content-v1 {
        position: relative;
        margin: 5px;

        .bg {
            width: 100%;
            border-radius: 10px;
        }

        .d {
            position: absolute;
            left: 8px;
            bottom: 5px;
            color: #fff;

            .summary {
                font-size: 12px;
            }

            .house-name {
                font-size: 14px;
                margin: 5px 0;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
            }

        }
    }
}
</style>