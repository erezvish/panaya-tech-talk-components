<template>
    <section>
        <dumb-list :values="values" :isLoading="this.isLoading"></dumb-list>
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
	computed: {
		isLoading() {
			return !this.values.length;
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