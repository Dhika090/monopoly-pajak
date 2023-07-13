<!-- <template>
  <section class="parking-cmp" title="Start">
    <div class="containerr">
      <span class="free">Free</span>
      <i class="drawing fa fa-car"></i>
      <span class="parking">Parking!</span>
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
</template> -->

<template>
  <section class="start-cmp">
    <div class="conainer">
      <div class="title" :title="tile.name">
        <p>
          {{ tile.name }}
        </p>
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
    </div>
  </section>
</template>

<script>
export default {
  props: {
    tile: Object,
  },
  name: 'start-cmp',
  
  // name: 'parking-cmp',
  data() {
    return {}
  },
  created() {},
  methods: {},
}
</script>

<style></style>