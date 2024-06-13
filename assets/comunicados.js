const comunicados = [
  {
    "image":"http://s-contraloria.hidalgo.gob.mx/img/banner_transp20.png",
    "titulo":"XV Concurso Nacional de Transparencia en Corto 2020",
    "descripcion":"",
    "link":"http://s-contraloria.hidalgo.gob.mx/descargables/cartel_TC2020.pdf"
  },
  {
  "image":"https://cdn.hidalgo.gob.mx/bmh_convocatoria.jpg",
  "titulo":"Convocatoria Becas Miguel Hidalgo",
  "descripcion":"Consulta los requisitos y recibe este apoyo que te permitirá continuar con tus estudios superiores.",
  "link":"http://sep.hidalgo.gob.mx/content/convocatorias/2da_convocatoria_miguel_hidalgo.pdf"
  },
  {
  "image":"https://cdn.hidalgo.gob.mx/tuzobus.png",
  "titulo":"Tuzobús se transforma",
  "descripcion":"Descarga la App del Tuzobús",
  "link":"https://play.google.com/store/apps/details?id=com.tuzobus"
  },
  {
  "image":"http://cdn.hidalgo.gob.mx/esitmovil.png",
  "titulo":"App eSIT Móvil",
  "descripcion":"Conoce y descarga la app desde la que podrás realizar:<br>Consulta y pago de tenencia/refrendo<br>Consulta y pago de referencia F7",
  "link":"http://portaltributario.hidalgo.gob.mx/Serviciosenlinea/eSIT%20movil/movil%20informacion.html"
  }
];
class comunicadosB {

  constructor(data, i){
    this._image = data.image;
    this._titulo = data.titulo;
    this._descripcion = data.descripcion;
    this._link = data.link;
    this._activ = (i == 0 ? "active" : "");
    this._base = `
      <div class="carousel-item ` + this._activ + `">
          <div style="min-height: 500px">
              <div class="noticiasBanner" style="
                  background-image: url('` + this._image + `');
                  background-size: cover;
                  background-repeat: no-repeat;
                  max-height: 500px;
                  min-height: 500px;
                  width: 100%;
                  background-color: #092432 ;
                  background-position: center;"
              >
                  <div class="informacionNoticia">
                    <h5>` + this._titulo + `</h5>
                    <hr class="hr-com">
                    <p>` + this._descripcion + `</p>
                    <div class="button-com"><a class="noticiasLink" href="` + this._link + `" target="_blank"><button type="button" class="btn btn-gob-transparent">VER MÁS</button></a></div>
                    <ol class="carousel-indicators" id="indicators-comunicados">
                      <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                      <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                      <li data-target="#carouselExampleControls" data-slide-to="2"></li>
                      <li data-target="#carouselExampleControls" data-slide-to="3"></li>
                    </ol>
                  </div>
              </div> 
          </div>    
      </div>
    `;
  }

  getHTML(){
    return this._base;
  }
} 

function ComunicadosBanner(){
  
  comunicados.forEach(function(_app_, i){
    const newcomunicadosB = new comunicadosB(_app_, i);
    $(".controls-com").append(newcomunicadosB.getHTML());
  });
}
