<script setup>
import TheWelcome from '../components/TheWelcome.vue';
import TheFooter from '../components/TheFooter.vue';
import TheHeader from '../components/TheHeader.vue';
import TheHero from '../components/TheHero.vue';
import AboutMe from '../components/AboutMe.vue';
</script>

<template>
  <div>
    
        <TheHero />
        <main> 
        <section id="project">
            <h2>Projects</h2>
        </section>
        <AboutMe />
        
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
                <!-- <img src="/img/41.png" alt="" /> -->
            </div>
        </section>
    </main>
    <footer>
        <TheFooter />
    </footer>
  </div>
</template>
<style>
    h1 {
        font-size: 48px;
        font-weight: 700;
        margin: 0;
        margin-bottom: 0.2em;
    }

    @media (max-width: 600px) {
        h1 {
            font-size: 40px;
        }
    }
</style>
