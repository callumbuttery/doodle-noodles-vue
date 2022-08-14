<template>
  <div class="home">
    <Carousel/>
    <Minter/>
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from '@/components/Carousel.vue'
import Minter from '@/components/Minter.vue'

export default {
  name: 'Home',
  components: {
    Carousel,
    Minter,
  }
}
</script>
