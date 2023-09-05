<template>
  <section id="projects">
      <div class="container">
        <h2>Projects</h2>
        <div class="projects-list">
          <div v-for="(project, index) in projects">
            <div :key="index" class="project"></div>
          </div>
        </div>
      </div>
  </section>
</template>
<script setup>
  import projects from '@/utils/projects.json'
</script>
<style scoped>
#projects {
  
  padding-block: 150px;
}
 #projects h2 {
  font-size: 2.2rem;
  font-weight: 700;
  margin-block: 20px;
 }
 .projects-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
 }
 .project {
  height: 300px;
  background-color: lavender;
 }
</style>