<template>
  <div>
    <v-alert elevation="13" :type="type" class="alertMessage">{{$store.state.alertMessage}}</v-alert>
  </div>
</template>

<script>
export default {
    name: 'Alert',
    props: {
        type: {
            type: String,
        }
    },
    watchers: {
        type(newType) {
            this.type = newType;
        }
    },
}

</script>

<style>

.alertMessage {
    margin-top: 50px;
}

</style>
