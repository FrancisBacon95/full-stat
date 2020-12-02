<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">Full-Stat</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item href="./#/">공모전/대회</b-nav-item>
                <b-nav-item href="./#/Information">개발자 소개</b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
    name : "Header",
    data(){
        return {}
    }
}
</script>
