<template>
  <div class="index-wrapper">
    <div class="input-wrapper">
      <div>
        <label class="container font-2">Check All
          <input  type="checkbox"   v-model="checkAll">
          <span class="checkmark"></span>
        </label>
        <label  
          v-for="name 
          in value" 
          class="container font-2"
          
          :key="name"
        >
          {{name}}
          <input type="checkbox" checked="checked"  :value="name" v-model="dataCheckmark">
          <span class="checkmark"></span>
        </label>
        <button @click="acoy">acoi</button>
      </div>
      {{dataCheckmark}}
    </div>
    <div class="input-wrapper">
      <label class="radio">Joe
        <input type="radio" checked="checked" v-model="radio" value="Joe" name="radio">
        <span class="checkmark"></span>
      </label>
      <label class="radio">Annie
        <input type="radio" v-model="radio" value="Annie"  name="radio">
        <span class="checkmark"></span>
      </label>
      <label class="radio">Mark
        <input type="radio" v-model="radio" value="Mark"  name="radio">
        <span class="checkmark"></span>
      </label>
      <label class="radio">Elisabeth
        <input type="radio" v-model="radio" value="Elisabeth"  name="radio">
        <span class="checkmark"></span>
      </label>
     {{radio}}
    </div>
    <div class="input-wrapper">
      <label :class="dataSwitch ? 'switch font-2':'switchOff switch font-2'" >
          <input v-model="dataSwitch" type="checkbox">
          <div class="switchTrack"></div>
          <div class="switchThumb"></div>
      </label>
      {{dataSwitch}}
    </div>
    <div class="input-wrapper">
      <inputMaterial></inputMaterial>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ["Joe", "Annie", "Mark", "Elisabeth"],
      radio: "",
      dataCheckmark: [],
      dataSwitch: true
    };
  },
  methods: {
    acoy() {
      // this.$ga.query("send", {
      //   hitType: "event",
      //   eventCategory: `${this.$route.name} page`,
      //   eventAction: `filter click`,
      //   eventLabel: "test",
      //   eventValue: 1
      // });
      this.$ga.query("ecommerce:addProduct", {
        id: "1234", // Transaction ID. Required.
        name: "Fluffy Pink Bunnies", // Product name. Required.
        sku: "DD23444", // SKU/code.
        category: "Party Toys", // Category or variation.
        price: "11.99", // Unit price.
        quantity: "1" // Quantity.
      });
      // this.$ga.query("ec:setAction", "click", "UX", "click", "remove");
      // this.$ga.query("send", "event", "UX", "click", "remove");

      // this.$ga.query("ec:setAction", "remove");
      // this.$ga.query("send", "event", "UX", "click", "remove to cart");
      // this.$ga.query("ec:addProduct", {
      //   // Provide product details in a productFieldObject.
      //   id: "P12345", // Product ID (string).
      //   name: "Android Warhol T-Shirt", // Product name (string).
      //   category: "Apparel", // Product category (string).
      //   brand: "Google", // Product brand (string).
      //   variant: "Black", // Product variant (string).
      //   position: 1, // Product position (number).
      //   dimension1: "Member" // Custom dimension (string).
      // });
      this.$ga.query("ec:setAction", "click", {
        // click action.
        list: "Search Results" // Product list (string).
      });
      this.$ga.query("send", "event", "UX", "click", "remove");
    }
  },
  computed: {
    checkAll: {
      get: function() {
        return this.value
          ? this.dataCheckmark.length == this.value.length
          : false;
      },
      set: function(value) {
        if (value) {
          this.dataCheckmark = this.value;
        } else {
          this.dataCheckmark = [];
        }
      }
    }
  }
};
</script>

<style scoped>
.switchOff .switchThumb {
  transform: translateX(-16px);
  background-color: whitesmoke !important;
}

.switchOff .switchTrack {
  background-color: #999 !important;
}

.switchTrack {
  border-radius: 8px;
  height: 14px;
  width: 34px;
  left: 2px;
  opacity: 0.6;
  position: absolute;
  right: 2px;
  top: calc(50% - 7px);
  background-color: #337ab7;
}

.switchThumb {
  transition: all 0.3s ease;
  transform: translateX(0px);
  left: -16px;
  background-color: #337ab7;
  border-radius: 50%;
  top: calc(50% - 10px);
  height: 20px;
  position: relative;
  width: 20px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}

.switch {
  display: block;
  position: relative;
  padding-left: 32px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 18px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: 48px;
}

.switch input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* switch up */

.index-wrapper {
  position: relative;
}
.input-wrapper {
  background-color: white;
  width: 400px;
  height: 500px;
  margin: 50px auto;
  box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.2);
  padding: 100px;
}

.container {
  display: block;
  position: relative;
  padding-left: 32px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 18px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: 150px;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 16px;
  width: 16px;
  border: 2px solid #999;
}

/* On mouse-over, add a grey background color */
.container:hover input:not([disabled]) ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:not([disabled]):checked ~ .checkmark {
  border: 2px solid #337ab7;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 6px;
  top: -9px;
  width: 6px;
  height: 16px;
  border: solid #337ab7;
  border-width: 0 3px 4px 0;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}

/* radio */
.radio {
  display: block;
  position: relative;
  padding-left: 32px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 18px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
.radio input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.radio .checkmark {
  position: absolute;
  top: 50%;
  left: 0;
  height: 16px;
  width: 16px;
  transform: translateY(-50%);
  border-radius: 50%;
  border: 2px solid #999;
}

/* On mouse-over, add a grey background color */
.radio:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.radio input:checked ~ .checkmark {
  border: 2px solid #2196f3;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.radio input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.radio .checkmark:after {
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: #2196f3;
}
</style>