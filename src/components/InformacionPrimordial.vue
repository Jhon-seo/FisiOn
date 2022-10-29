<script>
export default {
  data() {
    return {

      portadas: [
        {
          informacion: "Halgo",
          imagen: "src/Imagenes/Logo.jpg",
          foco: false,
        },
        {
          informacion: "Halgo",
          imagen: "src/Imagenes/HOM.jpg",
          foco: false,
        },
        {
          informacion: "Halgo",
          imagen: "src/Imagenes/SW.jpg",
          foco: false,
        },
        {
          informacion: "Halgo",
          imagen: "src/Imagenes/AF.jpg",
          foco: false,
        },{
          informacion: "Halgo",
          imagen: "src/Imagenes/SI.jpg",
          foco: false,
        },{
          informacion: "Halgo",
          imagen: "src/Imagenes/SPI.jpg",
          foco: false,
        }

      ]
    }
  }, methods: {
    efecto(event) {
    }
  }
}
</script>

<template>
<div class="container section is-medium">
			<div class=" columns is-multiline is-variable">
				<div v-for="informacionDePortada in portadas" class="column is-half">

					<div class="card">
						<div class="card-image imagen">
							<figure class="image is-square">
								<img :src="informacionDePortada.imagen" alt="Placeholder image">
							</figure>
						</div>
						<p class="card-content">
							{{  informacionDePortada.informacion  }}
						</p>
					</div>
				</div>
			</div>
		</div> 
</template>