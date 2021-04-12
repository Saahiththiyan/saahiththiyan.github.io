<template>
  <div class="mt-12 spaced-y-10">
    <div>
      <div>
        <g-link
          :to="post.path"
          class="text-lg text-black font-bold no-underline hover:underline"
          >{{ post.title }}</g-link
        >
      </div>
      <p class="text-grey-darkest text-base leading-normal mt-1">
        {{ post.description }}
      </p>
      <div class="text-grey-darkest text-base leading-normal mt-2">
        <g-link :to="post.path">Read this article →</g-link>
        <!-- <a
          href=""
          class="text-grey-darker hover:text-black text-sm no-underline hover:underline"
          >Read this article →</a
        > -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["post"],
};
</script>