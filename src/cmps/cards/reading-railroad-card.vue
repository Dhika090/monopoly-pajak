<template>
  <section class="reading-railroad-card">
    <div class="containerr">
      <div class="container-logo">
        <i class="logo drawing fa fa-subway"></i>
      </div>
      <h1 class="title">{{ card.title }}</h1>
      <br>
      <p class="title">Harga Beli {{ card.price }}</p>
      <div class="rent">
        <p>Harga menyewa</p>
        <p>Rp.{{ card.rent }}</p>
      </div>

      <div class="if">
        <p>Jika 2 R.R. dimiliki</p>
        <p>Rp.{{ card.ifTwoCards }}</p>
      </div>

      <div class="if">
        <p>Jika 3 R.R dimiliki</p>
        <p>Rp.{{ card.ifthreeCards }}</p>
      </div>
      <div class="if">
        <p>Jika 4 R.R dimiliki</p>
        <p>Rp{{ card.ifFourCards }}</p>
      </div>

      <div class="mortgage">
        <p>Nilai Hipotek</p>
        <p>Rp {{ card.mortgage }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    card: Object,
  },
  name: 'reading-railroad-card',
  data() {
    return {}
  },
  created() {},
  methods: {},
}
</script>

<style></style>
