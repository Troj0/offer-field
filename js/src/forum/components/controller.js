var wal = {
    model: function(name) {
        this.name = m.prop(name);
    },
    controller: function() {
        return {user: new user.model("John Doe")};
    },
}

module.exports = wal