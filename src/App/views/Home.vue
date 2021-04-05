<template>
    <div class="main">
        <Lamp color="red" :lampColor="lampColor" :sec="counter" />
        <Lamp color="yellow" :lampColor="lampColor" :sec="counter" />
        <Lamp color="green" :lampColor="lampColor" :sec="counter" />
    </div>
</template>

<script>
import Lamp from '../components/Lamp.vue';

export default {
    name: 'Home',
    components: {
        Lamp,
    },
    props: ['lampColor', 'time'],
    data() {
        return {
            counter: null,
            interval: null,
        };
    },
    computed: {
        getNextColor() {
        this.$store.commit('setNextColor', this.lampColor);
        return this.$store.state.nextStep;
        }
    },
    watch: {
        $route(to, from) {
        this.setTimer();
        }
    },
    mounted() {
        this.setTimer();
    }, 
    methods: {
        setTimer() {
            const timer = this.time;

            setTimeout(() => {this.$router.push(this.getNextColor); }, timer);

            this.counter = this.time / 1000;

            if(this.interval) clearInterval(this.interval);

            this.interval = setInterval(() => {
                this.counter -= 1;
            }, 1000);
        }
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
