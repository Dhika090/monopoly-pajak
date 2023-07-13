<template>
  <section class="reading-railroad-card">
    <div class="containerr">
      <div class="container-logo">
        <i class="logo drawing fa fa-subway"></i>
      </div>
      <h1 class="title">{{ card.title }}</h1>
      <div class="rent">
        <p>Menyewa</p>
        <p>{{ card.rent }}Rp.</p>
      </div>

      <div class="if">
        <p>Jika 2 R.R. dimiliki</p>
        <p>{{ card.ifTwoCards }}Rp.</p>
      </div>

      <div class="if">
        <p>Jika 3 R.R dimiliki</p>
        <p>{{ card.ifthreeCards }}Rp.</p>
      </div>
      <div class="if">
        <p>Jika 4 R.R dimiliki</p>
        <p>{{ card.ifFourCards }}Rp</p>
      </div>

      <div class="mortgage">
        <p>Nilai Hipotek</p>
        <p>{{ card.mortgage }}Rp</p>
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
