<template>
  <header>
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
                <span id="product-name-search-span"
                  >Search by Product Name</span
                >
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
        <div><input type="text" name="product-name" id="product-name" /></div>
        <a title="Submit" href="products-search-results.html">
          <img src="@/assets/icons/ionicons/md-send.svg" alt="Submit" />
        </a>
      </div>
    </div>
    <ul id="header-tabs">
      <li>
        <router-link to="/products">
          <img src="@/assets/icons/ionicons/md-cube.svg" alt="Products" />
          <span id="products-span">Products</span>
        </router-link>
        <!-- <a title="Products" class="active-tab" href="products.html"><img src="@/assets/icons/ionicons/md-cube.svg" alt="Products"><span id="products-span">Products</span></a> -->
      </li>
      <li>
        <router-link to="/labels">
          <img src="@/assets/icons/fontawesome/award.svg" alt="Labels" />
          <span id="labels-span">Labels</span>
        </router-link>
        <!-- <a title="Labels" href="labels.html"><img src="@/assets/icons/fontawesome/award.svg" alt="Labels"><span id="labels-span">Labels</span></a> -->
      </li>
      <li>
        <router-link to="/companies">
          <img src="@/assets/icons/fontawesome/building.svg" alt="Companies" />
          <span id="companies-span">Companies</span>
        </router-link>
        <!-- <a title="Companies" href="companies.html"><img src="@/assets/icons/fontawesome/building.svg" alt="Companies"><span id="companies-span">Companies</span></a> -->
      </li>
    </ul>
  </header>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Header"
  // components: {
  //   HelloWorld
  // }
};
</script>
