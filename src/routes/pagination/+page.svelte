<script lang="ts">
    import "../../app.css";
  import "../../styles/app.scss";
  import "../../styles/global.scss";
    import { Pagination } from "bits-ui";
    import { ChevronRight, ChevronLeft } from 'lucide-svelte';
  </script>
   
  <section class="container">
    <div class="main">
        <Pagination.Root count={100} perPage={10} let:pages let:range>
            <div class="pagination-arrow">
              <Pagination.PrevButton
                class="pagination-left"
              >
                <ChevronLeft class="lucide-24"/>
              </Pagination.PrevButton>
              <div class="pagination-number">
                {#each pages as page (page.key)}
                  {#if page.type === "ellipsis"}
                    <div class="text-[15px] font-medium text-foreground-alt">...</div>
                  {:else}
                    <Pagination.Page
                      {page}
                      class="pagination-page"
                    >
                      {page.value}
                    </Pagination.Page>
                  {/if}
                {/each}
              </div>
              <Pagination.NextButton
                class="pagination-arrow"
              >
                <ChevronRight class="lucide-24"/>
              </Pagination.NextButton>
            </div>
            <p class="pagination-range">
              Showing {range.start} - {range.end}
            </p>
          </Pagination.Root>
        
    </div>
  </section>
  
  <style>
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