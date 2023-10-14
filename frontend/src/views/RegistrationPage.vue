<template>
    <div class="layout">

        <div class="menu_btn">
            <details class="btn_details">
                <summary>Turmas</summary>
                <div class="link_btn_form">
                    <router-link class="link_btn" :to="{ name: 'GroupPage' }">Turmas</router-link>

                    <router-link class="link_btn" :to="{ name: 'RegisterGroup' }">Nova Turma</router-link>

                </div>
            </details>

            <details class="btn_details">
                <summary>Aluno</summary>
                <button class="btn" @click="showLayout('b')">Alunos</button>
            </details>

        </div>

        <div class="view">
            <!-- <component :is="componentVisible" /> -->
            <RouterView />
        </div>

    </div>
</template>

<script>

export default {

    name: 'componentVisible',
    components: {

    },

    data() {
        return {


        }
    },





}
</script>

<style scoped lang="scss"></style>