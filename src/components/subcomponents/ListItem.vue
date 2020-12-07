<template>
  <div
    class="list-item"
    @click="$emit('onSelectNumber', number)"
  >
    <p>{{ number }}</p>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    number: {
      type: Number,
      required: true
    }
  },
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
