<template>
  <div class="alternating-boxes">
    <h3>The product inherits these scores:</h3>
    <div class="producers" v-if="producers.length > 0">
      <h4 v-if="producers.length > 1">Producers:</h4>
      <h4 v-else>Producer:</h4>
      <EntityListing
        :screen="screen"
        entity-name="producer"
        entity-name-long="producer"
        :entities="producers"
        entity-product-connection="is produced by this producer"
      />
    </div>
    <div class="labels" v-if="labels.length > 0">
      <h4 v-if="labels.length > 1">Labels:</h4>
      <h4 v-else>Label:</h4>
      <EntityListing
        :screen="screen"
        entity-name="label"
        entity-name-long="label"
        :entities="labels"
        entity-product-connection="bears this label"
      />
    </div>
    <div class="product-categories" v-if="productCategories.length > 0">
      <h4 v-if="productCategories.length > 1">Product Categories:</h4>
      <h4 v-else>Product Category:</h4>
    </div>
    <div class="contained-products" v-if="containedProducts.length > 0">
      <h4 v-if="containedProducts.length > 1">Contained Products:</h4>
      <h4 v-else>Contained Product:</h4>
    </div>
  </div>
</template>

<script>
import EntityListing from "@/components/widgets/EntityListing.vue";

export default {
  props: [
    "screen",
    "producers",
    "labels",
    "product-categories",
    "contained-products"
  ],
  components: {
    EntityListing
  }
};
</script>
