import { ref, watch, onMounted, onUnmounted } from 'vue'
import { throttle } from 'underscore'

export function useScroll({
    elRef,
    isWatchReachBottom = false,
    reachBottomCb,
    _scrollTop = 0,
    isShow,
    bottomHeight = 100,
    top = 0

} = {}) {

    const clientHeight = ref(0)  //窗口高度
    const scrollHeight = ref(0) //可滚动高度 
    const scrollTop = ref(0)
    const reachBottom = ref(false) //是否到達底部
    let el = window

    const scrollHandle = throttle(() => {
        console.log(1)
        if (el === window) {
            const htmlEl = document.documentElement
            clientHeight.value = htmlEl.clientHeight
            scrollHeight.value = htmlEl.scrollHeight
            scrollTop.value = htmlEl.scrollTop
        } else {
            clientHeight.value = el.clientHeight
            scrollHeight.value = el.scrollHeight
            scrollTop.value = el.scrollTop
        }
        console.log(clientHeight.value, scrollHeight.value, scrollTop.value);
        //监听滚到底部逻辑
        if (!isWatchReachBottom) return
        if (scrollTop.value >= scrollHeight.value - bottomHeight - clientHeight.value) {
            reachBottomCb()
            reachBottom.value = true
        }

        // 监听滚到固定位置
        // if (scrollTop.value > _scrollTop) {
        //     // console.log('到达搜索框附近');
        //     isShow.value = true
        // }
    }, 300, { trailing: true })
    onMounted(() => {
        if (elRef) el = elRef.value
        el.addEventListener('scroll', scrollHandle)
    })

    onUnmounted(() => {
        el.addEventListener('scroll', scrollHandle)

    })
    if (isWatchReachBottom) {
        watch(reachBottom, (newValue) => {

            if (newValue) {
                reachBottomCb().then(() => {
                    reachBottom.value = false
                })
            }
        })
    }
    if (!isNaN(parseFloat(_scrollTop)) && isShow) {
        watch(scrollTop, (ns) => {
            isShow.value = ns >= _scrollTop
        })
    }

    return scrollTop
}