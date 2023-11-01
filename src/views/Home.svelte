<script lang="ts">
  import data from "../assets/data";
  import Centered from "../components/Centered.svelte";
  import Socials from "../components/Socials.svelte";
</script>

<Centered>
  <h1 class="text-5xl mb-2 text-white">{data.name}</h1>
  <h2 class="mb-1 text-sm">
    💻✨ {data.currentPosition} @
    <a class="underline" href="https://brightcove.com/" target="_blank">
      {data.currentCompany}
    </a>
  </h2>
  <p class="mb-2">{data.smallDescription}</p>
  <Socials />
</Centered>
