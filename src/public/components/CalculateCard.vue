<script>
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/antd.css';
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
      <div class="col-md-6 col-12 mt-4 movetopcard ">
        <div
          class="card pricing-rates business-rate shadow bg-light rounded text-center "
        >
          <div class="card-body py-5">
            <h2 class="title text-uppercase mb-4">
              ¿Cuánto dinero necesitas?
            </h2>
            <div class="d-flex justify-content-center mb-4">
              <span class="h4 mb-0 mt-2">$</span>
              <span class="price h1 mb-0">{{ value }}</span>
            </div>
            <vue-slider v-model="value" min="1500" max="2000" />

            <ul class="list-unstyled mb-0 pl-0">
              <li class="h5 text-muted mb-0">
                <span class="text-primary h5 mr-2"></span>Cuota mensual por 6
                meses
              </li>
              <li class="h6 text-muted mb-0">
                <span class="text-primary h5 mr-2"></span>
                $ {{ (value * 0.03).toFixed(2) }}
              </li>
            </ul>
            <a href="javascript:void(0)" class="btn btn-primary mt-4"
              >¡Solicítalo Aquí!</a
            >
            <div class="h6 text-muted pt-4 ">
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

.cardsectionheight {
  height: 250px;
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
}

.smalltext {
  font-size: 10px;
}
</style>
