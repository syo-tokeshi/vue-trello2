<template>
  <div id="app">
    <navi/>

    <!-- ★Boardコンポーネント呼び出し -->
    <board />
  </div>
</template>

<script>
// ★インポート文を追加
import Board from './components/Board.vue'
import Navi from './components/Navi.vue'
export default {
  name: 'app',
  components: {
    Navi,
    // ★コンポーネントに登録する
    Board
  }
}
</script>