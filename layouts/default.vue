<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="p-4 justify-between flex">
                <NuxtLink to="/" class="font-bold text-black">Soe Gyi's Cloth & Accessories Shop</NuxtLink>
                <ul class="menu flex gap-4">
                    <li>
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/product">Products</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about">About</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/contactus"></NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>
        <div class="p-4">
            <slot />
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.router-link-exact-active {
    color: #12b488 !important;
}

</style>