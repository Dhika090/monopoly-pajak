<template>
  <section class="property-card">
    <div class="card">
      <div class="header" :style="{ 'background-color': card.color }">
        <p>SERTIFIKAT TANAH</p>
        <h1>{{ card.title }}</h1>
      </div>
      <p class="rent">Harga Sewa Rp.{{ card.pph + card.oneHouse }}</p>
      <div class="prices">
        <div class="container-price">
          <p class="house">Dengan 1 Rumah</p>
          <span class="price">Rp.{{ card.oneHouse }}</span>
        </div>
        <div class="container-price">
          <p class="house">PPh Pasal 4 (2)(10%)</p>
          <span class="price">Rp.{{ card.pph }}</span>
        </div>
        <div class="container-price">
          <p class="house">Total</p>
          <span class="price">Rp.{{ card.pph + card.oneHouse }}</span>
        </div>
        <br>
        <div class="container-price">
          <p class="house">Dengan 2 Rumah</p>
          <span class="price">Rp.{{ card.twoHouses }}</span>
        </div>
        <div class="container-price">
          <p class="house">Dengan 3 Rumah</p>
          <span class="price">Rp.{{ card.threeHouses }}</span>
        </div>
        <div class="container-price">
          <p class="house">Dengan 4 Rumah</p>
          <span class="price">Rp.{{ card.fourHouses }}</span>
        </div>
      </div>
      <p class="hotel">Dengan HOTEL Rp.{{ card.hotel }}</p>
      <p class="mortgage">Nilai Hipotek Rp.{{ card.mortgage }}</p>
      <p class="house-cost">Biaya rumah Rp setiap.{{ card.houseCost }}</p>
      <p class="hotel-cost">
        Hotel, Rp {{ card.hotelCostNotCalc }}ditambah 4 rumah.
      </p>
      <!-- <p class="description">
        Jika seorang pemain memiliki SEMUA lot Grup Warna apa pun, sewanya adalah <br />
        Berlipat ganda pada Lot yang Tidak Ditingkatkan di grup itu.
      </p> -->
    </div>
  </section>
</template>

<script>
export default {
  props: {
    card: Object,
  },
  name: 'property-cmp',
  data() {
    return {}
  },
  created() {},
  methods: {},
}
</script>

<style></style>
