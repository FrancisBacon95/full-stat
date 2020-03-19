<template>
  <div>
    <div>공모전/대회</div>
    <b-table striped hover :items="posts" :fields="fields"></b-table>
  </div>
</template>

<script>
import {getPosts} from '../PostService';

  export default {
    name : 'Board',
    async created() {
      const ret = await getPosts()
      this.posts=ret.data;    
    },
    data() {
      return {
        posts: [],
        error: "",
        fields: [
          {
            key: "title",
            label: "제목"
          },
          {
            key: "date",
            label: "마감날짜"
          },
          {
            key: "start_date",
            label: "시작날짜"
          }
        ]
      }
    },
  }
</script>