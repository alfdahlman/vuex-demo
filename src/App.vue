<template>
  <div id="app">
    <Cockpit
      @onSort="sortNumbers"
    />
    <List
      :numbers="numbers"
      @onSelectNumber="selectNumber"
    />
    <Single
      :selected="selected"/>
  </div>
</template>

<script>
import Cockpit from './components/Cockpit.vue';
import List from './components/List.vue';
import Single from './components/Single.vue';

export default {
  name: 'App',
  components: {
    Cockpit,
    List,
    Single
  },
  data() {
    return {
      numbers: [1,2,3,4,5,6,7,8,9,10],
      selected: 0
    }
  },
  methods: {
    selectNumber(val){
      return this.selected = val;
    },
    sortNumbers(order){
      const numbers = [ ...this.numbers ];

      numbers.sort((a, b) => {
        return a - b;
      });

      if(order === 'desc'){
        numbers.reverse();
      }

      this.numbers = numbers;
    }
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;800&display=swap');

body{
  margin: 0;
}

#app {
  display: flex;
  flex-wrap: wrap;
  font-family: 'Open Sans', sans-serif;
}
</style>
