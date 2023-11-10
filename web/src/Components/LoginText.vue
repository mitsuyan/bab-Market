<!-- LoginText.vue -->
<template>
    <div class="LoginInputForm">
        <div class="InputGroup">
            <div class="FormControlLabel">
                USERNAME/EMAIL
            </div>
            <input type="text" class="InputUser" v-model="InputUser" />
        </div>
        <div class="InputGroup">
            <div class="FormControlLabel">
                PASSWORD
            </div>
            <input type="password" class="InputPass" v-model="InputPass" />
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'LoginForm',
    data(){
        return {
            email: '',
            password: ''
        }
    },
    props: {
        login: {
            type: Function,
            required: true
        }
    },
    methods: {
        handle() {
            return this.login({
                'user': {
                    'email': this.email,
                    'password': this.password,
                }
            })
                .catch(err => { throw err })
        }
    }
});
</script>


<style>

.InputGroup {
    width: 325px; /* 幅を325ptに設定 */
    display: flex;
    flex-direction: column;
}

.InputUser,
.InputPass {
    border: none;
    border-top: 0px;
    border-radius: 0px;
    font-weight: bold;
    outline: 0;
    padding-left: 57px;
    height: 16pt;
    font-size: 16pt;
    /* margin-bottom: 10px; /* 間隔を縦方向に10pxに設定 */
}

.InputUser:focus,
.InputPass:focus {
    outline: none;
    box-shadow: 0 0 0;
}

.FormControlLabel {
    font-size: 10px;
    color: #6C6C6C;
    font-weight: bold;
    letter-spacing: 1px;
    /* margin-bottom: 5px; */
    padding-left: 57px;
    padding-top: 15px;
}

.LoginInputForm{
    /* margin-bottom: 40px; */
    background-color: #FFFFFF;
    width: 330pt;
    border-radius: 10px;
}
</style>
