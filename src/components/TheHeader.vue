<template>
  <header class="container ">
    <div class="logo-icon">
      <img src="/_bogadeji_.svg" alt="" />
    </div>
    <nav class="nav">
      <button class="nav-toggle">
        <span class="hamburger" aria-label="toggle navigation"></span>
      </button>
      <ul class="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <!-- <li><ToggleTheme /></li> -->
      </ul>
    </nav>
  </header>
</template>
<script setup>
  import ToggleTheme from './ToggleTheme.vue';
</script>
<style scoped>
  header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 74px;
  }
 
  .logo-icon {
    margin-right: auto;
    margin: auto 0;
    height: 25px;
  }

  .logo-icon img {
    height: inherit;
  }
  .nav-toggle {
    display: none;
    border: none;
    outline: none;
    color: unset;
    background-color: unset;
  }
  .nav {
    margin-left: auto
  }
  .nav-links {
    display: flex;
    gap: 20px;
    list-style: none;
  }
  .nav-links li {
    display: inline-block;
  } 
  @media (max-width: 400px) {
    .logo-icon {
      height: 20px;
    }
    .nav-links {
      display: block;
      background-color: rgba(12, 14, 24, 0.95);
      height: 100vh;
      text-align: center;
      position: fixed;
      color: hsl(var(--clr-light));
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 10;
      transform: translateX(100%);
      margin: 0;
      padding:  50px 0;
      transition: transform 250ms cubic-bezier(.5, 0, 0.5, 1);
    }
    @supports (backdrop-filter: blur(1rem)) {
      .nav-links {
        background: rgba(12, 14, 24, 0.75);;
        backdrop-filter: blur(2rem);
      }
    }
    .nav-open .nav-links {
      transform: translateX(0%);
    }
    .nav-links li,
    .nav-links li a {
      display: block;
      color: #fff;
      margin: 20px auto;
      font-weight: 900;
      font-size: 1.5rem;
    }
    .nav-open .nav-toggle {
      position: fixed;
      z-index: 12;
      right: 10px;
      top: 20px;
    }
    .nav-toggle,
    .hamburger {
      display: block;
      position: relative;
    }
    
    .hamburger,
    .hamburger::before,
    .hamburger::after {
      background: black;
      width: 2em;
      height: 3px;
      border-radius: 1em;
      transition: transform 250ms ease-in-out;
    }
    .nav-open .hamburger,
    .nav-open .hamburger::before,
    .nav-open .hamburger::after {
      background: #fff;
    }

    .hamburger::before {
      top: 9px;
    }

    .hamburger::after {
      bottom: 9px;
    }

    .hamburger::before,
    .hamburger::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
    }
  }
  @media (max-width: 260px) {
    .logo-icon {
      height: 15px;
    }
  }
  
</style>