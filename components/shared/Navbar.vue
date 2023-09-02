<template>
  <nav class="navbar navbar-expand-lg fixed-top bg-dark border-bottom border-dark">
    <div class="container">
      <NuxtLink class="navbar-brand text-white" to="/" aria-label="Navigasi Logo">
        <img src="/favicon.ico" alt="Logo" title="Nuxt Store" width="30" height="30"
          class="d-inline-block align-text-top logo me-1" />

        Nuxt Store
      </NuxtLink>
      <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <NuxtLink
            class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 mx-md-2 text-white fst-medium"
            aria-current="page" to="/">Beranda</NuxtLink>
          <NuxtLink
            class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 mx-md-2 text-white fst-medium"
            aria-current="page" to="/user/products">Produk Unggulan</NuxtLink>
          <NuxtLink
            class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 mx-md-2 text-white fst-medium"
            aria-current="page" to="/user/cart">Keranjang</NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar .navbar-brand {
  font-size: 20px;
  font-weight: 500;
  font-style: normal;
  letter-spacing: 1px;
}
</style>