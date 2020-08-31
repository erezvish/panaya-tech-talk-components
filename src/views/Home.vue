<template>
    <div class="home">
        <h1>{{msg}}</h1>
        <button @click="toggleList()">Toggle</button>
        <div class="lists-container display-flex justify-center">
            <smart-list v-if="showSmart"></smart-list>
            <dumb-list-container v-else></dumb-list-container>
        </div>
    </div>
</template>

<script>
import DumbListContainer from '@/components/DumbListContainer';
import SmartList from '@/components/SmartList';

export default {
	name: 'Home',
	components: {
		DumbListContainer,
		SmartList,
	},
	data() {
		return {
			msg: `Let's talk Dumb & Smart Components`,
			showSmart: true,
		};
	},
	methods: {
		toggleList() {
			this.showSmart = !this.showSmart;
		},
	},
};
</script>
