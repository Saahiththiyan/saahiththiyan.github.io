<template>
  <Layout>
    <div class="text-gray-500 uppercase font-semibold text-xs tracking-wide">
      {{ $page.post.date }}
    </div>
    <h1 class="text-2xl font-extrabold text-black leading-tight mt-1 mb-6">
      {{ $page.post.title }}
    </h1>
    <div
      class="markdown mb-8"
      id="article-area"
      v-html="$page.post.content"
    ></div>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
   post: post (path: $path) {
    id
    title
    date
    content
  }
}
</page-query>