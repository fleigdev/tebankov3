<script>
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/material.css';

export default {
  name: 'CalculateCard',
  data() {
    return {
      value: 1500,
      totalValue: 20,
    };
  },
  components: { VueSlider },
};
</script>

<template>
  <div class="container">
    <div class="row justify-content-center cardsectionheight mobilepadding">
      <div class="col-md-6 col-12 mt-4"></div>
      <div class="col-md-6 col-12 mt-4 movetopcard pt-120">
        <div
          class="card pricing-rates business-rate shadow bg-light rounded text-center "
        >
          <div class="card-body py-5">
            <h2 class="title mb-4 fw-900 cardtitle text-center">
              ¿Cuánto dinero necesitas?
            </h2>
            <div class="d-flex justify-content-center mb-4 monto">
              <span class="h4 mb-0 mt-3">$</span>
              <span class="price  mb-0 fw-800">{{ value }}</span>
            </div>
            <vue-slider v-model="value" min="1500" max="2000" />

            <ul class="list-unstyled mb-0 pl-0">
              <li class="text-muted mb-0 mt-4 hashtag">
                Cuota mensual por
                <span class="numberMonth">6</span> meses
              </li>
              <li class=" mt-4 fw-800 cuota">
                <span class="text-primary mr-2 "></span>
                $ {{ (value * 0.03).toFixed(2) }}
              </li>
            </ul>
            <!--  <router-link to="/solicitud">
              <a href="javascript:void(0)" class="btn btn-primary mt-4"
                >Solicítalo Aquí</a
              >
            </router-link> -->
            <router-link to="/solicitud">
              <img
                src="../../assets/img/boton.png"
                class="greenbtn mt-4 "
                alt=""
              />
            </router-link>
            <div class="h6 text-muted pt-2 ">
              <span class="text-primary h6 mr-2"></span>
              <div class="linea">
                <a href="javascript:void(0)">Ver términos y condiciones</a>
              </div>
              <div class="smalltext">
                *Ejemplo de cuota calculada para una línea de crédito de 5.000 $
                a pagar en 36 meses y con una retirada del importe seleccionado.
                ¡OJO! Te haremos una oferta personalizada, por lo que tu importe
                máximo, TAE, plazo de amortización, y cuota pueden ser distintos
                al del ejemplo.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.errorc {
  color: red;
}

.numberMonth {
  font-weight: 500;
  color: #666666;
  font-size: 25px;
}

.cardtitle {
  font-size: 35px;
  font-weight: 900;
  color: #666666;
}

.cardsectionheight {
  height: 250px;
}

.zoom {
  transition: transform 0.5s; /* Animation */
}

.zoom:hover {
  transform: scale(
    1.2
  ); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}

.cuota {
  font-size: 35px;
  color: #666666;
}

.monto {
  font-size: 50px;
  color: #1c57df;
}

.movetopcard {
  top: -235px;
}

.moverightcard {
  right: -310px;
}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */

  .mobilepadding {
    padding-top: 600px;
  }

  .pt-120 {
    padding-top: 120px;
  }
}

.smalltext {
  font-size: 10px;
}

.fw-800 {
  font-weight: 800;
}

.greenbtn {
  width: 250px;
  height: auto;
}

.hashtag {
  font-size: 20px;
  color: #161c2d;
}
</style>
