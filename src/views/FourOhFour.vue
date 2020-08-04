<template>
  <div id="page">
    <HeaderHome />
    <div id="main-content">
      <section class="home">
        <h1>Page not found</h1>
        <img
          alt="Locatie MoneYou, Science Park Amsterdam"
          src="@/assets/images/404.jpg"
        />
        <p style="font-size: 0.9rem;font-style: italic;">
          <a href="https://www.flickr.com/photos/8698918@N08/5588422038"
            >"Locatie MoneYou, Science Park Amsterdam"</a
          ><span>
            by
            <a href="https://www.flickr.com/photos/8698918@N08"
              >tonwesseling</a
            ></span
          >
          is licensed under
          <a
            href="https://creativecommons.org/licenses/by-nc-sa/2.0/?ref=ccsearch&atype=html"
            style="margin-right: 5px;"
            >CC BY-NC-SA 2.0</a
          ><a
            href="https://creativecommons.org/licenses/by-nc-sa/2.0/?ref=ccsearch&atype=html"
            target="_blank"
            rel="noopener noreferrer"
            style="display: inline-block;white-space: none;margin-top: 2px;margin-left: 3px;height: 22px !important;"
            ><img
              style="height: inherit;margin-right: 3px;display: inline-block;"
              src="https://search.creativecommons.org/static/img/cc_icon.svg"/><img
              style="height: inherit;margin-right: 3px;display: inline-block;"
              src="https://search.creativecommons.org/static/img/cc-by_icon.svg"/><img
              style="height: inherit;margin-right: 3px;display: inline-block;"
              src="https://search.creativecommons.org/static/img/cc-nc_icon.svg"/><img
              style="height: inherit;margin-right: 3px;display: inline-block;"
              src="https://search.creativecommons.org/static/img/cc-sa_icon.svg"
          /></a>
        </p>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderHome from "@/components/headers/HeaderHome.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "FourOhFour",
  components: {
    HeaderHome,
    Footer
  }
};
</script>
