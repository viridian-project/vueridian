<template>
  <div id="header-top" class="two-full-widths">
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
              onclick="document.getElementById('header-top').classList.add('slided-to-left');"
            >
              <img
                src="@/assets/icons/ionicons/md-search.svg"
                alt="Search"
              /><span id="search-span">Search</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">Tour</a>
          </li>
        </ul>
      </nav>
    </div>
    <div id="search-textinput-header">
      <a
        title="Back"
        href="#"
        onclick="document.getElementById('header-top').classList.remove('slided-to-left');"
      >
        <img src="@/assets/icons/ionicons/md-arrow-back.svg" alt="Back" />
      </a>
      <div><input type="text" name="label-name" id="label-name" /></div>
      <a title="Submit" href="labels-search-results.html">
        <img src="@/assets/icons/ionicons/md-send.svg" alt="Submit" />
      </a>
    </div>
  </div>
</template>
