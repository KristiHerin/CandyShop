$(document).ready(function(){

$('#choc_items, #sour_items, #baked_goods').hide()

$('#choc').click(function(){
    $('#choc_items').show()
    $('#sour_items').hide()
    $('#baked_goods').hide()
    $('.choose').hide()
    $('#home').show()
})

$('#sour').click(function(){
    $('#sour_items').show()
    $('#choc_items').hide()
    $('#baked_goods').hide()
    $('.choose').hide()
    $('#home').show()
})

$('#baked').click(function(){
    $('#baked_goods').show()
    $('#sour_items').hide()
    $('#choc_items').hide()
    $('.choose').hide()
    $('#home').show()
})

$('#home').click(function(){
    $('.choose').show()
    $('#baked_goods').hide()
    $('#sour_items').hide()
    $('#choc_items').hide()
    $('#home').hide()
})


}) //END READY FUNCTION

