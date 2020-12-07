<template>
  <div class="list">
    <ListItem
      v-for="( number, index ) in numbers"
      :key="index"
      :number="number"
      v-on="$listeners"
    />
  </div>
</template>

<script>
import ListItem from './subcomponents/ListItem.vue';

export default {
  name: 'List',
  components: {
    ListItem,
  },
  props: {
    numbers: {
      type: Array,
      default: () => []
    },
  }
}
</script>

<style scoped>
  .list{
    width: 50%;
  }
</style>
