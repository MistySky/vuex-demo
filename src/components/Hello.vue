<template>
  <div class="hello">
    <h1>vuex-demo2</h1>
    <h2>Counter</h2>
    <button @click="add">+</button>
    count: {{count}} {{evenOrOdd}}
    <button @click='del'>-</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'count',
      'evenOrOdd'
    ])
  },
  methods:mapActions([
    'add',
    'del'
  ])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
