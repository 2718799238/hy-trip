<template>
    <div class="searchTop">
        <div class="inner">
            <div class="left">
                <div class="come"><span>住</span>08.15</div>
                <div class="back"><span>离</span>08.16</div>
            </div>
            <div class="right">
                关键字位置民宿
                <van-icon size="32px" class="icon" name="search" />
            </div>
        </div>
    </div>
</template>

<script setup>

</script>


<style scoped lang="less">
.searchTop {
    box-sizing: border-box;
    width: 100%;
    height: 71px;
    padding: 16px 16px 10px 16px;
    background-color: #fff;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;

    .inner {
        // width: 100%;

        height: 100%;
        background-color: #f2f4f6;
        border-radius: 10px;
        display: flex;
        align-items: center;
        font-size: 12px;


        .left {
            box-sizing: border-box;
            padding: 10px 10px;
            width: 70px;
            height: 100%;
            border-right: 2px solid #fff;

            .come,
            .back {
                span {
                    color: #666;
                    margin-right: 3px;
                }
            }
        }

        .back {
            margin-top: 3px;
        }

        .right {
            flex: 1;
            color: #666;
            margin-left: 10px;
            position: relative;

            .icon {

                position: absolute;
                right: 10px;
                top: -5px;
            }
        }
    }
}
</style>