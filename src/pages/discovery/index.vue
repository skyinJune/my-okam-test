<template>
    <div class="home-wrapper">
        <navigate-bar
            title="发现"
        />
        <div class="text">{{btnText}}</div>
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
    },

    methods: {

        
    }
};
</script>
<style lang="stylus">
.home-wrapper
    padding-top 250px
    .text
        font-size 50px
</style>

