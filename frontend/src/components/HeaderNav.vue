<template>
    <div>
        <div class="header">
            <h1 class="title">Controle de faltas</h1>
            <div class="header_nav">
                <router-link to="/StartPage" class="header_nav-link">Início</router-link>
                <router-link to="/RegistrationPage" class="header_nav-link">Cadastro</router-link>
                <router-link to="/LauchPage" class="header_nav-link">Lançamentos</router-link>
                <router-link to="" class="header_nav-link">Relátorio</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HeaderNav"
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Chakra+Petch:wght@300&family=Patua+One&family=Permanent+Marker&display=swap');

@import '../variables';



.title {
    font-family: 'Anton', sans-serif;
    text-transform: uppercase;
    text-align: left;
    letter-spacing: 0.5rem;
    padding: 3rem;
    color: $colorText1;
    text-shadow: 2px 4px 0 black;

}

.header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: $color1;
    border-bottom: 0.8rem solid $color3;
    width: 100vw;
}

.header_nav {
    display: flex;
    gap: 16px;
    align-items: center;
    margin: 0 3rem;
}

.header_nav-link {
    text-decoration: none;
    font-weight: bold;
    border: 0.1rem solid black;
    border-radius: 0.5rem;
    padding: 0.7rem;
    background-color: $color3;

}

.header_nav-link.router-link-active {
    background-color: rgb(73, 70, 70);
    color: $colorText1;
}
</style>