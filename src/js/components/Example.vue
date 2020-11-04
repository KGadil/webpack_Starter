<template>
  <section class="wrapper py-5 rounded-md">
    <div class="bg-gray-600 max-w-4xl p-6 mx-auto flex flex-col items-center justify-items-center">
      <img src="/assets/img/logo.png" :alt="message" />
      <p class="text-4xl uppercase text-gray-100">{{ message }}</p>
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

