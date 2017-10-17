<template>
    <div class="col-xs-12 col-sm-6">
        <p>Server Details component are currently not updated</p>
        <hr>
        <button @click="resetStatus">Change to Normal</button>
    </div>

</template>

<script>
    import { serverBus } from '../../main';

    export default {
        data: function() {
            return {
                server: null
            }
        },
        methods: {
          
        },
        created() {
            
        }
    }
</script>

<style>

</style>
