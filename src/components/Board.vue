<template>

  <div>
    <header>
      my Trello
    </header>
    <main>
      <p class="info-line">All: 0 tasks</p>
      <list v-for="(item, index) in lists"
            :key="item.id"
            :title="item.title"
            :listIndex="index"
      />
      <list-add/>
      <TestForm/>
    </main>
  </div>
</template>

<script>
import List from './List'
import ListAdd from './ListAdd'
import {mapState} from 'vuex'
import TestForm from "@/components/TestForm";


export default {
  components: {
    TestForm,
    ListAdd,
    List,
  },
  computed: {
    ...mapState([
      'lists'
    ]),
  },
}
</script>
