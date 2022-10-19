<template>
  　<!-- ★ここから追記 -->
  <form class="addlist" @submit.prevent="addList">
    <input v-model="title"
           type="text"
           class="text-input"
           placeholder="Add new list"
    >
    <button type="submit" class="add-button">
      Add
    </button>
  </form>
  <!-- ★ここまで追記 -->
</template>

<script>
export default {
  
  data: function() {
    return {
      title: '',
    }
  },
  methods: {
    addLisy:function () {
      this.$store.dispatch("addlist",{title: this.title})
      this.title = ""
    }
  },
}
</script>
