Message = function (id) {
    this.object = document.querySelector(id);
    return this;
}
Message.prototype = {
    true: function () {
        this.object.innerHTML = 'Correcto!';
        this.object.classList.add('true');
    },
    false: function () {
        this.object.innerHTML = 'Incorrecto!';
        this.object.classList.add('false');
    },
    show: function () {
        this.object.classList.add('show');
        this.hide();
    },
    hide:function () {
        var object = this.object;
        setTimeout(function () {
            object.classList.remove('show');
            object.classList.remove('true');
            object.classList.remove('false'); 
        }, 3000);
    }
}
