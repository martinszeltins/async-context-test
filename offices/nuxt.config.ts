export default defineNuxtConfig({
    components: [
        {
            path: '~/offices/components',
            pathPrefix: false,
        }
    ],
    
    imports: {
        dirs: [
            './components/**/*.ts',
            './composables/**/*.ts',
            './forms/**/*.ts',
            './inputs/**/*.ts',
            './stores/**/*.ts',
            './types/**/*.ts',
        ],
    }
})
