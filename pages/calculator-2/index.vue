<template>
	<div class="calculator-container">
		<div class="calculator">
			<div  class="display-wrapper">
				<div class="result">
					{{result || 0 }}
				</div>
				<div class="calculation">
					<span ref="el" :class="display.length > 14 ? 'calculation-resize' : ''">{{display || 0 }}</span>
				</div>
			</div>
			<div class="button-wrapper">
				<button @click="clearAll" class="btn operator-1">C</button>
				<button @click="dot" class="btn operator-1">.</button>
				<button @click="clear" class="btn operator-1">CE</button>
				<button @click="operate('÷')" class="btn operator-2">÷</button>
				<button @click="nmbClick('7')" class="btn">7</button>
				<button @click="nmbClick('8')" class="btn">8</button>
				<button @click="nmbClick('9')" class="btn">9</button>
				<button @click="operate('x')" class="btn operator-2">x</button>
				<button @click="nmbClick('4')" class="btn">4</button>
				<button @click="nmbClick('5')" class="btn">5</button>
				<button @click="nmbClick('6')" class="btn">6</button>
				<button @click="operate('-')" class="btn operator-2">-</button>
				<button @click="nmbClick('1')" class="btn">1</button>
				<button @click="nmbClick('2')" class="btn">2</button>
				<button @click="nmbClick('3')" class="btn">3</button>
				<button @click="operate('+')" class="btn operator-2">+</button>
				<button @click="nmbClick('0')" class="btn">0</button>
				<button class="btn disabled"></button>
				<button class="btn disabled"></button>
				<button @click="equal" class="btn operator-2">=</button>
			</div>
		</div>
</div>
</template>
<script >
export default {
  data() {
    return {
      display: "",
      result: "",
      operatorSign: "",
      dotSign: false
    };
  },
  methods: {
    clearSignOperator() {
      this.operatorSign = "";
    },
    nmbClick(number) {
      this.clearSignOperator();
      this.display = `${this.display}${number}`;
    },
    clearAll() {
      this.clearSignOperator();
      this.display = "";
      this.result = "";
    },
    clear() {
      if (this.display !== null) {
        this.display = this.display.slice(0, -1);
      }
      if (this.operatorSign !== "") {
        this.operatorSign = this.operatorSign.slice(0, -1);
      }
    },
    operate(operator) {
      this.dotSign = false;
      if (
        this.operatorSign === "" &&
        Number.isInteger(parseInt(this.display.slice(-1)))
      ) {
        this.display = `${this.display}${operator}`;
        this.operatorSign = operator;
      } else if (
        operator === "-" &&
        (this.operatorSign === "÷" || this.operatorSign === "x")
      ) {
        this.display = `${this.display}${operator}`;
        this.operatorSign = `${this.operatorSign}${operator}`;
      } else if (
        this.operatorSign !== operator &&
        this.operatorSign.length !== 2
      ) {
        this.display = this.display.slice(0, -1);
        this.display = `${this.display}${operator}`;
        this.operatorSign = operator;
      }
    },
    dot() {
      if (!this.dotSign) {
        this.display = `${this.display}${"."}`;
        this.dotSign = true;
      }
    },
    equal() {
      if (
        this.operatorSign === "" &&
        (this.display.slice(0, 1) !== "÷" && this.display.slice(0, 1) !== "x")
      ) {
        const replacedDisplay = this.display
          .replace(/x/g, "*")
          .replace(/÷/g, "/");
        this.result = `${this.display} = ${eval(replacedDisplay)}`;
        this.display = String(eval(replacedDisplay));
      } else {
        this.result = `${this.display} = 0`;
        this.display = "";
      }
      this.clearSignOperator();
    }
  },
  computed: {}
};
</script>
<style scoped>
.calculation {
  font-size: 36px;
  line-height: 1.1;
  transition: all 0.3s ease;
  letter-spacing: 1px;
}

.calculation-resize {
  font-size: 24px;
  transition: all 0.3s ease;
}
.result {
  font-size: 21px;
  line-height: 1.2;
  word-wrap: break-word;
  margin-bottom: 20px;
}

.display-wrapper {
  height: 250px;
  width: 100%;
  background-color: rgba(235, 235, 255, 1);
  padding: 20px;
  text-align: right;
  color: #1067a2;
  overflow: auto;
  word-break: break-word;
}
.operator-1 {
  background: rgb(230, 230, 255) !important;
}
.operator-2 {
  background: #0097ff !important;
  color: white !important;
}
.disabled {
  pointer-events: none;
  cursor: none !important;
}
.btn:hover {
  opacity: 0.5;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2);
}
.btn {
  transition: all 0.3s ease;
  width: 50px;
  height: 50px;
  background-color: #fff;
  margin: 0px 10px 15px 10px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #0097ff;
  font-size: 24px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.05);
  outline: none;
  border: none;
  cursor: pointer;
  position: relative;
  z-index: 2;
}
.btn:after {
  z-index: 1;
  content: "";
  position: absolute;
  width: 50px;
  height: 50px;
  background: rgba(0, 151, 255, 0.5);
  border: 1px solid #0097ff;
  opacity: 0;
  border-radius: 100%;
}

@keyframes ripple {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale(1.5);
  }
}

.btn:focus:not(:active)::after,
.btn-animate {
  animation: ripple 0.25s;
}
.button-wrapper {
  display: flex;
  flex-wrap: wrap;
  padding: 30px;
  justify-content: space-around;
}
.calculator-container {
  width: 100%;
  height: 100vh;
  background-color: rgba(20, 40, 60);
}
.calculator {
  width: calc(100vw-20px);
  max-width: 350px;
  height: calc(100vh-20px);
  max-height: 650px;
  margin: 0 auto;
  position: relative;
  top: 10px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 15px 20px rgba(0, 40, 80, 0.2);
  overflow: hidden;
  font-family: "Josefin Sans", sans-serif;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  background-color: white;
}

::-webkit-scrollbar-thumb {
  background: #1067a2;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #1067a2;
}
</style>