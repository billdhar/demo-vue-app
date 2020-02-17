<template>
    <div class="camera-modal">
        <video ref="video" class="camera-stream"/>
          <router-link class="take-picture-button mdl-button mdl-js-button mdl-button--fab mdl-button--colored" to="/home">
          <img class="press" alt="camera" src="../assets/back-btn.png" width=128/>
        </router-link>
    </div>
</template>

<script>
export default {
  mounted () {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(mediaStream => {
        this.$refs.video.srcObject = mediaStream
        this.$refs.video.play()
      })
      .catch(error => console.error('getUserMedia() error:', error))
  }
}
</script>

<style scoped>
    .camera-modal {
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        position: absolute;
        background-color: white;
        z-index: 10;
    }
    .camera-stream {
        width: 100%;
        max-height: 100%;
    }
</style>
