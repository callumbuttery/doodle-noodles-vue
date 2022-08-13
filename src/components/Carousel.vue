<template>
  <div class="pimaryCarouselContainer">
    <div class="secondaryCarouselContainer">
      <v-carousel>
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script>
export default {
    name: "Carousel",
    data () {
      return {
        items: [
          {
            src: require('../assets/imgs/carousel/1.png'),
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
      }
    },
  }
</script>

<style>
.pimaryCarouselContainer {
    background-color: #FF322C;
    padding-top: 100px;
    padding-bottom: 100px;
}

.secondaryCarouselContainer{
    max-width: 60%;
    margin: 0 auto;
}
</style>
