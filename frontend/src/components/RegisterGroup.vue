<template>
    <form class="layout_page" action="" autocomplete="off" @submit.prevent="addNewRegister">
        <fieldset class="form_layout_items">
            <legend>Cadastro da Turma</legend>

            <div class="itens">
                <div class="itens_1">
                    <label for="level">Nível: </label>
                    <select name="level" id="level" v-model="newGroup.level">
                        <option value="">Selecione uma opção...</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                </div>


                <div class="itens_1">
                    <label for="group">Nome da Turma: </label>
                    <select name="group" id="group" v-model="newGroup.group">
                        <option value="">Selecione uma opção...</option>
                        <option v-for="(level, index) in selectOptions(newGroup.level)" :key="index" :value="level.name">
                            {{ level.name }}
                        </option>
                    </select>
                </div>

            </div>

            <div class="itens">

                <div class="itens_1">
                    <label for="instructor">Nome do instrutor: </label>
                    <select name="instructor" id="instructor" v-model="newGroup.instructor">
                        <option value="">Selecione uma opção...</option>
                        <option v-for="(instructor, index) in instructors" :key="index">
                            {{ instructor.name }}</option>
                    </select>
                </div>

                <div class="itens_1">
                    <label for="subject">Matéria: </label>
                    <select name="subject" id="subject" v-model="newGroup.subject">
                        <option value="">Selecione uma opção...</option>
                        <option v-for="(subject, index) in selectSubjects(newGroup.level)" :key="index"
                            :value="subject.name">
                            {{ subject.name }}
                        </option>
                    </select>

                </div>
            </div>

            <div class="itens">
                <div class="itens_1">
                    <label for="date">Ínicio da turma: </label>
                    <input class="itens_input" type="date" id="date" v-model="newGroup.dateGroup">

                </div>

                <div class="itens_1">
                    <label for="time">Horário da Aula: </label>
                    <input class="itens_input" type="time" id="time" v-model="newGroup.timeGroup" placeholder="00:00">
                </div>
            </div>

            <div class="itens">
                <div>
                    <label for="date">Dia da semana da aula: </label>
                </div>

                <div class="itens_check">
                    <div class="itens_checkbox">
                        <input type="checkbox" id="monday" v-model="newGroup.mondayGroup" value="monday">
                        <label for="monday">Segunda-feira</label>
                    </div>

                    <div class="itens_checkbox">
                        <input type="checkbox" id="tuesday" v-model="newGroup.mondayGroup" value="tuesday">
                        <label for="tuesday">Terça-feira</label>
                    </div>

                    <div class="itens_checkbox">
                        <input type="checkbox" id="wednesday" v-model="newGroup.mondayGroup" value="wednesday">
                        <label for="wednesday">Quarta-feira</label>
                    </div>

                    <div class="itens_checkbox">
                        <input type="checkbox" id="thursday" v-model="newGroup.mondayGroup" value="thursday">
                        <label for="thursday">Quinta-feira</label>
                    </div>

                    <div class="itens_checkbox">
                        <input type="checkbox" id="friday" v-model="newGroup.mondayGroup" value="friday">
                        <label for="friday">Sexta-feira</label>
                    </div>

                    <div class="itens_checkbox">
                        <input type="checkbox" id="saturday" v-model="newGroup.mondayGroup" value="saturday">
                        <label for="saturday">Sábado</label>
                    </div>

                    <div class="itens_checkbox">
                        <input type="checkbox" id="sunday" v-model="newGroup.mondayGroup" value="sunday"
                            :checked="showInput" @change="toggleInput">
                        <label for="sunday">Domingo</label>

                        <div v-if="showInput">

                            <input class="itens_input" type="time" id="time" v-model="newGroup.timeGroup"
                                placeholder="00:00">
                        </div>
                    </div>



                </div>
            </div>

            <div class="alignBtn">
                <button type="submit" class="btn size">Cadastrar</button>

            </div>
        </fieldset>
    </form>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: "RegisterGroup",
    components: {

    },
    data() {
        return {
            newGroup: {
                level: null,
                group: null,
                instructor: null,
                subject: null,
                dateGroup: null,
                timeGroup: null,
                mondayGroup: [],
            },
            showInput: false,


        }

    },
    computed: {
        ...mapState({
            level1: state => state.information.level_1,
            level2: state => state.information.level_2,
            instructors: state => state.information.instructors,
            subject1: state => state.information.subject_1,
            subject2: state => state.information.subject_2,
        }),
        allLevels() {
            return [...this.level1, ...this.level2]
        },

        validForm() {
            return (
                this.newGroup.level !== null &&
                this.newGroup.group !== null &&
                this.newGroup.instructor !== null &&
                this.newGroup.subject !== null &&
                this.newGroup.dateGroup !== null &&
                this.newGroup.timeGroup !== null &&
                this.newGroup.mondayGroup.length > 0
            )
        },

    },

    methods: {
        selectOptions(level) {
            if (level === '1') {
                return this.level1;
            } else if (level === '2') {
                return this.level2;
            } else {
                return [];
            }
        },
        selectSubjects(level) {
            if (level === '1') {
                return this.subject1;
            } else if (level === '2') {
                return this.subject2;
            } else {
                return [];
            }
        },

        addNewRegister() {
            if (this.validForm) {

                // Despache a ação Vuex para adicionar o cadastro
                this.$store.dispatch('addGroupServer', this.newGroup)
                    .then(() => {
                        alert('Cadastro adicionado com sucesso.');
                        // Limpe o formulário após adicionar o cadastro
                        this.newGroup = {
                            level: null,
                            group: null,
                            instructor: null,
                            subject: null,
                            mondayGroup: [],
                        };
                    })
                    .catch(error => {
                        console.error('Erro ao adicionar cadastro:', error);
                    });
            } else {
                alert('Todos os campos devem ser prenchidos!')

            }
        },

        toggleInput() {
            // Inverte o valor de showInput quando a caixa de seleção é clicada
            this.showInput = !this.showInput;
        },
    },



}
</script>


<style scoped lang="scss">
@import '../variables';
</style>