<template>
  <div>
    <div class="col-12 text-center">
      <div class="section-title mb-4 pb-2">
        <h2 class="title mb-4 titlesection ">
          ¿Tienes preguntas?
        </h2>
      </div>
    </div>
    <!-- Payment and Price Start -->
    <div class="container mt-100 mt-60">
      <!--end row-->

      <div class="row ">
        <div class="card rounded border-0 shadow bgcolor">
          <div class="container">
            <div class="row ">
              <div class="col-md-6">
                <div class="card-body paddingcard">
                  <form>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Nombre Completo </label>
                          <input
                            name="name"
                            id="name"
                            type="text"
                            class="form-control font-weight-bold"
                            required
                            placeholder="Ingrese su nombre..."
                          />
                        </div>
                      </div>
                      <!--end col-->
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Correo electrónico </label>
                          <input
                            type="text"
                            min="0"
                            autocomplete="off"
                            id="cardnumber"
                            class="form-control font-weight-bold"
                            required
                            placeholder="Ingrese su correo electrónico..."
                          />
                        </div>
                      </div>
                      <!--end col-->
                      <div class="col-md-12">
                        <div class="form-group">
                          <label>Teléfono </label>
                          <input
                            type="number"
                            min="0"
                            autocomplete="off"
                            id="exdate"
                            class="form-control font-weight-bold"
                            required
                            placeholder="Ingrese su número de teléfono..."
                          />
                        </div>
                      </div>
                      <!--end col-->
                      <div class="col-md-12">
                        <div class="form-group">
                          <label>Mensaje</label>
                          <textarea
                            type="text"
                            min="0"
                            autocomplete="off"
                            id="cvv"
                            class="form-control font-weight-bold"
                            required
                            placeholder="Ingrese su mensaje..."
                          />
                        </div>
                      </div>
                      <!--end col-->
                    </div>
                    <!--end row-->
                    <div class="row">
                      <div class="col-sm-1">
                        <input
                          type="submit"
                          id="submit"
                          name="send"
                          class="submitBnt btn btn-primary"
                          value="Enviar Mensaje"
                        />
                      </div>
                      <!--end col-->
                    </div>
                    <!--end row-->
                  </form>
                  <!--end form-->
                </div>
              </div>
              <!--end col-->

              <div class="col-md-6 mt-4 mt-4 pt-4">
                <div class="row">
                  <div class="col-lg-12">
                    <h5>
                      Contáctanos ahora y programaremos una cita para ayudarte a
                      aclarar dudas.
                    </h5>
                  </div>

                  <div class="col-6">
                    <p>Santa Cruz</p>
                    <p>Radial 27 entre 3er y 4to anillo.</p>
                    <p>
                      christiansuarez@tebanko.com
                    </p>
                  </div>
                  <div class="col-6">
                    <p>Cochabamba</p>
                    <p>Calle Tiquipaya #145.</p>
                    <p>
                      pablohinojosa@tebanko.com
                    </p>
                  </div>
                </div>
              </div>
              <!--end col-->
            </div>
            <!--end row-->
          </div>
        </div>

        <!--end col-->
      </div>
      <!--end row-->
    </div>
    <!--end container-->
    <!-- Payment and Price End -->
  </div>
</template>

<style scoped>
.bgcolor {
  background-color: #202942;
}

p,
h3,
label,
h5 {
  color: white;
}

h3 {
  text-align: center;
}
input[type='text'] {
  height: 25px;
}

input[type='number'] {
  height: 25px;
}

textarea {
  height: 100px;
}

.bggradient {
  background: linear-gradient(
    90deg,
    rgba(44, 62, 80, 1) 0%,
    rgba(1, 66, 104, 1) 34%
  );
}

.paddingcard {
  padding-top: 3rem;
  padding-bottom: 3rem;
}
</style>
