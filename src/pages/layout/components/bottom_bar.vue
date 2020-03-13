<template>
    <div>
        <van-tabbar v-model="active" >
            <van-tabbar-item v-for="item in constantRouterMap"
                :key="item.path" :to="item.path" :icon="item.meta.icon">
                {{item.meta.title}}

            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { constantRouterMap } from '@/router'
    export default {
        data() {
            return {
                constantRouterMap,
                active: 0,
            }
        },
        computed: {
            ...mapGetters([
                'token'
            ]),
        },
        watch: {
            'active': function () {
                this.$router.push(this.active)
            }
        },
        methods: {
            onSelect() {
                this.$router.push(this.active)
            }
        }
    }
</script>

<style scoped>

</style>