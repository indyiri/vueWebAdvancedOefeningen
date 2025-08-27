<!-- OEFENING 5 -->

<template>
  <section class="store-container">
    <h3>GETALLENREEKS</h3>

    <!-- toon de lijst uit de store -->
    <ul>
      <li v-for="(getal, index) in store.getallenReeks" :key="index">
        {{ getal }}
      </li>
    </ul>

    <!-- input + knop -->
    <input type="number" v-model.number="nieuwGetal" placeholder="Geef een getal in" />
    <button @click="buttonClick">Voeg getal aan reeks toe</button>
  </section>
</template>

<script>
import { useReeksStore } from '../../store/index.js'

export default {
  name: 'StoreView',
  data() {
    return {
      nieuwGetal: null
    }
  },
  setup() {
    const store = useReeksStore()
    return { store }
  },
  methods: {
    buttonClick() {
      if (this.nieuwGetal !== null && this.nieuwGetal !== '') {
        this.store.addGetallenReeks(this.nieuwGetal)
        this.nieuwGetal = null
      }
    }
  }
}
</script>

<style scoped>
.store-container {
  background-color: #FFB347; /* zelfde lichte oranje als CatalogPage */
  color: #000;
  padding: 20px;
  border-radius: 8px;
}

ul {
  list-style: none;
  padding: 0;
  margin-bottom: 1rem;
}

li {
  padding: 5px 0;
}
</style>
<
