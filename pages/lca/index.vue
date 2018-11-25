<template>
  <div  class="container">
    <div>Original : {{original}}</div>
    <div>Edited : {{edited}}</div>
    <div>Result : {{result}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      original: "I am waiting.",
      edited: "I not waiting",
      result: ""
    };
  },
  created() {
    this.textDiff(this.original, this.edited);
  },
  methods: {
    textDiff(s1, s2) {
      let reg = /([ .,])/g;
      let split1 = s1.split(reg);
      let split2 = s2.split(reg);
      this.lca(s1, s2);
      let lcs = this.result;

      let i;
      let i1 = 0;
      let i1Next = 0;
      let i2 = 0;
      let i2Next = 0;
      let result1 = [];
      let result2 = [];

      for (i = 0; i < lcs.length; i++) {
        i1Next = s1.indexOf(lcs[i], i1);
        i2Next = s2.indexOf(lcs[i], i2);
        pushResult(result1, s1.substring(i1, i1Next), "deleted");
        pushResult(result2, s2.substring(i2, i2Next), "added");
        pushResult(result1, lcs[i]);
        pushResult(result2, lcs[i]);
        i1 = i1Next + 1;
        i2 = i2Next + 1;
      }
      console.log(i1, i2);
      pushResult(result1, s1.substring(i1), "deleted");
      pushResult(result2, s2.substring(i2), "added");
      function pushResult(resultArray, stringToPush, className) {
        if (!stringToPush) {
          return;
        }
        if (className) {
          resultArray.push(`<span class="${className}">${stringToPush}</span>`);
        } else {
          resultArray.push(stringToPush);
        }
      }

      console.log(result1.join(""), result2.join(""));
    },
    lca(s1, s2) {
      let memo = [...Array(s1.length)].map(e => Array(s2.length));

      const helper = (s1, s2, i1, i2, memo) => {
        let result = "";
        if (i1 == s1.length || i2 == s2.length) {
          return "";
        }

        if (memo[i1][i2] !== undefined) {
          return memo[i1][i2];
        }
        if (s1[i1] === s2[i2]) {
          memo[i1][i2] = s1[i1] + helper(s1, s2, i1 + 1, i2 + 1, memo);
          return memo[i1][i2];
        } else {
          let result_1 = helper(s1, s2, i1 + 1, i2, memo);
          let result_2 = helper(s1, s2, i1, i2 + 1, memo);
          result_1.length > result_2.length
            ? (result = result_1)
            : (result = result_2);
        }
        memo[i1][i2] = result;
        return result;
      };

      // let memo = {};
      // const helper = (s1, s2, i1, i2, obj) => {
      //   let key = `${i1}${i2}`;
      //   let result = "";
      //   if (i1 == s1.length || i2 == s2.length) {
      //     return "";
      //   }

      //   if (obj[key] !== undefined) {
      //     return obj[key];
      //   }
      //   if (s1[i1] === s2[i2]) {
      //     result = s1[i1] + helper(s1, s2, i1 + 1, i2 + 1, obj);
      //     obj[key] = result;
      //     return result;
      //   } else {
      //     let result_1 = helper(s1, s2, i1 + 1, i2, obj);
      //     let result_2 = helper(s1, s2, i1, i2 + 1, obj);
      //     result_1.length > result_2.length
      //       ? (result = result_1)
      //       : (result = result_2);
      //   }
      //   obj[key] = result;
      //   return result;
      // };

      this.result = helper(s1, s2, 0, 0, memo);
    }
  }
};
</script>

<style scoped>
.container {
  font-size: 24px;
}
</style>