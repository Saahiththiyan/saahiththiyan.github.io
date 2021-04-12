<template>
  <Layout>
    <h1 class="text-2xl font-extrabold text-black mb-4">👨‍💻 Little about me</h1>
    <div class="text-lg text-grey-darkest leading-normal spaced-y-6">
      <p>I'm Saahi , a full-stack developer from 🇱🇰 Sri Lanka</p>
      <p class="mt-5">
        Right now I'm working on a hobby project called ✈
        <a
          href="https://torgo.netlify.app/"
          target="_blank"
          class="text-black font-bold"
          >Torgo</a
        >. You can check more about this in
        <a href="/projects" class="text-black font-bold">PROJECTS</a> and
        <a href="/journal" class="text-black font-bold">JOURNAL</a>
      </p>
      <p class="mt-5">You can find me on</p>
      <p>
        <font-awesome :icon="['fab', 'github']" /><a
          href="https://github.com/Saahiththiyan"
          class="text-black font-bold"
          target="_blank"
        >
          Saahiththiyan</a
        >
      </p>
      <p>
        <font-awesome :icon="['fab', 'twitter']" class="text-blue-400" /><a
          target="_blank"
          href="https://twitter.com/home"
          class="text-black font-bold"
        >
          @saahimathi</a
        >
      </p>
      <p>
        <font-awesome :icon="['fab', 'linkedin']" class="text-blue-500" /><a
          target="_blank"
          href="https://www.linkedin.com/in/saahiththiyan-mathivathanan-741012168/"
          class="text-black font-bold"
        >
          Saahiththiyan Mathivathanan</a
        >
      </p>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Home",
  },
};
</script>

<style>
</style>
