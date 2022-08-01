<template>
  <v-container>
    <v-simple-table>
      <template v-slot:default>
        <tbody>
          <tr>
            <td class="text-left">
              <v-combobox
                v-model="unit"
                :items="Object.keys(results)"
                label="Einheit"
                @change="calculate"
              ></v-combobox>
            </td>
            <td class="text-left">
              <v-text-field
                label="Anzahl"
                v-model="sourceValue"
                type="number"
                @input="calculate"
              ></v-text-field>
            </td>
          </tr>
          <tr v-for="o in Object.keys(results)" :key="results[o]">
            <td class="text-left">{{ o }}</td>
            <td class="text-left">{{ results[o] }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
export default {
  name: "AreaCalc",
  data: () => ({
    sourceValue: null,
    unit: null,
    results: {
      Quadratmeter: 0,
      Morgen: 0,
      Fußballfelder: 0,
      Hektar: 0,
      Quadratkilometer: 0,
      Quadratmeilen: 0,
      Saarland: 0,
    },
    squareMeter: 0,
  }),

  methods: {
    // 1km² == 1000000m²
    calculate() {
      switch (this.unit) {
        case "Quadratmeter":
          this.squareMeter = this.sourceValue * 1;
          break;
        case "Morgen":
          this.squareMeter = this.sourceValue * 4046.8564224;
          break;
        case "Fußballfelder":
          this.squareMeter = this.sourceValue * 7140;
          break;
        case "Hektar":
          this.squareMeter = this.sourceValue * 10000;
          break;
        case "Quadratkilometer":
          this.squareMeter = this.sourceValue * 1000000;
          break;
        case "Quadratmeilen":
          this.squareMeter = this.sourceValue * 2589988.110336;
          break;
        case "Saarland":
          this.squareMeter = this.sourceValue * 2569690000;
          break;
        default:
          this.squareMeter = 0;
      }
      this.results.Quadratmeter = this.round(this.squareMeter);
      this.results.Morgen = this.round(this.squareMeter / 4046.8564224);
      this.results.Fußballfelder = this.round(this.squareMeter / 7140);
      this.results.Hektar = this.round(this.squareMeter / 10000);
      this.results.Quadratkilometer = this.round(this.squareMeter / 1000000);
      this.results.Quadratmeilen = this.round(
        this.squareMeter / 2589988.110336
      );
      this.results.Saarland = this.round(this.squareMeter / 2569690000);
    },
    round(n) {
      //var result = Math.round((n + Number.EPSILON) * 100) / 100;
      //return result.toLocaleString();
      var result;
      if (n >= 1) {
        result = new Intl.NumberFormat("de", {
          maximumFractionDigits: 2,
        }).format(n);
      } else if (n >= 0) {
        result = new Intl.NumberFormat("de", {
          maximumSignificantDigits: 2,
        }).format(n);
      } else {
        result = 0;
      }
      return result;
    },
  },
};
</script>
