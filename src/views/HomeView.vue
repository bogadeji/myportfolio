<script setup>
import TheWelcome from '../components/TheWelcome.vue';
import TheFooter from '../components/TheFooter.vue';
import TheHeader from '../components/TheHeader.vue';
</script>

<template>
  <div>
    <main>
        <section class="hero">
            <TheHeader />
            <div>
                <div>
                    <h1>Hi There!</h1>
                    <h2>I'm Abigail and I'm a Frontend engineer!</h2>
                    <a href="#contact" class="button button-primary">Hire me</a>
                </div>
                <div>
                    <img src="/img/39.png" alt="" />
                </div>
            </div>
        </section>
        <section id="project">
            <h2>Projects</h2>
        </section>
        <section id="about">
            <div>
                <img src="/img/1.png" alt="" />
            </div>
            <div>
                <h2>More about me</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy.
                </p>
            </div>
        </section>
        <section id="contact">
            <div>
                <form>
                    <input placeholder="Full name*" />
                    <input placeholder="Email*" />
                    <textarea placeholder="Message*"></textarea>
                    <button class="button button-secondary">Submit</button>
                </form>
            </div>
            <div>
                <img src="/img/41.png" alt="" />
            </div>
        </section>
    </main>
    <footer>
        <TheFooter />
    </footer>
  </div>
</template>
