<template>
    <div class="layout_page ">
        <h1>Turmas</h1>
        <div class=" itens">
            <details class="group_style">
                <summary>Turmas Ativa</summary>
                <ul>
                    <li v-for="(group, index) in groupInformation" :key="index">
                        <RouterLink :to="{ name: 'Group', params: { id: group.id } }">{{ group.group }}
                            - Nível: {{ group.level }}
                            - Data de inicio: {{ group.dateGroup }}</RouterLink>
                    </li>
                </ul>
            </details>

            <details class="group_style">
                <summary>Turmas Desativadas</summary>

            </details>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'GroupPage',

    data() {
        return {

        }
    },
    computed: {
        ...mapState(['groupInformation'])
    },
    created() {
        this.$store.dispatch('groupData');
    },
}
</script>

<style scoped lang="scss">
@import '../variables';

.group_style {
    width: 95vh;

}

.group_style summary {
    padding: 1rem;
    color: $color2;
    font-weight: bold;
    border-bottom: 0.2rem solid $color2;
}
</style>