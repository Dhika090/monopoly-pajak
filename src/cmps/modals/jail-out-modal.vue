<template>
  <section class="jail-out-modal">
    <div class="container">
      <div>
        <p>{{ currPLayer.name }},apakah Anda ingin membayar Rp.100 atau mencoba dua kali lipat?</p>
      </div>
      <div>
        <button @click="tryDouble">Coba gandakan!</button>
        <button @click="payToJail">Bayar RP.100</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    card: Object,
  },
  name: 'jail-out-modal',
  data() {
    return {}
  },
  computed: {
    currPLayer() {
      return this.$store.getters.currPLayer
    },
  },
  created() {},
  methods: {
    tryDouble() {
      this.$emit('tryDouble')
    },
    payToJail() {
      this.$emit('payToJail')
    },
  },
  components: {},
}
</script>

<style></style>
