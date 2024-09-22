<script>
  import "../styles/app.scss";
  import "../styles/global.scss";
  import { Tabs } from "bits-ui";
  import { Button } from "bits-ui";
</script>

<div class="container">
  <div class="grid">
    <div class="grid-item item-1">
      <Tabs.Root class="tabs__root">
        <Tabs.List class="tabs__list">
          <Tabs.Trigger class="tabs__trigger" value="books">Books</Tabs.Trigger>
          <Tabs.Trigger class="tabs__trigger" value="movies"
            >Movies</Tabs.Trigger
          >
          <Tabs.Trigger class="tabs__trigger" value="television"
            >Televison</Tabs.Trigger
          >
        </Tabs.List>
        <Tabs.Content class="tabs__content" value="books"
          ><div class="content">
            Books are gateways to different realities, allowing readers to
            explore a vast array of ideas, cultures, and emotions. The written
            word has a unique power to convey intricate thoughts and complex
            narratives that can be savored over time. Literary genres—from
            historical fiction to fantasy—provide a spectrum of experiences,
            often leading to deeper philosophical inquiries or personal
            reflections. The intimacy of reading encourages a personal
            connection to characters and themes, fostering empathy and
            understanding. The advent of self-publishing and digital platforms
            has democratized literature, allowing diverse voices to emerge and
            reach wider audiences. Book adaptations into films and series often
            reignite interest in original texts, creating a cycle of exploration
            between mediums.
          </div></Tabs.Content
        >
        <Tabs.Content class="tabs__content" value="movies"
          ><div class="content">
            Movies encapsulate storytelling in a visual and auditory format,
            combining elements such as cinematography, sound design, and acting
            to create immersive experiences. The magic of film lies in its
            ability to evoke emotions in a matter of moments through powerful
            imagery and music. Iconic directors have pushed the boundaries of
            storytelling, experimenting with narrative structures and genres,
            resulting in works that challenge societal norms and provoke
            thought. The film industry’s evolution—from silent films to CGI
            spectacles—demonstrates its adaptability and innovation. Festivals
            like Cannes and Sundance showcase independent filmmakers, fostering
            creativity and providing a platform for new voices. The rise of
            streaming services has changed how films are consumed, leading to an
            on-demand culture that prioritizes accessibility and diverse
            content.
          </div></Tabs.Content
        >
        <Tabs.Content class="tabs__content" value="television"
          ><div class="content">
            Television has grown into a multifaceted medium, known for its
            ability to create long-form narratives that explore character
            development in ways that films sometimes can’t. Series can tackle
            complex themes over several seasons, allowing for rich storytelling
            that resonates with audiences. The landscape of television has
            shifted dramatically with the emergence of streaming platforms,
            enabling global access to a plethora of shows across genres, from
            gripping dramas to lighthearted comedies. This shift has also led to
            a renaissance in storytelling, where writers can experiment with
            format and content without the constraints of traditional
            broadcasting. Shows often serve as cultural commentaries, addressing
            issues like identity, politics, and mental health, while fan
            engagement through social media fosters a sense of community and
            discussion around favorite series.
          </div></Tabs.Content
        >
      </Tabs.Root>
    </div>
    <div class="grid-item item-2">
      <div class="main">
        <div class="input__container">
          Your email<img
            class="input__icon"
            src="../assets/svg/bulb.svg"
            alt=""
          /><input
            class="input"
            type="email"
            id="fname"
            name="fname"
            placeholder="Enter your email"
          />
        </div>
        <div class="input__container">
          Your Password<input
            class="input"
            type="password"
            id="fname"
            name="fname"
            placeholder="Enter new password"
          />
        </div>
        <div class="input__container">
          Confirm Password<input
            class="input"
            type="password"
            id="fname"
            name="fname"
            placeholder="Enter password again"
          />
        </div>
        <Button.Root class="button type--primary size--md"
          >Meow Meow</Button.Root
        >
      </div>
    </div>
    <div class="grid-item item-3">3</div>
    <div class="grid-item item-4">4</div>
    <div class="grid-item item-5">5</div>
  </div>
</div>

<style>
body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
}

  .main {
    display: flex;
    flex-direction: column;
    gap: 1.35em;
  }

  .container {
    display: flex;
    min-height: 100vh;
    width: 100%;
}
.grid {
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 16px;
    padding: 16px;
    box-sizing: border-box;
} 
  .grid-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .item-1 {
    grid-column: span 6;
    grid-row: span 1;
  }
  .item-2 {
    grid-column: span 3;
    grid-row: span 1;
  }
  .item-3 {
    grid-column: span 4;
    grid-row: span 2;
    border: 1px solid magenta;
  }
  .item-4,
  .item-5 {
    grid-column: span 3;
    grid-row: span 2;
  }
</style>
