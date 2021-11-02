//Tabla Category

function traerInformacionCategory(){
    $.ajax({
        url:"http://129.151.116.10:8080/api/Category/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaCategory(respuesta)
        }


    });
}

function pintarRespuestaCategory(respuesta){
    let myTable="<table border=2>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>" +respuesta[i].id+"</td>";
	myTable+="<td>" +respuesta[i].name+"</td>";
        myTable+="<td>" +respuesta[i].description+"</td>";
        myTable+="<td> <button onclick='editarInformacionCategory("+respuesta[i].id+")'>Actualizar</button>";
        myTable+="<td> <button onclick='borrarElementoCategory("+respuesta[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultadoCategory").html(myTable);

}
function guardarInformacionCategory(){
    let myData={
    //    id:$("#Cid").val(),
	name:$("#Cname").val(),
        description:$("#Cdescription").val()
    };
    $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(myData),
        
        url:"http://129.151.116.10:8080/api/Category/save",
       
        
        success:function(response) {
                console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente");
    
    
        }
        });

}
function editarInformacionCategory(idElemento){
    let myData={
        id:idElemento,
        name:$("#Cname").val(),
        description:$("#Cdescription").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.116.10:8080/api/Category/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoCategory").empty();
            $("#Cid").val("");
            $("#Cname").val("");
            $("#Cdescription").val("");
            traerInformacionCategory();
            alert("se ha Actualizado")
        }
    });
}
function borrarElementoCategory(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.116.10:8080/api/Category/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoCategory").empty();
            traerInformacionCategory();
            alert("Se ha Eliminado.")
        }
    });
}
//Tabla Games

function traerInformacionGames(){
    $.ajax({
        url:"http://129.151.116.10:8080/api/Game/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaGames(respuesta)
        }


    });
}

function pintarRespuestaGames(respuesta){
    let myTable="<table border=2>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>" +respuesta[i].id+"</td>";
	myTable+="<td>" +respuesta[i].name+"</td>";
        myTable+="<td>" +respuesta[i].developer+"</td>";
        myTable+="<td>" +respuesta[i].year+"</td>";
        myTable+="<td>" +respuesta[i].description+"</td>";
        myTable+="<td> <button onclick='editarInformacionGames("+respuesta[i].id+")'>Actualizar</button>";
        myTable+="<td> <button onclick='borrarElementoGames("+respuesta[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultadoGames").html(myTable);

}
function guardarInformacionGames(){
    let myData={
    //    id:$("#id").val(),
        name:$("#name").val(),
        developer:$("#developer").val(),
        year:$("#year").val(),
        description:$("#description").val(),
         
    };
    $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(myData),
        
        url:"http://129.151.116.10:8080/api/Game/save",
       
        
        success:function(response) {
                console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente");
    
    
        }
        });

}
function editarInformacionGames(idElemento){
    let myData={
        id:idElemento,
        name:$("#name").val(),
        developer:$("#developer").val(),
        year:$("#year").val(),
        description:$("#description").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.116.10:8080/api/Game/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoGames").empty();
            $("#id").val("");
            $("#name").val("");
            $("#developer").val("");
            $("#year").val("");
            $("#description").val("");
            traerInformacionGames();
            alert("se ha Actualizado")
        }
    });
}
function borrarElementoGames(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.116.10:8080/api/Game/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoGames").empty();
            traerInformacionGames();
            alert("Se ha Eliminado.")
        }
    });
}

//tabla CLIENT

function traerInformacionClient(){
    $.ajax({
        url:"http://129.151.116.10:8080/api/Client/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaClient(respuesta)
        }


    });
}

function pintarRespuestaClient(respuesta){
    let myTable="<table border=2>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>" +respuesta[i].idClient+"</td>";
        myTable+="<td>" +respuesta[i].email+"</td>";
        myTable+="<td>" +respuesta[i].password+"</td>";
	myTable+="<td>" +respuesta[i].name+"</td>";
        myTable+="<td>" +respuesta[i].age+"</td>";
        myTable+="<td> <button onclick='editarInformacionClient("+respuesta[i].idClient+")'>Actualizar</button>";
        myTable+="<td> <button onclick='borrarElementoClient("+respuesta[i].idClient+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultadoClient").html(myTable);

}
function guardarInformacionClient(){
    let myData={
    //  idClient:$("#idClient").val(),
        email:$("#email").val(),
	password:$("#password").val(),	
	name:$("#nameClient").val(),
        age:$("#age").val()
    };
    $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(myData),
        
        url:"http://129.151.116.10:8080/api/Client/save",
       
        
        success:function(response) {
                console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente");
    
    
        }
        });

}
function editarInformacionClient(idElemento){
    let myData={
        idClient:idElemento,
        email:$("#email").val(),
	password:$("#password").val(),	
	name:$("#nameClient").val(),
        age:$("#age").val()
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.116.10:8080/api/Client/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoClient").empty();
            $("#idClient").val("");
            $("#email").val("");
            $("#password").val("");
            $("#nameClient").val("");
            $("#age").val("");
            traerInformacionClient();
            alert("se ha Actualizado")
        }
    });
}
function borrarElementoClient(idElemento){
    let myData={
        idClient:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.116.10:8080/api/Client/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoClient").empty();
            traerInformacionClient();
            alert("Se ha Eliminado.")
        }
    });
}



//tabla MESSAGE

function traerInformacionMessage(){
    $.ajax({
        url:"http://129.151.116.10:8080/api/Message/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaMessage(respuesta)
        }


    });
}

function pintarRespuestaMessage(respuesta){
    let myTable="<table border=2>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>" +respuesta[i].idMessage+"</td>";
        myTable+="<td>" +respuesta[i].messageText+"</td>";
        myTable+="<td> <button onclick='editarInformacionMessage("+respuesta[i].idMessage+")'>Actualizar</button>";
        myTable+="<td> <button onclick='borrarElementoMessage("+respuesta[i].idMessage+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultadoMessage").html(myTable);

}
function guardarInformacionMessage(){
    let myData={
    //  idMessage:$("#idMessage").val(),
        messageText:$("#messageText").val(),
         
    };
    $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(myData),
        
        url:"http://129.151.116.10:8080/api/Message/save",
       
        
        success:function(response) {
                console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente");
    
    
        }
        });

}
function editarInformacionMessage(idElemento){
    let myData={
        idMessage:idElemento,
        messageText:$("#messageText").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.116.10:8080/api/Message/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoMessage").empty();
            $("#idMessage").val("");
            $("#messageText").val("");
            traerInformacionMessage();
            alert("se ha Actualizado")
        }
    });
}
function borrarElementoMessage(idElemento){
    let myData={
        idMessage:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.116.10:8080/api/Message/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoMessage").empty();
            traerInformacionMessage();
            alert("Se ha Eliminado.")
        }
    });
}

//tabla RESERVATION

function traerInformacionReservation(){
    $.ajax({
        url:"http://129.151.116.10:8080/api/Reservation/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaReservation(respuesta)
        }


    });
}

function pintarRespuestaReservation(respuesta){
    let myTable="<table border=2>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].idReservation+"</td>";
 	myTable+="<td>"+respuesta[i].startDate+"</td>";
        myTable+="<td>"+respuesta[i].devolutionDate+"</td>";
        myTable+="<td>"+respuesta[i].status+"</td>";
        myTable+="<td> <button onclick='editarInformacionReservation("+respuesta[i].idReservation+")'>Actualizar</button>";
        myTable+="<td> <button onclick='borrarElementoReservation("+respuesta[i].idReservation+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultadoReservation").html(myTable);

}
function guardarInformacionReservation(){
    let myData={
    //  idReservation:$("#idReservation").val(),
   	startDate:$("#startDate").val(),
        devolutionDate:$("#devolutionDate").val(),
         
    //    status:$("#status").val()
    };
    $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(myData),
        
        url:"http://129.151.116.10:8080/api/Reservation/save",
       
        
        success:function(response) {
                console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente");
    
    
        }
        });

}
function editarInformacionReservation(idElemento){
    let myData={
        idReservation:idElemento,
   	startDate:$("#startDate").val(),
        devolutionDate:$("#devolutionDate").val(),
    //    status:$("#status").val()
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.116.10:8080/api/Reservation/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoReservation").empty();
            $("#idReservation").val("");
            $("#startDate").val("");
            $("#devolutionDate").val("");
        //    $("#status").val("");
           traerInformacionReservation();
            alert("se ha Actualizado")
        }
    });
}
function borrarElementoReservation(idElemento){
    let myData={
        idReservation:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.116.10:8080/api/Reservation/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoReservation").empty();
            traerInformacionReservation();
            alert("Se ha Eliminado.")
        }
    });
}
//tabla reportes
function traerReporteStatus(){
    $.ajax({
        url:"http://129.151.116.10:8080/api/Reservation/report-status",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaStatus(respuesta)
        }


    });
}

function pintarRespuestaStatus(respuesta){
    let myTable="<table border=2>";
    myTable+="<tr>";
        myTable+="<th>Completadas </th>";
 	myTable+="<td>"+respuesta.completed+"</td>";
        myTable+="<th>Canceladas </th>";
        myTable+="<td>"+respuesta.cancelled+"</td>";
        myTable+="</tr>";
    
    myTable+="</table>";
    $("#resultadoStatus").html(myTable);
}

function traerReporteDate(){
    
    var fechaInicio = document.getElementById("RstarDate").value;
    var fechaCierre = document.getElementById("RdevolutionDate").value;
    console.log(fechaInicio);
    console.log(fechaCierre);
    
     $.ajax({
        url:"http://129.151.116.10:8080/api/Reservation/report-dates/"+fechaInicio+"/"+fechaCierre,
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaDate(respuesta)
        }
     });
}

function pintarRespuestaDate(respuesta){
    let myTable="<table border=2>";
    myTable+="<tr>";
    for(i=0;i<respuesta.length;i++){
    myTable+="<th>total</th>";
        myTable+="<td>"+respuesta[i].devolutionDate+"</td>";
        myTable+="<td>"+respuesta[i].startDate+"</td>";
        myTable+="<td>"+respuesta[i].status+"</td>";
        myTable+="</tr>";
    }
    
    myTable+="</table>";
    $("#resultadoDate").html(myTable);
}

function traerReporteClientes(){
    $.ajax({
        url:"http://129.151.116.10:8080/api/Reservation/report-clients",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaClientes(respuesta)
        }


    });
}

function pintarRespuestaClientes(respuesta){
    let myTable="<table border=2>";
    myTable+="<tr>";
    for(i=0;i<respuesta.length;i++){
    myTable+="<th>total</th>";
        myTable+="<td>"+respuesta[i].total+"</td>";
        myTable+="<td>"+respuesta[i].client.name+"</td>";
        myTable+="<td>"+respuesta[i].client.email+"</td>";
        myTable+="<td>"+respuesta[i].client.age+"</td>";
        myTable+="</tr>";
    }
    
    myTable+="</table>";
    $("#resultadoClientes").html(myTable);
}