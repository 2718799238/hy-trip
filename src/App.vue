<!-- eslint-disable vue/valid-template-root -->
<template>
    <router-view v-slot="props">
        <keep-alive include="home">
            <component :is="props.Component"></component>
        </keep-alive>
    </router-view>
    <tab-bar v-if="!$route.meta.isBar"></tab-bar>
</template>

<script setup>
import tabBar from '@/components/mainComponents/tabBar.vue'





</script>

<style></style>