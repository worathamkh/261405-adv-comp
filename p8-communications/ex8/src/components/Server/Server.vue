<template>
    <li
            class="list-group-item"
            style="cursor: pointer"
            @click="selectServer">
		Server {{ id }}
    </li>
</template>

<script>
    import { serverBus } from '../../main';

    export default {
        props: ['id', 'status'],    // get passed data
        methods: {
            selectServer() {
                // send data to ServerDetail
				serverBus.$emit('serverSelected', {
					id: this.id,
					status: this.status
				});
            }
        }
    }
</script>

<style>

</style>
