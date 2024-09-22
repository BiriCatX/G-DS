<script>
  import "../../styles/app.scss";
  import "../../styles/global.scss";
</script>

<section class="container">
  <div class="main">
    <div class="tone-row">
        <div class="tone-cell" style="margin-right:40px">Tones</div>
      <div class="tone-cell">0</div>
      <div class="tone-cell">10</div>
      <div class="tone-cell">20</div>
      <div class="tone-cell">30</div>
      <div class="tone-cell">40</div>
      <div class="tone-cell">50</div>
      <div class="tone-cell">60</div>
      <div class="tone-cell">70</div>
      <div class="tone-cell">80</div>
      <div class="tone-cell">90</div>
      <div class="tone-cell">95</div>
      <div class="tone-cell">100</div>
    </div>
    <div class="tone-row">
        <div class="tone-cell align-center" style="margin-right:40px">Primary</div>
      <div class="primary-tone-cell-0"></div>
      <div class="primary-tone-cell-10"></div>
      <div class="primary-tone-cell-20"></div>
      <div class="primary-tone-cell-30"></div>
      <div class="primary-tone-cell-40"></div>
      <div class="primary-tone-cell-50"></div>
      <div class="primary-tone-cell-60"></div>
      <div class="primary-tone-cell-70"></div>
      <div class="primary-tone-cell-80"></div>
      <div class="primary-tone-cell-90"></div>
      <div class="primary-tone-cell-95"></div>
      <div class="primary-tone-cell-100"></div>
    </div>
    <div class="tone-row">
        <div class="tone-cell align-center" style="margin-right:40px">Secondary</div>
      <div class="secondary-tone-cell-0"></div>
      <div class="secondary-tone-cell-10"></div>
      <div class="secondary-tone-cell-20"></div>
      <div class="secondary-tone-cell-30"></div>
      <div class="secondary-tone-cell-40"></div>
      <div class="secondary-tone-cell-50"></div>
      <div class="secondary-tone-cell-60"></div>
      <div class="secondary-tone-cell-70"></div>
      <div class="secondary-tone-cell-80"></div>
      <div class="secondary-tone-cell-90"></div>
      <div class="secondary-tone-cell-95"></div>
      <div class="secondary-tone-cell-100"></div>
    </div>
    <div class="tone-row">
        <div class="tone-cell align-center" style="margin-right:40px">Neutral</div>
      <div class="neutral-tone-cell-0"></div>
      <div class="neutral-tone-cell-10"></div>
      <div class="neutral-tone-cell-20"></div>
      <div class="neutral-tone-cell-30"></div>
      <div class="neutral-tone-cell-40"></div>
      <div class="neutral-tone-cell-50"></div>
      <div class="neutral-tone-cell-60"></div>
      <div class="neutral-tone-cell-70"></div>
      <div class="neutral-tone-cell-80"></div>
      <div class="neutral-tone-cell-90"></div>
      <div class="neutral-tone-cell-95"></div>
      <div class="neutral-tone-cell-100"></div>
    </div>
    <div class="tone-row">
        <div class="tone-cell align-center" style="margin-right:40px">Destructive</div>
      <div class="destructive-tone-cell-0"></div>
      <div class="destructive-tone-cell-10"></div>
      <div class="destructive-tone-cell-20"></div>
      <div class="destructive-tone-cell-30"></div>
      <div class="destructive-tone-cell-40"></div>
      <div class="destructive-tone-cell-50"></div>
      <div class="destructive-tone-cell-60"></div>
      <div class="destructive-tone-cell-70"></div>
      <div class="destructive-tone-cell-80"></div>
      <div class="destructive-tone-cell-90"></div>
      <div class="destructive-tone-cell-95"></div>
      <div class="destructive-tone-cell-100"></div>
    </div>
    <div class="tone-row">
        
        <div class="tone-cell align-center" style="margin-right:40px">Confirmative</div>
      <div class="confirmative-tone-cell-0"></div>
      <div class="confirmative-tone-cell-10"></div>
      <div class="confirmative-tone-cell-20"></div>
      <div class="confirmative-tone-cell-30"></div>
      <div class="confirmative-tone-cell-40"></div>
      <div class="confirmative-tone-cell-50"></div>
      <div class="confirmative-tone-cell-60"></div>
      <div class="confirmative-tone-cell-70"></div>
      <div class="confirmative-tone-cell-80"></div>
      <div class="confirmative-tone-cell-90"></div>
      <div class="confirmative-tone-cell-95"></div>
      <div class="confirmative-tone-cell-100"></div>
    </div>
    <div class="tone-row">
        <div class="tone-cell align-center" style="margin-right:40px">Cautionary</div>
      <div class="cautionary-tone-cell-0"></div>
      <div class="cautionary-tone-cell-10"></div>
      <div class="cautionary-tone-cell-20"></div>
      <div class="cautionary-tone-cell-30"></div>
      <div class="cautionary-tone-cell-40"></div>
      <div class="cautionary-tone-cell-50"></div>
      <div class="cautionary-tone-cell-60"></div>
      <div class="cautionary-tone-cell-70"></div>
      <div class="cautionary-tone-cell-80"></div>
      <div class="cautionary-tone-cell-90"></div>
      <div class="cautionary-tone-cell-95"></div>
      <div class="cautionary-tone-cell-100"></div>
    </div>
  </div>
  
</section>

<style lang="scss">
  @import "../../styles/main/colors.scss";

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

  .tone-row {
    display: flex;
    width: 100%;
    height: 50px;
  }
  .tone-cell {
    display: flex;
    width: 50px;
    justify-content: center;
    align-items:end;
    color: $color__on--surface;
  }

  .align-center {
    align-items:center !important;
  }
  .primary-tone-cell-0 {
    display: flex;
    width: 50px;
    background-color: $color__primary--0;
  }

  .primary-tone-cell-10 {
    display: flex;
    width: 50px;
    height: 50px;
    background-color: $color__primary--10;
  }

  .primary-tone-cell-20 {
    display: flex;
    width: 50px;
    height: 50px;
    background-color: $color__primary--20;
  }

  .primary-tone-cell-30 {
    display: flex;
    width: 50px;
    height: 50px;
    background-color: $color__primary--30;
  }

  .primary-tone-cell-40 {
    display: flex;
    width: 50px;
    height: 50px;
    background-color: $color__primary--40;
  }

  .primary-tone-cell-50 {
    display: flex;
    width: 50px;
    height: 50px;
    background-color: $color__primary--50;
  }

  .primary-tone-cell-60 {
    display: flex;
    width: 50px;
    height: 50px;
    background-color: $color__primary--60;
  }

  .primary-tone-cell-70 {
    display: flex;
    width: 50px;
    height: 50px;
    background-color: $color__primary--70;
  }

  .primary-tone-cell-80 {
    display: flex;
    width: 50px;
    height: 50px;
    background-color: $color__primary--80;
  }

  .primary-tone-cell-90 {
    display: flex;
    width: 50px;
    height: 50px;
    background-color: $color__primary--90;
  }

  .primary-tone-cell-95 {
    display: flex;
    width: 50px;
    height: 50px;
    background-color: $color__primary--95;
  }

  .primary-tone-cell-100 {
    display: flex;
    width: 50px;
    height: 50px;
    background-color: $color__primary--100;
  }

  .secondary-tone-cell-0 {
    display: flex;
    width: 50px;
    background-color: $color__secondary--0;
  }

  .secondary-tone-cell-10 {
    display: flex;
    width: 50px;
    background-color: $color__secondary--10;
  }

  .secondary-tone-cell-20 {
    display: flex;
    width: 50px;
    background-color: $color__secondary--20;
  }

  .secondary-tone-cell-30 {
    display: flex;
    width: 50px;
    background-color: $color__secondary--30;
  }

  .secondary-tone-cell-40 {
    display: flex;
    width: 50px;
    background-color: $color__secondary--40;
  }

  .secondary-tone-cell-50 {
    display: flex;
    width: 50px;
    background-color: $color__secondary--50;
  }

  .secondary-tone-cell-60 {
    display: flex;
    width: 50px;
    background-color: $color__secondary--60;
  }

  .secondary-tone-cell-70 {
    display: flex;
    width: 50px;
    background-color: $color__secondary--70;
  }

  .secondary-tone-cell-80 {
    display: flex;
    width: 50px;
    background-color: $color__secondary--80;
  }

  .secondary-tone-cell-90 {
    display: flex;
    width: 50px;
    background-color: $color__secondary--90;
  }

  .secondary-tone-cell-95 {
    display: flex;
    width: 50px;
    background-color: $color__secondary--95;
  }

  .secondary-tone-cell-100 {
    display: flex;
    width: 50px;
    background-color: $color__secondary--100;
  }
  .neutral-tone-cell-0 {
    display: flex;
    width: 50px;
    background-color: $color__neutral--0;
  }

  .neutral-tone-cell-10 {
    display: flex;
    width: 50px;
    background-color: $color__neutral--10;
  }

  .neutral-tone-cell-20 {
    display: flex;
    width: 50px;
    background-color: $color__neutral--20;
  }

  .neutral-tone-cell-30 {
    display: flex;
    width: 50px;
    background-color: $color__neutral--30;
  }

  .neutral-tone-cell-40 {
    display: flex;
    width: 50px;
    background-color: $color__neutral--40;
  }

  .neutral-tone-cell-50 {
    display: flex;
    width: 50px;
    background-color: $color__neutral--50;
  }

  .neutral-tone-cell-60 {
    display: flex;
    width: 50px;
    background-color: $color__neutral--60;
  }

  .neutral-tone-cell-70 {
    display: flex;
    width: 50px;
    background-color: $color__neutral--70;
  }

  .neutral-tone-cell-80 {
    display: flex;
    width: 50px;
    background-color: $color__neutral--80;
  }

  .neutral-tone-cell-90 {
    display: flex;
    width: 50px;
    background-color: $color__neutral--90;
  }

  .neutral-tone-cell-95 {
    display: flex;
    width: 50px;
    background-color: $color__neutral--95;
  }

  .neutral-tone-cell-100 {
    display: flex;
    width: 50px;
    background-color: $color__neutral--100;
  }

  .destructive-tone-cell-0 {
    display: flex;
    width: 50px;
    background-color: $color__destructive--0;
  }

  .destructive-tone-cell-10 {
    display: flex;
    width: 50px;
    background-color: $color__destructive--10;
  }

  .destructive-tone-cell-20 {
    display: flex;
    width: 50px;
    background-color: $color__destructive--20;
  }

  .destructive-tone-cell-30 {
    display: flex;
    width: 50px;
    background-color: $color__destructive--30;
  }

  .destructive-tone-cell-40 {
    display: flex;
    width: 50px;
    background-color: $color__destructive--40;
  }

  .destructive-tone-cell-50 {
    display: flex;
    width: 50px;
    background-color: $color__destructive--50;
  }

  .destructive-tone-cell-60 {
    display: flex;
    width: 50px;
    background-color: $color__destructive--60;
  }

  .destructive-tone-cell-70 {
    display: flex;
    width: 50px;
    background-color: $color__destructive--70;
  }

  .destructive-tone-cell-80 {
    display: flex;
    width: 50px;
    background-color: $color__destructive--80;
  }

  .destructive-tone-cell-90 {
    display: flex;
    width: 50px;
    background-color: $color__destructive--90;
  }

  .destructive-tone-cell-95 {
    display: flex;
    width: 50px;
    background-color: $color__destructive--95;
  }

  .destructive-tone-cell-100 {
    display: flex;
    width: 50px;
    background-color: $color__destructive--100;
  }

  .confirmative-tone-cell-0 {
    display: flex;
    width: 50px;
    background-color: $color__confirmative--0;
  }

  .confirmative-tone-cell-10 {
    display: flex;
    width: 50px;
    background-color: $color__confirmative--10;
  }

  .confirmative-tone-cell-20 {
    display: flex;
    width: 50px;
    background-color: $color__confirmative--20;
  }

  .confirmative-tone-cell-30 {
    display: flex;
    width: 50px;
    background-color: $color__confirmative--30;
  }

  .confirmative-tone-cell-40 {
    display: flex;
    width: 50px;
    background-color: $color__confirmative--40;
  }

  .confirmative-tone-cell-50 {
    display: flex;
    width: 50px;
    background-color: $color__confirmative--50;
  }

  .confirmative-tone-cell-60 {
    display: flex;
    width: 50px;
    background-color: $color__confirmative--60;
  }

  .confirmative-tone-cell-70 {
    display: flex;
    width: 50px;
    background-color: $color__confirmative--70;
  }

  .confirmative-tone-cell-80 {
    display: flex;
    width: 50px;
    background-color: $color__confirmative--80;
  }

  .confirmative-tone-cell-90 {
    display: flex;
    width: 50px;
    background-color: $color__confirmative--90;
  }

  .confirmative-tone-cell-95 {
    display: flex;
    width: 50px;
    background-color: $color__confirmative--95;
  }

  .confirmative-tone-cell-100 {
    display: flex;
    width: 50px;
    background-color: $color__confirmative--100;
  }
  .cautionary-tone-cell-0 {
    display: flex;
    width: 50px;
    background-color: $color__cautionary--0;
  }

  .cautionary-tone-cell-10 {
    display: flex;
    width: 50px;
    background-color: $color__cautionary--10;
  }

  .cautionary-tone-cell-20 {
    display: flex;
    width: 50px;
    background-color: $color__cautionary--20;
  }

  .cautionary-tone-cell-30 {
    display: flex;
    width: 50px;
    background-color: $color__cautionary--30;
  }

  .cautionary-tone-cell-40 {
    display: flex;
    width: 50px;
    background-color: $color__cautionary--40;
  }

  .cautionary-tone-cell-50 {
    display: flex;
    width: 50px;
    background-color: $color__cautionary--50;
  }

  .cautionary-tone-cell-60 {
    display: flex;
    width: 50px;
    background-color: $color__cautionary--60;
  }

  .cautionary-tone-cell-70 {
    display: flex;
    width: 50px;
    background-color: $color__cautionary--70;
  }

  .cautionary-tone-cell-80 {
    display: flex;
    width: 50px;
    background-color: $color__cautionary--80;
  }

  .cautionary-tone-cell-90 {
    display: flex;
    width: 50px;
    background-color: $color__cautionary--90;
  }

  .cautionary-tone-cell-95 {
    display: flex;
    width: 50px;
    background-color: $color__cautionary--95;
  }

  .cautionary-tone-cell-100 {
    display: flex;
    width: 50px;
    background-color: $color__cautionary--100;
  }
</style>
