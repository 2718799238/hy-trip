<template>
    <div class="search">
        <div class="hot-suggest">
            <template v-for="item in hotSuggest" :key="item.tagLink">
                <li class="item" :style="{ color: item.tagText.color }">
                    {{ item.tagText.text }}
                </li>
            </template>
        </div>
        <div class="search-btn">
            开始搜索
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
    hotSuggest: {
        type: Array,
        default: () => []
    }
})


</script>


<style scoped lang="less">
.search {
    margin: 0 20px;
    margin-bottom: 10px;

    .hot-suggest {
        display: flex;
        flex-wrap: wrap;
        justify-content: left;
        align-items: center;
        margin: 10px;

        .item {
            font-size: 12px;
            background-color: #f1f3f5;
            border-radius: 15px;
            margin: 4px;
            padding: 4px 8px;
        }
    }

    .search-btn {
        width: 90vw;
        height: 10vw;
        max-height: 13vw;
        background-image: linear-gradient(to right, #fa8d1e, #fcaf3f);
        border-radius: 15px;
        line-height: 10vw;
        text-align: center;
        font-size: 18px;
        color: #fff;
    }
}
</style>