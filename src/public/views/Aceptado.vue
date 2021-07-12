<script>
export default {
  components: {},
  setup: () => {
    return {};
  },
};
</script>

<template>
  <section class="bg-home bg-light d-flex align-items-center">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12">
          <div class="text-center">
            <div
              class="icon d-flex align-items-center justify-content-center bg-soft-primary rounded-circle mx-auto"
              style="height: 90px; width:90px;"
            >
              <img
                src="../../assets/img/iconos/logofuncion2.png"
                class="avatar height-150 "
                alt=""
              />
            </div>
            <div class="mt-100">
              <h1 class="my-4 fw-bold">Gracias Por Tu Solicitud</h1>
              <p class="text-muted para-desc mx-auto">
                Procesaremos de forma inmediata tu solicitud para confirmar el
                estado de tu préstamo. Muchas gracias por confiar en TeBanko!
              </p>
              <a class="btn btn-soft-primary mt-3">
                <router-link to="/">Volver a inicio</router-link></a
              >
            </div>
          </div>
        </div>
        <!--end col-->
      </div>
      <!--end row-->
    </div>
    <!--end container-->
  </section>
</template>

<style scoped>
.height-150 {
  height: 300px;
  width: auto;
}
</style>
