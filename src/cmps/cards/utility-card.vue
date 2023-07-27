<template>
  <section
    class="utilitie-card"
    :style="{ 'background-color': card.background }"
  >
    <div class="containerr">
      <div class="container-logo">

      <!-- <i class="drawing fa fa-smoking"
      v-if="card.title === 'Pajak Smoking'"
      ></i> -->
        <!-- <font-awesome-icon
          v-if="card.title === 'Waterworks'"
          class="logo"
          icon="faucet-drip"
        /> -->
        <!-- <font-awesome-icon
          v-if="card.title === 'Electric Company'"
          class="logo"
          icon="bolt-lightning"
        /> -->
      </div>
      <h1 class="title">{{ card.title }}</h1>
      <div class="description">
        <p>
          Jika satu "Utilitas" dimiliki <br />
          sewa adalah 4 kali jumlah <br />
          ditunjukkan pada dadu.
        </p>
        <p>
          Jika kedua "Utilitas" adalah <br />
          sewa yang dimiliki adalah 10 kali lipat <br />
          jumlah yang ditunjukkan pada dadu.
        </p>
      </div>
      <div class="mortgage">
        <p>Nilai Hipotek</p>
        <p class="price">Rp{{ card.price }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    card: Object,
  },
  name: 'waterwork-card-cmp',
  data() {
    return {}
  },
  created() {},
  methods: {},
}
</script>

<style></style>
