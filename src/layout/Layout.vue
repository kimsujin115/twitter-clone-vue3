<template>
  <component :is="layout"></component>
</template>

<script>
    import DefaultLayout from './DefaultLayout.vue'
    import EmptyLayout from './EmptyLayout.vue'
    import {computed} from 'vue' //상황에 맞게 계산되게
    import {useRoute} from 'vue-router'

    export default {
        components: {DefaultLayout, EmptyLayout},
        setup() {
            const route = useRoute();
            const layout = computed(() => route.meta.layout || 'DefaultLayout')

            return {
                layout,
            }
        },
    }
</script>

<style>

</style>