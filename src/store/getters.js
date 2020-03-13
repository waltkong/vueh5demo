const getters = {
    token: state => state.userinfo.token,
    user: state => state.userinfo.user,
    auth_api: state => state.userinfo.auth_api,
}
export default getters