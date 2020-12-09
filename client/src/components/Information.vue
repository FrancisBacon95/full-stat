<template>
<div>
  <h4><strong>개발자 소개</strong></h4><br>
  <div class="d-flex justify-content-center">
      <b-card style="max-width: 50rem;" img-src="./font1000by300.jpg" img-alt="Card image" align="center" img-top >
        <b-card-text>
          <br>
          <strong>이름: </strong>최재혁<br><br>
          <strong>소속: </strong>부산대학교 통계학과<br><br>
          <strong>연락처: </strong>010 - 8624 - 7756<br><br>
          <strong>깃헙: </strong><a href="https://github.com/FrancisBacon95">FrancisBacon95</a><br><br>
          <strong>짧은말: </strong><br>
          본 사이트는 통계학과 관련 대회/공모전만을 선별해줍니다.<br>
          Scrapy를 활용하여, 업데이트를 실시합니다.<br>
          최초에는 대회를 찾는데 어려움을 겪는 후배들을 돕기 위해 만들었습니다.<br>
          만드는 과정에서 머신러닝을 활용해야 할 만큼 데이터가 많지 않음을 확인했습니다.<br>
          이후 좋은 아이디어가 떠오른다면 추가하겠습니다.<br>
        </b-card-text>
      </b-card>
  </div>
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
