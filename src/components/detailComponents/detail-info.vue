<template>
    <div class="detail-info">
        <div class="title">{{ data?.topModule?.houseName }}</div>
        <div class="bq">
        </div>
        <div class="comment">
            <div class="left"></div>
            <div class="right"></div>
        </div>
        <div class="location">
            <div class="left"></div>
            <div class="right"></div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
    data: {
        type: Object,
        default: () => { }
    }
})
</script>


<style scoped></style>