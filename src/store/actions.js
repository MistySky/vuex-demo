import * as types from './mutation-types.js'

console.log(types)
export default {
	add: ({commit}) => commit(types.ADD),
	del: ({commit}) => commit(types.DEL),
} 