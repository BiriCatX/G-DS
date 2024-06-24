<script lang="ts">
  import { Tabs } from "bits-ui";
  import "../../styles/app.scss";
  import "../../styles/global.scss";
</script>

<section class="container">
  <div class="main">
    <Tabs.Root class="tabs__root">
      <Tabs.List class="tabs__list">
        <Tabs.Trigger class="tabs__trigger" value="books">Books</Tabs.Trigger>
        <Tabs.Trigger class="tabs__trigger" value="movies">Movies</Tabs.Trigger>
        <Tabs.Trigger class="tabs__trigger" value="television">Televison</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content class="tabs__content" value="books"
        ><div class="content">
          A written or printed work consisting of pages glued or sewn together
          along one side and bound in covers.
        </div></Tabs.Content
      >
      <Tabs.Content class="tabs__content" value="movies"
        ><div class="content">
          A story or event recorded by a camera as a set of moving images and
          shown in a theater or on television; a motion picture.rld
        </div></Tabs.Content
      >
      <Tabs.Content class="tabs__content" value="television"
        ><div class="content">
          A system for transmitting visual images and sound to screens, chiefly
          for entertainment, information, and education.
        </div></Tabs.Content
      >
    </Tabs.Root>
  </div>
</section>

<style>
  .container {
    display: flex;
    justify-content: center;
    padding: 30px;
  }

  .main {
    display: flex;
    flex-direction: column;
    gap: 1.35em;
    color: white;
    width: 600px;
    height: 600px;
  }
</style>
