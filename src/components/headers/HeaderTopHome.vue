<template>
  <div id="header-top" class="full-width">
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
            <a href="javascript:void(0);" @click.stop="tourGuide">Tour</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import TourGuide from "@/assets/js/tour-guide.js";

export default {
  methods: {
    tourGuide: function() {
      TourGuide.startTour();
    }
  }
};
</script>
