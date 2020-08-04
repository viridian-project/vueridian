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
      <div>
        <input
          type="text"
          :name="type + '-name'"
          :id="type + '-name'"
          v-model="q"
        />
      </div>
      <router-link :to="'/' + type + '/search/' + encodeURIComponent(q)">
        <img src="@/assets/icons/ionicons/md-send.svg" alt="Submit" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderTopNonProduct",
  props: {
    type: String
  },
  data: function() {
    return {
      q: ""
    };
  }
};
</script>
