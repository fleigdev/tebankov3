<script>
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import { reactive } from 'vue';
import axios from 'axios';

export default {
  components: {
    //Datepicker,
    Form,
    Field,
    ErrorMessage,
  },
  setup: () => {
    const formValues = reactive({});
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
      await axios.post('contacto', {
        nombreCompleto: formValues.nombreCompleto,
        correoElectronico: formValues.correoElectronico,
        telefono: formValues.telefono,
        mensaje: formValues.mensaje,
      });
    };

    function onSubmit() {
      alert(JSON.stringify(formValues, null, 2));
    }
    return {
      schema,
      onSubmit,
      submit,
      formValues,
    };
  },
};
</script>

<template>
  <div>
    <div class="col-12 text-center">
      <div class="section-title mb-4 pb-2">
        <h2 class="mb-4 titlesection titlecontact">
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
                  <Form @submit="submit" :validation-schema="schema">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Nombre Completo </label>
                          <Field
                            name="nombreCompleto"
                            id="nombreCompleto"
                            type="text"
                            class="form-control font-weight-bold"
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
                        <input
                          type="submit"
                          class="submitBnt btn btn-primary"
                          value="Enviar Mensaje"
                        />
                      </div>
                      <!--end col-->
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
                        class="smalllogos"
                        src="../../assets/img/iconos/send.png"
                      />
                      christiansuarez@tebanko.com
                    </p>
                  </div>
                  <div class="col-lg-12">
                    <p class="mt-4">
                      <img
                        class="smalllogos"
                        src="../../assets/img/iconos/map-pin.png"
                      />
                      christiansuarez@tebanko.com
                    </p>
                  </div>

                  <div class="col-lg-12 padbutton">
                    <input
                      type="submit"
                      class="btn btn-soft-primary btn-block "
                      value="Escríbenos mediante Whatsapp"
                    />
                  </div>
                  <div class="text-center">
                    <a href="https://api.whatsapp.com/send/?phone=59175333012">
                    </a>
                  </div>
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

.smalllogos {
  height: 35px;
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

input[type='text'] {
  height: 25px;
}
input[type='email'] {
  height: 25px;
}

input[type='number'] {
  height: 25px;
}

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
}

.titlecontact {
  font-size: 35px !important;
}

.padbutton {
  padding-top: 20px;
}
</style>
