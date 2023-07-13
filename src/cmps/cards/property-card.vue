<template>
  <section class="property-card">
    <div class="card">
      <div class="header" :style="{ 'background-color': card.color }">
        <p>SERTIFIKAT TANAH</p>
        <h1>{{ card.title }}</h1>
      </div>
      <p class="rent">Menyewa {{ card.rent }}Rp.</p>
      <div class="prices">
        <div class="container-price">
          <p class="house">Dengan 1 Rumah</p>
          <span class="price">{{ card.oneHouse }}Rp.</span>
        </div>
        <div class="container-price">
          <p class="house">Dengan 2 Rumah</p>
          <span class="price">{{ card.twoHouses }}Rp.</span>
        </div>
        <div class="container-price">
          <p class="house">Dengan 3 Rumah</p>
          <span class="price">{{ card.threeHouses }}Rp.</span>
        </div>
        <div class="container-price">
          <p class="house">Dengan 1 Rumah</p>
          <span class="price">{{ card.fourHouses }}Rp.</span>
        </div>
      </div>
      <p class="hotel">Dengan HOTEL {{ card.hotel }}Rp.</p>
      <p class="mortgage">Nilai Hipotek {{ card.mortgage }}Rp.</p>
      <p class="house-cost">Biaya rumah {{ card.houseCost }}Rp setiap.</p>
      <p class="hotel-cost">
        Hotel, {{ card.hotelCostNotCalc }}Rp ditambah 4 rumah.
      </p>
      <p class="description">
        Jika seorang pemain memiliki SEMUA lot Grup Warna apa pun, sewanya adalah <br />
        Berlipat ganda pada Lot yang Tidak Ditingkatkan di grup itu.
      </p>
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
