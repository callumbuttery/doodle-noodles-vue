<template>
  <div>
    <v-alert elevation="13" :type="type">{{$store.state.alertMessage}}</v-alert>
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
