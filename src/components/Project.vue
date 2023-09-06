<template>
    <div class="portfolio-img--wrapper" >
      <img :src="project.image" :alt="project.alt" />
      
      <div class="portfolio-img--overlay">
        <h3>{{ project. name}}</h3>
        <p>{{ project.description }}</p>
        <div class="portfolio-img--overlay-btns">
          <a
            class="button button-portfolio github"
            :href="project.github" 
            target="_blank" 
            rel="noopener noreferrer"
          >View code</a>
          <a
            class="button button-portfolio demo"
            :href="project.demo" 
            target="_blank" 
            rel="noopener noreferrer"
          >Demo</a>
        </div>
      </div>
    </div>
</template>
<script setup>
  defineProps({
    project: {
      type: Object,
      required: true,
      default: {}
    }
  })
</script>
<style scoped>
  .portfolio-img--wrapper {
    position: relative;
    /* height: 300px; */
  }
  .portfolio-img--wrapper img {
    box-shadow: 0 3px 15px rgba(0,0,0,.2);
    box-shadow: rgba(0, 0, 0, 0.11) 0px 1px 6px 0px;
    width: 100%;
    height: 100%;
    object-fit: unset;
  }
  .portfolio-img--wrapper:hover .portfolio-img--overlay {
    opacity: 1;
  }
  .portfolio-img--overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(230, 230, 250, 0.93);
    transition: all 0.3s ease-in-out;
    z-index: 3;
    text-align: center;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #800080;
    opacity: 0;
  }
  .portfolio-img--overlay::before,
  .portfolio-img--overlay::after {
    content: '';
    border: 3px solid #800080;
    width: 35px;
    height: 35px;
    position: absolute;
    transition: all 0.9s ease 0s;
  }
  .portfolio-img--overlay::before {
    border-right: unset;
    border-bottom: unset;
    top: 40px;
    left: 40px;
  }
  .portfolio-img--overlay::after {
    border-left: unset;
    border-top: unset;
    bottom: 40px;
    right: 40px;
  }
  .portfolio-img--wrapper:hover .portfolio-img--overlay::before {
    top: 10px;
    left: 10px
  }
  .portfolio-img--wrapper:hover .portfolio-img--overlay::after {
    bottom: 10px;
    right: 10px;
  }
  
.button.button-portfolio {
  padding: 8px 15px; 
  width: 150px;
  margin: 20px 20px 0 0;
  border-radius: 5px;
  color: white;
  font-weight: 500;
  font-size: 16px;
}
.button.button-portfolio.github {
  background-color: black;
  background-color: #290916;
  /* background-color: #800080; */
}
.button.button-portfolio.demo {
  background-color: #be93d4;
  /* background-color: lavender;
  background-color: #7F00FF; */
  /* background-color: #1a9e1a; */
}
</style>