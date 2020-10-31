<template>
  <div id="app" :style="{ background: backImg}">
    <section class="app-pokemon-main card">
      <img alt="pokemon" :src="image">
        <p class="pokemon-name">{{name}}</p>
        <button class="button" @click.prevent="setData(data)">SEARCH</button>
    </section>
    <section class="app-pokemon-stats">
      <poke-stats :pokeWeight="weight" :pokeHeight="height" :pokeType="type" ></poke-stats>
      <div class="app-pokemon-stats-abilities card">
        <p id="abilities">ABILITIES</p>
        <ul>
          <li v-for="el in abilities" :key="el">
            {{el}}
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import PokeStats from "./components/PokeStats.vue"
import { mockService } from "../public/mockCall";

export default {
  name: 'App',
  data () {
    return {
      name: 'name',
      image: '',
      type: '',
      weight: 0,	
      height: 0,
      abilities: [],
      data: {}
    }
  },
  computed: {
    backImg: function(){
      return `var(--${this.type}-back)`
    }
  },
  components:{
    PokeStats
  },
  methods:{
    setData(data) {
      try {
        let randomSearch = Math.floor(Math.random()*3)
        data = data.mock[randomSearch].data
        this.name = data.name
        this.weight = data.weight
        this.height = data.height
        this.abilities = data.abilities
        this.image = data.sprites
        this.type = data.type
      } catch (error) {
        console.log(error)
      }
    }
},
  async created() {
    await mockService()
    .then(response => {
      this.data = response
      this.setData(response)
    })
  }
}
</script>

<style>:root {
  border: 0;
  --general-card-height: 30vh;
  --general-card-width: 20vw;
  --general-card-background: white;
  --normal-image-height: 50vh;
  --normal-button-width: 10vw;
  --general-font-size: 2em;
  --grass-back: #2DCD45;
  --fire-back: #F08030;
  --water-back: #149EFF;
  --bug-back: #A8B820;
  --normal-back: #A8A878;
  --ground-back: #E0C068;
  --poison-back: #883688;
  --electric-back: #F8D030;
  --flying-back: #A890F0;
  --fairy-back: #EE99AC;
  --fighting-back: #94352D;
  --psychic-back: #FF6996;
  --rock-back: #B8A038;
  --steel-back: #B8B8D0;
  --ice-back: #98D8D8;
  --ghost-back: #614C83;
  --dragon-back: #700AEE;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 80vh;
  display: grid;
  grid-template-columns: 2fr 1fr;
  text-align: center;
  color: #2c3e50;
}

img {
  height: var(--normal-image-height);
}

button {
  width: var(--normal-button-width);
  outline: none;
  box-shadow: 0 5px #999;
  cursor: pointer;
}

.button:active {
  box-shadow: 0 4px #666;
  transform: translateY(4px);
}

p {
  font-size: var(--general-font-size);
  margin: 2%;
}

.pokemon-name {
  text-transform: capitalize;
  background-color: white;
  width: var(--general-card-width);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12),
    0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12),
    0 8px 8px rgba(0, 0, 0, 0.12),
    0 16px 16px rgba(0, 0, 0, 0.12);
}

.app-pokemon-main.card {
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.app-pokemon-stats {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
}

.app-pokemon-stats-abilities.card {
  background-color: var(--general-card-background);
  height: var(--general-card-height);
  width: var(--general-card-width);
  display: flex;
  text-align: left;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12),
    0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12),
    0 8px 8px rgba(0, 0, 0, 0.12),
    0 16px 16px rgba(0, 0, 0, 0.12);
}
</style>
