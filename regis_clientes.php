<?php
    include ('views/header.php');
?>

<main>

<!------------------------------rREGISTRO DE CLIENTES ------------------------------>
<div class="container" style="margin-top:-25px; margin-bottom:25px;">
  <div class="card" id="Socios" >
        <div class="card-header">
          <center><h5><b>CLIENTES</b></h5></center>
        </div>
    <div class="card-body">
      <div class="row">
                
        <div class = "form-group col-md-4">
          <label for="codigo_cliente">Codigo</label>
          <input type="text" id="codigo_cliente"  class="form-control" placeholder=" " class="validate" required>      
        </div>
 
        <div class = "form-group col-md-4">
          <label for="nombre_cliente">Nombre</label>
          <input type="text" id="nombre_cliente" class="form-control" placeholder=" " required>
        </div>

        <div class = "form-group col-md-4">
          <label for="comercial_cliente">Comercial</label>
          <input type="text" id="comercial_cliente" class="form-control" placeholder=" " class="validate">
          
        </div>
        <div class = "form-group col-md-4">
          <label for="rnc_cliente">RNC</label>
          <input type="text" id="rnc_cliente" class="form-control" placeholder=" " required>
          
        </div>
        <div class = "form-group col-md-4">
          <label for="actividad_cliente">Actividad</label>
          <input type="text" id="actividad_cliente"class="form-control" placeholder=" " class="validate">
          
        </div>
        <div class = "form-group col-md-4">
          <label for="direccion_cliente">Direccion</label>
          <input type="text" id="direccion_cliente"class="form-control" placeholder=" " class="validate">
          
        </div>
        <div class = "form-group col-md-3">
          <label for="proximoa_cliente">Proximo A</label>
          <input type="text" id="proximoa_cliente"class="form-control" placeholder=" " class="validate">
          
        </div>
        <div class = "form-group col-md-3">
          <label for="telefono1_cliente">Telefono1</label>
          <input type="text" id="telefono1_cliente"class="form-control" placeholder=" " required>
          
        </div>
        <div class = "form-group col-md-3">
          <label for="fax_cliente">Fax</label>
          <input type="text" id="fax_cliente"class="form-control" placeholder=" " >
          
        </div>
        <div class = "form-group col-md-3">
          <label for="email_cliente">Email</label>
          <input type="text" id="email_cliente"class="form-control" placeholder=" " >
          
        </div>


      <ul class="nav nav-tabs justify-content-center" id="tab-clientes" role="tablist">
        <li class="nav-item">
          <a class="nav-link active" id="a-tab" data-toggle="tab" href="#A" role="tab" aria-controls="A" aria-selected="true">A</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="b-tab" data-toggle="tab" href="#B" role="tab" aria-controls="B" aria-selected="false">B</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="c-tab" data-toggle="tab" href="#C" role="tab" aria-controls="C" aria-selected="false">C</a>
        </li>
      </ul>

      <div class="tab-content"> 
<!--------------------------TAB A------------------------------>
    <div class="tab-pane fade show active" id="A" role="tabpanel" aria-labelledby="a-tab">
      <div class="container">
        <div class="row" style="margin-top:50px;">

          <div >
            <div class = "form-group col-md-6">
                <label style="font-weight: bold;">Administrador</label>
            </div>
            <div class = "form-group col-md-10">
              <label for="nombreAdmin_cliente">Nombre</label>
              <input type="text" id="nombreAdmin_cliente"class="form-control" placeholder=" " >
              
            </div>
            <div class = "form-group col-md-10">
              <label for="telfAdmin_cliente">Tlf.</label>
              <input type="text" id="tlfAdmin_cliente"class="form-control" placeholder=" ">
              
            </div>
          </div>

          <div> 
            <div class = "form-group col-md-7">
                <label style="font-weight: bold;">Enc. Compras</label>
            </div>

            <div class = "form-group col-md-10">
              <label for="nombreEncCompras_cliente">Nombre</label>
              <input type="text" id="nombreEncCompras_cliente"class="form-control" placeholder=" " >
            </div>

            <div class = "form-group col-md-10">
              <label for="telfEncCompras_cliente">Tlf.</label>
              <input type="text" id="tlfEncCompras_cliente"class="form-control" placeholder=" " >             
            </div>

          </div>
          
          <div>
              <div class = "form-group col-md-6">
                <label style="font-weight: bold;">Enc. Pagos</label>
              </div>

              <div class = "form-group col-md-10">
                <label for="nombreEncPagos_cliente">Nombre</label>
                <input type="text" id="nombreEncPagos_cliente"class="form-control" placeholder=" ">
                
              </div>
              <div class = "iform-group col-md-10">
                <label for="tlfEncPagos_cliente">Tlf.</label>
                <input type="text" id="tlfEncPagos_cliente"class="form-control" placeholder=" " >
                
              </div>
          </div>

          <div>
              <div class = "form-group col-md-3">
                <label style="font-weight: bold;">Otros</label>
              </div>
              <div class = "form-group col-md-10">
              <label for="nombreOtros_cliente">Nombre</label>
                <input type="text" id="nombreOtros_cliente"class="form-control" placeholder=" " >
                
              </div>
              <div class = "form-group col-md-10">
                <label for="tlfOtros_cliente">Tlf.</label>
                <input type="text" id="tlfOtros_cliente"class="form-control" placeholder=" " >
                
              </div>
            </fieldset>
          </div>
        
        </div>
      
      </div>
    
    </div>
<!--------------------------TAB A------------------------------>

<!--------------------------TAB B------------------------------>
    <div class="tab-pane fade" id="B" role="tabpanel" aria-labelledby="b-tab" style="margin-top:55px;">
        <div class="row" > 
            
          <div class="form-group col-md-3" >  
            <form action="#">  
            <p>
              <label>
                <input id="excItbis_cliente" type="checkbox" />
                <span>Excento de Itbis</span>
              </label>
            </p>
            </form>
          </div>
            
            <div class="form-group col-md-3" >  
            <form action="#">  
            <p>
              <label>
                <input id="consig_cliente" type="checkbox" />
                <span>Consignacion</span>
              </label>
            </p>
            </form>
            </div>


            <div class = "form-group col-md-3">
              <label for="desc_cliente">Desc%</label>
              <input type="text"  class="form-control" id="desc_cliente" >
              
            </div>

            <div class = "form-group col-md-3">
              <label for="incre_cliente">Incremento</label>
              <input type="text" id="incremento" class="form-control">
              
            </div>
          
        </div>


        <div class="row">

          
          <div class="form-group col-md-3" >
          <form action="#">
          <p>
            <label>
              <input id="limActivo_cliente" type="checkbox" />
              <span>Limite Activo</span>
            </label>
          </p>
          </form>
          </div>
          <div class = "form-group col-md-3">
            <label for="diascr_cliente">Dias Cr</label>
            <input type="text" class="form-control"  id="diascr_cliente" placeholder=" ">
            
          </div>          
          <div class = "form-group col-md-3">
            <label for="limActivoCant_cliente">$</label>
            <input type="text" class="form-control"  id="limActivoCant_cliente" placeholder=" ">

          </div>
          
          
          <div class = "form-group col-md-3">
            <label for="noFts_cliente">Nº Fts</label>
            <input type="text" class="form-control"  id="noFts_cliente" placeholder=" ">

          </div>
          
        </div>

     


        
        <div class="row">
          

          <div class="form-group col-md-3" >
          <form action="#">            
          <p>
            <label>
              <input id="pagaFlete_cliente" type="checkbox" />
              <span>Paga Flete</span>
            </label>
          </p>
          </form> 
          </div>
          
          <div class = "form-group col-md-3">
              <label for="condicion_cliente">Condicion</label>
              <input type="text" class="form-control"  id="condicion_cliente" placeholder=" ">
              
            </div>
            
          
          <div class = "form-group col-md-3">
            <label for="pagaFleteCant_cliente">$</label>
            <input type="text" class="form-control"  id="pagaFleteCant_cliente" placeholder=" ">
           
          </div>
          <div class = "form-group col-md-3">
            <label for="comision_cliente">Comision</label>
            <input type="text" class="form-control"  id="comision_cliente" placeholder=" ">
            
          </div>
        </div>
      
      </div>
<!--------------------------TAB B------------------------------>

<!--------------------------TAB C------------------------------>
    <div class="tab-pane fade" id="C" role="tabpanel" aria-labelledby="c-tab" style="margin-top:10px;">
            <div class="row" style="padding-right:50px; padding-left:50px;">  

                <div class = "form-group col-md-3">
                  <span>Inactivo descuento</span>
                  <input class="form-control" type="text" id="inactivoDesc_cliente">
                </div>


                <div class="form-group col-md-3">
                  <label>Cuenta</label>
                  <select name="Cuenta" class="form-control" id="cuenta_cliente">
                  <option value="" disabled selected>Seleccione una opción</option>
                  <option value="1120201"> </option>
                  </select>
                  
                </div>
            
              <div class="form-group col-md-3">
                  <label>NCF</label>
                  <select name="ncf" class="form-control" id="ncf_cliente" >
                    <option value="" disabled selected>Seleccione una opción</option>
                    <option value="09">COMPROBANTE GUBERNAMENTAL</option>
                    <option value="XX">COMPROBANTE NO REQUERIDO</option>
                    <option value="02">CONSUMIDOR FINAL</option>
                    <option value="01">FACTURA CREDITO FISCAL</option>
                    <option value="07">GASTOS MENORES</option>
                    <option value="04">NOTA DE CREDITO</option>
                    <option value="03">NOTA DE DEBITO</option>
                    <option value="05">PROVEEDORES INFORMALES</option>
                    <option value="08">REGIMEN ESP. TRIBUTACION</option>
                    <option value="03">UNICO DE INGRESOS</option>
                  </select>
              </div>        
            
              
              <div class="form-group col-md-3">
                  <label>Vendedor</label>
                  <select name="vendedor" class="form-control" id="vendedor_cliente" >
                    <option value="" disabled selected>Seleccione una opción</option>
                  </select> 
              </div> 

              
              <div class="form-group col-md-3">
                  <label>Tipo Cliente</label>
                  <select name="tipo"class="form-control" id="tipo_cliente">
                    <option value="" disabled selected>Seleccione una opción</option>
                    <option value="1">FERRETERIA</option>
                    <option value="10">INSTITUCIONAL</option>
                    <option value="11">ALMACENES</option>
                    <option value="12">COLMADO FERRETERIA</option>
                    <option value="2">REPUESTO</option>
                    <option value="3">ELECTRICO</option>
                    <option value="4">REFRIGERACION</option>
                    <option value="5">AUTOPINTURA</option>
                    <option value="3">VETERINARIA</option>
                    <option value="7">MADERERA</option>
                    <option value="8">PINTURAS Y ACCESORIOS</option>
                    <option value="9">VENTAS DE HIERRO</option>
                  </select>
              </div>        
            
              <div class="form-group col-md-3">
                  <label>Lista Precio</label>          
                  <select name="lista_precio" class="form-control" id="listaPrecio_cliente">
                    <option value="" disabled selected>Seleccione una opción</option>
                    <option value="1"> </option>
                  </select>
              </div>       

              <div class="form-group col-md-3">
                <label for="zona_cliente">Zona</label>
                <input type="text" id="zona_cliente" placeholder=" "class="form-control">
              </div> 
                           

              
                <div class = "form-group col-md-3">
                  <label for="permiso">Permisos</label>
                  <input type="text" id="permiso" class="form-control" placeholder=" " class="validate">
                  
                </div>
                <div class = "form-group col-md-3">
                  <label for="dpto">Departamento</label>
                  <input type="text" id="dpto" class="form-control" placeholder=" " class="validate">
                </div>


                <div class="check-group col-md-4" >
                  <input type="checkbox" class="form-check-input" id="activo_cliente">
                  <label class="form-check-label" for="activo_cliente">Activo</label>
                </div>          

                <div class="form-check col-md-4" >
                  <input type="checkbox" class="form-check-input" id="inactivo_cliente">
                  <label class="form-check-label" for="inactivo_cliente">Inactivo</label>
                </div>                 
        </div>     
    </div>
<!--------------------------TAB C------------------------------>

  </div>

                <div class="col-md-12" style="margin-top:25px; margin-left:230px;">        
                    
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
                <div class="col-md-8" id="exito1" style="margin-left:230px;">
                </div>
                <div class="col-md-8" id="error1" style=" margin-left:230px;">
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
                          <h5 class="modal-title">Búsqueda de cliente</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                        <center><h5>Cliente</h5><center>
                          <input type="text" placeholder="Ingrese el codigo del cliente que desea buscar" class="search_query form-control"id="buscar_cli">
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
        <h5 class="modal-title">Eliminar Cliente</h5>
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
        <button type="button" id="borrar_cli" style="background-color:#1E51A4;color:#fff" data-dismiss="modal" class="btn">Aceptar</button>
        <button type="button" id="cancel_del" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
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
    <script src="static/js/clientes.js"></script>
    </body>
    <footer class="footer fixed-bottom">
    <?php include 'views/footer.php'; ?>
  </footer>
 </html>