<template>
    <section class="display-flex flex-column align-center">
        <h1>{{msg}}</h1>
        <dumb-list
            :values="items"
            @move-down="moveDown"
            @move-up="moveUp"
        ></dumb-list>
    </section>
</template>

<script>
import DumbList from '@/components/DumbList.vue';
export default {
	name: 'SecondView',
	components: {
		DumbList,
	},
	data() {
		return {
			msg: `A Whole New View`,
			items: [
				'erez',
				'went',
				'to',
				'the',
				'beach',
				'and',
				'drank',
				'scotch',
			],
		};
	},
	methods: {
		moveDown(index) {
			this.items.splice(index + 1, 0, this.items.splice(index, 1)[0]);
		},
		moveUp(index) {
			this.items.splice(index - 1, 0, this.items.splice(index, 1)[0]);
		},
	},
};
</script>
