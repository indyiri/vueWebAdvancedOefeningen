<template>
  <section class="catalog-container">
    <h3>PRODUCTCATALOG OVERVIEW</h3>
    <table class="catalog-table">
      <thead>
      <tr>
        <th>Omschrijving</th>
        <th>Prijs</th>
        <th>Aantal</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in catalogus" :key="item.id">
        <td>{{ item.omschrijving }}</td>
        <td>{{ item.prijs.toFixed(2) }}</td>
        <td><button @click="setItem(item)">+</button></td>
      </tr>
      </tbody>
    </table>
  </section>
</template>


<script>
export default {
  name: "CatalogPage",
  emits: ["ontvangItem"],
  data() {
    return {
      catalogus: [
        { id: 1, omschrijving: "Melk", prijs: 1 },
        { id: 2, omschrijving: "Tandpasta", prijs: 2 },
        { id: 3, omschrijving: "Boter", prijs: 1 },
        { id: 4, omschrijving: "Honing", prijs: 1 },
        { id: 5, omschrijving: "Yoghurt", prijs: 5.23 },
        { id: 6, omschrijving: "Pasta", prijs: 2 }
      ]
    }
  },
  methods: {
    setItem(item) {
      const newObject = {
        id: item.id,
        omschrijving: item.omschrijving,
        prijs: item.prijs
      }
      this.$emit("ontvangItem", newObject)
    }
  }
}
</script>

<style scoped>
.catalog-container {
  background-color: #FFB347; /* lichtere oranje tint */
  color: #000;               /* zwarte tekst */
  padding: 20px;
}

.catalog-container h3 {
  margin-top: 0;
}

.catalog-table {
  border-collapse: collapse;
  width: 100%;
  background-color: #FFB347; /* zelfde kleur als container */
  color: #000;
}

.catalog-table th,
.catalog-table td {
  border: none;
  padding: 10px;
  text-align: left;
}
</style>

