<template>
  <div
    class="list-item"
    @click="selectNumber(number)"
  >
    <p>{{ number }}</p>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'ListItem',
  props: {
    number: {
      type: Number,
      required: true
    }
  },
  methods: {
    ...mapActions([
      'selectNumber'
    ])
  }
}
</script>

<style scoped>
  .list-item{
    border-bottom: 1px solid grey;
    cursor: pointer;
    transition: background-color .2s;
  }

  .list-item:hover{
    background-color: #F5F5F5;
  }

  P{
    display: inline-block;
    margin: 0;
    padding: 10px 15px;
  }

  .episode{
  }
  .title{
  }
  .date{
    float: right;
  }
</style>
