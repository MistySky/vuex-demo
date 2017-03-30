import {
	ADD,
	DEL
} from './mutation-types.js'
import getters from './getters'


const state = {
	count: 1
};

const mutations = {
	[ADD](state) {
		state.count++;
	},
	[DEL](state) {
		state.count--;
	}
}

export default {
	state,
	mutations,
	getters
}