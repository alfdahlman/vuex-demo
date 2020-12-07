<template>
  <div class="list">
    <ListItem
      v-for="( number, index ) in numbers"
      :key="index"
      :number="number"
    />
  </div>
</template>

<script>
import ListItem from './subcomponents/ListItem.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'List',
  components: {
    ListItem,
  },
  computed: {
    ...mapGetters([
      'numbers'
    ])
  }
}
</script>

<style scoped>
  .list{
    width: 50%;
  }
</style>
