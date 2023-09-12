<template>
    <div class="card text-center">
        <img :src="product.image" alt="product image" class="img-product" />
        <p class="font-bold text-gray-500 m-4 detail">{{ product.title }}</p>
        <NuxtLink :to="`product/${product.id}`" class="btn ">
            <p class="mb-0">View Details</p>
        </NuxtLink>
    </div>
</template>

<script setup>
const { product } = defineProps(['product'])
</script>

<style scoped>
.img-product {
    max-height: 120px;
    margin: 0 auto;
    padding: 15px 0;
}

.card {
    padding: 20px 0;
}

.btn {
    display: block;
    margin: 0 auto;
    width: 90%;
    padding: 5px 0;
    background-color: #12b488;
    color: #fff !important;
}

.detail {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    line-clamp: 1;
    -webkit-box-orient: vertical;
}
</style>