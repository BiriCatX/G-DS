<script lang="ts">
  import "../../styles/app.scss";
  import "../../styles/global.scss";
  import { Switch, Label } from "bits-ui";
</script>

<div class="container">
  <div class="main">
    <div class="switch-container">
      <Switch.Root id="marketing" class="switch-root">
        <Switch.Thumb class="switch-thumb" />
        <Switch.Input />
      </Switch.Root>
      <Label.Root for="marketing" class="switch-label"
        >Do not disturb</Label.Root
      >
    </div>
  </div>
</div>
