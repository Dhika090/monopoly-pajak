<template>
  <section class="luxury-tax-cmp" :title="'Pajak Parkir'">
    <div class="containerr">
      <span class="luxury">Pajak Parkir</span>
      <span class="tax">(20%)</span>
      <!-- <div class="logoo">f</div> -->
    </div>
    <div class="footer">
      <p>DPP Rp.1000</p>
      <p>Pajak Rp{{ tile.price }}</p>
    </div>

    <div v-if="tile.players.length" class="players">
      <div class="player" v-for="player in tile.players" :key="player">
        <font-awesome-icon
          :style="{ color: player.colorToken }"
          class="token-player"
          icon="chess-pawn"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    tile: Object,
  },
  name: 'luxury-tax-cmp',
  data() {
    return {}
  },
  created() {},
  methods: {},
}
</script>

<style></style>
