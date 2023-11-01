<script lang="ts">
  import { fade } from "svelte/transition";
  import img from "../assets/cropped_img.png";
  import Centered from "../components/Centered.svelte";

  const points = [
    "My full name is Victor Manuel Bustillos Alatorre 🐑.",
    "I was born and grew up in México 🇲🇽.",
    "I can speak English, Spanish, and I'm learning French 🇫🇷.",
    "I love music and finding new stuff to listen 🎺.",
    "I feel a deep passion for computers and the future of Artificial Intelligence 🤖.",
    "My favorite food is Tacos 🌮.",
    "I learned how to play plano 🎹.",
    "I like to travel and get to know the world 🌍.",
    "I also really like to capture moments taking pictures 📸.",
    "I like to code too :).",
    "I think life is about experiences and self-growth. Life is a collection of moments, each offering a unique experience. These experiences can be joyful, challenging, or even transformative. Life is unpredictable, and change is inevitable. Embracing change and viewing challenges as opportunities for growth can foster resilience and adaptability.",
  ];
</script>

<Centered>
  <div class="flex">
    <img src={img} alt="me smiling" width="500px" height="500px" />
    <div class="ml-5 space-y-3" in:fade={{ delay: 500 }}>
      {#each points as p}
        <p>{p}</p>
      {/each}
    </div>
  </div>
</Centered>
