<template>

    <div class="lamp ">
        <div class="lamp__counter">
            2
        </div>
    </div>

</template>

<script>

export default {
    name: 'Lamp',
    props: []

}

</script>


<style lang='scss'>
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
            color: #fff;
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
    }
</style>


