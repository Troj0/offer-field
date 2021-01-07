var Auth = {
    username: "",
    //password: "",
    setUsername: function(value) {
        Auth.username = m.prop(value)
    },
    //setPassword: function(value) {
    //    Auth.password = value
    //},
    //canSubmit: function() {
     //   return Auth.username !== "" //&& Auth.password !== ""
    //},
    //login: function() {value = auth.username},
}

module.exports = Auth