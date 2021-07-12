<template>
  <form @submit.prevent="sendFile" enctype="multipart/form-data">
    <div class="frounded shadow-lg p-4 sticky-bar">
      <div class="d-flex mb-4 justify-content-between">
        <label class="file-label">
          <h4 style="color:white;" v-if="file" class="file-name">
            ({{ file.name }})
          </h4>
          <input
            type="file"
            class="btn-primary btn "
            id="file"
            @change="selectFile"
          />
          <span class="file-cta" style="color:white;">
            <span class="file-icon">
              <i class="fas fa-upload"></i>
            </span>
            <span class="white">
              Subir múltiples archivos (Opcional)
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

      <div class="field mt-4">
        <button class="btn btn-primary">Send</button>
      </div>
    </div>
  </form>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';
export default {
  name: 'UploadMultiple',
  setup() {
    let file = ref(null);
    let message = ref(null);
    let error = ref(false);
    let allowedTypes = ref(['image/jpeg', 'image/png', 'image/gif']);
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
      } catch (err) {
        message.value = err.response.data.error;
        console.log(err);
        console.log('Error has occured.');
        error.value = true;
      }
    };
    return {
      file,
      selectFile,
      sendFile,
      message,
      error,
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
</style>
