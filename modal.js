Vue.component('modal', {
    template: '#modal-template'
})
     
new Vue({
    el: '#modal',
    data: {
        showModal: false,
        type:'A',
    },
    methods: {
        push_a: function (event) {
            this.type = 'A'
        },
        push_b: function (event) {
            this.type = 'B'
        },
        push_c: function (event) {
            this.type = 'C'
        },
        push_d: function (event) {
            this.type = 'D'
        },
        push_e: function (event) {
            this.type = 'E'
        },
        push_f: function (event) {
            this.type = 'F'
        },
        push_g: function (event) {
            this.type = 'G'
        },
        push_h: function (event) {
            this.type = 'H'
        },
    }
})
