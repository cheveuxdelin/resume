<script lang="ts">
  import resumePDF from "../assets/resume.pdf";
  import resume from "../assets/resume";
</script>

<div class="space-y-5">
  <a
    href={resumePDF}
    target="blank"
    class="flex justify-end text-white align-middle"
  >
    <p>Download</p>
  </a>

  <section class="">
    <h2 class="text-2xl text-white">Education</h2>
    <div class="w-full flex justify-between">
      <p>{resume.education.school}</p>
      <p>{resume.education.date}</p>
    </div>
    <div class="w-full flex justify-between">
      <p>{resume.education.description}</p>
      <p>{resume.education.location}</p>
    </div>
  </section>

  <section>
    <h2 class="text-2xl text-white">Work</h2>
    {#each resume.work as work}
      <div class="mb-5">
        <div class="w-full flex justify-between">
          <p>{work.company}</p>
          <p>{work.date}</p>
        </div>
        <p class="">{work.title}</p>
        <ul class="list-disc list-inside mt-2">
          {#each work.description as description}
            <li class="list-item">{description}</li>
          {/each}
        </ul>
      </div>
    {/each}
  </section>

  <section>
    <h2 class="text-2xl text-white">Technical Skills</h2>
    {#each resume.technicalSkills as technicalSkill}
      <p>
        {technicalSkill.name}: {technicalSkill.items.join(", ")}
      </p>
    {/each}
  </section>
</div>
