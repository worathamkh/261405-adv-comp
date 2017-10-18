<template>
    <li
            class="list-group-item"
            style="cursor: pointer"
            @click="selectServer">
		Server {{ id }} is currently <span :class="'label label-' + labelType">{{ status }}</span>
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
            },
        },
		computed: {
			labelType: function() {
				switch (this.status.toLowerCase()) {
					case 'normal': return 'success';
					case 'critical': return 'danger';
				}
				return 'default';
			}
		}
    }
</script>

<style>

</style>
