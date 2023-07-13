<template>
  <section>
    <div class="links">
      <router-link to="/">dashboard </router-link>|
      <!-- <router-link to="/board/ + board._id">board</router-link>| -->
      <!-- <router-link to="/board/player">player</router-link>| -->
      <router-link to="/about">card </router-link>|
      <p @click="clear">bersihkan papan</p>
    </div>
    <router-view />
    <!-- <main>
    </main> -->
  </section>
</template>

<script>
export default {
  name: 'App',
  created() {
    // const boardId = 'b101'
    // this.$store.dispatch({ type: 'getBoardById', boardId })
  },
  computed: {
    board() {
      return this.$store.getters.board
    },
  },
  methods: {
    clear() {
      console.log('clearing')
      localStorage.clear()
    },
  },
  components: {},
}
</script>

<style>
.links {
  left: 3rem;
  top: 1rem;
  width: 10rem;
  text-align: center;
  background-color: #f29126;
  margin: 3px;
  padding: 7px;
  position: fixed;
  z-index: 5;
  border-radius: 10px;
}
a {
  color: rgba(0, 0, 0, 0.715);
}
p {
  cursor: pointer;
}
.loading {
  height: 100vh;
  display: flex;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
