<template>
    <section class="smart-list">
        <h3>This is a smart list</h3>
        <div>
            <h4 v-if="isLoading">Loading....</h4>
            <ul class="list-layout">
                <li class="display-flex align-center" v-for="(value, index) in values">
                    <span class="item-value">{{value}}</span>
                    <div class="arrows-group">
                        <span v-if="index < values.length - 1" class="down-arrow" @click="moveDown(index)">▼</span>
                        <span v-if="index > 0" class="up-arrow" @click="moveUp(index)">▲</span>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
import { getList } from '../services/listService';
export default {
	name: 'smart-list',
	data() {
		return {
			isLoading: true,
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
ul.list-layout {
	padding-inline-start: 0;
	li {
		list-style-type: none;
		height: 2rem;
		border-radius: 3px;
		background: cyan;
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