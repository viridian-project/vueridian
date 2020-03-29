<template>
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
</template>
