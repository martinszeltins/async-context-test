export default defineNuxtConfig({
    components: [
        {
            path: '~/common/components',
            pathPrefix: false
        }
    ],

    imports: {
        dirs: [
            './components/**/*.ts',
        ],
    },

    experimental: {
        asyncContext: true,
    },

    compatibilityDate: '2024-12-24',

    modules: [
        '@nuxtjs/tailwindcss',
    ],
})
