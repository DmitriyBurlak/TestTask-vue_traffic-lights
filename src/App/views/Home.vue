<template>
    <div class="main">
        <Lamp color="red" />
        <Lamp color="yellow" />
        <Lamp color="green" />
    </div>
</template>

<script>
import Lamp from '../components/Lamp.vue';


export default {
    name: 'Home',
    components: {
        Lamp,
    },
    props: ['color', 'time'],

    // watch: {
    //     $route(to, from) {
    //     // обрабатываем изменение параметров маршрута...
    //     }
    // }
    methods: {

    }

}

</script>

<style lang="scss">
    .main {
        margin: 100px auto;
        // padding: auto;
        width: 85px;
        background-color: #383838;
        border: 2px solid #000;
        border-radius: 10px;
    }
</style>
