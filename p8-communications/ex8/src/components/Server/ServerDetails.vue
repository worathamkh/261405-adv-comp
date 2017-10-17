<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Server Details component are currently not updated</p>
		<p v-else>Server {{ server.id }} is selected; its status is {{ server.status }}</p>
        <hr>
        <button @click="changeStatus('Critical')">Change to Critical</button>
        <button @click="changeStatus('Unknown')">Change to Unknown</button>
        <button @click="changeStatus('Normal')">Change to Normal</button>
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
			changeStatus(status) {
				if (!this.server) return;
				serverBus.$emit('serverChanged', Object.assign(this.server, { status: status }));
			}
        },
        created() {
			serverBus.$on('serverSelected', (server) => {
				this.server = server;
			});
        }
    }
</script>

<style>

</style>
