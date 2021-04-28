<script>
import CorreoCard from './CorreoCard.vue';

export default {
  name: 'Footer',
  data() {
    return {};
  },
  components: { CorreoCard },
};
</script>

<template>
  <div>
    <!-- Footer Start -->
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-12 text-center">
            <p class="mt-4 footerlogo">
              <img
                src="../../assets/img/logo-tebanko.png"
                height="70"
                alt=""
                class="makewhite"
              />
            </p>
            <!-- <ul class="list-unstyled social-icon social mb-0 mt-4">
              <li class="list-inline-item">
                <a href="javascript:void(0)" class="rounded">
                  <facebook-icon
                    data-feather=""
                    class="fea icon-sm fea-social"
                  ></facebook-icon>
                </a>
              </li>
              <li class="list-inline-item ml-1">
                <a href="javascript:void(0)" class="rounded">
                  <instagram-icon
                    class="fea icon-sm fea-social"
                  ></instagram-icon>
                </a>
              </li>
              <li class="list-inline-item ml-1">
                <a href="javascript:void(0)" class="rounded">
                  <twitter-icon class="fea icon-sm fea-social"></twitter-icon>
                </a>
              </li>
              <li class="list-inline-item ml-1">
                <a href="javascript:void(0)" class="rounded">
                  <linkedin-icon class="fea icon-sm fea-social"></linkedin-icon>
                </a>
              </li>
            </ul> -->
            <!--end icon-->
          </div>
          <!--end col-->

          <div class="col-md-4 col-12 mobilepadfooter">
            <h3 class="text-light footer-head">Ubicación y Contacto</h3>

            <p class="mt-4">
              Radial 27 entre 3er y 4to anillo. Entre calle Valdivia y calle N4
            </p>

            <p class="mt-4">
              +(00591) 767 - 85558
            </p>

            <p class="mt-4">
              info@tebanko.com
            </p>
          </div>
          <!--end col-->
          <CorreoCard />
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </footer>
    <!--end footer-->
    <footer class="footer footer-bar">
      <div class="container text-center">
        <div class="row align-items-center">
          <div class="col-sm-6">
            <div class="text-sm-left">
              <p class="mb-0">
                © 2021 TeBanko. Website designed by @Mfleig
              </p>
            </div>
          </div>
          <!--end col-->

          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </footer>
    <!--end footer-->
  </div>
</template>

<style scoped>
.smalllogos {
  height: 35px;
}

.makewhite {
  filter: brightness(0) invert(1);
}

h3 {
  font-size: 25px !important;
}
</style>
