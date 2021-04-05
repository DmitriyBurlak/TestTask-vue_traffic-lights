<template>
    <div :class="lampClasses">
        <div class="lamp__counter" v-if="lampIsOn">
            {{sec}}
        </div>
    </div>

</template>

<script>

export default {
    name: 'Lamp',
    props: ['color', 'lampColor', 'sec'],
    computed: {
        lampIsOn: function() {
            return this.color === this.lampColor;
        },
        lampClasses: function() {
            return `
                lamp
                lamp_${this.color}
                ${this.lampIsOn ? 'lamp_on' : ''}
                ${this.lampIsOn && this.sec < 4 ? 'lamp_blink' : ''}
            `;

        },
    },
}

</script>


<style lang='scss'>
    @keyframes blink-animation {
    to {
        opacity: 0.5;
    }
    }

    .lamp {
        position: relative;
        margin: 10px auto;
        width: 50px;
        height: 50px;
        border: 1px solid #000;
        border-radius: 50%;

        &_red {
            background-color: red;
            color: #fff;
            opacity: 0.5;
        }

        &_yellow {
            background-color: yellow;
            color: #000;
            opacity: 0.5;
        }

        &_green {
            background-color: green;
            color: #fff;
            opacity: 0.5;
        }

        &_on {
            opacity: 1;
        }

        &__counter {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        &_blink {
            animation: blink-animation 0.2s steps(10, start) infinite;
        }
    }
</style>


