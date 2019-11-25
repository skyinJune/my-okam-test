<template>
    <div class="home-wrapper">
        <navigate-bar
            title="发现"
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
        dataList: [4,5,6]
    },

    methods: {
        onLoad() {
            console.log('disc load');
        },

        onShow() {
            console.log('disc show');
        }
        
    }
};
</script>
<style lang="stylus">
.home-wrapper
    padding-top 200px
</style>

