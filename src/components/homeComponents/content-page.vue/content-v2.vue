<template>
    <div class="inner">
        <div class="content-v2">
            <div class="cover"><img :src="content.image.url" alt="" class="bg"></div>
            <div class="d">
                <div class="address">
                    <img class="icon" src="../../../asset/image/address.png" alt="">
                    <span>{{ content.location }}</span>
                </div>
                <div class="house-name">{{ content.houseName }}</div>
                <div class="summary">{{ content.summaryText }}</div>
                <div class="price">
                    <span class="finalPrice">￥{{ content.finalPrice }}</span>
                    <span class="productPrice">￥{{ content.productPrice }}</span>
                    <span class="discount">已减￥{{ content.productPrice - content.finalPrice }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
    content: {
        type: Object,
        default: () => { }
    }
})
</script>


<style scoped>
.inner {
    .content-v2 {
        margin: 5px;
        border-radius: 10px;
        overflow: hidden;

        .cover {
            .bg {
                width: 100%;
            }
        }

        .d {
            margin: 15px 10px;

            .address {

                .icon {
                    width: 12px;
                }

                font-size: 13px;
                color: #666;
            }

            .house-name {
                margin: 5px 0;
                font-size: 14px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
            }

            .summary {
                font-size: 12px;
                color: #666;
            }

            .price {
                .finalPrice {
                    font-size: 13px;
                    color: var(--primary-color);
                }

                .productPrice {
                    font-size: 12px;
                    color: #666;
                    text-decoration: line-through;
                }

                .discount {
                    background-color: #ff9a9a;
                    padding: 0 3px;
                    border-radius: 5px;
                    color: #fff;
                    font-size: 13px;
                }
            }
        }
    }
}
</style>