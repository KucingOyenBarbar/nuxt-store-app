<template>
  <section class="product-details-section position-relative pt-5">
    <div class="container">
      <div class="row justify-content-center g-2 py-5">
        <div class="col-sm-10">
          <div class="card  rounded border-0 mb-3">
            <div class="card-body">
              <h5 class="card-title">keranjang Saya</h5>

              <ul>
                <li v-for="cart in carts" :key="cart">
                  {{ cart.date }}

                  <p v-for="product in cart.products" :key="product">{{ product }}</p>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script lang="ts" setup>

const base_url: string = 'https://fakestoreapi.com'

const { data: carts } = await useFetch<Cart[]>('https://fakestoreapi.com/carts/user/2', { lazy: true, server: false })
// const { data: carts, pending, error } = await useAsyncData<Cart[]>('https://fakestoreapi.com/carts/user/5', () => $fetch(`https://fakestoreapi.com/carts/user/5`))


</script>