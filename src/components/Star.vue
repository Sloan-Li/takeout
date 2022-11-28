<template>
  <div class="star-box">
    <span
      class="star"
      v-for="(item, index) in starGroup"
      :class="item"
      :key="index"
    ></span>
  </div>
</template>

<script>
// 匹配分数的组件
function matchScore(score) {
  let len = parseInt(score),
    floor = parseFloat(score) - len,
    countStar = 5,
    group = [];
  for (var i = 0; i < len; i++) {
    group.push("on");
  }
  if (floor > 0) {
    group.push("half");
  }
  let residue = countStar - group.length;
  if (residue > 0) {
    for (var j = 0; j < residue; j++) {
      group.push("off");
    }
  }
  return group;
}

export default {
  props: {
    score: 0,
  },
  data() {
    return {
      starGroup: [],
    };
  },
  watch: {
    score(newScore) {
      this.starGroup = matchScore(newScore);
    },
  },
  created() {
    this.starGroup = matchScore(this.score);
  },
};
</script>

<style>
.star-box {
  display: inline;
  vertical-align: sub;
}
.star:nth-child(1) {
  margin-left: 0;
}
.star {
  margin-left: 10px;
  display: inline-block;
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.on{
  background-image: url("../assets/img/star24_on@2x.png");
}
.half{
  background-image: url("../assets/img/star24_half@2x.png");
}
.off{
  background-image: url("../assets/img/star24_off@2x.png");
}
</style>