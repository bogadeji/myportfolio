<template>
  <div id="hero">
    <TheHeader />
    <section class="hero__section container">
        <div class="hero__section--intro">
            <h1>Hi There!</h1>
            <h4 class="intro">I'm Abigail and I'm a Frontend engineer, and I love clean and elegant code!</h4>
            <a href="#contact" class="button button-primary">Hire me</a>
        </div>
        <div class="hero__section--img">
            <img src="/img/39.png" alt="" />
        </div>
    </section>
  </div>
</template>
<script setup>
  import TheHeader from './TheHeader.vue';
</script>
<style scoped>
  #hero {
    background-image: url("/assets/illustrations/overlay.svg");
    background-repeat: no-repeat;
    background-position: right top;
    background-size: contain;
  }
  
  .intro {
    font-size: 32px;
    font-weight: 400;;
    margin: 0;
    color: rgb(112, 112, 112);
    margin-bottom: 1.2em;
  }
  .hero__section {
    display: grid;
  }
  .hero__section--img img {
    height: auto;
    max-width: 100%;
    object-fit: contain;
  }
  @media  (min-width: 960px) {
     .hero
      {
      /* padding: 0 100px; */
    }
    .hero__section {
      gap: 10px;
      grid-template-columns: repeat(2, 1fr);
      padding-block: 50px;
    }
    .hero__section--intro {
      margin: auto 0;
    }
    
  }
  @media (max-width: 959px) {
    #hero {
    background-image: url("/assets/illustrations/overlay.svg");
    background-repeat: no-repeat;
    background-position: left top;
    background-size: contain;
  }
  #hero h1 {
    font-size: 30px;
  }
    .hero__section {
      padding: 20px 0 40px;
      gap: 20px;
    }
    .hero__section--intro {
      order: 2;
      text-align: center;
    }
    .intro {
      font-size: 20px;
    }
    .hero__section--img {
      /* order: 1; */
      width: 70%;
      margin: 0 auto;
    }  
  }
</style>