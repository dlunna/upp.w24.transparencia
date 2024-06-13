const servicios = [
  { "url":"Audiencias.html",
    "nombre":"Audiencias Públicas",
    "descripcion":"Lleva tu solicitud directamente al secretario."
  }
]

var _num = 0
class Servicios {
  constructor(data, i){
    this._url = data.url;
    this.descripcion = data.descripcion;
    this._nombre = data.nombre;
    _num = _num+1;
    this._div = (_num === 3 ? "<div style='clear:both;'><br/></div>" : "");
    this._base = `
        <article>
          <h3><a href="` + this._url + `">` + this._nombre + `</a></h3>
          <p>` + this.descripcion + `</p>
        </article>
        ` + this._div + `
    `;
    if(_num === 3){_num = 0}
  }

  getHTML(){
    return this._base;
  }

}

function renderServicios(){
  servicios.forEach(function(_app_, i){
    const newServicios = new Servicios(_app_, i);
     $(".serviciosDesk").append(newServicios.getHTML());
  });
}