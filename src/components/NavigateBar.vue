<template>
    <div class="navigate-bar">
        <div class="status-bar"></div>
        <div class="navigate">
            <div class="back-icon" if="showBackIcon"></div>
            <div class="search-icon" if="showSearch"></div>
            <div class="title">{{title}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'MyOKAM'
        },
        showSearch: {
            type: Boolean,
            default: false
        },
        showBackIcon: {
            type: Boolean,
            default: false
        }
    },
    data: {

    },
    methods: {
        
    },
}
</script>

<style lang="stylus">
@require '../common/css/common.styl'

.navigate-bar
    position fixed
    top 0
    left 0
    width 100%
    z-index 100
    background-color $white
    .status-bar
        height 80px
    .navigate
        position relative
        display flex
        height 120px
        justify-content center
        align-items center
</style>