<script>
  import Button from "../examples/Button.svelte";
  import Tabs from "../examples/Tabs.svelte";

</script>
<div class="main">
  <div class="container"><Button></Button></div>
  <div class="container"><Tabs></Tabs></div>
</div>

<style lang="scss">
  .main {
    display: flex;
  }

  .container {
    display: flex;
    border: 1px solid grey;
    width : 500px;
    height: auto;
  }
</style>
