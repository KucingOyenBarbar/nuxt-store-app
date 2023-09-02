<template>
  <section class="product-section">
    <div class="container pt-5 mt-5">
      <div class="row justify-content-center g-2">
        <div class="col col-lg-8">
          <ProductsProductTabButton @category="category" :isCategory="productCategory" />
          <SharedHeadingName :title="productCategory" />
          <ProductsProductListItem v-show="productCategory === productCategory" :products="products"
            :category="productCategory" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>

const base_url: string = 'https://fakestoreapi.com'
const { data: products, error, pending } = await useFetch('/products',
  {
    baseURL: base_url,
    lazy: true,
    server: false,
    transform: (product: Products[]) => {
      return product?.sort((a, b) => b.title.localeCompare(a.title))
    }
  });

const categories: Categories[] = ['electronics', 'jewelery', "men's clothing", "women's clothing"]
const productCategory = ref<string | null>(categories[0]);


const category = (value: string) => {
  productCategory.value = value

  useRouter().push({ hash: '#' + productCategory.value })

}



</script>


