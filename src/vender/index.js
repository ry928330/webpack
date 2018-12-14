function vender() {

}

vender.prototype = {
    constructor: vender,
    sayHello: function() {
        console.log('vender...123')
    }
}

module.exports = vender;