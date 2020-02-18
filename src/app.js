import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {

  new Vue({
    el: "#app",
    data: {
      countries: [
      {name: "UK", population: 65110000, capital: "London",
        region: "Europe", flag: "https://restcountries.eu/data/gbr.svg" }
      ],
      selectedCountry: null},
    mounted(){
      this.fetchCountry()
    },
    computed: {
      totalPopulation: function () {
        return this.countries.reduce((running_total, country) =>
      running_total += country.population, 0);
      }
    },
    methods: {
      fetchCountry: function (){
        const request = fetch("https://restcountries.eu/rest/v2/all")
        .then(response => response.json())
        .then(data => this.countries = data)
      }

    }

  });

})
