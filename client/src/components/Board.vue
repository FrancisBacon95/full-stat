<template>
  <div style="margin: 5% 5% 5% 5%">
    <hr>
    <h3>공모전/대회</h3>
    <b-table striped hover
      id="my-table" 
      :items="posts" 
      :fields="fields"
      :per-page="perPage"
      :current-page="currentPage"
      @row-clicked="onClickRedirect"
      ></b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
      align="center"></b-pagination>
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
        currentPage: 1,
        perPage: 10,
        posts: [],
        error: "",
        fields: [
          {
            key: "title",
            label: "제목"
          },
          {
            key: "ed",
            label: "마감날짜"
          },
          {
            key: "sd",
            label: "시작날짜"
          }
        ]
      }
    },
    computed: {
      rows() {
        return this.posts.length;
        }
    },
    methods: {
    /*  
    rowClick(item) {
      this.$router.push({
        path: `${item.content_id}`
      });
    },
    */
    onClickRedirect(item) {   
          window.open(`${item.url}`, "_blank");   
    }
    
  }
}
</script>