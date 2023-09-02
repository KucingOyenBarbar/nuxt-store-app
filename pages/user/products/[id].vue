<template>
  <section class="product-details-section position-relative pt-5">
    <div class="container">
      <div class="row justify-content-center g-2 py-5">
        <div class="col-sm-10">
          <div :class="`card  rounded border-0 mb-3 product-card`">
            <div class="card-body">
              <div class="row justify-content-arround g-3 pt-3 mb-3">
                <div class="col-sm-4">
                  <NuxtImg class="img-fluid rounded" :src="product?.image" :alt="`Products ${product?.title}`"
                    loading="lazy" format="webp" :width="250" :height="250" />
                </div>
                <div class="col-sm-8">
                  <SharedHeadingName :title="product?.title" />
                  <div class="text-start text-danger fst-normal fs-4 pt-3"> {{ formatToRupiah(product?.price) }}</div>
                  <div>
                    <form @submit.prevent="saveQuantity">
                      <div class="d-flex justify-content-start pt-3">
                        <span class="text-start fst-normal fs-5 me-2">Kuantitas:</span>
                        <div class="hstack gap-2 ">
                          <button @click="addDecrementQuantity" type="button"
                            class="btn btn-md btn-light rounded">-</button>
                          <input v-model="quantity" type="text" class="form-control-plaintext text-center"
                            style="width: 30px;" id="staticEmail2">
                          <button @click="addIncrementQuantity" type="button"
                            class="btn btn-md btn-light rounded">+</button>
                        </div>
                      </div>

                      <div class="pt-3">
                        <button type="submit" class="btn btn-dark btn-md rounded">
                          <BootstrapIcon name="cart-plus" /> Masukkan keranjang
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card  rounded border-0 mb-3 product-card">
            <div class="card-body">
              <div class="vstack gap-2">
                <h3 class="text-start text-capitalize fst-normal fs-4">Deskripsi Produk</h3>
                <div class="text-dark-50" v-html="product?.description"></div>
              </div>
            </div>
          </div>
          <div class="pt-3">
            <h3 class="text-start text-capitalize fst-normal fs-4">Produk Lainnya</h3>
            <ProductsProductListItem :products="products?.slice(0, 12)" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { RouteLocationNormalizedLoaded } from "vue-router";

const route: RouteLocationNormalizedLoaded = useRoute()
const base_url: string = 'https://fakestoreapi.com'

const { id } = route.params
const { data: product, error, pending } = await useAsyncData<Products>(`/products`, () => $fetch(`/products/${id}`, { baseURL: base_url }))
const { data: products } = await useFetch<Products[]>('/products', { server: false, lazy: true, baseURL: base_url })

const formatToRupiah: (price: number | bigint | any) => string = (price: number | bigint) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(price)
}

const quantity = ref<number>(1)

const addIncrementQuantity = () => void quantity.value++
const addDecrementQuantity = () => void quantity.value--
const saveQuantity = async () => {
  const newCarts: Required<Cart> = {
    id: +1,
    userId: 5,
    date: new Date().toISOString(),
    products: [
      { productId: id, quantity: quantity.value }
    ]

  }

  await fetch(`${base_url}/carts`, {
    method: "POST",
    body: JSON.stringify(newCarts)
  }).then(res => res.json())
    .then(json => console.log(json))

  useRouter().replace('/cart')
}

useSeoMeta({
  title: product.value?.title,
  ogTitle: product.value?.title,
  description: "Cari dan temukan semua produk unggulan kami"
})



</script>