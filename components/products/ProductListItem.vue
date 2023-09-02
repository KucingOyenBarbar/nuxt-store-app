<template>
  <div class="row row-cols-2 row-cols-xxl-4 row-cols-lg-3  row-cols-md-4 row-cols-sm-3 justify-content-start g-2 py-3">
    <div v-for="product in products?.filter((product: any) => product.category === category)" :key="product.id"
      class="col">
      <div class="card product-card">
        <NuxtImg class="card-img-top img-fluid rounded p-3" :src="product.image" :width="50" :height="50"
          :alt="`Products ${product.title}`" loading="lazy" />
        <div class="card-body">
          <div class="pt-3">
            <div>
              {{ formatter.format(product.price) }}
            </div>
            <NuxtLink :to="`/products/${product.id}`"
              class="link-secondary link-offset-2 link-underline link-underline-opacity-0 text-start fst-bold fs-6 stretched-link">
              {{
                product.title.length > 40
                ? `${product.title.substring(0, 40)}...`
                : product.title
              }}</NuxtLink>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

const props = defineProps(['products', 'category'])
const formatter = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR'
})


</script>


<style scoped>
.product-card {
  width: 100%;
  height: auto;
  min-height: 300px;
  overflow: hidden;
  border-radius: 0;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;
  transition: ease-in-out 500ms;
}

.product-card img {
  width: 150px;
  height: 150px;
  object-fit: contain;
  object-position: center;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  margin: 0 auto;
}
</style>