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
        <!-- oude code die enkel werkt voor oefening2 -->
        <!--
        <img :src="'src/assets/oefening2/' + this.selectedHobbyIndex.afbeelding"
             :alt="selectedHobbyIndex.naam"
             width="200" />
             -->
        <!-- nieuwe code die werkt voor oefening2 en oefening3 -->
        <img :src="getImagePath(selectedHobbyIndex)"
             :alt="selectedHobbyIndex.naam"
             width="200" />
      </p>
    </div>

    <!-- OEFENING 3 (uitbreiding van OEFENING 2) -->
    <h3>Nieuwe hobby toevoegen</h3>
    <table>
      <tbody>
      <tr>
        <td>Id :</td>
        <td><input type="text" v-model="newId" v-bind:disabled="true"></td>
      </tr>
      <tr>
        <td>Naam :</td>
        <td><input type="text" v-model="newNaam"></td>
      </tr>
      <tr>
        <td>Club :</td>
        <td><input type="text" v-model="newClub"></td>
      </tr>
      <tr>
        <td>Plaats :</td>
        <td><input type="text" v-model="newPlaats"></td>
      </tr>
      <tr>
        <td>Afbeelding :</td>
        <td><input type="text" v-model="newAfbeelding" placeholder="bv. biljart.png"></td>
      </tr>
      <tr>
        <td></td>
        <td><button @click="addRecord">VOEG TOE</button></td>
      </tr>
      </tbody>
    </table>

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
      zichtbaar: false,

      //OEFENING 3 (uitbreiding van OEFENING 2)
      newId: 7,
      newNaam: '',
      newClub: '',
      newPlaats: '',
      newAfbeelding: ''
    }
  },
  methods: {
    //OEFENING 2 (uitbreiding van OEFENING 1)
    selectHobby(index) {
      this.selectedIndex = index
      this.zichtbaar = true
    },
    //OEFENING 3 (uitbreiding van OEFENING 2)
    addRecord() {
      const nieuweHobby = {
        id: this.newId,
        naam: this.newNaam,
        club: this.newClub,
        plaats: this.newPlaats,
        afbeelding: this.newAfbeelding
      }
      this.hobbies.push(nieuweHobby)

      // reset velden en bereken volgend id
      this.newId = this.hobbies.length + 1
      this.newNaam = ''
      this.newClub = ''
      this.newPlaats = ''
      this.newAfbeelding = ''
    },
    getImagePath(hobby) {
      if (!hobby) return ""

      // bestaande hobbies (eerste 6)
      if (hobby.id <= 6) {
        return new URL(`../../assets/oefening2/${hobby.afbeelding}`, import.meta.url).href
      }

      // nieuw toegevoegde hobbies
        return new URL(`../../assets/oefening3/${hobby.afbeelding}`, import.meta.url).href
    }
  },
  computed: {
    //OEFENING 2 (uitbreiding van OEFENING 1)
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
/*OEFENING 1*/
.hobby-list { list-style: none; padding: 0; margin: 0; }
.hobby-list li { padding: .25rem 0; }

/*OEFENING 2 (uitbreiding van OEFENING 1)*/
/* clubnaam enkel zichtbaar bij hover */
.club { display: none; }
.hobby-list li:hover .club { display: inline; }

/*OEFENING 3 (uitbreiding van OEFENING 2)*/
table td { padding: 4px 8px; }
</style>
