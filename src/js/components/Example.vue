<template>
  <section>
    <div class="bg-gray-900">
      <img src="/assets/img/logo.png" :alt="message" />
      <p>{{ message }}</p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello Buddie!'
    }
  }
}
</script>

