<script>
  import { Button } from "bits-ui";
  import "../../styles/app.scss";
  import "../../styles/global.scss";
</script>

<section class="container">
  <div class="main">
    <div class="input__container">
      Your email<input
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
        placeholder="Enter your password"
      />
    </div>
    <Button.Root class="button type--primary size--md">Meow Meow</Button.Root>
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
  }
</style>
