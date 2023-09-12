<template>
    <div>
        <h1>About Us</h1>
        <p>This is my Online Clothes & Accessories store.</p>
        <p>You can order our products via phone call or online payment.We offer different payment types to purchase.</p>
        <!-- <p> {{ data }}</p> -->
    </div>
</template>

<script setup>
const {data} = await useFetch("https://jsonplaceholder.typicode.com/todos")
console.log(data.value)
</script>

<style scoped>
h1{
    font-size: 24px;
    font-style: italic;
}
p{
    text-align: justify;
}
</style>