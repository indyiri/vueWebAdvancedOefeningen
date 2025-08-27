<template>
  <section>
    <h1>{{ msg }}</h1>

    <p>{{ persoonlijk.naam }}</p>
    <p>{{ persoonlijk.adres }}</p>
    <p>{{ persoonlijk.plaats }}</p>
  </section>
</template>

<script>
export default {
  name: 'PersonalPage',
  // prop 'msg' tonen in de H1 (vereist)
  props: {
    msg: { type: String, required: true }
  },
  // data() met object 'persoonlijk' (vereist)
  data() {
    return {
      persoonlijk: {
        naam: 'Luc DOUMEN',
        adres: 'Elfde Liniestraat 24',
        plaats: '3500 Hasselt'
      }
    }
  }
}
</script>

<style scoped>
/* optioneel stijlen */
</style>

