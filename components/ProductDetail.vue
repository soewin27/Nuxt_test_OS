<template>
    <div class="card">
        <div class="flex">
            <div class="card-img">
                <img :src="product.image" alt="product image" class="product-img mx-auto my-7" />
            </div>
            <div class="card-txt">
                <h1 class="font-bold text-4xl-my7">Product Name : {{ product.title }}</h1>
                <p class="text-4xl-my7">Price : ${{ product.price }}</p>
                <h3 class="font-bold border-b-2 mb-4 pb-2">Product Description : </h3>
                <p class="mb-7">{{ product.description }}</p>
                <p class="btn"> <i class="bi bi-cart3 icon"></i>Buy Now</p>
                <NuxtLink to="/product"><button class="btn py-1">Back</button></NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
const { product } = defineProps(['product']);
function GoBack(){
    $router.go(-1);
}
</script>

<style scoped>
.product-img{
    max-width:500px;
    width:100%;
}
.icon{
    margin-right: 5px;
    font-size: 15px;
}
.btn{
    display: block;
    max-width: 120px;
    width: 100%;
    padding: 10px 0;
    text-align: center;
    margin-bottom: 10px;
    background-color: #12b488;
    color: #fff;
}

.btn:hover{
    background-color: #fff;
    color: #12b488;
    border: 1px solid #12b488;
    transition: .5s;
}
.card-img{
    width: 37%;
    padding: 50px 40px 40px;
}
.card-txt{
    width: 58%;
}
</style>