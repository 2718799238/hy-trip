<template>
    <div class="home-content">
        <div class="header">
            <h3>热门精选</h3>
        </div>
        <div class="content">
            <template v-for="(item, index) in     houseContent    " :key="index">
                <RouterLink class="out-box" v-if="item.discoveryContentType === 9"
                    :to="`/detail?houseId=${item.data.houseId}`">
                    <contentV1 class="item" :content="item.data"></contentV1>
                </RouterLink>
                <RouterLink class="out-box" v-else :to="`/detail?houseId=${item.data.houseId}`">
                    <contentV2 class="item" :content="item.data"></contentV2>
                </RouterLink>
            </template>
        </div>
    </div>
</template>

<script setup>
import contentV1 from './content-page.vue/content-v1.vue';
import contentV2 from './content-page.vue/content-v2.vue';

import { defineProps } from 'vue'
import { useRouter } from 'vue-router';

defineProps({
    houseContent: {
        type: Array,
        default: () => []
    }
})

const router = useRouter()

</script>


<style scoped lang="less">
.home-content {
    .content {

        overflow: hidden;
        display: flex;
        justify-content: left;
        align-items: end;
        flex-wrap: wrap;

        .out-box {
            width: 50%;
            box-sizing: border-box;

            .item {
                box-sizing: border-box;
            }
        }
    }

    margin-bottom:55px;
}
</style>