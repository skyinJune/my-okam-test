<template>
    <div class="home-wrapper">
        <navigate-bar
            title="我的"
        />
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
    padding-top 40px
</style>

