<script lang="ts">
  import { blur } from "svelte/transition";
  import MySpotify from "./views/Blog.svelte";
  import About from "./views/About.svelte";
  import Projects from "./views/Projects.svelte";
  import Resume from "./views/Resume.svelte";
  import Blog from "./views/Blog.svelte";
  import Gallery from "./views/Gallery.svelte";
  import Home from "./views/Home.svelte";
  import Header from "./components/Header.svelte";
  import { tab } from "./stores";

  const tabs = {
    About,
    Projects,
    Resume,
    Blog,
    Gallery,
    MySpotify,
    Home,
  };
</script>

<svelte:head>
  <script
    src="https://kit.fontawesome.com/a06c8b31d1.js"
    crossorigin="anonymous"
  ></script>
  <title>Victor Bustillos</title>
</svelte:head>

<main class="text-gray-400 font-light text-sm h-screen flex flex-col">
  <Header defaultTab={"Home"} tabs={Object.keys(tabs)}>
    <i class="fa-solid fa-house text-lg" slot="Home" />
  </Header>
  {#key $tab}
    <div
      in:blur={{ duration: 300 }}
      class="grow mx-auto max-w-7xl sm:px-6 lg:px-32 overflow-scroll"
    >
      <svelte:component this={tabs[$tab]} />
    </div>
  {/key}
</main>
