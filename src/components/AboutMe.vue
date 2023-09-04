<template>
  <section id="about">
    <div>
        <img src="/assets/illustrations/skills.svg" alt="" />
    </div>
    <div class="about-article">
      <h2>More about me</h2>
      <p>
        I am a frontend developer with hands on experiencing 
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
    padding: 50px 0;
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
    font-weight: 400px;
    color: rgb(112, 112, 112);
  }
  .about-article a {
    margin: 20px 0;
  }
  @media (max-width: 600px) {
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