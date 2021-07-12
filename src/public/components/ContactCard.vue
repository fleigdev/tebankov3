<script>
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import { reactive, ref } from 'vue';
import axios from 'axios';
import { UsersIcon } from 'vue-feather-icons';

export default {
  components: {
    //Datepicker,
    Form,
    Field,
    ErrorMessage,
  },
  setup: () => {
    const formValues = reactive({});
    let success = ref(true);
    let danger = ref(true);
    let loading = ref(true);
    let hideBtn = ref(false);

    const formchange = ref(null);
    const schema = yup.object().shape({
      nombreCompleto: yup
        .string()
        .required('Porfavor ingrese su nombre completo'),
      correoElectronico: yup
        .string()
        .required('Porfavor ingresar su correo')
        .email('Porfavor ingrese un correo válido'),
      telefono: yup
        .string()
        .required('Porfavor ingrese su número de teléfono')
        .min(3, 'Porfavor ingresar un teléfono válido')
        .max(9, 'Porfavor ingresar un teléfono válido'),
      mensaje: yup.string().required('Porfavor ingrese su mensaje'),
    });

    const submit = async () => {
      console.log('Sending....');
      loading.value = false;
      hideBtn.value = true;
      try {
        await axios.post('contact', {
          name: formValues.nombreCompleto,
          email: formValues.correoElectronico,
          phone: formValues.telefono,
          message: formValues.mensaje,
        });

        success.value = false;
        danger.value = true;
        await formchange.value.resetForm();
        loading.value = true;
        hideBtn.value = false;
        console.log('SENT. Loading ended.');
      } catch (error) {
        console.log(error);
        danger.value = false;
        success.value = true;
        loading.value = true;
        hideBtn.value = false;
        console.log('DID NOT SEND. Loading ended.');
      }
    };

    function onSubmit() {
      alert(JSON.stringify(formValues, null, 2));
    }
    return {
      schema,
      onSubmit,
      submit,
      formchange,
      formValues,
      success,
      danger,
      loading,
      hideBtn,
      UsersIcon,
    };
  },
};
</script>

<template>
  <div>
    <div class="col-12 text-center">
      <div class="section-title mb-4 pb-2">
        <h2 class="mb-4 titlesection titlecontact titles">
          ¿Tienes preguntas?
        </h2>
      </div>
    </div>
    <!-- Payment and Price Start -->
    <div class="container mt-100 mt-60">
      <!--end row-->

      <div class="row ">
        <div class="card rounded border-0 shadow bgcolor mobilecardheight">
          <div class="container">
            <div class="row ">
              <div class="col-md-6">
                <div class="card-body paddingcard">
                  <Form
                    ref="formchange"
                    @submit="submit"
                    :validation-schema="schema"
                  >
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Nombre Completo </label>
                          <Field
                            name="nombreCompleto"
                            id="nombreCompleto"
                            type="text"
                            class="form-control font-weight-bold"
                            ref="form"
                            required
                            placeholder="Ingrese su nombre..."
                            v-model="formValues.nombreCompleto"
                          />

                          <ErrorMessage class="errorc" name="nombreCompleto" />
                        </div>
                      </div>
                      <!--end col-->
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Correo electrónico </label>
                          <Field
                            name="correoElectronico"
                            id="correoElectronico"
                            type="text"
                            class="form-control font-weight-bold"
                            placeholder="Ingrese su correo electrónico"
                            v-model="formValues.correoElectronico"
                          />
                          <ErrorMessage
                            class="errorc"
                            name="correoElectronico"
                          />
                        </div>
                      </div>
                      <!--end col-->
                      <div class="col-md-12">
                        <div class="form-group">
                          <label>Teléfono </label>
                          <Field
                            name="telefono"
                            id="telefono"
                            type="number"
                            class="form-control font-weight-bold"
                            placeholder="Ingrese su número de teléfono..."
                            v-model="formValues.telefono"
                          />
                          <ErrorMessage class="errorc" name="telefono" />
                        </div>
                      </div>
                      <!--end col-->
                      <div class="col-md-12">
                        <div class="form-group">
                          <label>Mensaje</label>

                          <Field
                            as="textarea"
                            type="text"
                            name="mensaje"
                            id="mensaje"
                            class="form-control font-weight-bold"
                            required
                            placeholder="Ingrese su mensaje..."
                            v-model="formValues.mensaje"
                          />
                          <ErrorMessage class="errorc" name="mensaje" />
                        </div>
                      </div>
                      <!--end col-->
                    </div>
                    <!--end row-->
                    <div class="row">
                      <div class="col-sm-1">
                        <!-- <input
                          type="submit"
                          class="submitBnt btn btn-primary"
                          :class="{ hide: hideBtn }"
                          value="Enviar Mensaje"
                        /> -->
                        <button type="submit" class="transparentBtn">
                          <img
                            src="../../assets/img/enviarblue.png"
                            class="greenbtn mt-4 zoom"
                            :class="{ hide: hideBtn }"
                            value="Enviar Mensaje"
                          />
                        </button>

                        <!-- <input
                          type="image"
                          name="submit"
                          class="greenbtn mt-4"
                          src="/img/enviarblue.d21d8501.png"
                          border="0"
                          alt="Submit"
                        /> -->
                        <div
                          :class="{ hide: loading }"
                          class="spinner-grow text-primary"
                        ></div>
                      </div>

                      <!--end col-->
                    </div>
                    <div
                      :class="{ hide: success }"
                      class="alert alert-success text-center mt-5"
                      role="alert"
                    >
                      Gracias por tu consulta. Nos contactaremos con ustedes lo
                      más pronto posible.
                    </div>
                    <div
                      :class="{ hide: danger }"
                      class="alert alert-danger text-center mt-5"
                      role="alert"
                    >
                      Se ha encontrado un error. Porfavor intentar más tarde.
                    </div>
                    <!--end row-->
                  </Form>
                  <!--end form-->
                </div>
              </div>
              <!--end col-->

              <div class="col-md-6 mt-4 mt-4 pt-4">
                <div class="row">
                  <div class="col-lg-12">
                    <h3 class="cardtitle">
                      Contacto
                    </h3>
                  </div>

                  <div class="col-lg-12">
                    <h5>
                      Contáctanos ahora y programaremos una cita para ayudarte a
                      aclarar dudas.
                    </h5>
                  </div>
                  <div class="col-lg-12 ">
                    <p class="mt-4">
                      <img
                        class="smalllogos mr-4"
                        src="../../assets/img/iconos/send.png"
                      />
                      christiansuarez@tebanko.com
                    </p>
                  </div>
                  <div class="col-lg-12">
                    <p class="mt-4">
                      <img
                        class="smalllogos  mr-4"
                        src="../../assets/img/iconos/map-pin.png"
                      />
                      christiansuarez@tebanko.com
                    </p>
                  </div>

                  <div class="col-lg-12">
                    <a href="https://api.whatsapp.com/send/?phone=59175333012">
                      <p class="mt-4 btn btn-soft-primary">
                        <img
                          class="smalllogos  mr-4 "
                          src="../../assets/img/iconos/wp.png"
                        />
                        Escríbenos mediante Whatsapp
                      </p>
                    </a>
                  </div>

                  <!-- <div class="col-lg-12 padbutton marginwhapp">
                    <input
                      type="submit"
                      class="btn btn-soft-primary btn-block "
                      value="Escríbenos mediante Whatsapp"
                    />
                  </div>
                  <div class="text-center">
                    <a href="https://api.whatsapp.com/send/?phone=59175333012">
                    </a>
                  </div> -->
                </div>
              </div>
              <!--end col -->
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
  background-color: #001b66;
}

.hide {
  display: none;
}

.smalllogos {
  height: 35px;
}

.hide {
  display: none;
}

h3 {
  font-size: 35px;
}

p,
h3,
label,
h5 {
  color: white;
}

/* input[type='text'] {
  height: 25px;
}
input[type='email'] {
  height: 25px;
}

input[type='number'] {
  height: 25px;
} */

textarea {
  height: 100px;
}
.whapplogo {
  height: 55px;
  margin-left: 100px;
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

.errorc {
  color: red;
  font-size: 15px;
  font-weight: 800;
}

.titlecontact {
  font-size: 35px !important;
}

.padbutton {
  padding-top: 20px;
}

.greenbtn {
  width: 250px;
  height: auto;
}

.titles {
  font-size: 50px !important;
  font-weight: 900;
  color: #666666;
}

.zoom {
  transition: transform 0.5s; /* Animation */
}

.zoom:hover {
  transform: scale(
    1.05
  ); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}

.transparentBtn {
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
}
</style>
