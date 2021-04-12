<template>
  <div class="mt-6 spaced-y-10">
    <div>
      <div>
        <a
          href=""
          class="text-lg text-black font-bold no-underline hover:underline"
          >{{ project.title }}</a
        >
      </div>
      <p class="text-grey-darkest text-base leading-normal mt-1">
        {{ project.description }}
      </p>
      <div class="text-grey-darkest text-base leading-normal mt-2">
        <g-link
          :to="project.link"
          target="_blank"
          class="text-gray-500 hover:text-black text-sm no-underline hover:underline"
          >View this →</g-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["project"],
};
</script>