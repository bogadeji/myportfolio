<template>
  <header>
    <div class="logo-icon">
      <img src="/_bogadeji_.svg" alt="" />
    </div>
    <nav class="nav">
      <ul class="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#project">Project</a></li>
        <li><a href="#contact">Contact</a></li>
        <!-- <li><ToggleTheme /></li> -->
      </ul>
    </nav>
  </header>
</template>
<script setup>
  import ToggleTheme from './ToggleTheme.vue';
</script>
<style>
  header {
    display: flex;
  }
  .logo-icon {
    margin-right: auto;
    width: 100px
  }
  .logo-icon img {
    width: 150px
  }
  .nav {
    margin-left: auto
  }
  .nav-links {
    display: inline-block;
    list-style: none;
  }
  .nav-links li {
    display: inline-block;
  }
</style>