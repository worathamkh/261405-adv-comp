<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <ul class="list-group">
            <!-- passing each server data to Server component -->
            <!-- https://vuejs.org/v2/guide/list.html#key -->
            <!-- https://vuejs.org/v2/guide/list.html#v-for-with-a-Component -->
            <app-server
                v-for="server in servers"
                :key="server.id"
                v-bind:id="server.id"
                v-bind:status="server.status"
				>
			</app-server>
            </ul>
        </ul>
    </div>
</template>

<script>
import Server from './Server.vue';

export default {
    data: function() {
        return {
            servers: [
                { id: 1, status: 'Normal'},
                { id: 2, status: 'Critical'},
                { id: 3, status: 'Unknown'},
                { id: 4, status: 'Normal'},
                { id: 5, status: 'Normal'},
                { id: 6, status: 'Critical'},
                { id: 7, status: 'Normal'}
            ]
        };
    },
    components: {
        appServer: Server
    },
	created: {
		serverChanged(props) {
			let { id, status } = props;
			let pos = this.servers.findIndex(s => s.id === id);
			if (pos === -1) return;
			this.servers[pos].status = status;
		}
	}
}
</script>

<style>

</style>
