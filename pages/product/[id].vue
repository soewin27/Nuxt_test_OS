<template>
    <div>
        <ProductDetail :product="product"/>
    </div>
</template>

<script setup>
    const { id } = useRoute().params;
    const uri = 'https://fakestoreapi.com/products/' + id
    definePageMeta({
        layout:'products'
    })
    const { data: product } = await useFetch(uri, { key: id })
</script>

<style scoped>
p{
    text-decoration: double;
}
</style>