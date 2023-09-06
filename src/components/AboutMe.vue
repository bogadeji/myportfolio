<template>
  <section id="about" class="container">
    <div>
        <img src="/assets/illustrations/skills.svg" alt="" />
    </div>
    <div class="about-article">
      <h2>More about me</h2>
      <p>
        I am a frontend developer with hands on experience  writing clean, well-formated, semantic HTML5, making sure that the content is accessible, easy to read, easy to collaborate and trouble-shoot.
        I pride myself on writing CSS that is easy to read and build on. I focus on keeping my CSS lean and fast to load, and I make it a habit to stay up to date on current best practices.
        You can trust me to take a design and quickly & accurately convert it into a webpage that is a pixel-perfect match. 
      </p>
      <a href="#contact" class="button button-primary">Hire me</a>
    </div>
  </section>
</template>
<style scoped>
  #about {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    padding-block: 50px;
  }
  .about-article {
    margin: auto;
    height: auto;
  }
  .about-article h2 {
    font-size: 2.2rem;
    font-weight: 700;
    margin-bottom: 22px;
  }
  .about-article p {
    font-size: 22px;
    line-height: 1.5;
    font-weight: 400px;
    color: rgb(112, 112, 112);
  }
  .about-article a {
    margin: 25px 0;
  }
  @media (max-width: 960px) {
    #about {
      display: block;
      text-align: center
    }
    .about-article h2 {
      font-size: 1.5rem;
      margin: 30px 0 20px;
    }
    .about-article p {
      font-size: 18px;
      line-height: 1.3;
    }
  }
</style>