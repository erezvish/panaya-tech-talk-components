<template>
    <section class="dumb-list">
        <h3>This is a dumb list</h3>
        <div>
            <h4 v-if="isLoading">Loading....</h4>
            <ul class="list-layout">
                <li class="display-flex align-center" v-for="(value, index) in values">
                    <span class="item-value">{{value}}</span>
                    <div class="arrows-group">
                        <span
                            v-if="index < values.length - 1"
                            class="down-arrow"
                            @click="moveDown(index)"
                        >▼</span>
                        <span v-if="index > 0" class="up-arrow" @click="moveUp(index)">▲</span>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
	name: 'dumb-list',
	props: {
		values: {
			type: Array,
			required: true,
		},
	},
	computed: {
		isLoading() {
			return !this.values.length;
		},
	},
	methods: {
		moveDown(index) {
			this.$emit('move-down', index);
		},
		moveUp(index) {
			this.$emit('move-up', index);
		},
	},
};
</script>

<style lang="scss" scoped>
ul.list-layout {
	padding-inline-start: 0;
	li {
		list-style-type: none;
		height: 2rem;
		border-radius: 3px;
		background: pink;
		border: 1px solid black;
		margin: 0.2rem;
		.item-value {
			margin-left: 0.5rem;
		}
		.arrows-group {
			margin-left: auto;
			span {
				padding-right: 0.2rem;
				cursor: pointer;
			}
		}
	}
}
</style>