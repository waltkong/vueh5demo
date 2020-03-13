const userinfo = {
    state: {
        token: '',
        user:{
            id:'',
            username:'',
            nickname:'',
            avatar:'',
        },
        auth_api:{
            is_super: false,
            apis: [],
        },  //所有
    },
    mutations: {
        SET_TOKEN: (state, value) => {
            state.token = value
        },
        SET_USER: (state, value) => {
            state.user = value
        },
        SET_AUTH_API: (state, value) => {
            state.auth_api = value
        },
    },
    actions: {

    }
}

export default userinfo