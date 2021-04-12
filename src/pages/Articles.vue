<template>
  <Layout>
    <h1 class="text-2xl font-extrabold text-black mb-4">🖊️ Articles</h1>
    <div class="text-lg text-grey-darkest leading-normal spaced-y-6">
      <p>
        I love learning new stuff 😍. What is better than learning? Writing
        about it.
      </p>
      <p class="mt-5">Here are some</p>
      <post-list
        v-for="post in $page.post.edges"
        :key="post.title"
        :post="post.node"
      ></post-list>
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
    title: "Articles",
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