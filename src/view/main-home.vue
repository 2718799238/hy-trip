<script setup>
import homeLocation from '@/components/homeComponents/home-location.vue'
import homeCategories from '@/components/homeComponents/home-categories.vue';
import homeSearch from '@/components/homeComponents/home-search.vue';
import homeRecommend from '@/components/homeComponents/home-recommend.vue';
import homeContentVue from '@/components/homeComponents/home-content.vue';
import homeSearchTop from '@/components/homeComponents/home-searchTop.vue'

import { useHomeStore } from '@/stores/home';
import { storeToRefs } from 'pinia';
import { ref, onActivated } from 'vue'
// import { loadingProps } from 'vant';
const homeStore = useHomeStore()
homeStore.fetchGetHotSuggest()
homeStore.fetchGetCategory()
homeStore.fetchGetHouseContent()
const { hotSuggest, category, houseContent, screenTop } = storeToRefs(homeStore)

import { useScroll } from '@/hooks/useScroll.js'

// 监听页面滚动
const homeRef = ref()
// const homeHeight = homeRef.value.offsetHeight
const isShow = ref(false)
const _scrollTop = 400
screenTop.value = useScroll({
    elRef: homeRef,
    isWatchReachBottom: true,
    reachBottomCb: () => {
        return homeStore.fetchGetHouseContent(true)
    },
    _scrollTop: _scrollTop,
    isShow: isShow,
    top: screenTop.value
})
onActivated(() => {
    homeRef.value.scrollTo({
        top: screenTop.value
    })
})



</script>


<template>
    <div class="main-name" ref="homeRef">
        <h3 class="m-title">东子旅途</h3>
        <div class="banner"><img src="../asset/image/banner.webp" alt=""></div>
        <homeLocation class="location"></homeLocation>
        <homeCategories></homeCategories>
        <homeSearch :hot-suggest="hotSuggest"></homeSearch>
        <homeRecommend :recommendCategory="category"></homeRecommend>
        <homeContentVue :houseContent="houseContent"></homeContentVue>
        <homeSearchTop v-show="isShow"></homeSearchTop>
    </div>
</template>

<style scoped lang="less">
.main-name {
    width: 100%;
    height: 100vh;
    overflow: scroll;

    .m-title {
        height: 13vw;
        width: 100%;
        text-align: center;
        color: #ff9645;
        font-size: 16px;
        line-height: 47px;
    }

    .banner {
        width: 100%;
        height: 125px;


        img {
            width: 100%;
            height: 100%;
        }
    }

    .location {
        border-bottom: 2px solid #faf8f9;
    }
}
</style>