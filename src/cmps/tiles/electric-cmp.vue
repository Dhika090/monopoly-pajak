<template>
  <section class="electric-cmp" :title="'Electric-company'">
    <div>
      <p>Pajak Penerang Jalan</p>
      <!-- <font-awesome-icon class="electric-logo" icon="bolt-lightning" /> -->
    </div>
    <p>Pajak{{ tile.price }}$</p>

    <div v-if="tile.players.length" class="players">
      <div class="player" v-for="player in tile.players" :key="player">
        <!-- <font-awesome-icon
          :style="{ color: player.colorToken }"
          class="token-player"
          icon="chess-pawn"
        /> -->
      </div>
    </div>
    <!-- <p> Rp.1.500</p> -->
  </section>
</template>

<script>
export default {
  props: {
    tile: Object,
  },
  name: 'electric-cmp',
  data() {
    return {}
  },
  created() {},
  methods: {},
}
</script>

<style></style>
