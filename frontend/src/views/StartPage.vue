<template>
    <div>
        <h1>Bem Vindo!</h1>
        <component :is="RegistrationPage"></component>
        {{ currentComponent }}
    </div>
</template>

<script>
export default {
    name: 'StartPage',

    computed: {
        currentComponent() {
            return this.$store.state.currentComponent;
        }
    },
}
</script>