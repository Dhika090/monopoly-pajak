<template>
  <section class="electric-cmp" :title="'Pajak Penerang Jalan'">
    <div>
      <p>Pajak Penerang Jalan 10%</p>
      <!-- <font-awesome-icon class="electric-logo" icon="bolt-lightning" /> -->
      <i class="drawing fa fa-lightbulb" aria-hidden="true"></i>
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
