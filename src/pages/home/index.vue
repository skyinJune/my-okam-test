<template>
    <view class="home-wrap">
        <div class="edit-wrapper">
            <input type="text" class="input"/>
        </div>
        <div>{{btnText}}</div>
    </view>
</template>
<script>

export default {
    config: {
        title: 'Home'
    },

    components: {

    },

    data: {
        btnText: 'Hello',
    },

    methods: {

        
    }
};
</script>
<style lang="stylus">
.home-wrap
    background-color #ffffff
    .edit-wrapper
        text-align center
        .input
            width 100%
            background-color #f0f0f0
            border-radius 5%
</style>

