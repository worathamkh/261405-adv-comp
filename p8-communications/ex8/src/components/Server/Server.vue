<template>
    <li
            class="list-group-item"
            style="cursor: pointer"
            @click="serverSelected">
        Server #X
    </li>
</template>

<script>
    import { serverBus } from '../../main';

    export default {
        props: ['xxxx'],    // get passed data
        methods: {
            serverSelected() {
                // send data to ServerDetail
            }
        }
    }
</script>

<style>

</style>
