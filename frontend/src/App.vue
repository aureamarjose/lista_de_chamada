<template>
  <HeaderNav />

  <router-view />

  <HomeFooter />
</template>

<script>
import HeaderNav from './components/HeaderNav.vue'
import HomeFooter from './components/HomeFooter.vue'

export default {
  components: {
    HeaderNav,
    HomeFooter
  }
}
</script>


<style lang="scss">
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@import 'variables';
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

html {
  font-size: 62.5%;
}

body {
  font-family: 'Roboto', sans-serif;
  font-size: 1.6rem;
  //background-color: $color4;
  background: linear-gradient($color5, $color6);
}

//configuração geral dos botões e menu lateral

.layout {
  display: flex;
}

.view {
  margin: auto;
}

//

.menu_btn {
  width: 20%;
  min-width: 15rem;
  max-width: 30rem;
  min-height: 75rem;
  border-right: 0.1rem solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.btn_details {
  margin-top: 0.2rem;
  width: 100%;
  padding: 1rem;

}

.btn_details summary {
  background-color: $color3;
  padding: 0.3rem;
  outline: 1rem solid $color3;
  text-align: center;
  color: $color2;
  font-size: 1.8rem;
  font-weight: bold;
  letter-spacing: 0.3rem;
  cursor: pointer;
  transition-duration: 1.2s;
}

.btn_details summary:hover {
  background-color: $color2;
  outline: 1rem solid $color2;
  color: $color3;
}

//link 
.link_btn_form {
  display: flex;
  flex-direction: column;
}

.link_btn {
  text-align: center;
  text-decoration: none;
  margin-top: 2rem;
  padding: 1rem 3rem;
  font-weight: bold;
  border-radius: 2rem;
  cursor: pointer;
  letter-spacing: 0.3rem;
  border: 0.3rem solid $color2;
  background-color: $color2;
  color: $color5;
  transition-duration: .8s;
  width: 100%;
  min-width: 10rem;

}

.btn {
  margin-top: 2rem;
  padding: 1rem 3rem;
  font-weight: bold;
  border-radius: 2rem;
  cursor: pointer;
  letter-spacing: 0.3rem;
  border: 0.3rem solid $color2;
  background-color: $color2;
  color: $color5;
  transition-duration: .8s;
  width: 100%;
}

.btn:hover {
  background-color: transparent;
  color: $color2;
}

//>>
.size {
  width: 15rem;
}

.alignBtn {
  display: flex;
  justify-content: flex-end;
  margin-right: 1rem;
}

//layout pagina

.layout_page {
  width: 75%;
  margin: 5rem auto;
}

.form_layout_items {
  border: none;

}

.form_layout_items legend {
  text-align: center;
  padding: 0 0 2rem;
  font-size: 2.5rem;
  font-weight: bold;
}

.itens {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 1.5rem;
  margin: 1rem 1rem;
  background-color: $color3;
  border-radius: 0.6rem;

}

.itens select {
  padding: 0.5rem;
  flex: 0 0 50%;
  min-width: 10rem;
  border-radius: 0.8rem;
  background: $color5;
  border: 0.1rem solid;
}

.itens label {
  margin-bottom: 1rem;
  flex: 1 0 40%;
  min-width: 14rem;
}

.itens_input {
  padding: 0.5rem;
  border: 0.1rem solid;
  border-radius: 0.8rem;
  background: $color5;
  flex: 0 0 50%;
  min-width: 10rem;
}

.itens_1 {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.8rem;
  margin: 0.8rem auto;
  border-bottom: 0.1rem solid $color2;
  padding: 2rem;
  flex: 0 0 50%;
  min-width: 25rem;
  align-items: center;
}


.itens_check {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem;

}

.itens_checkbox {
  display: flex;
  padding: 0.8rem;
  min-width: 15rem;


}

.itens_checkbox label {
  margin-left: 1rem;
  cursor: pointer;
  min-width: 10rem;
}
</style>


