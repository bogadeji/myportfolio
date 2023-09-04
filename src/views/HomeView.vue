<script setup>
import TheWelcome from '../components/TheWelcome.vue';
import TheFooter from '../components/TheFooter.vue';
import TheHeader from '../components/TheHeader.vue';
import TheHero from '../components/TheHero.vue';
import AboutMe from '../components/AboutMe.vue';
import ContactMe from '../components/ContactMe.vue';
</script>

<template>
    <div>
    
        <TheHero />
        <main> 
            <section id="project">
                <h2>Projects</h2>
            </section>
            <AboutMe />
            <ContactMe />
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
