<template>
  <div class="layout">
    <div id="app" class="py-8 lg:py-16 px-6 md:px-16 lg:px-24">
      <div class="relative z-20 flex justify-between items-center">
        <div class="flex md:block lg:flex items-center max-w-full">
          <div
            class="mb-0 md:mb-4 lg:mb-0 flex flex-no-shrink pr-4 md:pr-6 lg:pr-12"
          >
            <a href="" class="flex items-center no-underline">
              <img
                src="https://avatars3.githubusercontent.com/u/24891673?s=400&u=e382e7e3224ca6616efe486a2941eb5c32a7bfbd&v=4"
                class="h-10 w-10 md:h-12 md:w-12 lg:h-20 lg:w-20 rounded-full"
                alt=""
              />
            </a>
          </div>
          <div>
            <a
              href="/"
              class="block text-black no-underline text-xl lg:text-3xl font-extrabold leading-none lg:leading-tight"
              >Saahiththiyan Mathivathanan</a
            >
            <div
              class="md:flex mt-3 lg:mt-4 uppercase tracking-widest text-xs spaced-x-6"
            >
              <a
                href="/articles"
                class="text-gray-400 font-semibold no-underline hover:text-black mr-6"
                >Articles</a
              >
              <a
                href="/projects"
                class="text-gray-400 font-semibold no-underline hover:text-black mr-6"
                >Projects</a
              >
              <a
                href="/journal"
                class="text-gray-400 font-semibold no-underline hover:text-black mr-6"
                >Journal</a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="lg:pl-32 mt-12">
        <div class="max-w-2xl">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
</style>
