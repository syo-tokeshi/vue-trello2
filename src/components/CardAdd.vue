<template>
  <div>
    <form :class="classList"  @submit.prevent="addCardToList">
      <input v-model="body"
             type="text"
             class="text-input"
             placeholder="Add new card"
             @focusin="startEditing"
             @focusout="finishEditing"
      />
      <button type="submit" class="add-button">
        Add
      </button>
<!--      <button v-on:keyup.enter="alert"></button>-->
      <textarea v-on:click.shift="alert"></textarea>
    </form>
  </div>
</template>
<script>
export default {
  name: 'CardAdd',
  props: {
    listIndex: {
      type: Number,
      required: true,
    }
  },
  data: function() {
    return {
      body: 'ne',
      isEditing: false,
      count: 1
    }
  },
  methods: {
    addCardToList() {
      this.$store.dispatch("addCardToList",{body: this.body,listIndex: this.listIndex})
      this.body = ""
    },
    startEditing: function() {
      this.isEditing = true
    },
    finishEditing: function() {
      this.isEditing = false
    },
    alert: function() {
      console.log("yes");
      alert("neko");
    },
  },
  computed: {
    classList() {
      const classList = ['addcard']
      if (this.isEditing) {
        classList.push('active')
      }
      return classList
    },
  },
}
</script>