<template>
  <div id="header-top" class="three-full-widths">
    <div id="normal-header">
      <router-link to="/">
        <img
          src="@/assets/images/viridian_logo_bw_offwhite.svg"
          alt="Viridian Logo"
        />
        <span id="brand-big">The Viridian Network</span>
        <span id="brand-small">Viridian</span>
      </router-link>
      <nav>
        <ul>
          <li>
            <a
              title="Search"
              href="#"
              onclick="document.getElementById('header-top').classList.add('slided-to-left-1-of-2');"
            >
              <img src="@/assets/icons/ionicons/md-search.svg" alt="Search" />
              <span id="search-span">Search</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">Tour</a>
          </li>
        </ul>
      </nav>
    </div>
    <div id="search-header">
      <a
        title="Back"
        href="#"
        onclick="document.getElementById('header-top').classList.remove('slided-to-left-1-of-2');"
      >
        <img src="@/assets/icons/ionicons/md-arrow-back.svg" alt="Back" />
      </a>
      <nav>
        <ul>
          <li>
            <a title="Search by Barcode" href="#">
              <img
                src="@/assets/icons/fontawesome/barcode.svg"
                alt="Search by Barcode"
              />
              <span id="barcode-search-span">Search by Barcode</span>
            </a>
          </li>
          <li>
            <a
              title="Search by Product Name"
              href="#"
              onclick="document.getElementById('header-top').classList.remove('slided-to-left-1-of-2'); document.getElementById('header-top').classList.add('slided-to-left-2-of-2');"
            >
              <img
                src="@/assets/icons/fontawesome/font.svg"
                alt="Search by Product Name"
              />
              <span id="product-name-search-span">Search by Product Name</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <div id="search-textinput-header">
      <a
        title="Back"
        href="#"
        onclick="document.getElementById('header-top').classList.remove('slided-to-left-2-of-2'); document.getElementById('header-top').classList.add('slided-to-left-1-of-2');"
      >
        <img src="@/assets/icons/ionicons/md-arrow-back.svg" alt="Back" />
      </a>
      <div>
        <input
          type="text"
          name="product-name"
          id="product-name"
          v-model="q"
          disabled="disabled"
        />
      </div>
      <router-link v-bind:to="'/product/search/' + encodeURIComponent(q)">
        <img src="@/assets/icons/ionicons/md-send.svg" alt="Submit" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      q: "chocolate spread"
    };
  }
  // methods: {
  //   onSubmit: function() {
  //     this.$router.replace({ query: { q: this.q } });
  //   }
  // }
};
</script>
