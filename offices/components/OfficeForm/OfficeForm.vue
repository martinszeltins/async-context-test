<template>
    <div class="p-4">
        <NuxtLink to="/offices" class="m-4 underline">Back to offices</NuxtLink>

        <div class="flex gap-10 p-4">
            <pre class="bg-gray-200 p-4">routeFromComposable: {{ routeFromComposable }}</pre>
            <pre class="bg-gray-200 p-4" hello>route.params: ...</pre>
        </div>
    </div>
</template>

<script setup lang="ts">
    const { routeFromComposable } = await useOfficeFormOffice()
</script>
