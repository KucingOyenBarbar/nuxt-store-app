<template>
  <section class="product-section">
    <div class="container pt-5 mt-5">
      <div class="row justify-content-center g-2">
        <div class="col col-lg-8">
          <ProductsProductTabButton @category="category" :isCategory="productCategory" />
          <SharedHeadingName :title="productCategory" />
          <ProductsProductListItem :products="products?.filter(product => {
            return product.category === productCategory
          }).sort((a, b) => b.title.localeCompare(a.title))" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>


useSeoMeta({
  title: "Daftar Produk Unggulan",
  ogTitle: "Daftar Produk Unggulan",
  description: "Cari dan temukan semua produk unggulan kami"
})

const base_url: string = 'https://fakestoreapi.com'
const { data: products, error, pending } = await useFetch<Products[]>('/products',
  {
    baseURL: base_url,
    lazy: true,
    server: false,
  });

const categories: Categories[] = ['electronics', 'jewelery', "men's clothing", "women's clothing"]
const productCategory = ref<string | null>(categories[0]);
const category: (value: string) => void = (value: string) => {
  productCategory.value = value
  useRouter().push({ query: { cat: productCategory.value } })
}

</script>


