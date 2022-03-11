<template>
 <img v-bind:src="image_src">
</template>

<script>
export default {
    data () {
        return {
            image_src: require('assets/test.png')
        }
    }
}
</script>