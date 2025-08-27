<template>
  <section class="order-container">
    <h3>AANGEKOCHTE ITEMS</h3>

    <table class="order-table">
      <tr v-for="item in shoppingbasket" :key="item.id">
        <td>{{ item.omschrijving }}</td>
        <td>{{ item.prijs }}</td>
        <td>{{ item.totalePrijs }}</td>
      </tr>
    </table>

    <!-- CatalogPage-component -->
    <CatalogPage @ontvangItem="receiveItem($event)" />
  </section>
</template>

<script>
import CatalogPage from "../../components/oefening4/CatalogPage.vue"

export default {
  name: "OrderView",
  components: { CatalogPage },
  data() {
    return {
      shoppingbasket: []
    }
  },
  methods: {
    receiveItem(itemObject) {
      const newObject = {
        id: itemObject.id,
        omschrijving: itemObject.omschrijving,
        prijs: itemObject.prijs
      }
      this.shoppingbasket.push(newObject)
    }
  }
}
</script>

<style scoped>
.order-container {
  background-color: #FFB347; /* zelfde lichtere oranje tint */
  color: #000;               /* zwarte tekst */
  padding: 20px;
}

.order-container h3 {
  margin-top: 0;
}

.order-table {
  border-collapse: collapse;
  width: 100%;
  background-color: #FFB347;
  color: #000;
  margin-bottom: 20px; /* ruimte onder tabel */
}

.order-table td {
  border: none;
  padding: 10px;
  text-align: left;
}
</style>
