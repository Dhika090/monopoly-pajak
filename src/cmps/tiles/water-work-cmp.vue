<template>
  <section class="water-work-cmp">
    <div class="containerr" :title="'Pajak Rokok'">
      <span class="waterwoks"> Pajak Rokok (10%) </span>
      <p>Dpp Rp.1500 <br> pajakRP.150 </p>
      <i class="drawing fa fa-smoking"></i>
    </div>
    <p class="price">Rp{{ tile.price }}</p>

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
  name: 'water-work-cmp',
  data() {
    return {}
  },
  created() {},
  methods: {},
}
</script>

<style></style>
