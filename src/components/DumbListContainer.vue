<template>
    <section>
        <dumb-list :values="values" @move-down="moveDown" @move-up="moveUp"></dumb-list>
    </section>
</template>

<script>
import DumbList from './DumbList';
import { getList } from '../services/listService';

export default {
	name: 'dumb-list-container',
	components: { DumbList },
	data() {
		return {
			values: [],
		};
	},
	methods: {
		moveDown(index) {
			this.values.splice(index + 1, 0, this.values.splice(index, 1)[0]);
		},
		moveUp(index) {
			this.values.splice(index - 1, 0, this.values.splice(index, 1)[0]);
		},
	},
	async created() {
		const values = await getList();
		this.isLoading = false;
		this.values = values;
	},
};
</script>

<style lang="scss" scoped>
</style>