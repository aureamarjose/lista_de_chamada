<template>
    <div>
        <footer>
            <p>AJ System</p>
        </footer>
    </div>
</template>

<script>
export default {
    name: "HomeFooter"
}
</script>

<style scoped lang="scss">
@import '../variables';

footer {
    background-color: $color1;
    padding: 4rem;
    width: 100vw;
}

p {
    text-align: center;
    color: $colorText1;
    font-weight: bold;
    letter-spacing: 0.3rem;
}
</style>