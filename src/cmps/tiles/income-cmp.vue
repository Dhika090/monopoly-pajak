<template>
  <section class="income-cmp" :title="'pajak penghasilan bayar'">
    <p>TELAT BAYAR</p>
    <p>PAJAK DENDA</p>
    <p>Rp.{{ tile.price }}</p>
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
  name: 'income-cmp',
  data() {
    return {}
  },
  created() {},
  methods: {},
}
</script>

<style></style>
