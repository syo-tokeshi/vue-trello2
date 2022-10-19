<template>
  <!-- ここから追加 -->
  <div>
    <header>
      my Trello
    </header>
    <main>
      <p class="info-line">All: 0 tasks</p>
      <list-add/>
      <input v-model="message">
      <p>{{message}}</p>
    </main>
  </div>
  <!-- ここまで追加 -->
</template>

<script>
import ListAdd from "@/components/ListAdd";
export default {
  components: {ListAdd},
  data() {
    return {
      message: "te"
    }
  },
}

</script>
