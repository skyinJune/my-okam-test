<template>
    <div class="home-wrapper">
        <navigate-bar
            title="首页"
        />
        <div for="dataList">{{item}}</div>
    </div>
</template>
<script>
import NavigateBar from '../../components/NavigateBar'

export default {
    config: {
        navigationStyle: 'custom'
    },

    components: {
        NavigateBar
    },

    data: {
        btnText: 'Hello',
        dataList: [1,2,3]
    },

    methods: {
        onLoad() {
            console.log('home load');
        },

        onShow() {
            console.log('home show');
        }
        
    }
};
</script>
<style lang="stylus">
.home-wrapper
    padding-top 200px
</style>

