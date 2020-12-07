<template>
  <div class="single">
    <div>
      <h2 v-if="selected > 0">{{ selected }}</h2>
      <p v-else>No number selected</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Single',
  computed: {
    ...mapGetters([
      'selected'
    ])
  }
}
</script>

<style scoped>
  .single{
    width: 50%;
    box-sizing: border-box;
    padding: 10px 30px;
    border-left: 1px solid grey;
    min-height: 500px;
  }

  div{
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
</style>
