<template>
  <ul id="header-tabs">
    <li id="header-tab-product">
      <router-link to="/product">
        <img src="@/assets/icons/ionicons/md-cube.svg" alt="Products" />
        <span id="products-span">Products</span>
      </router-link>
      <!-- <a title="Products" class="active-tab" href="products.html"><img src="@/assets/icons/ionicons/md-cube.svg" alt="Products"><span id="products-span">Products</span></a> -->
    </li>
    <li id="header-tab-label">
      <router-link to="/label">
        <img src="@/assets/icons/fontawesome/award.svg" alt="Labels" />
        <span id="labels-span">Labels</span>
      </router-link>
      <!-- <a title="Labels" href="labels.html"><img src="@/assets/icons/fontawesome/award.svg" alt="Labels"><span id="labels-span">Labels</span></a> -->
    </li>
    <li id="header-tab-company">
      <router-link to="/company">
        <img src="@/assets/icons/fontawesome/building.svg" alt="Companies" />
        <span id="companies-span">Companies</span>
      </router-link>
      <!-- <a title="Companies" href="companies.html"><img src="@/assets/icons/fontawesome/building.svg" alt="Companies"><span id="companies-span">Companies</span></a> -->
    </li>
  </ul>
</template>
