<!-- ログインページテキスト -->
<template>
    <div class="loginInputForm">
        <div class="inputGroup">
            <div class="svg"><svg xmlns="http://www.w3.org/2000/svg" width="19.264" height="14.2" viewBox="0 0 19.264 14.2">
                <g id="_001-mail" data-name="001-mail" transform="translate(0.1 -67.9)">
                <g id="グループ_114" data-name="グループ 114" transform="translate(0 68)">
                <g id="グループ_113" data-name="グループ 113" transform="translate(0 0)">
                <path id="パス_64" data-name="パス 64" d="M16.83,68H2.234A2.237,2.237,0,0,0,0,70.234v9.532A2.237,2.237,0,0,0,2.234,82h14.6a2.237,2.237,0,0,0,2.234-2.234V70.234A2.237,2.237,0,0,0,16.83,68Zm.745,11.766a.746.746,0,0,1-.745.745H2.234a.746.746,0,0,1-.745-.745V70.234a.746.746,0,0,1,.745-.745h14.6a.746.746,0,0,1,.745.745Z" transform="translate(0 -68)" fill="#727c8e" stroke="#727c8e" stroke-width="0.2"/>
                </g></g>
                <g id="グループ_116" data-name="グループ 116" transform="translate(0.727 68.929)">
                <g id="グループ_115" data-name="グループ 115" transform="translate(0 0)">
                <path id="パス_65" data-name="パス 65" d="M36.243,92.937l-7.916,5.888-7.916-5.888-.889,1.2,8.805,6.549,8.805-6.549Z" transform="translate(-19.522 -92.937)" fill="#727c8e"/>
                </g></g></g></svg>
            </div>
                <div class="formControlLabel">EMAIL
                    <input type="text" class="inputEmail" v-model="inputEmail" />
                </div>
        </div>
        <div class="inputGroup">
            <div class="svg"><svg xmlns="http://www.w3.org/2000/svg" width="20.6" height="20.6" viewBox="0 0 20.6 20.6">
                    <path id="Profile"
                        d="M18.586,14.377a12.854,12.854,0,0,0-3.135-1.884,17.052,17.052,0,0,1-2.408-1.345,8.456,8.456,0,0,0,2.1-5.084A7.99,7.99,0,0,0,14.526,2.4C13.974,1.3,12.741,0,10,0S6.025,1.3,5.474,2.4a7.981,7.981,0,0,0-.613,3.669,8.449,8.449,0,0,0,2.1,5.084,16.968,16.968,0,0,1-2.409,1.345,12.863,12.863,0,0,0-3.135,1.884A6.148,6.148,0,0,0,0,18.308,1.667,1.667,0,0,0,1.666,20H18.333A1.667,1.667,0,0,0,20,18.307,6.15,6.15,0,0,0,18.586,14.377Zm.045,4.249a.417.417,0,0,1-.3.125H1.666a.417.417,0,0,1-.3-.125.422.422,0,0,1-.12-.3A4.991,4.991,0,0,1,2.3,15.261a12.7,12.7,0,0,1,2.811-1.65,13.709,13.709,0,0,0,2.708-1.555l.844-.8-.733-.9A7.234,7.234,0,0,1,6.111,6.065,6.91,6.91,0,0,1,6.59,2.959C7.163,1.825,8.309,1.25,10,1.25s2.837.575,3.41,1.708a6.914,6.914,0,0,1,.479,3.106,7.229,7.229,0,0,1-1.817,4.294l-.733.9.844.8a13.738,13.738,0,0,0,2.708,1.555,12.643,12.643,0,0,1,2.811,1.65,4.871,4.871,0,0,1,1.048,3.066A.417.417,0,0,1,18.63,18.626Z"
                        transform="translate(0.3 0.3)" fill="#727c8e" stroke="#727c8e" stroke-width="0.6" opacity="0.998" />
                </svg></div>
            <div class="formControlLabel">USERNAME
                <input type="text" class="inputUser" v-model="inputUser" />
            </div>
        </div>
        <div class="inputGroup">
            <div class="svg"><svg xmlns="http://www.w3.org/2000/svg" width="19.25" height="22" viewBox="0 0 19.25 22">
                    <g id="_002-password" data-name="002-password" transform="translate(-32)">
                        <g id="グループ_118" data-name="グループ 118" transform="translate(32)">
                            <g id="グループ_117" data-name="グループ 117">
                                <circle id="楕円形_18" data-name="楕円形 18" cx="0.898" cy="0.898" r="0.898"
                                    transform="translate(13.603 13.954)" fill="#727c8e" />
                                <path id="パス_66" data-name="パス 66"
                                    d="M50.391,15.555a.859.859,0,0,0,.859-.859v-3.18a3.441,3.441,0,0,0-3.437-3.437H46.78V5.047a5.157,5.157,0,0,0-10.312,0V8.078h-1.03A3.441,3.441,0,0,0,32,11.516v7.047A3.441,3.441,0,0,0,35.438,22H47.812a3.441,3.441,0,0,0,3.438-3.437.859.859,0,1,0-1.719,0,1.721,1.721,0,0,1-1.719,1.719H35.438a1.721,1.721,0,0,1-1.719-1.719V11.516A1.721,1.721,0,0,1,35.438,9.8H47.812a1.721,1.721,0,0,1,1.719,1.719V14.7A.859.859,0,0,0,50.391,15.555Zm-5.33-7.477H38.186V5.047a3.439,3.439,0,0,1,6.875,0Z"
                                    transform="translate(-32)" fill="#727c8e" />
                                <circle id="楕円形_19" data-name="楕円形 19" cx="0.898" cy="0.898" r="0.898"
                                    transform="translate(7.144 13.954)" fill="#727c8e" />
                                <circle id="楕円形_20" data-name="楕円形 20" cx="0.898" cy="0.898" r="0.898"
                                    transform="translate(3.936 13.954)" fill="#727c8e" />
                                <circle id="楕円形_21" data-name="楕円形 21" cx="0.898" cy="0.898" r="0.898"
                                    transform="translate(10.352 13.954)" fill="#727c8e" />
                            </g>
                        </g>
                    </g>
                </svg></div>
            <div class="formControlLabel">PASSWORD
                <input type="password" class="inputPass" v-model="inputPass" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoginForm',
    data() {
        return {
            inputEmail: '',
            inputUser: '',
            inputPass: ''
        }
    },
    props: {
        propEmail: {
            type: String,
            required: true
        },
        propUser: {
            type: String,
            required: true
        },
        propPass: {
            type: String,
            required: true
        }
    }
};
</script>


<style scoped>
.inputGroup {
    width: 325px;
    /* 幅を325ptに設定 */
    height: 50px;
    display: flex;
}

.inputUser,
.inputPass,
.inputEmail {
    border: none;
    border-top: 0px;
    border-radius: 0px;
    font-weight: bold;
    outline: 0;
    width: 190pt;
    height: 16pt;
    font-size: 16pt;
    /* margin-bottom: 10px; /* 間隔を縦方向に10pxに設定 */
}

.inputUser:focus,
.inputPass:focus {
    outline: none;
    box-shadow: 0 0 0;
}

.formControlLabel {
    font-size: 10px;
    color: #6C6C6C;
    font-weight: bold;
    letter-spacing: 1px;
    width: 80%;
    display: flex;
    flex-direction: column;
}

.loginInputForm {
    /* margin-bottom: 40px; */
    background-color: #FFFFFF;
    width: 248pt;
    border-radius: 10px;
}

div.svg {
    padding-top: 6pt;
    width: 13%;
}</style>
