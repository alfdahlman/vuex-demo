<template>
  <div class="cockpit">
    <div class="sort-control">
      <span>Sort list:</span>
      <p
        @click="sortNumbers('asc')">asc</p>
      <p
        @click="sortNumbers('desc')">desc</p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'Cockpit',
  methods: {
    ...mapActions([
      'sortNumbers'
    ])
  }
}
</script>

<style scoped>
  .cockpit{
    width: 100%;
    background-color: #F5F5F5;
    padding: 10px 15px;
    border-bottom: 1px solid grey;
    display: flex;
    align-items: center;
  }

.sort-control {
    width: 20%;
    padding-right: 50px;
}

.sort-control p {
   display: inline-block;
   margin-left: 20px;
   cursor: pointer;
}


</style>
