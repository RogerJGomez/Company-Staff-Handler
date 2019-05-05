<?php
    include ('views/header.php');
?>

<main>

<!--MERCANCÍA -->
  
  
<div class="container">
    <div class="card" id="Socios">
              <div class="card-header">
                <center><h5 ><b>SOCIOS</b></h5></center>
              </div>     

          <div class="card-body">
              <div class="row">

                  <div class="form-group col-md-3">
                    <label for="codigo_socio">Código</label>
                    <input type="text"  placeholder="" class="form-control" id="codigo_socio">
                  </div>
                  
                  <div class="form-group col-md-3">
                    <label>Nombre</label>
                    <input type="text" placeholder="" class="form-control" id="nombre_socio" required>
                  </div>
                  
                  <div class="form-group col-md-3">
                    <label>Cod. Guagua</label>
                    <input type="text" placeholder="" class="form-control" id="cod_guagua">
                  </div>

                  <div class="form-group col-md-3">
                    <label>Teléfono</label>
                    <input type="text" placeholder="" class="form-control" id="telefono">
                  </div>

                  <div class="form-group col-md-3">
                    <label>Doc. ID</label>
                    <input type="text" placeholder="" class="form-control" id="doc_id">                   
                  </div>

                <div class="col-md-7" style="margin-top:25px;">        
                    
                    <a id="boton_aceptar" class="btn"data-toggle="tooltip" style="color:#339215; font-size:34px;"data-placement="top" title="Aceptar"><i class="fas fa-check-circle"></i></a>
                    <a id="boton_cancelar" class="btn" style="color:#9D0A0A; font-size:34px;"data-toggle="tooltip" data-placement="top" title="Cancelar"><i class="fa fa-times-circle"></i></a>
                    <a id="boton_fila_buscar" class="btn" data-toggle="tooltip" style="color:#1E51A4; font-size:34px;"data-placement="top" title="Buscar"><i class="fas fa-search"></i></a>
                    <a id="boton_fila_eliminar" class="btn"data-toggle="tooltip" style="color:#1E51A4; font-size:34px;"data-placement="top" title="Eliminar"><i class="	fas fa-trash-alt"></i></a>
                    <a id="boton_fila_editar" class="btn"data-toggle="tooltip" style="color:#1E51A4; font-size:34px;"data-placement="top" title="Editar"><i class="far fa-edit"></i></a>
                    <a id="boton_fila_nuevo" class="btn"data-toggle="tooltip" style="color:#1E51A4; font-size:34px;"data-placement="top" title="Nuevo"><i class="far fa-clone"></i></a>
                    <a id="boton_fila_primero" class="btn"data-toggle="tooltip" style="color:#1E51A4; font-size:34px;"data-placement="top" title="Primero"><i class="fas fa-angle-double-left"></i></a>
                    <a id="boton_fila_anterior" class="btn"data-toggle="tooltip" style="color:#1E51A4; font-size:34px;"data-placement="top" title="Anterior"><i class="fas fas fa-angle-left"></i></a>
                    <a id="boton_fila_siguiente" class="btn"data-toggle="tooltip" style="color:#1E51A4; font-size:34px;"data-placement="top" title="Siguiente"><i class="fas fas fa-angle-right"></i></a>
                    <a id="boton_fila_ultimo" class="btn"data-toggle="tooltip" style="color:#1E51A4; font-size:34px;"data-placement="top" title="Último"><i class="fas fa-angle-double-right"></i></a>

                </div>

                <div class="col-md-8" id="exito1">
                </div>
                <div class="col-md-8" id="error1">
                </div>
              
              </div>
          </div>
  </div>
</div>
        <input type="hidden" id="txt_rowid" value="0">
        <input type="hidden" id="txt_allcount" value="0">


          <!-- Modal Structure "Busqueda" -->
                  <div class="modal" id ="buscar" tabindex="-1" role="dialog">
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title">Búsqueda de socio</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                        <center><h5>Socio</h5><center>
                          <input type="text" placeholder="Ingrese el codigo del cliente que desea buscar" class="search_query form-control"id="buscar_socio">
                          <div id="suggestions"></div>
                        </div>
                        <div class="modal-footer">
                          <button type="button" id="aceptar_buscar" style="background-color:#1E51A4;color:#fff" data-dismiss="modal"class="btn">Aceptar</button>
                          <button type="button" id="cancelar_buscar" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                        </div>
                      </div>
                    </div>
                  </div>
  
 
   

                  <!-- Modal Structure "Busqueda" -->

  <!-- Modal Structure "Borrar" -->


  <div class="modal" id="modal1" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Eliminar Socio</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <div class="form-group">
        <center><h5>¿Está seguro de que desea eliminar?</h5><center>
        <center><h5>Será borrado permanentemente. ¿Desea continuar?</h5><center>
      </div>
      <div class="modal-footer">
        <button type="button" id="borrar_socio" style="background-color:#1E51A4;color:#fff" data-dismiss="modal" class="btn">Aceptar</button>
        <button type="button" id="cancel_socio" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
      </div>
    </div>
  </div>
</div>
                  <!-- Modal Structure "Borrar" -->
                  

 </main>	
 	



	  <!-- Compiled and minified JavaScript -->
        
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="static/js/jquery-ui.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
    <script src="static/js/script.js"></script> 
     <script src="static/js/socio.js"></script>
</body>
     	
  <footer class="footer fixed-bottom" style:"background-color:#A5AAAB">
    <?php include 'views/footer.php'?>
  </footer>
 	
 </html>