<template>
  <Layout>
    <h1 class="text-2xl font-extrabold text-black mb-4">📓 Journal</h1>
    <div class="text-lg text-grey-darkest leading-normal spaced-y-6">
      <p>
        Here I write about what I've been working on, issues I've solved, and
        things I'm still trying to figure out.
      </p>
      <!-- <post-list
        v-for="post in $page.post.edges"
        :key="post.title"
        :post="post.node"
      ></post-list> -->
    </div>
  </Layout>
</template>

<script>
import PostList from "../components/PostList";
export default {
  components: {
    PostList,
  },
  metaInfo: {
    title: "Journal",
  },
};
</script>

<page-query>
query Posts {
  post: allPost {
    edges {
      node {
        title,
        description,
        id,
        path
      }
    }
  }
}
</page-query>

<style>
</style>