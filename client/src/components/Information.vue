<template>
<div class="mt-4">
    <h4><strong>개발자 소개</strong></h4>
    <b-card img-src="./최재혁.jpg" img-alt="Card image" img-left class="mb-3" img-height="90%" img-width="20%" >
      <b-card-text>
        <br>
        <strong>이름: </strong>최재혁<br><br>
        <strong>소속: </strong>부산대학교 통계학과<br><br>
        <strong>연락처: </strong>010 - 8624 - 7756<br><br>
        <strong>깃헙: </strong><a href="https://github.com/FrancisBacon95">FrancisBacon95</a><br><br>
        <strong>짧은말: </strong><br>
        돈까스 좋아해요???<br>
        
      </b-card-text>
    </b-card>
</div>
</template>

<script>
export default {
  name: 'Information',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
