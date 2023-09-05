<template>
  <section id="contact" class="container">
    <div class="contact-form">
      <form class="">
        <input placeholder="Full name*" />
        <input placeholder="Email*" />
        <textarea placeholder="Message*"></textarea>
        <button class="button button-secondary">Submit</button>
      </form>
    </div>
    <div class="contact-img">
        <img src="/assets/illustrations/contact.svg" alt="" />
    </div>
  </section>
</template>
<style>
  #contact {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    padding-block: 50px;
  }
  .contact-form form input,
  .contact-form form textarea {
    display: block;
    width: 100%;
    margin: 20px 0;
    padding: 10px 15px;
    border: 2px solid purple;
    border-radius: 5px;
  }
  .contact-form form input {
    height: 50px;
  }
  .contact-form form textarea {
    height: 140px;
  }
  .contact-form form button {
    margin: 20px 0;
  }
  @media (max-width: 960px) {
    #contact {
      display: block
    }
  }
</style>