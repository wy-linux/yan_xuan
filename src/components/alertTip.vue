<template>
    <div class="alertTip">
        <div class="contain">
            <div class="tap_icon">
                <span class="top"></span>
                <span class="foot"></span>

            </div>
            <p>{{msg}}</p>
            <div class="enter" @click="$emit('destroy')">确认</div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        msg: String
    }

}
</script>
<style  scoped>
    .alertTip {
        position: fixed;
        z-index: 999;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .3);
    }
    .alertTip .contain {
        position: absolute;
        top: 50%;
        left: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        transform: translate(-50%, -50%);
        width: 5.78rem;
        height: 4rem;
        background-color: #fff;
        border: 1ppx solid #ccc;
        border-radius:  .2rem;
    }
    .alertTip .tap_icon {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: .4rem;
        align-items: center;
        width: 1.5rem;
        height: 1.5rem;
        border: 2px solid #f8cb86;
        border-radius: 50%;
    }
    .tap_icon .top {
        width: .05rem;
        height: .6rem;
        background-color: #f8cb86;
    }
    .tap_icon .foot {
        margin-top: .05rem;
        width: .05rem;
        height: .05rem;
        background-color: #f8cb86;
    }
    .enter {
        width: 100%;
        line-height: .8rem;
        font-weight: bold;
        color: #ffff;
        background-color: #4cd964;
        height: .8rem;
        font-size: .4rem;
        border-bottom-left-radius: .2rem ;
        border-bottom-right-radius: .2rem;
    }
    .contain p {
        font-size: .3rem;
    }
</style>