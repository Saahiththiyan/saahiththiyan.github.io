<template>
  <Layout>
    <h1 class="text-2xl font-extrabold text-black mb-4">📁 Projects</h1>
    <div class="text-lg text-grey-darkest leading-normal spaced-y-6">
      <p>Here are some awsome projects that I have been working on</p>
      <!-- <p class="mt-5">Here are some</p> -->
      <project-list
        v-for="projects in $page.project.edges"
        :key="projects.title"
        :project="projects.node"
      ></project-list>
    </div>
  </Layout>
</template>

<script>
import ProjectList from "../components/ProjectList";
export default {
  components: {
    ProjectList,
  },
  metaInfo: {
    title: "Articles",
  },
};
</script>

<page-query>
query Projects {
  project: allProject {
    edges {
      node {
        title,
        description
        link
      }
    }
  }
}
</page-query>

<style>
</style>