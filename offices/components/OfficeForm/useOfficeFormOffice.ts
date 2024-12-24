export const useOfficeFormOffice = () => {
    const route = useRoute()

    onMounted(() => {
        document.querySelector('[hello]')!.innerHTML = 'route.params: ' + JSON.stringify(route.params)
    })

    console.log('route.params.uuid: ', route.params.uuid)

    if (route.params.uuid) {
        console.log('we have params.uuid')
    } else {
        console.log('we do not have params.uuid')
    }

    return {
        routeFromComposable: route,
    }
}
