/*

FUNCIONES QUE INICIALIZAN LAS EXTENSIONES DE MATERIALIZE CSS

*/
$('#tab-clientes a').on('click', function (e) {
  e.preventDefault()
  $(this).tab('show')
})


$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


$('#Modal1').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})
$('#Modal2').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})


$(document).ready(function(){
  $(".dropdown-trigger").dropdown({
             inDuration: 300,
             outDuration: 225,
             constrain_width: true,
             gutter: 0, 
             belowOrigin: false 
             });
    });