<template>
  <div id="app">
    <Cockpit />
    <List />
    <Single />
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
