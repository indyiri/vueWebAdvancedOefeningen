<template>
  <!-- originele code -->
  <div class="about">
    <h1>This is an about page</h1>
  </div>

  <!-- OEFENING 2 -->
  <div class="counter">
    <button class="button" @click="increment" :disabled="toestand">+</button>
    <button class="button-" @click="decrement" :disabled="toestand">-</button>

    <h3 style="color: blue;">{{ teller }}</h3>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  data() {
    return {
      teller: 0,
      toestand: false
    }
  },
  methods: {
    increment() {
      this.teller++
      if (this.teller > 100) {
        this.teller = 0
        this.toestand = true // disable knoppen
      }
    },
    decrement() {
      this.teller--
      if (this.teller < 0) {
        this.teller = 0
        this.toestand = true // disable knoppen
      }
    }
  }
}
</script>

<style>
/* originele style behouden */
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

/* optioneel: extra stijl voor oefening 2 */
.counter {
  margin-top: 2rem;
}
</style>
