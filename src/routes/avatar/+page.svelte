<script lang="ts">
  import "../../styles/app.scss";
  import "../../styles/global.scss";
  import { Avatar } from "bits-ui";
  export let loadingStatus: Avatar.Props["loadingStatus"] = undefined;
</script>

<div class="containier">
  <div class="main">
      <Avatar.Root bind:loadingStatus class="avatar-root">
        <div class="avatar-inner">
          <Avatar.Image src="/assets/avatar.jpg" alt="@ramiro" class="avatar-inner"/>
          <Avatar.Fallback>RM</Avatar.Fallback>
        </div>
      </Avatar.Root>
      
  </div>
</div>