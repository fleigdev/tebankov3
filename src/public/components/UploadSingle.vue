<template>
  <form @submit.prevent="sendFile" enctype="multipart/form-data">
    <div class="frounded shadow-lg p-4 sticky-bar">
      <div class="d-flex mb-4 justify-content-between">
        <div :class="{ hidden: success }">
          <label class="file-label">
            <h4 style="color:white;" v-if="file" class="file-name">
              ({{ file.name }})
            </h4>

            <input
              type="file"
              class="btn-primary btn form-control "
              id="file"
              @change="selectFile"
            />
            <span class="file-cta" style="color:white;">
              <span class="file-icon">
                <i class="fas fa-upload"></i>
              </span>
              <span class="white">
                Subir una imágen (Opcional)
              </span>
            </span>

            <div
              :class="`message ${error ? 'is-danger' : 'is-success'}`"
              v-if="message"
            >
              <div class="message-body">{{ message }}</div>
            </div>
          </label>
        </div>
      </div>
      <h1 style="color:white;" :class="{ hidden: toggle }">
        Gracias! Tu imágen ha sido subida.
      </h1>
      <div class="field mt-4" :class="{ hidden: success }">
        <button class="btn btn-primary">Subir Archivo</button>
      </div>
    </div>
  </form>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';
export default {
  name: 'UploadSingle',
  setup() {
    let file = ref(null);
    let message = ref(null);
    let error = ref(false);
    let toggle = ref(true);
    let success = ref(false);
    let allowedTypes = ref([
      'image/jpeg',
      'image/png',
      'image/gif',
      'application/pdf',
    ]);
    const MAX_SIZE = ref(200000);
    let tooLarge = ref(null);

    const selectFile = (e) => {
      error.value = null;
      const fileTemp = e.target.files[0];

      tooLarge.value = fileTemp.size > MAX_SIZE.value;

      if (allowedTypes.value.includes(fileTemp.type) && !tooLarge.value) {
        console.log('Allowed');
      } else {
        console.log('Not allowed');
      }

      file.value = fileTemp;
      message.value = '';
      console.log(fileTemp.size);
    };

    const sendFile = async () => {
      const formData = new FormData();
      formData.append('file', file.value);
      try {
        await axios.post('/upload-single', formData);
        console.log(formData);
        console.log(file);
        message.value = 'File has been uploaded';
        file.value = null;
        error.value = false;
        success.value = true;
        toggle.value = false;
      } catch (err) {
        // message.value = err.response.data.error;
        error.value = true;
        message.value = 'Error grave';
        console.log(err);
        console.log('Error has occured.');
      }
    };
    return {
      file,
      selectFile,
      sendFile,
      message,
      error,
      toggle,
      success,
    };
  },
};
</script>

<style scoped>
.is-danger {
  color: red;
}

.is-success {
  color: green;
}

.hidden {
  display: none;
}
</style>
