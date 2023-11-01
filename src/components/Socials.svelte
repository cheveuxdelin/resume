<script lang="ts">
  const icons = [
    { name: "github", link: "https://github.com/cheveuxdelin" },
    { name: "linkedin", link: "https://linkedin.com/in/cheveuxdelin" },
    { name: "spotify", link: "https://open.spotify.com/user/cfx0ryhz6kx3yc9q6k4ixvrl8?si=5ce7d73928b74a4a" },
  ];
</script>

<div class="space-x-1">
  {#each icons as icon}
    <a target="_blank" href={icon.link}
      ><i class={`fa-brands fa-${icon.name} fa-xl`} />
    </a>
  {/each}
</div>

<!-- checar pq esto hace flicker y checar server side -->