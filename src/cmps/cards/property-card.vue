<template>
  <section class="property-card">
    <div class="card">
      <div class="header" :style="{ 'background-color': card.color }">
        <p>SERTIFIKAT TANAH</p>
        <h1>{{ card.title }}</h1>
      </div>
      <p class="rent"><b> Harga Beli Rp.{{ card.ddp + card.bphtb + card.ppn }} </b></p>
      <div class="prices">
        <!-- card.pph + card.oneHouse -->
        <div class="container-price">
          <p class="house">DPP</p>
          <span class="price">Rp.{{ card.ddp }}</span>
        </div>
        <div class="container-price">
          <p class="house">BPHTB (5%)</p>
          <span class="price">Rp.{{ card.bphtb }}</span>
        </div>
        <div class="container-price">
          <p class="house">PPN (11%)</p>
          <span class="price">Rp.{{ card.ppn }}</span>
        </div>
        <div class="container-price">
          <p class="house"><b>Total Harga Rumah</b> </p>
          <span class="price"><b>Rp.{{ card.ddp + card.bphtb + card.ppn }}</b></span>
        </div>
        <!-- <br> -->
        <p class="rent"><b> Harga Sewa Rp.{{ card.pph + card.oneHouse }} </b></p>
        <div class="container-price">
          <p class="house">Dengan 1 Rumah</p>
          <span class="price">Rp.{{ card.oneHouse }}</span>
        </div>
        <div class="container-price">
          <p class="house">PPh Pasal 4 (2)(10%)</p>
          <span class="price">Rp.{{ card.pph }}</span>
        </div>
        <div class="container-price">
          <p class="house"><b>Total</b> </p>
          <span class="price"><b>Rp.{{ card.pph + card.oneHouse }}</b></span>
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
