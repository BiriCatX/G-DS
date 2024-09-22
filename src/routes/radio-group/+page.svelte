<script lang="ts">
  import "../../app.css";
  import "../../styles/app.scss";
  import "../../styles/global.scss";
  import { RadioGroup, Label } from "bits-ui";
</script>

<div class="container">
  <div class="main">
    <RadioGroup.Root class="radio-root">
      <div class="radio-group">
        <RadioGroup.Item id="amazing" value="amazing" class="radio-item" />
        <Label.Root for="amazing" class="label-root">Amazing</Label.Root>
      </div>
      <div class="radio-group">
        <RadioGroup.Item id="average" value="average" class="radio-item" />
        <Label.Root for="average" class="label-root">Average</Label.Root>
      </div>
      <div class="radio-group">
        <RadioGroup.Item id="terrible" value="terrible" class="radio-item" />
        <Label.Root for="terrible" class="label-root">Terrible</Label.Root>
      </div>
    </RadioGroup.Root>
  </div>
</div>

<style lang="scss">

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: center;
    padding: 30px;
  }

  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.35em;
  }

</style>
