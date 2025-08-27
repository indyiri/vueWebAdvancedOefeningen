<template>
  <section>
    <!-- OEFENING 1 -->
    <h1>{{ pagina_titel }}</h1>

    <ul class="hobby-list">
      <li v-for="(hobby, index) in hobbies"
          :key="hobby.id"
          @click="selectHobby(index)">
        {{ index + 1 }}. {{ hobby.naam }}
        <span class="club">({{ hobby.club }})</span>
      </li>
    </ul>

    <!-- OEFENING 2 (uitbreiding van OEFENING 1) -->
    <h3>Uitgebreide info</h3>

    <!-- extra info enkel tonen als zichtbaar -->
    <div v-if="isZichtbaar">
      <p>
        {{selectedHobbyIndex.id}} -
        {{selectedHobbyIndex.naam}} -
        {{selectedHobbyIndex.club}} -
        {{selectedHobbyIndex.plaats}}
      </p>
      <p>
        <img :src="'src/assets/oefening2/' + this.selectedHobbyIndex.afbeelding"
             :alt="selectedHobbyIndex.naam"
             width="200" />
      </p>
    </div>
  </section>
</template>

<script>
export default {
  //OEFENING 1
  name: 'HobbyView',
  data() {
    return {
      pagina_titel: 'Mijn Hobbies',
      hobbies: [
        { id: 1, naam: 'Voetbal',   club: 'RSCA',                 plaats: '1000 Brussel', afbeelding: 'voetbal.png' },
        { id: 2, naam: 'Golf',      club: 'Spiegelven Golf Club', plaats: '3600 Genk',    afbeelding: 'golf.png' },
        { id: 3, naam: 'Darts',     club: 'Elfde Liniestraat 24', plaats: '3500 Hasselt', afbeelding: 'darts.png' },
        { id: 4, naam: 'Tennis',    club: 'LIMA Tennis & Padel',  plaats: '3630 Eisden',  afbeelding: 'tennis.png' },
        { id: 5, naam: 'Basketbal', club: 'Club Maaseik VZW',     plaats: '3680 Maaseik', afbeelding: 'basketbal.png' },
        { id: 6, naam: 'Volleybal', club: 'Green Yard',           plaats: '3500 Hasselt', afbeelding: 'volleybal.png' }
      ],

      //OEFENING 2 (uitbreiding van OEFENING 1)
      selectedIndex: null,
      zichtbaar: false
    }
  },
  //OEFENING 2 (uitbreiding van OEFENING 1)
  methods: {
    selectHobby(index) {
      this.selectedIndex = index
      this.zichtbaar = true
    }
  },
  computed: {
    isZichtbaar() {
      return this.zichtbaar && this.selectedHobbyIndex !== null
    },
    selectedHobbyIndex() {
      return this.hobbies[this.selectedIndex]
    }
  }

}
</script>

<style scoped>
.hobby-list { list-style: none; padding: 0; margin: 0; }
.hobby-list li { padding: .25rem 0; }

/* clubnaam enkel zichtbaar bij hover (vereist) */
.club { display: none; }
.hobby-list li:hover .club { display: inline; }
</style>
