
<template>
  <Carousel :settings="settings" :autoplay="3000" :wrap-around="true" :breakpoints="breakpoints">
    <Slide v-for="slide in portadas" :key="slide">
      <div class="carousel__item">
    <img :src="slide.imagen" :class="slide.clase">
    </div>
    </Slide>

    <template #addons>
      <Pagination />
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide, Pagination } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
export default defineComponent({
  name: 'Carrusel',
  components: {
    Pagination,
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: 'center',
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 3,
        snapAlign: 'start',
      },
      // 1024 and up
      1024: {
        itemsToShow: 1,
        snapAlign: 'center',
      },
    },

    portadas: [
        {
          informacion: "imagen 1",
          imagen: "src/Imagenes/Ejemplo-1.jpg",
          clase: "is-128x128",
        },
        {
          informacion: "imagen 2",
          imagen: "src/Imagenes/Ejemplo-2.jpg",
          clase: "is-128x128",
        },
        {
          informacion: "Imagen 3",
          imagen: "src/Imagenes/Ejemplo-3.jpeg",
          clase: "is-128x128",
        },
        {
          informacion: "Imagen 4",
          imagen: "src/Imagenes/Ejemplo-4.jpeg",
          clase: "is-128x128",
        },
        {
          informacion: "Imagen 5",
          imagen: "src/Imagenes/logo.svg",
          clase: "is-128x128",
        }

      ]
  }),
})

</script>

<style>
.carousel__item {
  min-height: 200px;
  height:700px;
  width: 100%;
  background-color: #03ddff;
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 2px solid #03ddff;
  border-radius: 50%;
}
</style>
