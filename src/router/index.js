
import { createRouter, createWebHashHistory } from 'vue-router'



const router = createRouter({
    history: createWebHashHistory(),  //使用哈希路由
    routes: [
        {
            path: "/",
            redirect: "/home"
        },  //路由懒加载
        {
            path: "/home",
            component: () => import("@/view/main-home.vue"),
        },
        {
            path: "/favor",
            component: () => import("@/view/main-favor.vue")
        },
        {
            path: "/order",
            component: () => import("@/view/main-order.vue")
        },
        {
            path: "/message",
            component: () => import("@/view/main-message.vue")
        },
        {
            path: "/city",
            name: "city",
            component: () => import("@/view/main-city.vue"),
            meta: { isBar: true }
        },
        {
            path: "/detail",
            name: "detail",
            component: () => import("@/view/main-detail.vue"),
            meta: { isBar: true }
        }

    ]
})



export default router