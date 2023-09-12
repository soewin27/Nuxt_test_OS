<template>
    <div>
        <h3 class="font-bold">Welcome From Soe Gyi's Cloth & Accessories Shop</h3>
        <div class="flex flex-wrap">
            <div v-for="product in products" class="info-box my-3 ">
                <ProductCard :product="product"/>
            </div>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'products'
    })
    const { data:products } = await useFetch('https://fakestoreapi.com/products')
    console.log(products.value)
</script>

<style scoped>
.info-box{
    width: 24%;
}
</style>