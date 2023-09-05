<template>
  <footer id="footer">
    <div class="footer container">
      
      <div class="footer-links">
        <div v-for="social in socials" class="socials">
          <a
            :key="social.id"
            :href="social.link"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="'follow me on' + social.name"
          >
            <img :src="social.icon" alt="" />
          </a>
        </div>
      </div>
      
      <div class="footer-text">
        <p class="developer">&copy; All rights are reserved | 2023 | Made with love by bogadeji</p>
        <p class="inspiration">Design inspiration: Smakosh</p>
      </div>
    </div>
  </footer>
</template>
<script setup>
  import socials from '@/utils/socials.json'
</script>
<style scoped>
  #footer {
    /* background-image: url("/assets/illustrations/footer.svg");
    background-repeat: no-repeat;
    background-position: center top;
    background-size: cover; */
    background-color: #E6E6FA;
    padding: 30px 0;
    margin: auto 0;
    margin-top: 100px;
    text-align: center;
  }
  .footer p.developer {
    font-size: 13px;
    line-height: 1.6;
  }
  .footer-text p.inspiration {
    font-size: 10px
  }
  .footer-links {
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    margin-block: 20px;
  }
</style>