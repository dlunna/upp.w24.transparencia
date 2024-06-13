document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'interaction', 'dayGrid' ],
      header: {
        left: 'prevYear,prev,next,nextYear today',
        center: 'title',
        right: 'dayGridMonth,dayGridWeek,dayGridDay'
      },
      defaultDate: '2020-03-12',
      locale: 'es',
      navLinks: true, // can click day/week names to navigate views
      editable: false,
      eventLimit: true, // allow "more" link when too many events
      events: [
        {
          title: 'Entrevista con el programa Jaque Mate',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">No te pierdas esta noche, en punto de las 20:00 h, <a href="https://twitter.com/jaquemate_1?ref_src=twsrc%5Etfw">@jaquemate_1</a> junto a <a href="https://twitter.com/orquistabo?ref_src=twsrc%5Etfw">@orquistabo</a> y <a href="https://twitter.com/castillolyly?ref_src=twsrc%5Etfw">@castillolyly</a> por <a href="https://twitter.com/RadioyTVHidalgo?ref_src=twsrc%5Etfw">@RadioyTVHidalgo</a>. <br>Hablaré de los logros alcanzados en materia económica y de los nuevos retos que me ha encomendado el Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> como titular de la <a href="https://twitter.com/SEPPEHidalgo?ref_src=twsrc%5Etfw">@SEPPEHidalgo</a>. <a href="https://t.co/LvQsVI010r">https://t.co/LvQsVI010r</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1156701439915429888?ref_src=twsrc%5Etfw">31 de julio de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-07-31'
        },
        {
          title: 'Recorrido por las oficinas de la SEPPE',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Realicé mi primer recorrido por los pasillos de la <a href="https://twitter.com/SEPPEHidalgo?ref_src=twsrc%5Etfw">@SEPPEHidalgo</a>, como titular de la misma. Pude conocer a cada uno de sus integrantes y reiterarles mi compromiso con ellos y con nuestro Estado. <a href="https://t.co/yqrx9CMoI7">pic.twitter.com/yqrx9CMoI7</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1156970253798297600?ref_src=twsrc%5Etfw">1 de agosto de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-08-01'
        },
        {
          title: 'Reunión con el Secretario de Gobierno, Lic. Simón Vargas Aguilar',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Me reuní con el Secretario Simón Vargas de <a href="https://twitter.com/SeGobHidalgo?ref_src=twsrc%5Etfw">@SeGobHidalgo</a>. La coordinación es clave para conseguir los objetivos que nos ha puesto el Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>. Todo lo hacemos para que las familias hidalguenses vivan mejor. <a href="https://t.co/abRGhoWP1Z">pic.twitter.com/abRGhoWP1Z</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1157005363197206528?ref_src=twsrc%5Etfw">1 de agosto de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-08-01'
        },
        {
          title: 'Reunión con el equipo de Innovación Gubernamental',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Continúo trabajando con el equipo de la <a href="https://twitter.com/SEPPEHidalgo?ref_src=twsrc%5Etfw">@SEPPEHidalgo</a>; estoy con el área de Innovación Gubernamental y Mejora Regulatoria. La instrucción del Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> es simplificar la manera en que los hidalguenses interactúan con el <a href="https://twitter.com/gobiernohidalgo?ref_src=twsrc%5Etfw">@gobiernohidalgo</a>, para dar respuesta a sus necesidades <a href="https://t.co/DzAGsHngrk">pic.twitter.com/DzAGsHngrk</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1157053668010725376?ref_src=twsrc%5Etfw">1 de agosto de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-08-01'
        },
        {
          title: 'Reunión con el Secretario de Desarrollo Agropecuario, Lic. Carlos Muñiz Rodríguez',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Sostuve una reunión con <a href="https://twitter.com/Car_Muniz?ref_src=twsrc%5Etfw">@Car_Muniz</a>, Secretario de <a href="https://twitter.com/SEDAGRO_HIDALGO?ref_src=twsrc%5Etfw">@SEDAGRO_HIDALGO</a>, para platicar sobre las acciones de fortalecimiento al campo que son prioridad para el Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>. Trabajamos para impulsar los sectores estratégicos que favorezcan a los hidalguenses. <a href="https://t.co/sqBPOaMRlM">pic.twitter.com/sqBPOaMRlM</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1157076938378436608?ref_src=twsrc%5Etfw">1 de agosto de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-08-01'
        },
        {
          title: 'Reunión con el Secretario de Seguridad Pública,  Lic. Mauricio Delmar Saavedra',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">En <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a>, la estrategia <a href="https://twitter.com/hashtag/HidalgoSeguro?src=hash&amp;ref_src=twsrc%5Etfw">#HidalgoSeguro</a> está apuntalada con el centro de seguridad más moderno de Latinoamérica: el <a href="https://twitter.com/hashtag/C5iHidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#C5iHidalgo</a>. Me reuní con <a href="https://twitter.com/Mauricio_Delmar?ref_src=twsrc%5Etfw">@Mauricio_Delmar</a>, Srio. de <a href="https://twitter.com/SSP_Hidalgo?ref_src=twsrc%5Etfw">@SSP_Hidalgo</a>; para el Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>, tu seguridad y la de tu familia es nuestra prioridad. <a href="https://t.co/zkqMZJeOyF">pic.twitter.com/zkqMZJeOyF</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1157114913728401413?ref_src=twsrc%5Etfw">2 de agosto de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-08-01'
        },
        {
          title: 'Reunión con el personal de la CISCMRDE',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Uno de los objetivos de la <a href="https://twitter.com/SEPPEHidalgo?ref_src=twsrc%5Etfw">@SEPPEHidalgo</a> es que el <a href="https://twitter.com/gobiernohidalgo?ref_src=twsrc%5Etfw">@gobiernohidalgo</a> trabaje de manera más eficiente. Me reuní con el equipo de la <a href="https://twitter.com/CISCMRDE?ref_src=twsrc%5Etfw">@CISCMRDE</a>, para revisar y ajustar los procesos intersecretariales a fin de hacerlos más dinámicos. <a href="https://t.co/ki8TbScN4f">pic.twitter.com/ki8TbScN4f</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1157293121522348032?ref_src=twsrc%5Etfw">2 de agosto de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-08-02'
        },
        {
          title: 'Reunión con el Secretario de Obras Públicas y Ordenamiento Territorial, Ing. José Ventura Meneses Arrieta',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">En la admón. de <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>, estamos trabajando para atender las necesidades de nuestra gente y puedan salir adelante.<br>Me reuní con <a href="https://twitter.com/JoseMenesesA?ref_src=twsrc%5Etfw">@JoseMenesesA</a>, Srio. de <a href="https://twitter.com/HidalgoSOPOT?ref_src=twsrc%5Etfw">@HidalgoSOPOT</a> para evaluar las políticas públicas de su secretaria y poder acelerar el desarrollo en <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a>. <a href="https://t.co/RqLcZBl9Wp">pic.twitter.com/RqLcZBl9Wp</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1157313785352413184?ref_src=twsrc%5Etfw">2 de agosto de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-08-02'
        },
        {
          title: 'Acompañamiento al Señor Gobernador durante la visita del Presidente Andrés Manuel López Obrador ',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">El equipo de trabajo del <a href="https://twitter.com/gobiernohidalgo?ref_src=twsrc%5Etfw">@gobiernohidalgo</a> ya está presente para acompañar al Gobernador <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> y al Pdte. <a href="https://twitter.com/lopezobrador_?ref_src=twsrc%5Etfw">@lopezobrador_</a> en su recorrido y diálogo con la comunidad del Hospital Rural Imss No. 23 en el Municipio de <a href="https://twitter.com/hashtag/Metepec?src=hash&amp;ref_src=twsrc%5Etfw">#Metepec</a>. <a href="https://t.co/3VX1u7zvGe">https://t.co/3VX1u7zvGe</a> <a href="https://t.co/EbPfyrxNyr">pic.twitter.com/EbPfyrxNyr</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1157383900928315392?ref_src=twsrc%5Etfw">2 de agosto de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-08-02'
        },
        {
          title: 'Reunión con el Secretario de Desarrollo Social, Lic. Rolando Daniel Jiménez Rojo',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Sigo en reuniones de trabajo con mis compañeros Srios. del <a href="https://twitter.com/gobiernohidalgo?ref_src=twsrc%5Etfw">@gobiernohidalgo</a>; estuve con <a href="https://twitter.com/DanielRolandoJ?ref_src=twsrc%5Etfw">@DanielRolandoJ</a>, Srio. de <a href="https://twitter.com/SEDESOHidalgo?ref_src=twsrc%5Etfw">@SEDESOHidalgo</a>. Las políticas de desarrollo del Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> son prioritarias para ayudar a los que menos tienen a salir adelante. <a href="https://t.co/lMbSJp22Nj">pic.twitter.com/lMbSJp22Nj</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1157660138502795264?ref_src=twsrc%5Etfw">3 de agosto de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-08-03'
        },
        {
          title: 'Visita a la Dirección General de Imagen Institucional ',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Todas las áreas que conforman a la <a href="https://twitter.com/SEPPEHidalgo?ref_src=twsrc%5Etfw">@SEPPEHidalgo</a> realizan, día con día, un gran trabajo en beneficio de las familias hidalguenses. Hoy visité la Dirección General de Imagen Institucional, donde pude saludar a quienes integran esta importe área de esta Secretaría. <a href="https://t.co/PrF3vwD32k">pic.twitter.com/PrF3vwD32k</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1158429373286031360?ref_src=twsrc%5Etfw">5 de agosto de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-08-05'
        },
        {
          title: 'Reunión con el Secretario de Medio Ambiente y Recursos Naturales, Ing. Benjamín Rico Moreno ',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Platiqué con <a href="https://twitter.com/benjamin_rico?ref_src=twsrc%5Etfw">@benjamin_rico</a>, Srio. de <a href="https://twitter.com/medioambiente_H?ref_src=twsrc%5Etfw">@medioambiente_H</a> sobre la importancia del trabajo coordinado en materia de políticas públicas definidas, para que <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a> pueda seguirse desarrollando de manera sustentable. <a href="https://t.co/dfq14MLG37">pic.twitter.com/dfq14MLG37</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1158470384301301760?ref_src=twsrc%5Etfw">5 de agosto de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-08-05'
        },
        {
          title: 'Reunión con el Secretario de Cultura, Dr. José Olaf Hernández Sánchez',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr"><a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a> es uno de los estados más ricos de México en cultura y tradición. Me reuní con <a href="https://twitter.com/Olaff111?ref_src=twsrc%5Etfw">@olaff111</a>, Srio. de <a href="https://twitter.com/CulturaHidalgo?ref_src=twsrc%5Etfw">@CulturaHidalgo</a> para fortalecer las acciones que acerquen a todos los hidalguenses nuestra riqueza, como lo indicó el Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>. <a href="https://t.co/3kXrwwEYXO">pic.twitter.com/3kXrwwEYXO</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1158523494881210369?ref_src=twsrc%5Etfw">5 de agosto de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-08-05'
        },
        {
          title: 'Reunión con el Secretario de Educación Pública, Lic. Atilano Rodríguez Pérez',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Fue un gusto charlar con <a href="https://twitter.com/atilanorp?ref_src=twsrc%5Etfw">@atilanorp</a>, Srio. de <a href="https://twitter.com/SEPHidalgo?ref_src=twsrc%5Etfw">@SEPHidalgo</a> para evaluar las estrategias de su secretaría. Seguimos la instrucción del Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>: fortalecer la política educativa para continuar ofreciendo a los hidalguenses acceso a educación de calidad. <a href="https://t.co/HvKh2XlxuX">pic.twitter.com/HvKh2XlxuX</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1158566169739239426?ref_src=twsrc%5Etfw">6 de agosto de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-08-05'
        },
        {
          title: 'Reunión con el Secretario de Turismo, Dr. Eduardo Javier Baños Gómez',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Cerramos la jornada de hoy en reunión con <a href="https://twitter.com/EduardoJavierBG?ref_src=twsrc%5Etfw">@EduardoJavierBG</a>, Srio. de <a href="https://twitter.com/SECTURHidalgo?ref_src=twsrc%5Etfw">@SECTURHidalgo</a>.Pusimos mucha atención en comprender las políticas de esta importante Secretaría; el sector turístico da sustento a miles de familias hidalguenses y proyecta nuestra mejor cara a México y al Mundo <a href="https://t.co/G7amSCONCM">pic.twitter.com/G7amSCONCM</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1158605106188816384?ref_src=twsrc%5Etfw">6 de agosto de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-08-05'
        },
        {
          title: 'Entrevista en Programa de Radio Al Aire ',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr"><a href="https://twitter.com/hashtag/ALAIRE?src=hash&amp;ref_src=twsrc%5Etfw">#ALAIRE</a> Hidalgo, segundo estado en disminuir la pobreza: Coneval, <a href="https://twitter.com/JLRomoCruz?ref_src=twsrc%5Etfw">@JLRomoCruz</a>, Secretario Ejecutivo de la Política Pública de Hidalgo, habla sobre el tema en  entrevista para <a href="https://twitter.com/hashtag/PrimeraEmisi%C3%B3n?src=hash&amp;ref_src=twsrc%5Etfw">#PrimeraEmisión</a> con <a href="https://twitter.com/beltrandelrio?ref_src=twsrc%5Etfw">@beltrandelrio</a> <br><br>📻 90.5 FM y en línea: <a href="https://t.co/KHEYfbfgvh">https://t.co/KHEYfbfgvh</a></p>&mdash; Imagen Radio (@Imagen_Mx) <a href="https://twitter.com/Imagen_Mx/status/1158763805750353921?ref_src=twsrc%5Etfw">6 de agosto de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-08-06'
        },
        {
          title: 'Reunión col el Secretario de Movilidad y Transporte, Mtro. José Luis Guevara Muñoz  ',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Tuve la oportunidad de reunirme con <a href="https://twitter.com/joseguevaram?ref_src=twsrc%5Etfw">@joseguevaram</a>, Srio. de <a href="https://twitter.com/MovilidadHgo?ref_src=twsrc%5Etfw">@MovilidadHgo</a>. Analizamos las políticas en materia de movilidad en <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a> y sobre cómo fortalecerlas, para beneficio de los hidalguenses. <a href="https://t.co/XKDVfbtIl4">pic.twitter.com/XKDVfbtIl4</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1158826685661425665?ref_src=twsrc%5Etfw">6 de agosto de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-08-06'
        },
        {
          title: 'Reunión con el Lic. Lamán Carranza, Titular de la Unidad de Planeación ',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Terminamos un día más de trabajo en reunión con <a href="https://twitter.com/LamanCarranza?ref_src=twsrc%5Etfw">@LamanCarranza</a>, Titular de <a href="https://twitter.com/PlaneacionHgo?ref_src=twsrc%5Etfw">@PlaneacionHgo</a>.<br>El Gob <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> nos ha pedido que todas las estrategias del <a href="https://twitter.com/gobiernohidalgo?ref_src=twsrc%5Etfw">@gobiernohidalgo</a> estén basadas en un proceso de planeación serio y eficiente enfocado en mejorar la vida de los hidalguenses. <a href="https://t.co/iGi3nIdH0D">pic.twitter.com/iGi3nIdH0D</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1158954235570118657?ref_src=twsrc%5Etfw">7 de agosto de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-08-06'
        },
        {
          title: 'Reunión con la Lic. Patricia Marcela González Valencia, Directora del Sistema DIF Hidalgo',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Me reuní con <a href="https://twitter.com/PatyGonzalez_?ref_src=twsrc%5Etfw">@PatyGonzalez_</a>, Directora del Sistema <a href="https://twitter.com/difhgo?ref_src=twsrc%5Etfw">@difhgo</a> y su equipo de trabajo. Pocas instituciones tienen una causa tan noble como esta importante institución del <a href="https://twitter.com/gobiernohidalgo?ref_src=twsrc%5Etfw">@gobiernohidalgo</a>. Acordamos estar muy cercanos desde la <a href="https://twitter.com/SEPPEHidalgo?ref_src=twsrc%5Etfw">@SEPPEHidalgo</a> para ayudar a los que más lo necesitan. <a href="https://t.co/duk6NsrkyC">pic.twitter.com/duk6NsrkyC</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1159249336783593480?ref_src=twsrc%5Etfw">7 de agosto de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-08-07'
        },
        {
          title: 'Audiencia Pública ',
          id: 'Nicolás Flores',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">El <a href="https://twitter.com/coneval?ref_src=twsrc%5Etfw">@coneval</a>, el organismo autónomo encargado de medir la pobreza en México, dio a conocer que somos la 2da entidad que más redujo el porcentaje de población en pobreza. De 2016 a 2018, logramos mejorar las condiciones de vida de 167 mil personas en Hidalgo. <a href="https://twitter.com/hashtag/AudienciaP%C3%BAblica?src=hash&amp;ref_src=twsrc%5Etfw">#AudienciaPública</a> <a href="https://t.co/ydtrWBzICG">pic.twitter.com/ydtrWBzICG</a></p>&mdash; Omar Fayad (@omarfayad) <a href="https://twitter.com/omarfayad/status/1159527094243618816?ref_src=twsrc%5Etfw">8 de agosto de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-08-08'
        },
        {
          title: 'Evento en conmemoración del Día por la Integridad',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Estoy junto a Simón Vargas, Srio. de <a href="https://twitter.com/SeGobHidalgo?ref_src=twsrc%5Etfw">@SeGobHidalgo</a> y Cesar Mora, titular de <a href="https://twitter.com/Contraloria_Hgo?ref_src=twsrc%5Etfw">@Contraloria_Hgo</a> en evento para conmemorar el <a href="https://twitter.com/hashtag/D%C3%ADaPorLaIntegridad?src=hash&amp;ref_src=twsrc%5Etfw">#DíaPorLaIntegridad</a>. Recibiré a nombre de los que integramos la <a href="https://twitter.com/SEPPEHidalgo?ref_src=twsrc%5Etfw">@SEPPEHidalgo</a>, la estafeta que representa el compromiso que tenemos como servidores públicos. <a href="https://t.co/h0gNgVtOls">pic.twitter.com/h0gNgVtOls</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1159899666600931329?ref_src=twsrc%5Etfw">9 de agosto de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-08-09'
        },
        {
          title: 'Reunión con la Secretaria del Trabajo, Lic. María de los Ángeles Eguiluz Tapia',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Una de las necesidades más sentidas de los hidalguenses es tener más y mejores oportunidades laborales. Me reuní con <a href="https://twitter.com/EguiluzTapia?ref_src=twsrc%5Etfw">@EguiluzTapia</a>, Sria. de <a href="https://twitter.com/strabajohgo?ref_src=twsrc%5Etfw">@strabajohgo</a> para reforzar la estrategia del Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> que ya ha permitido general casi 19 mil empleos en menos de 3 años de admón. <a href="https://t.co/3hxKiqd4tq">pic.twitter.com/3hxKiqd4tq</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1159983379514843136?ref_src=twsrc%5Etfw">10 de agosto de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-08-09'
        },
        {
          title: 'Reunión con el Secretario de Contraloría, Lic. Cesar Mora ',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Cerramos este viernes en reunión con César Mora, Titular de <a href="https://twitter.com/Contraloria_Hgo?ref_src=twsrc%5Etfw">@Contraloria_Hgo</a>. Revisamos las políticas en materia de control interno del <a href="https://twitter.com/gobiernohidalgo?ref_src=twsrc%5Etfw">@gobiernohidalgo</a> que esta dependencia implementa. Trabajamos para que nuestro Estado siga creciendo, como lo instruyó el Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>. <a href="https://t.co/WXGBchTdPD">pic.twitter.com/WXGBchTdPD</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1160035610670903296?ref_src=twsrc%5Etfw">10 de agosto de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-08-09'
        },
        {
          title: 'Entrevista en el programa "A Criterio de…" de Criterio Hidalgo',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Estoy en vivo en <a href="https://twitter.com/hashtag/ACriterioDe?src=hash&amp;ref_src=twsrc%5Etfw">#ACriterioDe</a> por <a href="https://twitter.com/CriterioHidalgo?ref_src=twsrc%5Etfw">@CriterioHidalgo</a> platicando sobre los resultados de esta primera mitad de la admón. de <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> y los retos a los que nos enfrentamos para los próximos 3 años. <br>Síguela por: <a href="https://t.co/bqA3sc2Mqc">https://t.co/bqA3sc2Mqc</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1160995078611099650?ref_src=twsrc%5Etfw">12 de agosto de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-08-12'
        },
        {
          title: 'Reunión con el Secretario de Desarrollo Agropecuario, Lic. Carlos Muñiz Rodríguez',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Gracias a <a href="https://twitter.com/Car_Muniz?ref_src=twsrc%5Etfw">@Car_Muniz</a>, Srio. de <a href="https://twitter.com/SEDAGRO_HIDALGO?ref_src=twsrc%5Etfw">@SEDAGRO_HIDALGO</a> por su tiempo para llevar a cabo esta reunión nocturna, en la que damos seguimiento a las acciones en materia agropecuaria. El Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> nos ha pedido trabajar juntos, para que los hidalguenses tengan mejores oportunidades. <a href="https://t.co/KGSFyP5HM6">pic.twitter.com/KGSFyP5HM6</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1161100310422675456?ref_src=twsrc%5Etfw">13 de agosto de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-08-12'
        },
        {
          title: 'Reunión con los enlaces de las Secretarías',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">En el <a href="https://twitter.com/gobiernohidalgo?ref_src=twsrc%5Etfw">@gobiernohidalgo</a> trabajamos juntos y de manera coordinada para acelerar el desarrollo de nuestra entidad. Estuve con los enlaces de las secretarías para aprovechar al máximo los recursos de cada una de ellas y que los hidalguenses tengan más oportunidades. <a href="https://t.co/NG4pzOsuK7">pic.twitter.com/NG4pzOsuK7</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1161441309355327488?ref_src=twsrc%5Etfw">14 de agosto de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-08-13'
        },
        {
          title: 'Reunión con el Secretario de Salud, Dr. Marco Antonio Escamilla Acosta',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Es un gusto recibir en la <a href="https://twitter.com/SEPPEHidalgo?ref_src=twsrc%5Etfw">@SEPPEHidalgo</a> a <a href="https://twitter.com/SSH_Escamilla?ref_src=twsrc%5Etfw">@SSH_Escamilla</a>, Srio. de <a href="https://twitter.com/Salud_Hidalgo?ref_src=twsrc%5Etfw">@Salud_Hidalgo</a>, para coordinar acciones que beneficien a más hidalguenses. Desde el inicio de su administración, el Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> ha puesto a la salud en <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a> como uno de los temas principales. <a href="https://t.co/Oh76UJHcld">pic.twitter.com/Oh76UJHcld</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1161472718019223552?ref_src=twsrc%5Etfw">14 de agosto de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-08-13'
        },
        {
          title: 'Reunión col el Secretario de Movilidad y Transporte, Mtro. José Luis Guevara Muñoz  ',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">En el Gobierno de <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>, queremos mejorar la calidad de vida de los hidalguenses. Junto a <a href="https://twitter.com/joseguevaram?ref_src=twsrc%5Etfw">@joseguevaram</a>, Srio. de <a href="https://twitter.com/MovilidadHgo?ref_src=twsrc%5Etfw">@MovilidadHgo</a>, platicamos sobre alternativas para fortalecer la movilidad en nuestro Estado. <a href="https://t.co/RnQgLw3Erj">pic.twitter.com/RnQgLw3Erj</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1161737417847709708?ref_src=twsrc%5Etfw">14 de agosto de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-08-14'
        },
        {
          title: 'Asamblea Ordinaria del Consejo Coordinador Empresarial ',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Fue un gusto asistir a la Asamblea Ordinaria del <a href="https://twitter.com/CCEHidalgo?ref_src=twsrc%5Etfw">@CCEHidalgo</a>, que preside <a href="https://twitter.com/EspinolaLicona?ref_src=twsrc%5Etfw">@EspinolaLicona</a>. <br>Gracias a la estrategia definida por el Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> desde el inicio de su admón., hoy <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a> es reconocido por su dinámica empresarial; continuaremos y fortaleceremos esta estrategia <a href="https://t.co/iChPyOY928">pic.twitter.com/iChPyOY928</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1162178932982112261?ref_src=twsrc%5Etfw">16 de agosto de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-08-15'
        },
        {
          title: 'Reunión con los Secretarios Carlos Muñiz de SEDAGRO y Sergio Vargas de SEDECO',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">El <a href="https://twitter.com/gobiernohidalgo?ref_src=twsrc%5Etfw">@gobiernohidalgo</a> trabaja por ti y tu familia. <a href="https://t.co/YbazwPI8ly">https://t.co/YbazwPI8ly</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1163280399725924353?ref_src=twsrc%5Etfw">19 de agosto de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-08-18'
        },
        {
          title: 'Reunión con el Lic. Raúl Arroyo González, Procurador de Justicia de Hidalgo ',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Comenzamos una semana más de trabajo en una productiva reunión con <a href="https://twitter.com/arroyo_raul?ref_src=twsrc%5Etfw">@arroyo_raul</a>, titular de la <a href="https://twitter.com/PGJE_Hidalgo?ref_src=twsrc%5Etfw">@PGJE_Hidalgo</a> y todo su equipo de trabajo. <br>En el Gobierno de <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>, trabajamos para coordinar las acciones que beneficien a nuestras familias hidalguenses. <a href="https://t.co/H5743MWxXz">pic.twitter.com/H5743MWxXz</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1163470524372127748?ref_src=twsrc%5Etfw">19 de agosto de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-08-19'
        },
        {
          title: 'Primera entrega de las becas Miguel Hidalgo de Educación Superior',
          id: 'Mineral de la Reforma',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Fue un gusto acompañar al Gobernador <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>, en la Primera Entrega de las <a href="https://twitter.com/hashtag/BecasMiguelHidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#BecasMiguelHidalgo</a> de Educación Superior en la <a href="https://twitter.com/ut_mineral?ref_src=twsrc%5Etfw">@ut_mineral</a>, en beneficio de alumnos de diferentes universidades del Estado. <a href="https://t.co/agst2vog4c">pic.twitter.com/agst2vog4c</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1163605508672147456?ref_src=twsrc%5Etfw">20 de agosto de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-08-19'
        },
        {
          title: 'Reunión con el Secretario Sergio Vargas de la SEDECO y parte de su equipo de trabajo ',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Con gusto recibo a <a href="https://twitter.com/SFVargasT?ref_src=twsrc%5Etfw">@SFVargasT</a>, Srio. de <a href="https://twitter.com/Sedeco_Hgo?ref_src=twsrc%5Etfw">@Sedeco_Hgo</a> y parte de su equipo. Conozco de primera mano el trabajo que se hace en materia de desarrollo económico y en 35 meses de la admón. de <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> gracias a este equipo se consiguieron logros históricos en <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a>. <a href="https://t.co/ABPPAuE85L">pic.twitter.com/ABPPAuE85L</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1163879360908210177?ref_src=twsrc%5Etfw">20 de agosto de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-08-20'
        },
        {
          title: 'Entrega de la Estrategia para la Conservación y Uso Sustentable de la Biodiversidad en el Estado de Hidalgo al Dr. José Sarukhán Kermez, Coordinador Nacional de la CONABIO',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Esta tarde realicé la entrega de la Estrategia para la Conservación y Uso Sustentable de la Biodiversidad en el Estado de Hidalgo al Dr. José Sarukhán Kermez, Coordinador Nacional de la <a href="https://twitter.com/Conabio?ref_src=twsrc%5Etfw">@Conabio</a>. <a href="https://twitter.com/hashtag/HidalgoMegadiverso?src=hash&amp;ref_src=twsrc%5Etfw">#HidalgoMegadiverso</a> <a href="https://t.co/MiHoZ1pKef">pic.twitter.com/MiHoZ1pKef</a></p>&mdash; Omar Fayad (@omarfayad) <a href="https://twitter.com/omarfayad/status/1163983680664158209?ref_src=twsrc%5Etfw">21 de agosto de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-08-20'
        },
        {
          title: 'Reunión con los Secretarios de SEDECO, SEDESO, SEDAGRO y Sistema DIF Hidalgo',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Me encuentro en reunión de trabajo con mis compañeros del <a href="https://twitter.com/gobiernohidalgo?ref_src=twsrc%5Etfw">@gobiernohidalgo</a>; <a href="https://twitter.com/DanielRolandoJ?ref_src=twsrc%5Etfw">@DanielRolandoJ</a>, Srio. de <a href="https://twitter.com/SEDESOHidalgo?ref_src=twsrc%5Etfw">@SEDESOHidalgo</a>, <a href="https://twitter.com/SFVargasT?ref_src=twsrc%5Etfw">@SFVargasT</a>, de <a href="https://twitter.com/Sedeco_Hgo?ref_src=twsrc%5Etfw">@Sedeco_Hgo</a>, <a href="https://twitter.com/Car_Muniz?ref_src=twsrc%5Etfw">@Car_Muniz</a>, Srio. de <a href="https://twitter.com/SEDAGRO_HIDALGO?ref_src=twsrc%5Etfw">@SEDAGRO_HIDALGO</a> y <a href="https://twitter.com/PatyGonzalez_?ref_src=twsrc%5Etfw">@PatyGonzalez_</a> del Sistema <a href="https://twitter.com/difhgo?ref_src=twsrc%5Etfw">@difhgo</a>. <a href="https://t.co/hqiDoRkHhI">pic.twitter.com/hqiDoRkHhI</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1164003510154932224?ref_src=twsrc%5Etfw">21 de agosto de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-08-20'
        },
        {
          title: 'Reunión con los Secretarios de Turismo, SEDECO, Cultura y SEPH ',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Este miércoles me reúno con mis compañeros <a href="https://twitter.com/SFVargasT?ref_src=twsrc%5Etfw">@SFVargasT</a>, Srio. de <a href="https://twitter.com/Sedeco_Hgo?ref_src=twsrc%5Etfw">@Sedeco_Hgo</a>; <a href="https://twitter.com/Olaff111?ref_src=twsrc%5Etfw">@Olaff111</a> de <a href="https://twitter.com/CulturaHidalgo?ref_src=twsrc%5Etfw">@CulturaHidalgo</a> y <a href="https://twitter.com/EduardoJavierBG?ref_src=twsrc%5Etfw">@EduardoJavierBG</a> de <a href="https://twitter.com/SECTURHidalgo?ref_src=twsrc%5Etfw">@SECTURHidalgo</a>; al igual que con integrantes de la <a href="https://twitter.com/SEPHidalgo?ref_src=twsrc%5Etfw">@SEPHidalgo</a>.<br>Trabajamos con un objetivo: favorecer a las familias de <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a>. <a href="https://t.co/D0FWtIfurG">pic.twitter.com/D0FWtIfurG</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1164222358716080131?ref_src=twsrc%5Etfw">21 de agosto de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-08-21'
        },
        {
          title: 'Reunión con los Secretarios de Salud, SEDECO, SEDESO, SEDAGRO, SEPH y Sistema DIFH',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Terminamos este viernes con una productiva reunión con los Srios. del. <a href="https://twitter.com/gobiernohidalgo?ref_src=twsrc%5Etfw">@gobiernohidalgo</a>; <a href="https://twitter.com/DanielRolandoJ?ref_src=twsrc%5Etfw">@DanielRolandoJ</a> de <a href="https://twitter.com/SEDESOHidalgo?ref_src=twsrc%5Etfw">@SEDESOHidalgo</a>, <a href="https://twitter.com/SSH_Escamilla?ref_src=twsrc%5Etfw">@SSH_Escamilla</a>, de <a href="https://twitter.com/Salud_Hidalgo?ref_src=twsrc%5Etfw">@Salud_Hidalgo</a>, <a href="https://twitter.com/SFVargasT?ref_src=twsrc%5Etfw">@SFVargasT</a> de <a href="https://twitter.com/Sedeco_Hgo?ref_src=twsrc%5Etfw">@Sedeco_Hgo</a>, <a href="https://twitter.com/Car_Muniz?ref_src=twsrc%5Etfw">@Car_Muniz</a> de <a href="https://twitter.com/SEDAGRO_HIDALGO?ref_src=twsrc%5Etfw">@SEDAGRO_HIDALGO</a>, <a href="https://twitter.com/atilanorp?ref_src=twsrc%5Etfw">@atilanorp</a> de <a href="https://twitter.com/SEPHidalgo?ref_src=twsrc%5Etfw">@SEPHidalgo</a> y <a href="https://twitter.com/PatyGonzalez_?ref_src=twsrc%5Etfw">@PatyGonzalez_</a> del <a href="https://twitter.com/difhgo?ref_src=twsrc%5Etfw">@difhgo</a>. <a href="https://t.co/x4Nc5UiEWp">pic.twitter.com/x4Nc5UiEWp</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1165091069702352896?ref_src=twsrc%5Etfw">24 de agosto de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-08-23'
        },
        {
          title: 'Banderazo inaugural de una estación más del Tuzobús, entrega de uniformes y 20 nuevas unidades',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Con gusto acompañé al Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> y al Srio. <a href="https://twitter.com/joseguevaram?ref_src=twsrc%5Etfw">@joseguevaram</a>, titular de <a href="https://twitter.com/MovilidadHgo?ref_src=twsrc%5Etfw">@MovilidadHgo</a> al banderazo inaugural de una estación más del Tuzobús, entrega de uniformes y 20 nuevas unidades; hoy el <a href="https://twitter.com/hashtag/Tuzob%C3%BAsSeTransforma?src=hash&amp;ref_src=twsrc%5Etfw">#TuzobúsSeTransforma</a> para beneficiar a más de 108 mil usuarios al día. <a href="https://t.co/I8XQfAdmJd">pic.twitter.com/I8XQfAdmJd</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1165413129716666370?ref_src=twsrc%5Etfw">24 de agosto de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-06-24'
        },
        {
          title: 'Acompañamiento al Gobernador al inicio de la Entrega de utiles escolares ',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Acompañé al Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> y al Srio. <a href="https://twitter.com/atilanorp?ref_src=twsrc%5Etfw">@atilanorp</a> de <a href="https://twitter.com/SEPHidalgo?ref_src=twsrc%5Etfw">@SEPHidalgo</a> a la Esc. Sec. Tec. 1 para dar inicio a la entrega de <a href="https://twitter.com/hashtag/%C3%9AtilesEscolaresHidalgo2019?src=hash&amp;ref_src=twsrc%5Etfw">#ÚtilesEscolaresHidalgo2019</a>. Un apoyo directo a las familias de <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a>, porque sabemos que nuestros jóvenes y su educación son pilar del desarrollo del Estado. <a href="https://t.co/95Dx6dSY9o">pic.twitter.com/95Dx6dSY9o</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1166051715189280770?ref_src=twsrc%5Etfw">26 de agosto de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-08-26'
        },
        {
          title: 'Entrega de utiles escolares en la Escuela Centro Escolar Presidente Alemán ',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Visité el Centro Escolar Presidente Alemán para arrancar la entrega de <a href="https://twitter.com/hashtag/%C3%9AtilesEscolaresHidalgo2019?src=hash&amp;ref_src=twsrc%5Etfw">#ÚtilesEscolaresHidalgo2019</a> del Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>, la cual beneficiará a más de 680 familias hidalguenses. Este programa es para que nuestros jóvenes tengan un futuro con mejores oportunidades. <a href="https://t.co/QLDFUqyCog">pic.twitter.com/QLDFUqyCog</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1166087201597415424?ref_src=twsrc%5Etfw">26 de agosto de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-08-26'
        },
        {
          title: 'Entrega de utiles escolares en la Escuela Secundaria General No. 2',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Fue un gusto estar en la Escuela Secundaria General 2 junto a padres de familia y alumnos. Hoy, les hicimos entrega de un apoyo que estamos seguros van a aprovechar en cada momento dentro y fuera del aula. Sólo me queda felicitarlos y desearles un excelente año escolar. <a href="https://t.co/OTofmM2bYx">pic.twitter.com/OTofmM2bYx</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1166126905365585923?ref_src=twsrc%5Etfw">26 de agosto de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-08-26'
        },
        {
          title: 'Foro de Consulta Regional del Marco de Cooperación de  la Organización de las Naciones Unidas para el Desarrollo Sostenible en México',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Asistí al Foro de Consulta Regional del Marco de Cooperación de <a href="https://twitter.com/hashtag/NacionesUnidas?src=hash&amp;ref_src=twsrc%5Etfw">#NacionesUnidas</a> para el Desarrollo Sostenible en México que se realiza por primera vez en nuestro Estado. Un proyecto del gobierno de <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> en conjunto con <a href="https://twitter.com/ONUMX?ref_src=twsrc%5Etfw">@ONUMX</a>. <a href="https://t.co/eQKde7xGdj">pic.twitter.com/eQKde7xGdj</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1166422866658770948?ref_src=twsrc%5Etfw">27 de agosto de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-08-27'
        },
        {
          title: 'Reunión con el equipo de trabajo de la SEPPE',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">La coordinación constante con mi equipo de trabajo es fundamental para revisar los temas que son prioridad para el Estado. Arrancamos la jornada trabajando para que <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a> crezca de manera integral y los hidalguenses mejoren su calidad de vida. <a href="https://t.co/xTUawwhqhK">pic.twitter.com/xTUawwhqhK</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1166746072896737281?ref_src=twsrc%5Etfw">28 de agosto de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-08-28'
        },
        {
          title: 'Reunión sobre tema de Seguridad con Secretaría de Gobierno, Secretaría de Movilidad, Secretaría de Desarrollo Economico, Procuraduria General de Justicia y Secretaría de Obras Públicas ',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Me reuní con el Procurador <a href="https://twitter.com/arroyo_raul?ref_src=twsrc%5Etfw">@arroyo_raul</a> de la <a href="https://twitter.com/PGJE_Hidalgo?ref_src=twsrc%5Etfw">@PGJE_Hidalgo</a> y los Srios. del <a href="https://twitter.com/gobiernohidalgo?ref_src=twsrc%5Etfw">@gobiernohidalgo</a>, <a href="https://twitter.com/JoseMenesesA?ref_src=twsrc%5Etfw">@JoseMenesesA</a> de <a href="https://twitter.com/HidalgoSOPOT?ref_src=twsrc%5Etfw">@HidalgoSOPOT</a>, <a href="https://twitter.com/joseguevaram?ref_src=twsrc%5Etfw">@joseguevaram</a> de <a href="https://twitter.com/MovilidadHgo?ref_src=twsrc%5Etfw">@MovilidadHgo</a> y <a href="https://twitter.com/SFVargasT?ref_src=twsrc%5Etfw">@SFVargasT</a> de <a href="https://twitter.com/Sedeco_Hgo?ref_src=twsrc%5Etfw">@Sedeco_Hgo</a> para dar seguimiento a una prioridad del Gob. de <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>: seguridad. <a href="https://t.co/Vth8umdvaK">pic.twitter.com/Vth8umdvaK</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1166901007017828352?ref_src=twsrc%5Etfw">29 de agosto de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-08-28'
        },
        {
          title: 'Toma de Compromiso del Consejo Directivo Periodo 2019-2021 y Reelección del Presidente de COPARMEX',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Estuve junto al Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> en la Toma de Compromiso del Consejo Directivo Periodo 2019-2021 y Reelección del Pdte. de <a href="https://twitter.com/CoparmexHgo?ref_src=twsrc%5Etfw">@CoparmexHgo</a>, <a href="https://twitter.com/RicardoRiveraB3?ref_src=twsrc%5Etfw">@RicardoRiveraB3</a>. Evento donde también estuvo presente <a href="https://twitter.com/gdehoyoswalther?ref_src=twsrc%5Etfw">@gdehoyoswalther</a>, Pdte. Nacional de <a href="https://twitter.com/Coparmex?ref_src=twsrc%5Etfw">@Coparmex</a> y Jesús Martinez, Pdte. de <a href="https://twitter.com/hashtag/GrupoPachuca?src=hash&amp;ref_src=twsrc%5Etfw">#GrupoPachuca</a>. <a href="https://t.co/HoOWisDiOJ">pic.twitter.com/HoOWisDiOJ</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1167212639514243073?ref_src=twsrc%5Etfw">29 de agosto de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-08-29'
        },
        {
          title: '1a Sesión Ordinaria 2019 del Consejo de Desarrollo Metropolitano del Valle de México',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Acompañé al Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> a la 1a Sesión Ordinaria 2019 del Consejo de Desarrollo Metropolitano del Valle de México, donde, junto a los Gobernadores de <a href="https://twitter.com/hashtag/Edomex?src=hash&amp;ref_src=twsrc%5Etfw">#Edomex</a> y <a href="https://twitter.com/hashtag/CDMX?src=hash&amp;ref_src=twsrc%5Etfw">#CDMX</a>, firmó la Iniciativa Conjunta de Ley de Desarrollo. <a href="https://t.co/8aWPti19Cc">pic.twitter.com/8aWPti19Cc</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1167484898518720512?ref_src=twsrc%5Etfw">30 de agosto de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-08-30'
        },
        {
          title: 'Reunión con el equipo de trabajo de la SEPPE',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Estoy convencido de que el seguimiento y el trabajo continuo, deja buenos resultados, y eso es lo que quiero para nuestro <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a>. Cerramos este viernes trabajando para acercar las acciones del Gobierno de <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> a ti y a tu familia. <a href="https://t.co/MA6d1ewl5s">pic.twitter.com/MA6d1ewl5s</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1167648942097600512?ref_src=twsrc%5Etfw">31 de agosto de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-08-30'
        },
        {
          title: 'Presentación de la Feria Pachuca 2019',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">¡La <a href="https://twitter.com/FeriaHidalgo?ref_src=twsrc%5Etfw">@FeriaHidalgo</a> 2019 ya fue presentada por el Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>! <br>Un espacio de convivencia familiar, alegría y mucha diversión del cual todos podremos ser parte.<br>Como hidalguense me siento orgulloso de tener una de las mejores ferias de México. <a href="https://t.co/svXu88OH7z">pic.twitter.com/svXu88OH7z</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1168175271519948801?ref_src=twsrc%5Etfw">1 de septiembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-08-31'
        },
        {
          title: 'Inauguración de la Feria de Organizaciones de la Sociedad Civil de Asistencia',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Junto a <a href="https://twitter.com/PatyGonzalez_?ref_src=twsrc%5Etfw">@PatyGonzalez_</a>, Dir. del Sistema <a href="https://twitter.com/difhgo?ref_src=twsrc%5Etfw">@difhgo</a> inauguramos la Feria de Organizaciones de la Soc. Civil de Asistencia. Visítala en el Reloj de Pachuca sólo hoy hasta las 16:00 h. <br>Estamos apoyando la noble labor de las organizaciones que ayudan a quienes más lo necesitan. <a href="https://t.co/mKDMHQeMCl">pic.twitter.com/mKDMHQeMCl</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1168225344622645248?ref_src=twsrc%5Etfw">1 de septiembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-09-01'
        },
        {
          title: 'Informe y Audiencia Pública',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Llevar la <a href="https://twitter.com/hashtag/AudienciaP%C3%BAblica3erInforme?src=hash&amp;ref_src=twsrc%5Etfw">#AudienciaPública3erInforme</a> a diferentes regiones del Estado, permite a miles de hidalguenses ser escuchados y apoyados. El Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> ha pedido ser un gobierno eficiente, para lograrlo, tenemos que estar cerca de la gente y conocer sus necesidades. <a href="https://t.co/eYIRUE3DH8">pic.twitter.com/eYIRUE3DH8</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1168651997530198018?ref_src=twsrc%5Etfw">2 de septiembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-09-02'
        },
        {
          title: 'Entrevista en Hidalgo Noticias',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">“El objetivo del Gobernador <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> es apoyar a los 84 municipios del Estado para atender las necesidades de los hidalguenses y acercarles oportunidades”<a href="https://twitter.com/hashtag/EnVivo?src=hash&amp;ref_src=twsrc%5Etfw">#EnVivo</a> en <a href="https://twitter.com/hashtag/HidalgoNoticias?src=hash&amp;ref_src=twsrc%5Etfw">#HidalgoNoticias</a> por <a href="https://twitter.com/RadioyTVHidalgo?ref_src=twsrc%5Etfw">@RadioyTVHidalgo</a>. <a href="https://t.co/VYQ18oXh2w">pic.twitter.com/VYQ18oXh2w</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1168710254735122443?ref_src=twsrc%5Etfw">3 de septiembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-09-02'
        },
        {
          title: 'Mesa de debate sobre el 3er informe de Gobierno',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">El Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> enfocó la economía en sectores estratégicos donde podamos competir y ganar. Por eso, están llegando nuevas inversiones al Estado generando más y mejores empleos. <a href="https://twitter.com/hashtag/3erInformeOmarFayad?src=hash&amp;ref_src=twsrc%5Etfw">#3erInformeOmarFayad</a><a href="https://twitter.com/hashtag/EnVivo?src=hash&amp;ref_src=twsrc%5Etfw">#EnVivo</a> por canal 12.1 de <a href="https://twitter.com/RadioyTVHidalgo?ref_src=twsrc%5Etfw">@RadioyTVHidalgo</a>. <a href="https://t.co/bMvd2UBfh2">pic.twitter.com/bMvd2UBfh2</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1169775256602599425?ref_src=twsrc%5Etfw">6 de septiembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-09-05'
        },
        {
          title: 'Informe y Audiencia Pública',
          id: 'Tulancingo de Bravo',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Comenzamos la semana en <a href="https://twitter.com/hashtag/AudienciaP%C3%BAblica3erInforme?src=hash&amp;ref_src=twsrc%5Etfw">#AudienciaPública3erInforme</a> y así la terminamos. Ahora desde el municipio de <a href="https://twitter.com/hashtag/Tulancingo?src=hash&amp;ref_src=twsrc%5Etfw">#Tulancingo</a>, el Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> pudo escuchar y atender a los presentes así como darles a conocer los <a href="https://twitter.com/hashtag/ResultadosQueTransforman?src=hash&amp;ref_src=twsrc%5Etfw">#ResultadosQueTransforman</a> de su tercer año de administración. <a href="https://t.co/lvI82CnljA">pic.twitter.com/lvI82CnljA</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1170086504242307074?ref_src=twsrc%5Etfw">6 de septiembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-09-06'
        },
        {
          title: 'Programa especial con motivo del 3er Informe de Gobierno ',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Acompáñanos en esta Segundo programa especial con motivo del <a href="https://twitter.com/hashtag/3erInformeOmarFayad?src=hash&amp;ref_src=twsrc%5Etfw">#3erInformeOmarFayad</a>. <br>Ya estamos <a href="https://twitter.com/hashtag/EnVivo?src=hash&amp;ref_src=twsrc%5Etfw">#EnVivo</a><br>Síguela aquí: <a href="https://t.co/TlAeZom3bF">https://t.co/TlAeZom3bF</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1170138659200389121?ref_src=twsrc%5Etfw">7 de septiembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-09-06'
        },
        {
          title: 'Informe y Audiencia Pública',
          id: 'Tula de Allende',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Iniciamos una vez más la semana en <a href="https://twitter.com/hashtag/AudienciaP%C3%BAblica3erInforme?src=hash&amp;ref_src=twsrc%5Etfw">#AudienciaPública3erInforme</a> junto al Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> ahora desde el Mpio. de Tula de Allende. <br>Entramos a la 2a mitad de la admón. con las mismas ganas e ímpetu, motivados a cumplir un objetivo: mejorar la calidad de vida de los hidalguenses. <a href="https://t.co/D2Ln648yip">pic.twitter.com/D2Ln648yip</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1171168680941621250?ref_src=twsrc%5Etfw">9 de septiembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-09-09'
        },
        {
          title: 'Informe y Audiencia Pública',
          id: 'El Cardonal',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">El Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> visitó <a href="https://twitter.com/hashtag/ElCardonal?src=hash&amp;ref_src=twsrc%5Etfw">#ElCardonal</a> para acercarles a los habitantes de la región, los <a href="https://twitter.com/hashtag/ResultadosQueTransforman?src=hash&amp;ref_src=twsrc%5Etfw">#ResultadosQueTransforman</a> sus vidas. <br>La visión del <a href="https://twitter.com/gobiernohidalgo?ref_src=twsrc%5Etfw">@gobiernohidalgo</a> es ser un gobierno cercano, que escucha y atiende de 1a mano a sus familias, como en esta <a href="https://twitter.com/hashtag/AudienciaPublica3erInforme?src=hash&amp;ref_src=twsrc%5Etfw">#AudienciaPublica3erInforme</a>. <a href="https://t.co/Y90ICUhtj4">pic.twitter.com/Y90ICUhtj4</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1171544645693825027?ref_src=twsrc%5Etfw">10 de septiembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-09-10'
        },
        {
          title: 'Reunión con el Secretario Ejecutivo de CONEVAL ',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Recibimos en <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a> a <a href="https://twitter.com/JoseNabCruz?ref_src=twsrc%5Etfw">@JoseNabCruz</a>, Secretario Ejecutivo del <a href="https://twitter.com/coneval?ref_src=twsrc%5Etfw">@coneval</a>, en reunión coordinada por el Srio. <a href="https://twitter.com/LamanCarranza?ref_src=twsrc%5Etfw">@LamanCarranza</a> de <a href="https://twitter.com/PlaneacionHgo?ref_src=twsrc%5Etfw">@PlaneacionHgo</a>. <br>Hoy somos segundo lugar en el combate a la pobreza a nivel nacional y vamos por más. <a href="https://t.co/9haer1Vrab">pic.twitter.com/9haer1Vrab</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1171879446447611907?ref_src=twsrc%5Etfw">11 de septiembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-09-11'
        },
        {
          title: 'Premio a Mejores Prácticas de Gobiernos Locales en el marco del 10° Aniversario de la Revista Alcaldes de México',
          id: 'CDMX',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Ayer con gusto acompañé al Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> a recibir el Premio a Mejores Prácticas de Gobiernos Locales en el marco del 10° Aniversario de la Revista <a href="https://twitter.com/AlcaldesMexico?ref_src=twsrc%5Etfw">@AlcaldesMexico</a>. <br>En el <a href="https://twitter.com/gobiernohidalgo?ref_src=twsrc%5Etfw">@gobiernohidalgo</a> apostamos por un <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a> donde sin importar la región, todos puedan estar conectados. <a href="https://t.co/p7u8BMgivz">pic.twitter.com/p7u8BMgivz</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1172151112893423618?ref_src=twsrc%5Etfw">12 de septiembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-09-11'
        },
        {
          title: 'Visita del Presidente Andres Manuel Lopez Obrador. Diálogo con la comunidad del hospital rural #30 del IMSS.',
          id: 'Ixmiquilpan',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Es un gusto estar en Ixmiquilpan, junto al equipo del <a href="https://twitter.com/gobiernohidalgo?ref_src=twsrc%5Etfw">@gobiernohidalgo</a> para recibir al Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> y al Pdte. <a href="https://twitter.com/lopezobrador_?ref_src=twsrc%5Etfw">@Lopezobrador_</a> en este diálogo con la comunidad del hospital rural #30 del IMSS. <a href="https://t.co/C8NtO34iUE">pic.twitter.com/C8NtO34iUE</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1172201159853060096?ref_src=twsrc%5Etfw">12 de septiembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-09-12'
        },
        {
          title: 'Ceremonia del Grito de Independencia',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Estuve presente durante el Tradicional Grito de Independencia del Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> ante miles de hidalguenses. Vivimos un ambiente lleno de alegria y diversión con todas las familias presentes. Muchas gracias. <br>¡<a href="https://twitter.com/hashtag/VivaM%C3%A9xicoEnHidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#VivaMéxicoEnHidalgo</a>! <a href="https://t.co/w4SsLxt5Qu">pic.twitter.com/w4SsLxt5Qu</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1173467938218741760?ref_src=twsrc%5Etfw">16 de septiembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-09-15'
        },
        {
          title: 'Desfile Cívico Militar con motivo del 209° Aniversario del Inicio de la Independencia de México',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Hoy las calles de la capital se engalanaron con el Desfile Cívico Militar con motivo del 209° Aniversario del Inicio de la Independencia de México que presidió el Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>. <br>Muy feliz de haber podido estar presente en tan tradicional evento. <a href="https://t.co/vu79vTyHvE">pic.twitter.com/vu79vTyHvE</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1173680211923279876?ref_src=twsrc%5Etfw">16 de septiembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-09-16'
        },
        {
          title: 'Guardia de Honor en el Monumento a Don Miguel Hidalgo y Costilla',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Participé en la Guardia de Honor en el Monumento a Don Miguel Hidalgo y Costilla, acompañando al Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>. <a href="https://t.co/99niCK3STI">pic.twitter.com/99niCK3STI</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1173683857406746631?ref_src=twsrc%5Etfw">16 de septiembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-09-16'
        },
        {
          title: 'Visita del Presidente Andres Manuel Lopez Obrador al Hospital Rural #22 ',
          id: 'Zacualtipan',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Todo listo con el gran equipo del <a href="https://twitter.com/gobiernohidalgo?ref_src=twsrc%5Etfw">@gobiernohidalgo</a>, ya en el Hospital Rural #22 de Zacualtipán en espera del Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> y el Pdte. <a href="https://twitter.com/lopezobrador_?ref_src=twsrc%5Etfw">@lopezobrador_</a>. <br>Este Gobierno es ejemplo de coordinación, en beneficio de la salud de los hidalguenses. <a href="https://t.co/Holbk8rDkd">pic.twitter.com/Holbk8rDkd</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1174017373038415873?ref_src=twsrc%5Etfw">17 de septiembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-09-17'
        },
        {
          title: 'Reunión con el equipo de trabajo de la SEPPE',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Trabajamos con una convicción: mejorar la calidad de vida de los hidalguenses.<br>A través de la coordinación entre las áreas que conforman la <a href="https://twitter.com/SEPPEHidalgo?ref_src=twsrc%5Etfw">@SEPPEHidalgo</a>, podremos hacerle frente a las necesidades de nuestras familias: esa es la visión del Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>. <a href="https://t.co/SnvkyIG2aW">pic.twitter.com/SnvkyIG2aW</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1174452830331133952?ref_src=twsrc%5Etfw">18 de septiembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-09-18'
        },
        {
          title: 'Reunión con el equipo de trabajo de la SEDESO',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Me reuní con <a href="https://twitter.com/DanielRolandoJ?ref_src=twsrc%5Etfw">@DanielRolandoJ</a> de <a href="https://twitter.com/SEDESOHidalgo?ref_src=twsrc%5Etfw">@SEDESOHidalgo</a>. <br>Trabajar juntos, da mayor fuerza e impacto a las estrategias que mejoran la calidad de vida de los hidalguenses. <br>Así lo hemos hecho desde el inicio de la admón. de <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> y así seguirá. <a href="https://t.co/orOCJGw7uD">pic.twitter.com/orOCJGw7uD</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1174784606043803655?ref_src=twsrc%5Etfw">19 de septiembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-09-19'
        },
        {
          title: 'Entrega de Reconocimientos por Años de Servicio al Personal de Apoyo y Asistencia a la Educación.',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Acompañé al Gob <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> en la Entrega de Reconocimientos por Años de Servicio al Personal de Apoyo y Asistencia a la Educación.<br>Felicidades a quienes colaboran en una de las profesiones más importantes: cuidar y educar a nuestros jóvenes, que son el futuro de Hidalgo. <a href="https://t.co/MV47btKao1">pic.twitter.com/MV47btKao1</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1174796746506948608?ref_src=twsrc%5Etfw">19 de septiembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-09-19'
        },
        {
          title: 'Entrega de Basificaciones y regularizaciones',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Fue gusto saludar al personal del sector educativo, que hoy recibió del Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> y de Alfonso Cepeda Salas, Srio. Gral. del <a href="https://twitter.com/SnteNacional?ref_src=twsrc%5Etfw">@SnteNacional</a> basificaciones y regularizaciones.<br>Esta acción dignifica al personal que ha dedicado su vida a la noble labor de enseñar<br>¡Felicidades! <a href="https://t.co/Grttw7Bxip">pic.twitter.com/Grttw7Bxip</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1174824892182728704?ref_src=twsrc%5Etfw">19 de septiembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-09-19'
        },
        {
          title: 'Día del Agricultor Grupo Modelo ',
          id: 'Apan',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Fue un gusto estar junto al Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> en el Día del Agricultor que organizó <a href="https://twitter.com/GrupoModelo_MX?ref_src=twsrc%5Etfw">@GrupoModelo_MX</a>. Merecidamente se reconoció a los agricultores que colaboran con Modelo, y que con su trabajo, día a día ponen las bases para que la cerveza de <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a> sea de la más alta calidad. <a href="https://t.co/Yl20aVNui2">pic.twitter.com/Yl20aVNui2</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1174837366349008896?ref_src=twsrc%5Etfw">20 de septiembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-09-19'
        },
        {
          title: '3er. Informe de actividades del Presidente Municipal de Tizayuca',
          id: 'Tizayuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Acompañé a <a href="https://twitter.com/gab_Tizayuca?ref_src=twsrc%5Etfw">@gab_Tizayuca</a>, Pdte. Municipal de <a href="https://twitter.com/tizayuca2016?ref_src=twsrc%5Etfw">@tizayuca2016</a> al 3er. Informe de actividades de su gobierno. <br>La rendición de cuentas es, sin duda, uno de los ejes principales de cualquier administración. <br>En el <a href="https://twitter.com/gobiernohidalgo?ref_src=twsrc%5Etfw">@gobiernohidalgo</a> cuentan con un aliado para seguir creciendo. <a href="https://t.co/r8RUXqThsQ">pic.twitter.com/r8RUXqThsQ</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1175127430748626944?ref_src=twsrc%5Etfw">20 de septiembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-09-20'
        },
        {
          title: 'Reunión en la Delegación de la SCT Hidalgo ',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Junto a los Srios. <a href="https://twitter.com/JoseMenesesA?ref_src=twsrc%5Etfw">@JoseMenesesA</a> de <a href="https://twitter.com/HidalgoSOPOT?ref_src=twsrc%5Etfw">@HidalgoSOPOT</a> y <a href="https://twitter.com/SFVargasT?ref_src=twsrc%5Etfw">@SFVargasT</a> de <a href="https://twitter.com/Sedeco_Hgo?ref_src=twsrc%5Etfw">@Sedeco_Hgo</a> sostuvimos una reunión en la Delegación de la <a href="https://twitter.com/SCT_mx?ref_src=twsrc%5Etfw">@SCT_mx</a> en Hidalgo para avanzar en proyectos estratégicos que permitan la llegada de nuevas empresas a <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a> como lo indicó el Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>. <a href="https://t.co/CrbbCp54ch">pic.twitter.com/CrbbCp54ch</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1176211582994538496?ref_src=twsrc%5Etfw">23 de septiembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-09-23'
        },
        {
          title: 'Reunión con el Lic. Atilano Rodríguez Pérez, Secretario de Educación Pública ',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Sabemos que el futuro de <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a> está en nuestros jóvenes. Por eso, junto a <a href="https://twitter.com/atilanorp?ref_src=twsrc%5Etfw">@atilanorp</a> de la <a href="https://twitter.com/SEPHidalgo?ref_src=twsrc%5Etfw">@SEPHidalgo</a> trabajamos para cumplir la instrucción del Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>: que todos los hidalguenses tengan acceso a educación de calidad, que les dé herramientas para salir adelante. <a href="https://t.co/jCSfuNQhbd">pic.twitter.com/jCSfuNQhbd</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1176308275534602246?ref_src=twsrc%5Etfw">24 de septiembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-09-23'
        },
        {
          title: '2a. Sesión Ordinaria del SEPINNA',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Asistí a la 2a. Sesión Ordinaria del <a href="https://twitter.com/SE_SEPINNA?ref_src=twsrc%5Etfw">@SE_SEPINNA</a> presidida por el Srio Simón Vargas de <a href="https://twitter.com/SeGobHidalgo?ref_src=twsrc%5Etfw">@SeGobHidalgo</a>; <a href="https://twitter.com/ChristianUNICEF?ref_src=twsrc%5Etfw">@ChristianUNICEF</a>, representante de <a href="https://twitter.com/UNICEFMexico?ref_src=twsrc%5Etfw">@UNICEFMexico</a> y <a href="https://twitter.com/ricardobucio?ref_src=twsrc%5Etfw">@ricardobucio</a>, Srio Ejec. del <a href="https://twitter.com/SIPINNA_MX?ref_src=twsrc%5Etfw">@SIPINNA_MX</a>. Este sistema alinea los esfuerzos para cuidar a nuestros niños, niñas y adolescentes <a href="https://t.co/49uMOOad5J">pic.twitter.com/49uMOOad5J</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1176561419967504385?ref_src=twsrc%5Etfw">24 de septiembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-09-24'
        },
        {
          title: 'Reunión con la Secretaría de Salud ',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Esta tarde me reuní con el Srio. <a href="https://twitter.com/SSH_Escamilla?ref_src=twsrc%5Etfw">@SSH_Escamilla</a> de <a href="https://twitter.com/Salud_Hidalgo?ref_src=twsrc%5Etfw">@Salud_Hidalgo</a>. Platicamos sobre el estado del sector salud y cómo fortalecer las estrategias para que todas las familias de <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a> puedan tener  acceso a atención médica de calidad, como lo ha indicado el Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>. <a href="https://t.co/EJcWvp0Kjh">pic.twitter.com/EJcWvp0Kjh</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1176644781591732224?ref_src=twsrc%5Etfw">24 de septiembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-09-24'
        },
        {
          title: 'Reunión con SEDAGRO, SEDECO, SEDESO y DIFH',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Seguimos trabajando al 💯‼️<br>Ahora con mis compañeros srios. <a href="https://twitter.com/Car_Muniz?ref_src=twsrc%5Etfw">@Car_Muniz</a> de <a href="https://twitter.com/SEDAGRO_HIDALGO?ref_src=twsrc%5Etfw">@SEDAGRO_HIDALGO</a>, <a href="https://twitter.com/SFVargasT?ref_src=twsrc%5Etfw">@SFVargasT</a> de <a href="https://twitter.com/Sedeco_Hgo?ref_src=twsrc%5Etfw">@Sedeco_Hgo</a>, <a href="https://twitter.com/DanielRolandoJ?ref_src=twsrc%5Etfw">@DanielRolandoJ</a> de <a href="https://twitter.com/SEDESOHidalgo?ref_src=twsrc%5Etfw">@SEDESOHidalgo</a> y <a href="https://twitter.com/PatyGonzalez_?ref_src=twsrc%5Etfw">@PatyGonzalez_</a> de <a href="https://twitter.com/difhgo?ref_src=twsrc%5Etfw">@difhgo</a>, atendemos a la indicación del Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>: mejorar la calidad de vida de nuestras familias. <a href="https://t.co/iYVYxHqfUh">pic.twitter.com/iYVYxHqfUh</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1176672953599086592?ref_src=twsrc%5Etfw">25 de septiembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-09-24'
        },
        {
          title: 'Banderazo inaugural del servicio nocturno del Tuzobus, Tuzobuho',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">El Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> tenía retos muy claros desde que comenzó la administración: la movilidad era uno de ellos. 🚌<br>Hoy, me llena de gusto acompañarlo a poner en marcha el Tuzobúho🦉, servicio nocturno del <a href="https://twitter.com/Tuzobus_Oficial?ref_src=twsrc%5Etfw">@Tuzobus_Oficial</a> <br>¡Así es, habrá corridas en la noche! <a href="https://t.co/tNkphazHG8">pic.twitter.com/tNkphazHG8</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1176730506731409408?ref_src=twsrc%5Etfw">25 de septiembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-09-24'
        },
        {
          title: 'Reunión con el equipo de trabajo de la SEPPE',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">La instrucción del Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> ha sido cambiar la forma de hacer las cosas en Hidalgo. <br>Por eso, junto al equipo de trabajo de la <a href="https://twitter.com/SEPPEHidalgo?ref_src=twsrc%5Etfw">@SEPPEHidalgo</a>, evaluamos las estrategias, para así encaminarlas a acelerar el desarrollo en Hidalgo. <a href="https://t.co/v4sQO1H8yj">pic.twitter.com/v4sQO1H8yj</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1176913534162264064?ref_src=twsrc%5Etfw">25 de septiembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-09-25'
        },
        {
          title: '1a Reunión de Trabajo del Comité Nacional de Sincrotrón.',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">El <a href="https://twitter.com/hashtag/Sincrot%C3%B3nEnHidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#SincrotónEnHidalgo</a> es un proyecto sin precedentes en México. Estoy seguro que cambiará la manera de entender lo que nos rodea y consolidará a Hidalgo como polo científico en el país.<br>Asistí con gusto a la 1a Reunión de Trabajo del Comité Nacional de Sincrotrón. <a href="https://t.co/qUfaQBNfFP">pic.twitter.com/qUfaQBNfFP</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1176931116005187588?ref_src=twsrc%5Etfw">25 de septiembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-09-25'
        },
        {
          title: '30 Congreso Nacional de Ingeniería Civil',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Estamos intercambiando ideas sobre las estrategias del Gob. de <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> con jóvenes ingenieros  en el &quot;30 Congreso Nacional de Ingeniería Civil&quot;.<br>El diseño de las políticas públicas se retroalimenta con su punto de vista y sus ideas para apoyar el desarrollo de Hidalgo. <a href="https://t.co/plpsZdnPzT">pic.twitter.com/plpsZdnPzT</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1176971953082703872?ref_src=twsrc%5Etfw">25 de septiembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-09-25'
        },
        {
          title: 'Reunión con SEDECO y Secretaría del Trabajo',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">En 3 años de la admón. de <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>, se han creado más de 18 mil empleos, sin embargo, sabemos que no es suficiente. <br>Me reuní con <a href="https://twitter.com/SFVargasT?ref_src=twsrc%5Etfw">@SFVargasT</a>, Srio. de <a href="https://twitter.com/Sedeco_Hgo?ref_src=twsrc%5Etfw">@Sedeco_Hgo</a> y <a href="https://twitter.com/EguiluzTapia?ref_src=twsrc%5Etfw">@EguiluzTapia</a> de <a href="https://twitter.com/strabajohgo?ref_src=twsrc%5Etfw">@strabajohgo</a> para coordinar y reforzar las estrategias que permitan más y mejores oportunidades <a href="https://t.co/auaWalvFoP">pic.twitter.com/auaWalvFoP</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1177027937234837510?ref_src=twsrc%5Etfw">26 de septiembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-09-25'
        },
        {
          title: 'Inauguración 4ta. Reunión Regional de Ingeniería Civil',
          id: 'Zapotlán',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Hoy, desde el centro de control y supervisión en materia de seguridad más moderno de Latinoamérica:el <a href="https://twitter.com/hashtag/C5iHidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#C5iHidalgo</a>, el Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> inauguró la 4ta. Reunión Regional de Ingeniería Civil. <br>Fue un gusto estar presente y saludar  con mucho gusto a la comunidad de ingenieros. <a href="https://t.co/JlhwGFU1xY">pic.twitter.com/JlhwGFU1xY</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1177288307971108864?ref_src=twsrc%5Etfw">26 de septiembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-09-26'
        },
        {
          title: 'En el marco de la 4ta Reunión Regional de Ingeniería Civil presentó la ponencia "Hidalgo, un proyecto que crece y avanza".',
          id: 'Zapotlán',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Durante el desarrollo de la 4ta Reunión Regional de Ingeniería Civil presenté la ponencia &quot;Hidalgo, un proyecto que crece y avanza&quot;.<br>Transmití la visión del Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> desde el inicio de su administración: dar resultados a los hidalguenses. <a href="https://t.co/aM3QuEmqzU">pic.twitter.com/aM3QuEmqzU</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1177341098768904192?ref_src=twsrc%5Etfw">26 de septiembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-09-26'
        },
        {
          title: 'Visita a Secundaria General Jaime Torres Bodet',
          id: 'Pachuca de Soto (Juan C. Doria)',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Comenzamos el día de visita a centros de salud y escuelas públicas en la Escuela Secundaria General Número 5 en la Colonia Juan C. Doria. <a href="https://t.co/jweDddeZuX">pic.twitter.com/jweDddeZuX</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1177559596237492224?ref_src=twsrc%5Etfw">27 de septiembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-09-27'
        },
        {
          title: 'Visita a la Primaria Jose Vasconcelos ',
          id: 'Mineral de la Reforma (La Providencia)',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Ahora estamos en Mineral de la Reforma, en la Escuela Primaria José Vasconcelos de la Colonia La Providencia.<br>El objetivo de estas visitas es conocer las necesidades educativas, para poder darles respuesta y que nuestros jóvenes hidalguenses aprovechen al máximo su educación. <a href="https://t.co/oxCcZR9PhV">pic.twitter.com/oxCcZR9PhV</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1177603452840677378?ref_src=twsrc%5Etfw">27 de septiembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-09-27'
        },
        {
          title: 'Visita a la Primaria Miguel Hidalgo ',
          id: 'Omitlan de Juarez ',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Para el Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>, todos los hidalguenses son igual de importantes y sabemos que cada región tiene necesidades diferentes. <br>Visitamos la Prim. Miguel Hidalgo en Omitlán que educa a 92 niños con los que pude interactuar y saber sus necesidades de voz de los padres de familia <a href="https://t.co/rqzxCNXbJn">pic.twitter.com/rqzxCNXbJn</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1177658590036783104?ref_src=twsrc%5Etfw">27 de septiembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-09-27'
        },
        {
          title: 'Visita al Centro de Salud de Omitlán',
          id: 'Omitlan de Juarez ',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">La salud es otra de las prioridades del Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>. Los hidalguenses deben tener acceso a servicios de salud de calidad, por eso hoy recorrí las instalaciones del Centro de Salud de Omitlán para constatar su estado e identificar sus necesidades. <a href="https://t.co/uuIZf8FmCD">pic.twitter.com/uuIZf8FmCD</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1177673087271129089?ref_src=twsrc%5Etfw">27 de septiembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-09-27'
        },
        {
          title: 'Visita a la Escuela Secundaria General Jorge Viesca',
          id: 'Atotonilco El Grande',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Seguimos en recorrido de campo, siguiendo la instrucción del Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> de estar cercano a los hidalguenses. <br>No hay mejor forma de conocer los retos a los que nos enfrentamos, que directamente. <br>Visitamos la Esc. Sec. Gral. Jorge Viesca en Atotonilco El Grande. <a href="https://t.co/uojCPqhKpv">pic.twitter.com/uojCPqhKpv</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1177693130117849088?ref_src=twsrc%5Etfw">27 de septiembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-09-27'
        },
        {
          title: 'Visita al Centro de Salud de Atotonilco el Grande ',
          id: 'Atotonilco El Grande',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">La visión del Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> es cuidar la salud de los hidalguenses en todas las regiones del Estado. <br>Visitamos el Centro de Salud del Mpio. de Atotonilco El Grande, para constatar que todos los pacientes, recibieran atención médica de calidad. <a href="https://t.co/5ZeQykQB87">pic.twitter.com/5ZeQykQB87</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1177706427965722624?ref_src=twsrc%5Etfw">27 de septiembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-09-27'
        },
        {
          title: 'Inauguración de la Feria de la Feria Pachuca 2019',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">¡El Gobernador <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> ya inauguró la <a href="https://twitter.com/FeriaHidalgo?ref_src=twsrc%5Etfw">@FeriaHidalgo</a>! <br>Acompaño con gran ánimo al titular del <a href="https://twitter.com/gobiernohidalgo?ref_src=twsrc%5Etfw">@gobiernohidalgo</a> a dar el banderazo inicial y recorrido por la <a href="https://twitter.com/hashtag/FeriaDeTusSue%C3%B1os?src=hash&amp;ref_src=twsrc%5Etfw">#FeriaDeTusSueños</a>. <a href="https://t.co/6ZlKRbAfz7">pic.twitter.com/6ZlKRbAfz7</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1178196822667534338?ref_src=twsrc%5Etfw">29 de septiembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-09-28'
        },
        {
          title: 'Reunión con el equipo de trabajo de la SEPPE',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Último domingo del mes y lo despedimos en reunión de trabajo. <br> La instrucción del Gob.  <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> es: articular las políticas públicas de <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a> para que nuestras familias tengan más oportunidades de salir adelante y mejorar su calidad de vida. <br>Así lo estamos haciendo. <a href="https://t.co/2Y2tMkgC1c">pic.twitter.com/2Y2tMkgC1c</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1178471542008635392?ref_src=twsrc%5Etfw">30 de septiembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-09-29'
        },
        {
          title: 'Reunion con las Secretarías de Desarrollo Economico y de Contraloria',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Me reuní con los Srios. César Mora de <a href="https://twitter.com/Contraloria_Hgo?ref_src=twsrc%5Etfw">@Contraloria_Hgo</a> y <a href="https://twitter.com/SFVargasT?ref_src=twsrc%5Etfw">@SFVargasT</a> de <a href="https://twitter.com/Sedeco_Hgo?ref_src=twsrc%5Etfw">@Sedeco_Hgo</a> para avanzar en un tema importante en la admón. del Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>:  la mejora regulatoria, que permitirá a nuestras familias ahorrar tiempo y dinero al momento de hacer trámites. <a href="https://t.co/PWDk1bQ2iM">pic.twitter.com/PWDk1bQ2iM</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1179130547651645440?ref_src=twsrc%5Etfw">1 de octubre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-09-30'
        },
        {
          title: 'Representé al Gob. Omar Fayad , en su carácter de Coordinador de la Comisión de Desarrollo Económico de la CONAGO en la reunión de trabajo con el Gobierno del Estado de California',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Representé al Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> , en su carácter de Coordinador de la Comisión de Desarrollo Económico de la <a href="https://twitter.com/CONAGO_oficial?ref_src=twsrc%5Etfw">@CONAGO_oficial</a> en la reunión de trabajo con el Gobierno del Estado de California. Un gusto recibir a la Vicegobernadora <a href="https://twitter.com/EleniForCA?ref_src=twsrc%5Etfw">@EleniForCA</a> y todo su equipo de trabajo. <a href="https://t.co/j2jnIdmE1m">pic.twitter.com/j2jnIdmE1m</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1179822385517809666?ref_src=twsrc%5Etfw">3 de octubre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-10-03'
        },
        {
          title: 'Acompañamiento al Gobernador a la 2a Sesión Ordinaria del Secretaría Ejecutiva del Sistema Nacional de Protección Integral de Niñas, Niños y Adolescentes',
          id: 'Pachuca de Soto',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Acompañé al Gobernador a esta Segunda Sesión Ordinaria del <a href="https://twitter.com/SIPINNA_MX?ref_src=twsrc%5Etfw">@SIPINNA_MX</a>. <br>El <a href="https://twitter.com/gobiernohidalgo?ref_src=twsrc%5Etfw">@gobiernohidalgo</a> junto al <a href="https://twitter.com/GobiernoMX?ref_src=twsrc%5Etfw">@GobiernoMX</a> busca garantizar la protección de los derechos de nuestras niñas, niños y adolescentes: son ellos quienes tienen el futuro de nuestro país en sus manos. <a href="https://t.co/vfuIZxotJ0">https://t.co/vfuIZxotJ0</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1179878463299149824?ref_src=twsrc%5Etfw">3 de octubre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-10-03'
        },
        {
          title: 'Entrega de computadoras para la Escuela Primaria Juan Rulfo ',
          id: 'Mineral de la Reforma.',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">¡Buenos días y <a href="https://twitter.com/hashtag/FelizLunes?src=hash&amp;ref_src=twsrc%5Etfw">#FelizLunes</a> para todos! <br>Comenzamos la semana cumpliendo: haremos entrega de computadoras para la Escuela Primaria Juan Rulfo en el Mpio. de Mineral de la Reforma.<br>Solicitud hecha al Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> en audiencia pública a la cual hoy le da respuesta. <a href="https://t.co/gZPd5vhrXD">pic.twitter.com/gZPd5vhrXD</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1181213601740144640?ref_src=twsrc%5Etfw">7 de octubre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-10-07'
        },
        {
          title: 'Reunión de trabajo con el Secretario de Desarrollo Economico Federal y el Gobernador Omar Fayad Meneses ',
          id: 'CDMX',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Acompañé al Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> a una reunión de trabajo con <a href="https://twitter.com/ArturoHerrera_G?ref_src=twsrc%5Etfw">@ArturoHerrera_G</a>, Srio. de <a href="https://twitter.com/Hacienda_Mexico?ref_src=twsrc%5Etfw">@Hacienda_Mexico</a>. En el <a href="https://twitter.com/gobiernohidalgo?ref_src=twsrc%5Etfw">@gobiernohidalgo</a> sabemos que la cooperación con el <a href="https://twitter.com/GobiernoMX?ref_src=twsrc%5Etfw">@GobiernoMX</a> es fundamental para que <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a> crezca; por eso analizamos el presupuesto y las obras para <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a> en 2020. <a href="https://t.co/cGA5o7OZsJ">pic.twitter.com/cGA5o7OZsJ</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1181376469718753280?ref_src=twsrc%5Etfw">8 de octubre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-10-07'
        },
        {
          title: 'Reunión de Gabinete',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">¡Que día y noche de trabajo tan productivo! <br>Es un gusto formar parte de este gran equipo del Gobernador <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>, que trabaja comprometido con las familias hidalguenses. <a href="https://twitter.com/hashtag/HidalgoCreceContigo?src=hash&amp;ref_src=twsrc%5Etfw">#HidalgoCreceContigo</a> <a href="https://t.co/jd95eicr4p">https://t.co/jd95eicr4p</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1181571339418775552?ref_src=twsrc%5Etfw">8 de octubre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-10-08'
        },
        {
          title: 'Presentación de dos importantes obras sobre la historia de Hidalgo',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Esta tarde realicé la entrega de dos importantes obras sobre la historia de Hidalgo, y en las que el <a href="https://twitter.com/gobiernohidalgo?ref_src=twsrc%5Etfw">@gobiernohidalgo</a> participó en su edición. Estos proyectos fueron posibles gracias a las <a href="https://twitter.com/hashtag/AudienciasP%C3%BAblicas?src=hash&amp;ref_src=twsrc%5Etfw">#AudienciasPúblicas</a> que llevamos a cabo en todas las regiones del estado. <a href="https://t.co/sZz1moo76L">pic.twitter.com/sZz1moo76L</a></p>&mdash; Omar Fayad (@omarfayad) <a href="https://twitter.com/omarfayad/status/1181721350450360320?ref_src=twsrc%5Etfw">9 de octubre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-10-08'
        },
        {
          title: '8va. Sesión Ordinaria para la Elaboración conjunta del Programa Territorial Oper. de la Zona Norte del Valle de México.',
          id: 'Villa de Tezontepec',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">En el Gobierno de <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> nos sumamos a los grandes proyectos del <a href="https://twitter.com/GobiernoMX?ref_src=twsrc%5Etfw">@GobiernoMX</a> para que nuestras familias se beneficien y mejoren su calidad de vida. <br>Asistí a la 8va. Sesión Ord. para la Elaboración conjunta del Programa Territorial Oper. de la Zona Norte del Valle de México. <a href="https://t.co/qOO4oPP4Oj">pic.twitter.com/qOO4oPP4Oj</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1181997893122699265?ref_src=twsrc%5Etfw">9 de octubre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-10-09'
        },
        {
          title: 'Reunión con Javier Jimenez Espriu Secretario de Comunicaciones y Transportes Federal ',
          id: 'CDMX',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">En rep. del Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> y acompañado de los Srios <a href="https://twitter.com/joseguevaram?ref_src=twsrc%5Etfw">@joseguevaram</a> de <a href="https://twitter.com/MovilidadHgo?ref_src=twsrc%5Etfw">@MovilidadHgo</a> y <a href="https://twitter.com/LamanCarranza?ref_src=twsrc%5Etfw">@LamanCarranza</a> de <a href="https://twitter.com/PlaneacionHgo?ref_src=twsrc%5Etfw">@PlaneacionHgo</a>, me reuní con <a href="https://twitter.com/JimenezEspriu?ref_src=twsrc%5Etfw">@JimenezEspriu</a>, Srio de <a href="https://twitter.com/SCT_mx?ref_src=twsrc%5Etfw">@SCT_mx</a> e integrantes de su equipo. <br>La colaboración con los diferentes órdenes de gobierno, es fundamental en esta admón. <a href="https://t.co/yoKg8xRhWl">pic.twitter.com/yoKg8xRhWl</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1182370770032484359?ref_src=twsrc%5Etfw">10 de octubre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-10-10'
        },
        {
          title: 'Reunión con el equipo de trabajo de la SEPPE con el tema: Comparecencia ',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">El Gobernador <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> ha sido muy claro: su gobierno es transparente y cercano a los hidalguenses; estamos trabajando para rendir cuentas ante el Congreso y ante los ciudadanos. <br>En 3 años de esta administración, <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a> crece pero crece contigo. <a href="https://t.co/eaA2PmS3mu">pic.twitter.com/eaA2PmS3mu</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1182488563465805824?ref_src=twsrc%5Etfw">11 de octubre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-10-10'
        },
        {
          title: 'Inauguración Site Argento Teleperformance ',
          id: 'Mineral de la Reforma ',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Ahora como Srio. de la <a href="https://twitter.com/SEPPEHidalgo?ref_src=twsrc%5Etfw">@SEPPEHidalgo</a>, es un gusto acompañar al Gobernador <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> a su inauguración y ver que los proyectos que se han anunciado durante estos 3 años del <a href="https://twitter.com/gobiernohidalgo?ref_src=twsrc%5Etfw">@gobiernohidalgo</a> se están consolidando y beneficiando a los hidalguenses con más y mejores oportunidades. <a href="https://t.co/4XsWbgnzRA">pic.twitter.com/4XsWbgnzRA</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1182776908943151104?ref_src=twsrc%5Etfw">11 de octubre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-10-11'
        },
        {
          title: 'Reunión con el equipo de trabajo de la SEPPE con el tema: Comparecencia ',
          id: 'Pachuca ',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Cerramos este viernes en reunión con el equipo de la <a href="https://twitter.com/SEPPEHidalgo?ref_src=twsrc%5Etfw">@SEPPEHidalgo</a>. <br>Trabajamos para rendir cuentas ante el Congreso y ante los hidalguenses de las acciones del Gobierno de <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> que están transformando y mejorando la vida de nuestras familias. <a href="https://t.co/KwQeRSw24B">pic.twitter.com/KwQeRSw24B</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1182880348310560768?ref_src=twsrc%5Etfw">12 de octubre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-10-11'
        },
        {
          title: 'Reunión con el equipo de trabajo de la SEPPE con el tema: Comparecencia ',
          id: 'Pachuca ',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">El equipo de la <a href="https://twitter.com/hashtag/SEPPEHidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#SEPPEHidalgo</a> trabaja comprometido con la visión del Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>: Que <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a> crezca y que nuestras familias tengan las herramientas para salir adelante. Presentaremos los resultados del <a href="https://twitter.com/gobiernohidalgo?ref_src=twsrc%5Etfw">@gobiernohidalgo</a> ante el Congreso. <a href="https://t.co/pXlj9uSJ0d">pic.twitter.com/pXlj9uSJ0d</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1183090578428514309?ref_src=twsrc%5Etfw">12 de octubre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-10-12'
        },
        {
          title: 'Reunión con el Oficial Mayor, Martiniano Vega, Secretaria de Finanzas Públicas, Jessica Blancas y Titular de la Unidad de Planeación, Lamán Carranza. ',
          id: 'Pachuca ',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">También en domingo trabajamos 👌🏼<a href="https://twitter.com/hashtag/omarfayad?src=hash&amp;ref_src=twsrc%5Etfw">#omarfayad</a> <a href="https://twitter.com/hashtag/LamanCarranza?src=hash&amp;ref_src=twsrc%5Etfw">#LamanCarranza</a> <a href="https://twitter.com/hashtag/JessicaBlancas?src=hash&amp;ref_src=twsrc%5Etfw">#JessicaBlancas</a> <a href="https://twitter.com/hashtag/MartinianoVega?src=hash&amp;ref_src=twsrc%5Etfw">#MartinianoVega</a>  <a href="https://twitter.com/hashtag/Gobiernohidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Gobiernohidalgo</a> <a href="https://twitter.com/hashtag/HidalgoCreceContigo?src=hash&amp;ref_src=twsrc%5Etfw">#HidalgoCreceContigo</a> <a href="https://t.co/UvH2BT5PUM">pic.twitter.com/UvH2BT5PUM</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1183428805903429632?ref_src=twsrc%5Etfw">13 de octubre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-10-13'
        },
        {
          title: 'Comparecencia ante de el Congreso del Estado',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Me da gusto regresar al <a href="https://twitter.com/CongresoHidalgo?ref_src=twsrc%5Etfw">@congresohidalgo</a>, ahora como titular de la <a href="https://twitter.com/SEPPEHidalgo?ref_src=twsrc%5Etfw">@seppehidalgo</a> con una consigna diferente; estar al frente de la Sría. encargada de articular las estrategias del <a href="https://twitter.com/gobiernohidalgo?ref_src=twsrc%5Etfw">@gobiernohidalgo</a> para mejorar la vida de los hidalguenses.<a href="https://twitter.com/hashtag/HidalgoConResultados?src=hash&amp;ref_src=twsrc%5Etfw">#HidalgoConResultados</a> <a href="https://t.co/HhZ4WPWdIK">pic.twitter.com/HhZ4WPWdIK</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1183761637179719680?ref_src=twsrc%5Etfw">14 de octubre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-10-14'
        },
        {
          title: 'Entrevista con Manolo Larrieta ',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Estamos <a href="https://twitter.com/hashtag/EnVivo?src=hash&amp;ref_src=twsrc%5Etfw">#EnVivo</a> con <a href="https://twitter.com/ManoloLarrieta?ref_src=twsrc%5Etfw">@ManoloLarrieta</a> por <a href="https://twitter.com/grupoacir?ref_src=twsrc%5Etfw">@grupoacir</a> 92.5 FM. <br>¡Sintonízanos!</p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1184119231131947008?ref_src=twsrc%5Etfw">15 de octubre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-10-15'
        },
        {
          title: '24 Aniversario del CCEH ',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">En el Gobierno de <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>, estamos comprometidos con que todos salgan adelante, por eso, uno de los ejes de la admón. es apoyar a nuestras empresas en <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a> y que alcancen el éxito. <br>Acompañé a <a href="https://twitter.com/EspinolaLicona?ref_src=twsrc%5Etfw">@EspinolaLicona</a> durante el 24 aniversario del <a href="https://twitter.com/CCEHidalgo?ref_src=twsrc%5Etfw">@CCEHidalgo</a>. <a href="https://t.co/WQaLmrq09L">pic.twitter.com/WQaLmrq09L</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1184578173817753600?ref_src=twsrc%5Etfw">16 de octubre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-10-16'
        },
        {
          title: 'Entrevista en Jaque Mate',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Sigue la entrevista por Canal 12.1 de <a href="https://twitter.com/RadioyTVHidalgo?ref_src=twsrc%5Etfw">@RadioyTVHidalgo</a>. <br>¡No te la puedes perder! 📺 <a href="https://t.co/34hglOrYK0">https://t.co/34hglOrYK0</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1184622369656266752?ref_src=twsrc%5Etfw">17 de octubre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-10-16'
        },
        {
          title: 'Congreso Nacional DIRIGE Hidalgo 2019',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Tenemos un enorme potencial para crecer como estado y como país. Contamos con lo más importante que son nuestros jóvenes, sus ganas de triunfar y nuestra capacidad de salir adelante. <br>En <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a> con el Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> estamos demostrando que sí se pueden cambiar las cosas. <a href="https://t.co/yZhlEWQJkl">pic.twitter.com/yZhlEWQJkl</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1184638373132230656?ref_src=twsrc%5Etfw">17 de octubre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-10-16'
        },
        {
          title: 'Audiencia Pública en San Agustín Metzquititlán ',
          id: 'San Agustín Metzquititlán',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">La administración de <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> se ha caracterizado por ser un gobierno cercano a la gente, que escucha y hace frente a los problemas de los hidalguenses. <br>Llevamos la <a href="https://twitter.com/hashtag/AudienciaP%C3%BAblica?src=hash&amp;ref_src=twsrc%5Etfw">#AudienciaPública</a> al Mpio. de <a href="https://twitter.com/hashtag/SanAgust%C3%ADnMetzquititl%C3%A1n?src=hash&amp;ref_src=twsrc%5Etfw">#SanAgustínMetzquititlán</a> para beneficio de los habitantes de la región. <a href="https://t.co/VEJPAFUe7g">pic.twitter.com/VEJPAFUe7g</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1184975980621946888?ref_src=twsrc%5Etfw">17 de octubre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-10-17'
        },
        {
          title: 'Entrevista en Criterio Hidalgo ',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Ya estamos <a href="https://twitter.com/hashtag/EnVivo?src=hash&amp;ref_src=twsrc%5Etfw">#EnVivo</a> en <a href="https://twitter.com/hashtag/ACriterioDe?src=hash&amp;ref_src=twsrc%5Etfw">#ACriterioDe</a> por <a href="https://twitter.com/CriterioHidalgo?ref_src=twsrc%5Etfw">@CriterioHidalgo</a>.<br>Estamos platicando sobre las acciones del <a href="https://twitter.com/gobiernohidalgo?ref_src=twsrc%5Etfw">@gobiernohidalgo</a> para que <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a> crezca contigo. <br><br>Síguela aquí: <a href="https://t.co/1dEwPFvCox">https://t.co/1dEwPFvCox</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1185281010604265472?ref_src=twsrc%5Etfw">18 de octubre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-10-18'
        },
        {
          title: 'Entrega de apoyos Estatales al Campo',
          id: 'Atotonilco El Grande',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">El equipo del <a href="https://twitter.com/gobiernohidalgo?ref_src=twsrc%5Etfw">@gobiernohidalgo</a>, ya estamos listos para recibir al Gobernador <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> en esta entrega de apoyos Estatales al Campo en el Municipio de <a href="https://twitter.com/hashtag/AtotonilcoElGrande?src=hash&amp;ref_src=twsrc%5Etfw">#AtotonilcoElGrande</a>. <a href="https://t.co/08qU0wb8ye">https://t.co/08qU0wb8ye</a> <a href="https://t.co/MYPNY2wLV3">pic.twitter.com/MYPNY2wLV3</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1186357854837575680?ref_src=twsrc%5Etfw">21 de octubre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-10-21'
        },
        {
          title: 'Reunión con la Secretaría de Educación Pública y Secretaría de Desarrollo Social',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">En <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a> estamos pasando de ser el Estado del <a href="https://twitter.com/hashtag/Yam%C3%A9rito?src=hash&amp;ref_src=twsrc%5Etfw">#Yamérito</a> a ser el Estado del <a href="https://twitter.com/hashtag/S%C3%ADsepuede?src=hash&amp;ref_src=twsrc%5Etfw">#Sísepuede</a>. <br>¿De qué manera? <br>A través del trabajo en equipo y la coordinación entre las Srías. del Gob. de <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>, para que las acciones del <a href="https://twitter.com/gobiernohidalgo?ref_src=twsrc%5Etfw">@gobiernohidalgo</a> mejoren la vida de nuestras familias. <a href="https://t.co/Z75QMcL6uQ">pic.twitter.com/Z75QMcL6uQ</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1186467322799808512?ref_src=twsrc%5Etfw">22 de octubre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-10-21'
        },
        {
          title: 'Reunión con el equipo de trabajo de la SEPPE',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">El trabajo en equipo nos da una visión más amplia de las estrategias del Gobierno de <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>.<br>Junto al equipo de la <a href="https://twitter.com/SEPPEHidalgo?ref_src=twsrc%5Etfw">@SEPPEHidalgo</a> fortalecemos las acciones para poder acelerar el desarrollo en <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a> y que los hidalguenses mejoren su calidad de vida. <a href="https://twitter.com/hashtag/HidalgoCreceContigo?src=hash&amp;ref_src=twsrc%5Etfw">#HidalgoCreceContigo</a> <a href="https://t.co/MtprPiIl8W">pic.twitter.com/MtprPiIl8W</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1186747027247521795?ref_src=twsrc%5Etfw">22 de octubre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-10-22'
        },
        {
          title: 'Reunión con equipos de trabajo de la Secretaría de Desarrollo Social y el Sistema DIFH',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Me reuní con el Srio. <a href="https://twitter.com/DanielRolandoJ?ref_src=twsrc%5Etfw">@DanielRolandoJ</a> de <a href="https://twitter.com/SEDESOHidalgo?ref_src=twsrc%5Etfw">@SEDESOHidalgo</a>, <a href="https://twitter.com/PatyGonzalez_?ref_src=twsrc%5Etfw">@PatyGonzalez_</a> del Sistema <a href="https://twitter.com/difhgo?ref_src=twsrc%5Etfw">@difhgo</a> y equipos de trabajo del Gobierno de <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>, para hacer un frente común que refuerce las acciones en el combate a la pobreza y que nuestras familias tengan todo para salir adelante. <a href="https://t.co/CnyujsINWV">pic.twitter.com/CnyujsINWV</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1186781277778829312?ref_src=twsrc%5Etfw">22 de octubre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-10-22'
        },
        {
          title: 'Recorrido por las instalaciones de Explanada Pachuca ',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Recorrí las instalaciones de <a href="https://twitter.com/hashtag/ExplanadaPachuca?src=hash&amp;ref_src=twsrc%5Etfw">#ExplanadaPachuca</a> previo a la gran inauguración para asegurarme que todo esté listo para que tú y tu familia disfruten de esta experiencia, que sabemos: les va a encantar. <a href="https://t.co/258DVD7wDS">pic.twitter.com/258DVD7wDS</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1187063098294833155?ref_src=twsrc%5Etfw">23 de octubre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-10-23'
        },
        {
          title: 'Inauguración de Explanada Pachuca ',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Hoy es un gusto poder inaugurar junto al Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>: <a href="https://twitter.com/hashtag/ExplanadaPachuca?src=hash&amp;ref_src=twsrc%5Etfw">#ExplanadaPachuca</a>. <br>Proyectos como este, confirman que <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a> es el mejor lugar para invertir. <br>¡Gracias a <a href="https://twitter.com/GicsaOficial?ref_src=twsrc%5Etfw">@GicsaOficial</a> por su confianza en <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a> y bienvenidos! <a href="https://t.co/46xcD519fV">pic.twitter.com/46xcD519fV</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1187489572801957889?ref_src=twsrc%5Etfw">24 de octubre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-10-24'
        },
        {
          title: 'Inauguración de 1er Tianguis de Pueblos Mágicos ',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Fue un gusto acompañar al Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>, a <a href="https://twitter.com/TorrucoTurismo?ref_src=twsrc%5Etfw">@TorrucoTurismo</a>, Srio. de <a href="https://twitter.com/SECTUR_mx?ref_src=twsrc%5Etfw">@SECTUR_mx</a> y <a href="https://twitter.com/CorinRobertson?ref_src=twsrc%5Etfw">@CorinRobertson</a>, embajadora de la <a href="https://twitter.com/UKinMexico?ref_src=twsrc%5Etfw">@UKinMexico</a>; en la inauguración del 1er <a href="https://twitter.com/hashtag/TianguisPueblosM%C3%A1gicos?src=hash&amp;ref_src=twsrc%5Etfw">#TianguisPueblosMágicos</a> de México, que se realizará en la capital de nuestro bello <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a> del 24 al 27 de octubre. <a href="https://t.co/pv7gybk0Vi">pic.twitter.com/pv7gybk0Vi</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1187595582816210946?ref_src=twsrc%5Etfw">25 de octubre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-10-24'
        },
        {
          title: 'Corte de liston 1er Tianguis de Pueblos Mágicos ',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Fue un gusto estar junto al Gobernador <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>, el Srio. <a href="https://twitter.com/TorrucoTurismo?ref_src=twsrc%5Etfw">@TorrucoTurismo</a> de <a href="https://twitter.com/SECTUR_mx?ref_src=twsrc%5Etfw">@SECTUR_mx</a>, la Embajadora <a href="https://twitter.com/CorinRobertson?ref_src=twsrc%5Etfw">@CorinRobertson</a> de <a href="https://twitter.com/UKinMexico?ref_src=twsrc%5Etfw">@UKinMexico</a>, el Srio. <a href="https://twitter.com/EduardoJavierBG?ref_src=twsrc%5Etfw">@EduardoJavierBG</a> de <a href="https://twitter.com/SECTURHidalgo?ref_src=twsrc%5Etfw">@SECTURHidalgo</a> para hacer el corte del listón del 1er. <a href="https://twitter.com/hashtag/TianguisPueblosM%C3%A1gicos?src=hash&amp;ref_src=twsrc%5Etfw">#TianguisPueblosMágicos</a>. <a href="https://t.co/eIbNOb68EI">pic.twitter.com/eIbNOb68EI</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1187823133597851648?ref_src=twsrc%5Etfw">25 de octubre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-10-25'
        },
        {
          title: 'Reunión con la Secretaría de Desarrollo Economico e integrantes del Gobierno de Hidalgo ',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Pero que sabemos que no es suficiente, por eso, me reuní con el Srio. <a href="https://twitter.com/SFVargasT?ref_src=twsrc%5Etfw">@SFVargasT</a> de <a href="https://twitter.com/Sedeco_Hgo?ref_src=twsrc%5Etfw">@Sedeco_Hgo</a> y equipos del <a href="https://twitter.com/gobiernohidalgo?ref_src=twsrc%5Etfw">@gobiernohidalgo</a> para hacer un frente común y reforzar la estrategia en materia de empleo que permita seguir creando más oportunidades laborales para los hidalguenses. <a href="https://t.co/YZNAGsPIZO">pic.twitter.com/YZNAGsPIZO</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1187887468244279297?ref_src=twsrc%5Etfw">26 de octubre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-10-25'
        },
        {
          title: 'Entrega del Premio Internacional Turístico Pasaporte Abierto 2019',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Ayer acompañé al Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> a la entrega del Premio Intern. Turístico <a href="https://twitter.com/hashtag/PasaporteAbierto2019?src=hash&amp;ref_src=twsrc%5Etfw">#PasaporteAbierto2019</a> donde nuestro Estado además de ser anfitrión, recibió un premio 🥇en la categoría: “Trabajo en equipo” por el libro “Balnearios y Parques Acuáticos de Hidalgo”.<br>¡Muchas felicidades!🎊 <a href="https://t.co/OWMPZRrC8E">pic.twitter.com/OWMPZRrC8E</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1188102483186475008?ref_src=twsrc%5Etfw">26 de octubre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-10-25'
        },
        {
          title: 'Reunión con la Secretaría de Educación Pública y Secretaría de Desarrollo Social',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Las necesidades de los hidalguenses no pueden esperar. Por eso, me reuní este sábado con el Srio. <a href="https://twitter.com/atilanorp?ref_src=twsrc%5Etfw">@atilanorp</a> para continuar avanzando hacia la visión del Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>: más y mejor educación para que <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a> crezca pero crezca con todos. <a href="https://t.co/56dN2gOEQm">pic.twitter.com/56dN2gOEQm</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1188166256219828225?ref_src=twsrc%5Etfw">26 de octubre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-10-26'
        },
        {
          title: 'Reunión con el Sistema DIFH',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">En el Gob de <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> queremos que todos los hidalguenses salgan adelante. <br>Me reuní con <a href="https://twitter.com/PatyGonzalez_?ref_src=twsrc%5Etfw">@PatyGonzalez_</a>, Dir del <a href="https://twitter.com/difhgo?ref_src=twsrc%5Etfw">@difhgo</a> y <a href="https://twitter.com/tatdeschamps?ref_src=twsrc%5Etfw">@tatdeschamps</a>, Dir de Prot. a la Niñez y Adolescencia; para coordinar las acciones del <a href="https://twitter.com/gobiernohidalgo?ref_src=twsrc%5Etfw">@gobiernohidalgo</a> para beneficiar a la población que más lo necesita. <a href="https://t.co/WmwM4minFH">pic.twitter.com/WmwM4minFH</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1188917264894091264?ref_src=twsrc%5Etfw">28 de octubre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-10-28'
        },
        {
          title: 'Fiirma del Convenio de Colaboración para Legitimación de Contratos Colectivos y para la Implementación de la Reforma Laboral',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Fue un gusto acompañar al Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>, a la Sria <a href="https://twitter.com/LuisaAlcalde?ref_src=twsrc%5Etfw">@LuisaAlcalde</a> de <a href="https://twitter.com/STPS_mx?ref_src=twsrc%5Etfw">@STPS_mx</a>, a la Sria <a href="https://twitter.com/EguiluzTapia?ref_src=twsrc%5Etfw">@EguiluzTapia</a> de <a href="https://twitter.com/strabajohgo?ref_src=twsrc%5Etfw">@strabajohgo</a> y demás autoridades del Estado a la firma del Convenio de Colaboración para Legitimación de Contratos Colectivos y para la Implementación de la Reforma Laboral. <a href="https://t.co/vg6eA7QSeR">pic.twitter.com/vg6eA7QSeR</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1188953355168694274?ref_src=twsrc%5Etfw">28 de octubre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-10-28'
        },
        {
          title: 'Reunión con la Secretaria de Contraloria',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Ser un gobierno transparente y cercano con su gente, es prioridad para el Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>. Por eso, me reuní con el Srio. César Mora de <a href="https://twitter.com/Contraloria_Hgo?ref_src=twsrc%5Etfw">@Contraloria_Hgo</a> para avanzar hacia este objetivo. Reforzamos las acciones que funcionan y diseñamos nuevas para ser ejemplo en esta materia. <a href="https://t.co/5iynYp3TWO">pic.twitter.com/5iynYp3TWO</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1188995052619681793?ref_src=twsrc%5Etfw">29 de octubre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-10-28'
        },
        {
          title: 'Inauguración de la Semana Académica y Cultural de Ingeniería Financiera',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Con gusto acompañé a Rubén Montiel y a sus compañeros de la <a href="https://twitter.com/UPPachuca?ref_src=twsrc%5Etfw">@UPPachuca</a> junto a su rector; a inaugurar la Semana Académica y Cultural de Ingeniería Financiera. <br>Un evento para que los alumnos se unan y fortalezcan su desarrollo, eso es lo que el Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> quiere para ellos. <a href="https://t.co/l2l3g3GtCg">pic.twitter.com/l2l3g3GtCg</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1189259913744306176?ref_src=twsrc%5Etfw">29 de octubre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-10-29'
        },
        {
          title: 'Recepción de reconocimientos por el diagnóstico de implementación de presupuesto basado en resultados y por la generación de elementos de monitoreo y evaluación',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Hace unos días y en representación del Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>, recibí un par de reconocimientos para <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a> por parte del <a href="https://twitter.com/coneval?ref_src=twsrc%5Etfw">@coneval</a>: <br>Por el diagnóstico de implementación de presupuesto basado en resultados y por la generación de elementos de monitoreo y evaluación. <a href="https://t.co/KMovWU8wwg">pic.twitter.com/KMovWU8wwg</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1189322995149529090?ref_src=twsrc%5Etfw">29 de octubre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-10-29'
        },
        {
          title: 'Reunión con el General Gustavo Ricardo Vallejo Suárez',
          id: 'Zapotlán (C5i)',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Acompañé al Gob <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> a una reunión con el General Gustavo Ricardo Vallejo Suárez. <br>En el <a href="https://twitter.com/gobiernohidalgo?ref_src=twsrc%5Etfw">@GobiernoHidalgo</a> apoyamos al <a href="https://twitter.com/GobiernoMX?ref_src=twsrc%5Etfw">@GobiernoMx</a> en los grandes proyectos que mejoren la calidad de vida de nuestras familias para que tengan más y mejores oportunidades. <a href="https://t.co/Q2lT7bq21c">pic.twitter.com/Q2lT7bq21c</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1189340229741826048?ref_src=twsrc%5Etfw">30 de octubre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-10-29'
        },
        {
          title: 'Entrevista con Manolo Larrieta',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Hoy <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a> es reconocido por sus acciones en materia de combate a la pobreza. <br>¿Quieres saber cuáles son esas acciones? <br>Entonces sintoniza 92.5 FM de <a href="https://twitter.com/grupoacir?ref_src=twsrc%5Etfw">@Grupoacir</a>; estamos <a href="https://twitter.com/hashtag/EnVivo?src=hash&amp;ref_src=twsrc%5Etfw">#EnVivo</a> con <a href="https://twitter.com/ManoloLarrieta?ref_src=twsrc%5Etfw">@ManoloLarrieta</a> hablando de esto y más. <a href="https://t.co/0QvaFSFr9z">pic.twitter.com/0QvaFSFr9z</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1189563680188289034?ref_src=twsrc%5Etfw">30 de octubre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-10-30'
        },
        {
          title: 'Reunión con el equipo de trabajo de la SEPPE',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">En el Gobierno de <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> estamos transformando la realidad de nuestras familias con más y mejores oportunidades. <br>Sabemos que aún queda mucho por hacer, por eso, estamos reforzando las estrategias del <a href="https://twitter.com/gobiernohidalgo?ref_src=twsrc%5Etfw">@gobiernohidalgo</a> para que <a href="https://twitter.com/hashtag/HidalgoCrezcaContigo?src=hash&amp;ref_src=twsrc%5Etfw">#HidalgoCrezcaContigo</a>. <a href="https://t.co/D4TlAsuUM8">pic.twitter.com/D4TlAsuUM8</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1189641919829135361?ref_src=twsrc%5Etfw">30 de octubre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-10-30'
        },
        {
          title: 'Reinión de trabajo con la SEDECO, SEDESO y SEPH',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Estuve en reunión con los Srios. <a href="https://twitter.com/DanielRolandoJ?ref_src=twsrc%5Etfw">@DanielRolandoJ</a> de <a href="https://twitter.com/SEDESOHidalgo?ref_src=twsrc%5Etfw">@SEDESOHidalgo</a>, <a href="https://twitter.com/SFVargasT?ref_src=twsrc%5Etfw">@SFVargasT</a> de <a href="https://twitter.com/Sedeco_Hgo?ref_src=twsrc%5Etfw">@Sedeco_Hgo</a>, <a href="https://twitter.com/atilanorp?ref_src=twsrc%5Etfw">@atilanorp</a> de <a href="https://twitter.com/SEPHidalgo?ref_src=twsrc%5Etfw">@SEPHidalgo</a> y equipos de trabajo del <a href="https://twitter.com/gobiernohidalgo?ref_src=twsrc%5Etfw">@gobiernohidalgo</a> para avanzar hacia la visión del Gob <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>: que nuestras familias tengan todo para mejorar su calidad de vida. <a href="https://t.co/oknNHXqOMn">pic.twitter.com/oknNHXqOMn</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1189716725287268356?ref_src=twsrc%5Etfw">31 de octubre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-10-30'
        },
        {
          title: 'Ceremonia de Record Guiness por el altar mas grande del mundo',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Hace menos de una semana, nuestro Estado recibió el <a href="https://twitter.com/hashtag/RecordGuinness?src=hash&amp;ref_src=twsrc%5Etfw">#RecordGuinness</a> por el Tenango más grande del Mundo. <br>Hoy es un gusto acompañar nuevamente al Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> a recibir un  reconocimiento por parte de <a href="https://twitter.com/gwr_es?ref_src=twsrc%5Etfw">@gwr_es</a>, por construir el Altar de Muertos Más Grande del Mundo 🌍💀🎃 <a href="https://t.co/pzqhdSBAlh">pic.twitter.com/pzqhdSBAlh</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1190482419721392130?ref_src=twsrc%5Etfw">2 de noviembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-10-01'
        },
        {
          title: 'Xantolo / Encendido de velas al ánima sola',
          id: 'Huejutla de Reyes',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Con gusto acompañé al Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> al encendido de velas al ánima sola como parte de las actividades del <a href="https://twitter.com/hashtag/Xantolo2019?src=hash&amp;ref_src=twsrc%5Etfw">#Xantolo2019</a>. <br>Sin duda alguna, son estas tradiciones las que  nos permiten recordar a quienes ya no están y envuelven la magia de nuestro <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a>. <a href="https://t.co/EFZVkHyDkx">pic.twitter.com/EFZVkHyDkx</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1190872704150323201?ref_src=twsrc%5Etfw">3 de noviembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-11-02'
        },
        {
          title: 'Reunión con integrantes de la OCDE',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">En el Gobierno de <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> tenemos una premisa: lo que no se puede medir, no se puede mejorar. <br>Por eso, arrancamos la semana trabajando con la <a href="https://twitter.com/ocdeenespanol?ref_src=twsrc%5Etfw">@ocdeenespanol</a>, para seguir haciendo del <a href="https://twitter.com/gobiernohidalgo?ref_src=twsrc%5Etfw">@gobiernohidalgo</a>, uno transparente y eficiente ante las necesidades de los hidalguenses. <a href="https://t.co/RtK7JTaJV6">pic.twitter.com/RtK7JTaJV6</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1191409394161999878?ref_src=twsrc%5Etfw">4 de noviembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-11-04'
        },
        {
          title: 'Reunión con integrantes del Gobierno del Estado de Hidalgo y la OCDE ',
          id: 'Pachuca ',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Reconozco la disposición de todos mis compañeros Srios. del <a href="https://twitter.com/gobiernohidalgo?ref_src=twsrc%5Etfw">@gobiernohidalgo</a> que hoy estuvieron presentes en esta reunión con la <a href="https://twitter.com/ocdeenespanol?ref_src=twsrc%5Etfw">@ocdeenespanol</a>; para trabajar juntos y hacerle frente a las necesidades de los hidalguenses.<a href="https://twitter.com/hashtag/HidalgoCreceContigo?src=hash&amp;ref_src=twsrc%5Etfw">#HidalgoCreceContigo</a> <a href="https://t.co/XY882L9v7B">pic.twitter.com/XY882L9v7B</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1191525874409132038?ref_src=twsrc%5Etfw">5 de noviembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-11-04'
        },
        {
          title: 'Reunión con la Secretaría de Educacción Pública ',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">La educación le da a nuestros jóvenes herramientas para salir adelante y es la base para mejorar nuestro Estado. Aún falta mucho por hacer, pero le estamos haciendo frente a esta exigencia de los hidalguenses. Estamos comprometidos para que <a href="https://twitter.com/hashtag/HidalgoCrezcaContigo?src=hash&amp;ref_src=twsrc%5Etfw">#HidalgoCrezcaContigo</a>. <a href="https://t.co/3TpN0Jfk2J">pic.twitter.com/3TpN0Jfk2J</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1191838947762155520?ref_src=twsrc%5Etfw">5 de noviembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-11-05'
        },
        {
          title: 'Reunión con la SEDECO y Organismos Empresariales ',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">En el Gob. de <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> sabemos que las empresas de <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a> se enfrentan a un panorama nacional adverso. Por eso, diseñamos políticas públicas para fortalecerlas y que sigan generando empleos para nuestras familias hidalguenses. <a href="https://t.co/LK76EAlED5">pic.twitter.com/LK76EAlED5</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1191892355797831680?ref_src=twsrc%5Etfw">6 de noviembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-11-05'
        },
        {
          title: 'Instalación de los Comités de Ética y del COCODI',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Presidí la instalación de los Comités de Ética y del <a href="https://twitter.com/hashtag/COCODI?src=hash&amp;ref_src=twsrc%5Etfw">#COCODI</a> de la <a href="https://twitter.com/hashtag/SEPPEH?src=hash&amp;ref_src=twsrc%5Etfw">#SEPPEH</a>.<br>Al tomar protesta a sus integrantes, les pedí que como servidores públicos trabajemos con transparencia y cercanía a la gente; para que las metas del Gob <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> se cumplan y que <a href="https://twitter.com/hashtag/HidalgoCrezcaContigo?src=hash&amp;ref_src=twsrc%5Etfw">#HidalgoCrezcaContigo</a>. <a href="https://t.co/Oh9wrroR3l">pic.twitter.com/Oh9wrroR3l</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1192273213214134272?ref_src=twsrc%5Etfw">7 de noviembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-11-06'
        },
        {
          title: 'Reunión con los Secretarios de SEDECO, UPLAPH y SEMOT',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Esta noche seguimos trabajando para darle seguimiento a los grandes proyectos de infraestructura que cambiarán el panorama de nuestro Estado. Por eso, me reuní con los Srios. <a href="https://twitter.com/joseguevaram?ref_src=twsrc%5Etfw">@joseguevaram</a> de <a href="https://twitter.com/MovilidadHgo?ref_src=twsrc%5Etfw">@MovilidadHgo</a>, <a href="https://twitter.com/SFVargasT?ref_src=twsrc%5Etfw">@SFVargasT</a> de <a href="https://twitter.com/Sedeco_Hgo?ref_src=twsrc%5Etfw">@Sedeco_Hgo</a> y <a href="https://twitter.com/LamanCarranza?ref_src=twsrc%5Etfw">@LamanCarranza</a> de <a href="https://twitter.com/PlaneacionHgo?ref_src=twsrc%5Etfw">@PlaneacionHgo</a>.</p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1192299750051196929?ref_src=twsrc%5Etfw">7 de noviembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-11-06'
        },
        {
          title: 'Audiencia Pública en Jacala',
          id: 'Jacla de Ledezma',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">El Gobernador <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> lo ha dicho desde el principio de su administración: no quiere un gobierno de escritorio sino uno cercano a su gente, que escuche y resuelva. <br>Llevamos la <a href="https://twitter.com/hashtag/AudienciaP%C3%BAblica?src=hash&amp;ref_src=twsrc%5Etfw">#AudienciaPública</a> al Mpio. de <a href="https://twitter.com/hashtag/Jacala?src=hash&amp;ref_src=twsrc%5Etfw">#Jacala</a> con el objetivo de atender las necesidades de la región. <a href="https://t.co/Z0ib7zROcn">pic.twitter.com/Z0ib7zROcn</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1192638530947862528?ref_src=twsrc%5Etfw">8 de noviembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-11-07'
        },
        {
          title: 'Reunión de coordinación con el equipo de trabajo de la SEPPE',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Trabajamos en equipo para que tú y tu familia tengan una mejor calidad de vida. <a href="https://twitter.com/hashtag/OmarFayad?src=hash&amp;ref_src=twsrc%5Etfw">#OmarFayad</a> <a href="https://twitter.com/hashtag/HidalgoCreceContigo?src=hash&amp;ref_src=twsrc%5Etfw">#HidalgoCreceContigo</a> <a href="https://t.co/i4y3nDtMGI">pic.twitter.com/i4y3nDtMGI</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1192883271836852225?ref_src=twsrc%5Etfw">8 de noviembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-11-08'
        },
        {
          title: 'Reunión con el DIFH, SEDESO y SEDECO',
          id: 'Pachuca (RyTvHgo)',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Cosas buenas vienen para los hidalguenses en esta segunda mitad del Gobierno de <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>. <br>¿Cierto Secretarios: <a href="https://twitter.com/SFVargasT?ref_src=twsrc%5Etfw">@SFVargasT</a>, <a href="https://twitter.com/DanielRolandoJ?ref_src=twsrc%5Etfw">@DanielRolandoJ</a> y <a href="https://twitter.com/PatyGonzalez_?ref_src=twsrc%5Etfw">@PatyGonzalez_</a>? 🙊 <a href="https://t.co/BF7OzfDg3u">pic.twitter.com/BF7OzfDg3u</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1193013756751745024?ref_src=twsrc%5Etfw">9 de noviembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-11-08'
        },
        {
          title: 'Inauguración Hotel Santiurde',
          id: 'Real del Monte',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Hoy me pasó algo muy grato:<br>Tengo un amigo desde la Secundaria que se llama Manuel.<br>Desde entonces, él había soñado con tener su propio hotel en <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a>. 🏨 Y ¿qué creen? 🙊<br>Hoy, después de muchos años de esfuerzo inauguró <a href="https://twitter.com/hashtag/HotelSantiurde?src=hash&amp;ref_src=twsrc%5Etfw">#HotelSantiurde</a>🏨 <a href="https://t.co/RcQT5SACUk">pic.twitter.com/RcQT5SACUk</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1193416295670267904?ref_src=twsrc%5Etfw">10 de noviembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-11-10'
        },
        {
          title: 'Presentación de la Estrategia Estatal de Mitigación y Adaptación al Cambio Climático e instalaron la Comisión Estatal Intersectorial de Cambio Climático',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Hoy el Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> y el Srio. <a href="https://twitter.com/benjamin_rico?ref_src=twsrc%5Etfw">@benjamin_rico</a> de <a href="https://twitter.com/medioambiente_H?ref_src=twsrc%5Etfw">@medioambiente_H</a>, presentaron la Estrategia Estatal de Mitigación y Adaptación al Cambio Climático e instalaron la Comisión Estatal Intersectorial de Cambio Climático (CICC). <br>¿Pero qué significa esto? <a href="https://t.co/rOpbtAQJF8">pic.twitter.com/rOpbtAQJF8</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1194387476305059848?ref_src=twsrc%5Etfw">12 de noviembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-11-12'
        },
        {
          title: '9a Investidura Salón de la Fama',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Me dio mucho gusto acompañar al Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>, a Jesús Martínez, Pdte. de <a href="https://twitter.com/hashtag/GrupoPachuca?src=hash&amp;ref_src=twsrc%5Etfw">#GrupoPachuca</a> y al equipo del <a href="https://twitter.com/famasalon?ref_src=twsrc%5Etfw">@famasalon</a> a esta <a href="https://twitter.com/hashtag/9aInvestidura?src=hash&amp;ref_src=twsrc%5Etfw">#9aInvestidura</a>, donde se reconoció a 12 estrellas del fútbol por su gran trayectoria profesional. <br>¡Muchas felicidades a todos los investidos! ⚽ <a href="https://t.co/4PdprWw2Gf">pic.twitter.com/4PdprWw2Gf</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1194476413874851840?ref_src=twsrc%5Etfw">13 de noviembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-11-12'
        },
        {
          title: 'Presentación Autos electricos JAC',
          id: 'CDMX',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">¡Esto es <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a>!<br>El lugar del <a href="https://twitter.com/hashtag/Sisepuede?src=hash&amp;ref_src=twsrc%5Etfw">#Sisepuede</a>. El lugar desde el que se puede escribir un futuro mejor. En febrero de 2017, el Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> anunciaba la 1a inversión en su gestión con <a href="https://twitter.com/JACMotorsMX?ref_src=twsrc%5Etfw">@JACMotorsMX</a>, que invirtió 4,400 mdp, generando 5 mil empleos directos e indirectos. <a href="https://t.co/BUfDmOwwIe">pic.twitter.com/BUfDmOwwIe</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1195011958501625856?ref_src=twsrc%5Etfw">14 de noviembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-11-13'
        },
        {
          title: 'Track Day Prueba de manejo de autos electricos JAC',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Acompañé al Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> y a directivos de <a href="https://twitter.com/JACMotorsMX?ref_src=twsrc%5Etfw">@JACMotorsMX</a> al <a href="https://twitter.com/hashtag/HidalgoTrackDayJAC?src=hash&amp;ref_src=twsrc%5Etfw">#HidalgoTrackDayJAC</a>.<br>Pusimos a prueba todas las cualidades de la primera familia de vehículos eléctricos en México, ensamblados desde <a href="https://twitter.com/hashtag/CdSahag%C3%BAn?src=hash&amp;ref_src=twsrc%5Etfw">#CdSahagún</a>, <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a>. <a href="https://t.co/MIwO4WqtLa">pic.twitter.com/MIwO4WqtLa</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1195138516629491712?ref_src=twsrc%5Etfw">15 de noviembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-11-14'
        },
        {
          title: 'Audiencia Pública en el Municipio deHuautla',
          id: 'Huautla',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Hoy en el Mpio. de <a href="https://twitter.com/hashtag/Huautla?src=hash&amp;ref_src=twsrc%5Etfw">#Huautla</a>, escuchamos y atendimos a más de 4,500 hidalguenses en <a href="https://twitter.com/hashtag/AudienciaP%C3%BAblica?src=hash&amp;ref_src=twsrc%5Etfw">#AudienciaPública</a>. <br>Gracias a todos por su confianza, sabemos que aún queda mucho por hacer pero seguiremos trabajando para que <a href="https://twitter.com/hashtag/HidalgoCrezcaContigo?src=hash&amp;ref_src=twsrc%5Etfw">#HidalgoCrezcaContigo</a>. <a href="https://t.co/HNuLHTKQTa">pic.twitter.com/HNuLHTKQTa</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1195506507024125954?ref_src=twsrc%5Etfw">16 de noviembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-11-15'
        },
        {
          title: 'Participación en el Congreso Juvenil de Políticas Públicas',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Presentación de la Conferencia  Magistral con el Secretario <a href="https://twitter.com/JLRomoCruz?ref_src=twsrc%5Etfw">@JLRomoCruz</a> <a href="https://twitter.com/SEPPEHidalgo?ref_src=twsrc%5Etfw">@SEPPEHidalgo</a> <a href="https://twitter.com/hashtag/PrimerCongresoPoliticasPublicas?src=hash&amp;ref_src=twsrc%5Etfw">#PrimerCongresoPoliticasPublicas</a> <a href="https://twitter.com/hashtag/JovenesPol%C3%ADticos?src=hash&amp;ref_src=twsrc%5Etfw">#JovenesPolíticos</a> <a href="https://t.co/cOOGLTmAq5">pic.twitter.com/cOOGLTmAq5</a></p>&mdash; Leslie Ortega Barrera (@LeslieOrtegaB) <a href="https://twitter.com/LeslieOrtegaB/status/1195546689962008577?ref_src=twsrc%5Etfw">16 de noviembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-11-15'
        },
        {
          title: 'Reunión con el equipo de trabajo de la SEPPE',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">El penúltimo mes del año está por terminar y queremos cerrar fuerte este 2019.<br>En el Gobierno de <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>, estamos trabajando juntos con un compromiso: seguir generando las oportunidades que le permitan a nuestras familias salir adelante y mejorar su calidad de vida. <a href="https://t.co/vT81ubW6eD">pic.twitter.com/vT81ubW6eD</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1196892373923614721?ref_src=twsrc%5Etfw">19 de noviembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-11-19'
        },
        {
          title: 'Guardia de Honor en el Monumento a la Revolución Mexicana',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">En representación del Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>, asistí a las actividades conmemorativas del 109° Aniversario del inicio de la Revolución Mexicana. <br>Hicimos guardia de honor y depositamos una ofrenda floral en honor a quienes dieron su vida por construir un mejor país. <a href="https://t.co/jsr0qL5fS1">pic.twitter.com/jsr0qL5fS1</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1197223137290657792?ref_src=twsrc%5Etfw">20 de noviembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-11-20'
        },
        {
          title: 'Entrega del Premio Estatal del Deporte',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">En el marco del 109° Aniversario de la Revolución Mexicana y en rep. del Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>; entregué el Premio Estatal del Deporte junto a <a href="https://twitter.com/fatimabanos?ref_src=twsrc%5Etfw">@fatimabanos</a>, titular del <a href="https://twitter.com/deportehidalgo?ref_src=twsrc%5Etfw">@deportehidalgo</a>. <br>Un merecido reconocimiento para aquellos deportistas que han puesto en alto el nombre de <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a>. <a href="https://t.co/2KGmdmeFus">pic.twitter.com/2KGmdmeFus</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1197234123343060992?ref_src=twsrc%5Etfw">20 de noviembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-11-20'
        },
        {
          title: 'Audiencia Pública en el Municipio deHuazalingo',
          id: 'Huazalingo',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">El Gobernador <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> y todo el equipo del <a href="https://twitter.com/gobiernohidalgo?ref_src=twsrc%5Etfw">@gobiernohidalgo</a>, trajimos la <a href="https://twitter.com/hashtag/AudienciaP%C3%BAblica?src=hash&amp;ref_src=twsrc%5Etfw">#AudienciaPública</a> a <a href="https://twitter.com/hashtag/Huazalingo?src=hash&amp;ref_src=twsrc%5Etfw">#Huazalingo</a> con una misión: que los hidalguenses de esta región tengan la oportunidad de platicar cara a cara con los titulares y poderles ofrecer soluciones a sus necesidades. <a href="https://t.co/L9PcCcQHWJ">pic.twitter.com/L9PcCcQHWJ</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1198059366420754432?ref_src=twsrc%5Etfw">23 de noviembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-11-22'
        },
        {
          title: 'Reunión con la Secretaría de Finanzas para revisar el paquete hacendario',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Así es Sria. <a href="https://twitter.com/JessieBla?ref_src=twsrc%5Etfw">@JessieBla</a>,  a través de la coordinación entre los equipos de trabajo del Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>, podremos focalizar las políticas públicas y que los hidalguenses tengan más oportunidades para salir adelante. <a href="https://twitter.com/hashtag/HidalgoCreceContigo?src=hash&amp;ref_src=twsrc%5Etfw">#HidalgoCreceContigo</a> <a href="https://t.co/ZBKkN1LgEc">https://t.co/ZBKkN1LgEc</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1198762190796476416?ref_src=twsrc%5Etfw">25 de noviembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-11-24'
        },
        {
          title: 'Reunión con la SEPH, Oficialia Mayor, SEDECO y SEDESO',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Junto a los Srios. <a href="https://twitter.com/atilanorp?ref_src=twsrc%5Etfw">@atilanorp</a>, <a href="https://twitter.com/martinianovegao?ref_src=twsrc%5Etfw">@martinianovegao</a>, <a href="https://twitter.com/SFVargasT?ref_src=twsrc%5Etfw">@SFVargasT</a>, <a href="https://twitter.com/DanielRolandoJ?ref_src=twsrc%5Etfw">@DanielRolandoJ</a> y equipo del Gobierno de <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>, trabajamos para que las acciones en materia de combate a la pobreza tomen más fuerza y sigan beneficiando a cada una de nuestras familias. <a href="https://t.co/66uPJkELpN">pic.twitter.com/66uPJkELpN</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1199186540917854208?ref_src=twsrc%5Etfw">26 de noviembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-11-25'
        },
        {
          title: 'Guardia de Honor y Ofrenda Floral al General Felipe Angeles en conmemoración de su Aniversario luctuoso',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">En representación del Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> y acompañado del equipo de la <a href="https://twitter.com/SEPPEHidalgo?ref_src=twsrc%5Etfw">@SEPPEHidalgo</a>, presidí la Guardia de Honor y depósito de ofrenda floral a uno de los hidalguenses más importantes de la época revolucionaria y de nuestro Estado: General Felipe Ángeles. <a href="https://t.co/jyIOdcticx">pic.twitter.com/jyIOdcticx</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1199363837260115970?ref_src=twsrc%5Etfw">26 de noviembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-11-26'
        },
        {
          title: 'Reunión con el BID en materia de transporte de Genero',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Acompañé al Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> a una reunión con <a href="https://twitter.com/laureenmontes?ref_src=twsrc%5Etfw">@laureenmontes</a>, Coordinadora del <a href="https://twitter.com/TranspGenderLab?ref_src=twsrc%5Etfw">@TranspGenderLab</a> e integrantes de <a href="https://twitter.com/el_BID?ref_src=twsrc%5Etfw">@el_BID</a>.<br>El objetivo es trabajar juntos en materia de transporte y equidad de género, para fortalecer este servicio público en <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a> en favor de las mujeres. <a href="https://t.co/JI1dyuz6e9">pic.twitter.com/JI1dyuz6e9</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1199494341795950592?ref_src=twsrc%5Etfw">27 de noviembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-11-26'
        },
        {
          title: 'Entrevista en materia de movilidad sustentable en MVS Noticias',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">A las 21:10 h, estaré en 102.5 FM de <a href="https://twitter.com/MVSNoticias?ref_src=twsrc%5Etfw">@MVSNoticias</a>, junto a <a href="https://twitter.com/vsanchezbanos?ref_src=twsrc%5Etfw">@vsanchezbanos</a>, platicando a los radioescuchas de la Ciudad de México sobre cómo el futuro de la movilidad sustentable en México se construye desde <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a>.<br>Fuera de la CDMX, escúchalo aquí:<a href="https://t.co/MKGUNQMpaB">https://t.co/MKGUNQMpaB</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1199522806918078464?ref_src=twsrc%5Etfw">27 de noviembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-11-26'
        },
        {
          title: 'Reunión con la UPLAPH, SEDECO y personal de la SEMOT y SOPyOT',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Seguimos esta larga jornada con mucho ánimo. Me reuní con los Srios. <a href="https://twitter.com/SFVargasT?ref_src=twsrc%5Etfw">@SFVargasT</a> de <a href="https://twitter.com/Sedeco_Hgo?ref_src=twsrc%5Etfw">@Sedeco_Hgo</a> y <a href="https://twitter.com/LamanCarranza?ref_src=twsrc%5Etfw">@LamanCarranza</a> de <a href="https://twitter.com/PlaneacionHgo?ref_src=twsrc%5Etfw">@PlaneacionHgo</a>, afinamos proyectos de infraestructura de <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a> que complementan grandes proyectos del <a href="https://twitter.com/GobiernoMX?ref_src=twsrc%5Etfw">@GobiernoMX</a>, como indicó el Gob <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>. <a href="https://t.co/50iUCDGbQI">pic.twitter.com/50iUCDGbQI</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1199913917226594305?ref_src=twsrc%5Etfw">28 de noviembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-11-27'
        },
        {
          title: '2a. Sesión Ordinaria 2019 del Consejo Estatal de Seguridad Pública.',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Acompañé al Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>, a la 2a. Sesión Ordinaria 2019 del Consejo Estatal de Seguridad Pública. <br>Para el <a href="https://twitter.com/gobiernohidalgo?ref_src=twsrc%5Etfw">@gobiernohidalgo</a>, tu seguridad y la de tu familia es primero. <a href="https://twitter.com/hashtag/HidalgoCreceContigo?src=hash&amp;ref_src=twsrc%5Etfw">#HidalgoCreceContigo</a>. <a href="https://t.co/Z9UCG06xg7">https://t.co/Z9UCG06xg7</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1200090316210102275?ref_src=twsrc%5Etfw">28 de noviembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-11-28'
        },
        {
          title: 'Instalación del Consejo General de Planeación para la Agenda de Género de la SEPPE',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Presidí la instalación del Consejo General de Planeación para la Agenda de Género de la <a href="https://twitter.com/SEPPEHidalgo?ref_src=twsrc%5Etfw">@SEPPEHidalgo</a>, junto a <a href="https://twitter.com/MC_HdezAragon?ref_src=twsrc%5Etfw">@MC_HdezAragon</a>, titular de <a href="https://twitter.com/mujerhidalgo?ref_src=twsrc%5Etfw">@mujerhidalgo</a>.<br>La visión del Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> es: trabajar bajo igualdad de oportunidades y sin distinciones para que <a href="https://twitter.com/hashtag/HidalgoCrezcaContigo?src=hash&amp;ref_src=twsrc%5Etfw">#HidalgoCrezcaContigo</a>. <a href="https://t.co/rV1O55On7c">pic.twitter.com/rV1O55On7c</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1200195636781441025?ref_src=twsrc%5Etfw">28 de noviembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-11-28'
        },
        {
          title: '24º y 25º Sesiones Ordinarias del Sistema Estatal para Prevenir, Atender, Sancionar y Erradicar la Violencia contra las Mujeres y la 5º Sesión Ordinaria de la Comisión de Igualdad y No Discriminación.',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Acompañé al Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>, a las 24º y 25º Sesiones Ordinarias del Sistema Estatal para Prevenir, Atender, Sancionar y Erradicar la Violencia contra las Mujeres y la 5º Sesión Ordinaria de la Comisión de Igualdad y No Discriminación. <a href="https://t.co/vuqc6HyNpU">pic.twitter.com/vuqc6HyNpU</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1200243173773074434?ref_src=twsrc%5Etfw">29 de noviembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-11-28'
        },
        {
          title: 'Audiencia Pública en el Municipio de Chapulhuacan',
          id: 'Chapulhuacan',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Hoy el Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> y todo el equipo del <a href="https://twitter.com/gobiernohidalgo?ref_src=twsrc%5Etfw">@gobiernohidalgo</a>, estuvimos en <a href="https://twitter.com/hashtag/AudienciaP%C3%BAblica?src=hash&amp;ref_src=twsrc%5Etfw">#AudienciaPública</a> en el Mpio. de <a href="https://twitter.com/hashtag/Chapulhuac%C3%A1n?src=hash&amp;ref_src=twsrc%5Etfw">#Chapulhuacán</a>, para atender a los hidalguenses que se dieron cita y darles una respuesta a sus problemas, llevarles servicios médicos, programas y asesoramiento. <a href="https://t.co/PuuDsFPpcs">pic.twitter.com/PuuDsFPpcs</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1200611250746454016?ref_src=twsrc%5Etfw">30 de noviembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-11-29'
        },
        {
          title: 'Inauguración la primera fase, de la segunda etapa, de la Super vía Colosio',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">¡El Gobernador <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>, ya inauguró la 1er. Fase de la Segunda Etapa de la <a href="https://twitter.com/hashtag/SuperV%C3%ADaColosio?src=hash&amp;ref_src=twsrc%5Etfw">#SuperVíaColosio</a>! <br>Un proyecto en materia de movilidad sin precedentes en <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a>, que además se construyó en tiempo récord para beneficio de más de 267 mil hidalguenses. <a href="https://t.co/ZS6dHEZwcx">pic.twitter.com/ZS6dHEZwcx</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1200644433873686528?ref_src=twsrc%5Etfw">30 de noviembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-11-29'
        },
        {
          title: 'Encendida del Arbol Navideño',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Esta noche acompañé al Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>, a la tradicional Encendida del Árbol en nuestra capital hidalguense.🌲🌟<br>Un gran momento que marca el inicio de la <a href="https://twitter.com/hashtag/NavidadHidalgo2019?src=hash&amp;ref_src=twsrc%5Etfw">#NavidadHidalgo2019</a>. <a href="https://t.co/FNFHJ2yWrV">pic.twitter.com/FNFHJ2yWrV</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1201344670208581632?ref_src=twsrc%5Etfw">2 de diciembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-12-01'
        },
        {
          title: 'Entrevista en Radio y Tv de Hidalgo',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">¡Ya estamos <a href="https://twitter.com/hashtag/EnVivo?src=hash&amp;ref_src=twsrc%5Etfw">#EnVivo</a>! <br>Sigue la entrevista con <a href="https://twitter.com/BelindaPrezRios?ref_src=twsrc%5Etfw">@BelindaPrezRios</a>, por 12.1 de <a href="https://twitter.com/RadioyTVHidalgo?ref_src=twsrc%5Etfw">@RadioyTVHidalgo</a> y entérate de todo lo relacionado con la <a href="https://twitter.com/hashtag/NavidadHidalgo2019?src=hash&amp;ref_src=twsrc%5Etfw">#NavidadHidalgo2019</a>. <a href="https://t.co/x7MJoIwYl4">pic.twitter.com/x7MJoIwYl4</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1201512187551895554?ref_src=twsrc%5Etfw">2 de diciembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-12-02'
        },
        {
          title: 'Reunión de coordinación con el equipo de trabajo de la SEPPE',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Las políticas públicas del Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>, han dado resultados positivos para el Estado, mejorando la calidad de vida de nuestras familias. <br>Pero aún falta mucho por hacer, por eso, reforzamos las acciones del <a href="https://twitter.com/gobiernohidalgo?ref_src=twsrc%5Etfw">@gobiernohidalgo</a> para que <a href="https://twitter.com/hashtag/HidalgoCrezcaContigo?src=hash&amp;ref_src=twsrc%5Etfw">#HidalgoCrezcaContigo</a>. <a href="https://t.co/5CnEwNQLGA">pic.twitter.com/5CnEwNQLGA</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1201645498391769088?ref_src=twsrc%5Etfw">2 de diciembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-12-02'
        },
        {
          title: 'Prendida del Árbol en Atotonilco el Grande',
          id: 'Atotonilco El Grande.',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Acompañé al Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> a la Encendida del Árbol de <a href="https://twitter.com/hashtag/AtotonilcoElGrande?src=hash&amp;ref_src=twsrc%5Etfw">#AtotonilcoElGrande</a>. 🌲🌟<br>Una noche mágica, en la cual las familias vivieron un momento único durante el cuento de navidad &quot;Fábrica de Juguetes&quot; 🧸 y el conteo regresivo para recibir la <a href="https://twitter.com/hashtag/NavidadHidalgo2019?src=hash&amp;ref_src=twsrc%5Etfw">#NavidadHidalgo2019</a>. <a href="https://t.co/iFdYmJzXbt">pic.twitter.com/iFdYmJzXbt</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1201708584666574848?ref_src=twsrc%5Etfw">3 de diciembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-12-02'
        },
        {
          title: 'Entrega de apoyos a diferentes municipios para el fortalecimiento de Capacidades en Materia de Seguridad Pública y Salud.',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Fue un gusto estar junto al Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> y Octavio Romero Oropeza, Dir. Gral. de <a href="https://twitter.com/Pemex?ref_src=twsrc%5Etfw">@Pemex</a>, en la entrega de apoyos a diferentes municipios para el fortalecimiento de Capacidades en Materia de Seguridad Pública y Salud. <a href="https://t.co/BehXbgJMyz">pic.twitter.com/BehXbgJMyz</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1201968639802515457?ref_src=twsrc%5Etfw">3 de diciembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-12-03'
        },
        {
          title: 'Reunión con organizaciones de la sociedad civil en materia de derechos humanos, seguridad, personas desaparecidas y personas no localizadas.',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Junto al Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>, nos reunimos con representantes de las Org. Civiles: Sonrisas perdidas de Hidalgo, Mujeres construyendo Hidalgo, En familia rompamos el silencio, Volver a soñar y Colectivo Artículo 39, Defensa Integral en Derechos Humanos de Hidalgo, entre otros. <a href="https://t.co/et6mfKPzKS">pic.twitter.com/et6mfKPzKS</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1202081286996676609?ref_src=twsrc%5Etfw">4 de diciembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-12-03'
        },
        {
          title: 'Presentación del Índice de Progreso Social: México 2019',
          id: 'CDMX',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Comenzamos el día en la Presentación del Índice de Progreso Social: México 2019 por <a href="https://twitter.com/alvarodrigueza?ref_src=twsrc%5Etfw">@alvarodrigueza</a>, Cofundador de <a href="https://twitter.com/socprogressmx?ref_src=twsrc%5Etfw">@socprogressmx</a>. <br>Un índice relativamente nuevo pero que estoy seguro, será en un futuro cercano, la principal herramienta de medición del desarrollo global. <a href="https://t.co/VZzaKfsJoL">pic.twitter.com/VZzaKfsJoL</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1202283437891166209?ref_src=twsrc%5Etfw">4 de diciembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-12-04'
        },
        {
          title: 'Reunión con la SEP Hidalgo y SEP a nivel federal',
          id: 'CDMX',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">La cooperación del Gob. de <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> con el <a href="https://twitter.com/GobiernoMX?ref_src=twsrc%5Etfw">@GobiernoMX</a> es fundamental para el desarrollo de <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a>.<br>Por eso, hoy junto al Srio <a href="https://twitter.com/atilanorp?ref_src=twsrc%5Etfw">@atilanorp</a> de <a href="https://twitter.com/SEPHidalgo?ref_src=twsrc%5Etfw">@SEPHidalgo</a>, nos reunimos con el Srio <a href="https://twitter.com/emoctezumab?ref_src=twsrc%5Etfw">@emoctezumab</a> de <a href="https://twitter.com/SEP_mx?ref_src=twsrc%5Etfw">@SEP_mx</a> para coordinar estrategias que beneficien a nuestros jóvenes hidalguenses <a href="https://t.co/r8TTcfdfEF">pic.twitter.com/r8TTcfdfEF</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1202363251549491200?ref_src=twsrc%5Etfw">4 de diciembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-12-04'
        },
        {
          title: 'Entrevista en XEAWL Radio Jacala 1300 AM sobre los beneficios de las audiencias públicas',
          id: 'Jacala',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">En el Gobierno de <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>, estamos recorriendo el Estado en <a href="https://twitter.com/hashtag/AudienciaP%C3%BAblica?src=hash&amp;ref_src=twsrc%5Etfw">#AudienciaPública</a>.<br>¿Quieres saber los beneficios de esto? <br>En punto de las 9:00 h, estaré platicando con <a href="https://twitter.com/hashtag/YocundoHern%C3%A1ndez?src=hash&amp;ref_src=twsrc%5Etfw">#YocundoHernández</a> sobre esto y más, en <a href="https://twitter.com/hashtag/XEAWL?src=hash&amp;ref_src=twsrc%5Etfw">#XEAWL</a> 1300 AM de <a href="https://twitter.com/hashtag/Jacala?src=hash&amp;ref_src=twsrc%5Etfw">#Jacala</a> o síguela aquí: <a href="https://t.co/cmfHIvtWhM">https://t.co/cmfHIvtWhM</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1202598500070023172?ref_src=twsrc%5Etfw">5 de diciembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-12-05'
        },
        {
          title: 'Audiencia Pública en Pisaflores',
          id: 'Pisaflores',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">La administración de <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>, se ha caracterizado por ser un gobierno cercano a su gente, que va hasta donde estén, qué los escucha y les da respuesta a sus necesidades. <br>Hoy, llevamos la <a href="https://twitter.com/hashtag/AudienciaP%C3%BAblica?src=hash&amp;ref_src=twsrc%5Etfw">#AudienciaPública</a> a <a href="https://twitter.com/hashtag/Pisaflores?src=hash&amp;ref_src=twsrc%5Etfw">#Pisaflores</a> para beneficio de todos los habitantes de la región. <a href="https://t.co/U6jyUaz8Y5">pic.twitter.com/U6jyUaz8Y5</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1202799270832877574?ref_src=twsrc%5Etfw">6 de diciembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-12-05'
        },
        {
          title: 'Participación en la Expo Mecánico Automotriz Internacional 2019 con platica sobre: Hidalgo, el Próximo Clúster de Movilidad Inteligente de México',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Fue un gusto estar en la Expo Mecánico Automotriz Internacional 2019 y poder platicarle a los que se dieron cita en este gran evento sobre: Hidalgo, el Próximo Clúster de Movilidad Inteligente de México, una visión del Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> que ya es una realidad. <a href="https://t.co/sKV8TJL1mE">pic.twitter.com/sKV8TJL1mE</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1203033359410024448?ref_src=twsrc%5Etfw">6 de diciembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-12-06'
        },
        {
          title: 'Entrevista en Programa de Radio Al Aire',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Durante este 2019, se consiguieron grandes cosas para el Estado en la admón. de <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>. <br>¿Quieres saber de cuáles estoy hablando? <br>Escucha en punto de las 14:30 h, <a href="https://twitter.com/alaire981?ref_src=twsrc%5Etfw">@alaire981</a> por 98.1 FM de <a href="https://twitter.com/RedHidalgoRadio?ref_src=twsrc%5Etfw">@RedHidalgoRadio</a>, estaré platicando con <a href="https://twitter.com/adpesa?ref_src=twsrc%5Etfw">@adpesa</a> sobre esto y más. <br>¡Sintonízanos!</p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1203042799626547200?ref_src=twsrc%5Etfw">6 de diciembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-12-06'
        },
        {
          title: 'Reunión con la OCDE',
          id: 'Paris',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Hace 7 meses, el Gobernador <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> y la <a href="https://twitter.com/ocdeenespanol?ref_src=twsrc%5Etfw">@ocdeenespanol</a>, presentaron el Reporte Territorial para Hidalgo.<br>Hoy nos reunimos con directivos de la <a href="https://twitter.com/OCDE_fr?ref_src=twsrc%5Etfw">@OCDE_fr</a>, para presentar los avances y resultados positivos del Estado con respecto a las recomendaciones que nos hicieron. <a href="https://t.co/gQ5ZzxiGwO">https://t.co/gQ5ZzxiGwO</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1204834877209763842?ref_src=twsrc%5Etfw">11 de diciembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-12-09'
        },
        {
          title: 'Reunión de trabajo con la Embajadora de México ante la OCDE',
          id: 'Paris',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Hace 7 meses, el Gobernador <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> y la <a href="https://twitter.com/ocdeenespanol?ref_src=twsrc%5Etfw">@ocdeenespanol</a>, presentaron el Reporte Territorial para Hidalgo.<br>Hoy nos reunimos con directivos de la <a href="https://twitter.com/OCDE_fr?ref_src=twsrc%5Etfw">@OCDE_fr</a>, para presentar los avances y resultados positivos del Estado con respecto a las recomendaciones que nos hicieron. <a href="https://t.co/gQ5ZzxiGwO">https://t.co/gQ5ZzxiGwO</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1204834877209763842?ref_src=twsrc%5Etfw">11 de diciembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-12-09'
        },
        {
          title: 'Anuncio de Inversión con Engie',
          id: 'Paris',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">El Gobernador <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>, dio una gran noticia para <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a>. <br>¡<a href="https://twitter.com/ENGIEgroup?ref_src=twsrc%5Etfw">@ENGIEgroup</a> llega a <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a>, con una inversión de 2,300 mdp y la creación de más de 900 empleos! <br>Esto nos acerca cada vez más, a la meta de los 60 mil mdp de inversiones para el Estado antes de que acabe el 2019. <a href="https://t.co/GFQqkZohiM">https://t.co/GFQqkZohiM</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1204466165902393345?ref_src=twsrc%5Etfw">10 de diciembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-12-09'
        },
        {
          title: 'Reunión de trabajo con empresarios de Londres',
          id: 'Londres',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Por instrucción del Gob <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> y junto al Srio <a href="https://twitter.com/SFVargasT?ref_src=twsrc%5Etfw">@SFVargasT</a> de <a href="https://twitter.com/Sedeco_Hgo?ref_src=twsrc%5Etfw">@Sedeco_Hgo</a>, nos reunimos en Londres, el corazón de Reino Unido, con Andrew Jeffreys, CEO de <a href="https://twitter.com/OBGinsights?ref_src=twsrc%5Etfw">@OBGinsights</a> y más de 19 empresarios interesados en <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a> para invertir y consolidar sus proyectos en nuestro Estado. <a href="https://t.co/wRDHy79rnu">pic.twitter.com/wRDHy79rnu</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1207350789108355074?ref_src=twsrc%5Etfw">18 de diciembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-12-10'
        },
        {
          title: 'Reunión con el Sherif de la Ciudad de Londres',
          id: 'Londres',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Me reuní con Michael Mainelli, rep. del Lord Mayor de <a href="https://twitter.com/cityoflondon?ref_src=twsrc%5Etfw">@cityoflondon</a> y el Srio <a href="https://twitter.com/SFVargasT?ref_src=twsrc%5Etfw">@SFVargasT</a> de <a href="https://twitter.com/Sedeco_Hgo?ref_src=twsrc%5Etfw">@Sedeco_Hgo</a>, en el alma de <a href="https://twitter.com/hashtag/UK?src=hash&amp;ref_src=twsrc%5Etfw">#UK</a>: Londres. <br>Hoy en el mundo ya se habla de <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a>, de su gran potencial para crecer y de los resultados de las acciones del Gobierno de <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>. <a href="https://t.co/UjLM8tR8Yp">pic.twitter.com/UjLM8tR8Yp</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1207410197687406599?ref_src=twsrc%5Etfw">18 de diciembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-12-10'
        },
        {
          title: 'Reunión con el Departamento de Comercio Internacional del Reino Unido',
          id: 'Londres',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Me reuní con Michael Mainelli, rep. del Lord Mayor de <a href="https://twitter.com/cityoflondon?ref_src=twsrc%5Etfw">@cityoflondon</a> y el Srio <a href="https://twitter.com/SFVargasT?ref_src=twsrc%5Etfw">@SFVargasT</a> de <a href="https://twitter.com/Sedeco_Hgo?ref_src=twsrc%5Etfw">@Sedeco_Hgo</a>, en el alma de <a href="https://twitter.com/hashtag/UK?src=hash&amp;ref_src=twsrc%5Etfw">#UK</a>: Londres. <br>Hoy en el mundo ya se habla de <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a>, de su gran potencial para crecer y de los resultados de las acciones del Gobierno de <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>. <a href="https://t.co/UjLM8tR8Yp">pic.twitter.com/UjLM8tR8Yp</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1207410197687406599?ref_src=twsrc%5Etfw">18 de diciembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-12-10'
        },
        {
          title: 'Promoción Cultural de Hidalgo',
          id: 'Ciudad del Vaticano',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Tuve la oportunidad de platicar con el Papa Francisco <a href="https://twitter.com/Pontifex_es?ref_src=twsrc%5Etfw">@Pontifex_es</a> durante mi gira de trabajo por Europa. <a href="https://t.co/OSdn868MRU">pic.twitter.com/OSdn868MRU</a></p>&mdash; Omar Fayad (@omarfayad) <a href="https://twitter.com/omarfayad/status/1205197300357828609?ref_src=twsrc%5Etfw">12 de diciembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-12-11'
        },
        {
          title: 'Promoción Cultural de Hidalgo',
          id: 'Ciudad del Vaticano',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Tuve la oportunidad de platicar con el Papa Francisco <a href="https://twitter.com/Pontifex_es?ref_src=twsrc%5Etfw">@Pontifex_es</a> durante mi gira de trabajo por Europa. <a href="https://t.co/OSdn868MRU">pic.twitter.com/OSdn868MRU</a></p>&mdash; Omar Fayad (@omarfayad) <a href="https://twitter.com/omarfayad/status/1205197300357828609?ref_src=twsrc%5Etfw">12 de diciembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-12-12'
        },
        {
          title: 'Anuncio de Inversión con ENEL Green Power',
          id: 'Roma',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Las buenas noticias para <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a> siguen: <a href="https://twitter.com/EnelGroup?ref_src=twsrc%5Etfw">@EnelGroup</a>, la suministradora de energía más grande del mundo, invertirá en nuestro Estado: 1,000 mdp en un proyecto que reforzará el sector energético de <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a> y que se sumará a los grandes proyectos del Gobierno de <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>. <a href="https://t.co/3RIfxfqL5v">https://t.co/3RIfxfqL5v</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1205522154403639296?ref_src=twsrc%5Etfw">13 de diciembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-12-13'
        },
        {
          title: 'Reunión con el Presidente de la Región de Lombardi',
          id: 'Milán',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Acompañé al Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>, a una reunión con <a href="https://twitter.com/FontanaPres?ref_src=twsrc%5Etfw">@FontanaPres</a>, Pdte. de la <a href="https://twitter.com/RegLombardia?ref_src=twsrc%5Etfw">@RegLombardia</a>.<br>Sabemos que esta región es uno de los motores económicos de Italia y queremos que a través de la cooperación con el <a href="https://twitter.com/gobiernohidalgo?ref_src=twsrc%5Etfw">@gobiernohidalgo</a>, propiciemos  mejores oportunidades para los hidalguenses. <a href="https://t.co/n14f185dLA">pic.twitter.com/n14f185dLA</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1206975526050705408?ref_src=twsrc%5Etfw">17 de diciembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-12-13'
        },
        {
          title: 'Reunión con COFINDUSTRIA',
          id: 'Roma',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Con el objetivo de diversificar la economía en <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a>, nos reunimos con Anna Lisa Bisson, Encargada de la región Norteamérica de <a href="https://twitter.com/Confindustria?ref_src=twsrc%5Etfw">@Confindustria</a> y con Carlo Riccini Dir. del Depto de Estadística de Farmaindustria🇮🇹 y Antonella Moroni, Dir. de Asuntos Públicos Internacionales. <a href="https://t.co/FtGiVlSDcx">pic.twitter.com/FtGiVlSDcx</a></p>&mdash; Sergio F Vargas Téllez (@SFVargasT) <a href="https://twitter.com/SFVargasT/status/1207770716042661903?ref_src=twsrc%5Etfw">19 de diciembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-12-13'
        },
        {
          title: 'Reunión con FARMINDUSTRIA',
          id: 'Roma',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr"><a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a> es actualmente un gran polo de desarrollo y en coordinación con las compañías con las cuales mantenemos afinidades productivas como en el ramo farmacéutico, de manufactura y servicios podremos consolidar proyectos que hagan crecer estos sectores con nuevas inversiones. <a href="https://t.co/b4z83UERiY">pic.twitter.com/b4z83UERiY</a></p>&mdash; Sergio F Vargas Téllez (@SFVargasT) <a href="https://twitter.com/SFVargasT/status/1207770726528421893?ref_src=twsrc%5Etfw">19 de diciembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-12-13'
        },
        {
          title: 'Comida día del taxista',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Acompañé al Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>, a la comida con motivo del <a href="https://twitter.com/hashtag/D%C3%ADaDelTaxista?src=hash&amp;ref_src=twsrc%5Etfw">#DíaDelTaxista</a>. <br>En el <a href="https://twitter.com/gobiernohidalgo?ref_src=twsrc%5Etfw">@gobiernohidalgo</a>, reiteramos nuestro compromiso con ellos; de implementar políticas públicas en materia de movilidad que fortalezcan su sector y que así, mejore el servicio para los hidalguenses. <a href="https://t.co/YawAr5ueUT">pic.twitter.com/YawAr5ueUT</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1206751804962283520?ref_src=twsrc%5Etfw">17 de diciembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-12-16'
        },
        {
          title: 'Reunión con el DIFH para tratar temas sobre ONGs',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Me reuní con <a href="https://twitter.com/PatyGonzalez_?ref_src=twsrc%5Etfw">@PatyGonzalez_</a>, Dir. del <a href="https://twitter.com/difhgo?ref_src=twsrc%5Etfw">@difhgo</a> para darle seguimiento a uno de los temas prioritarios del Gob <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>: trabajar de la mano con las ONG´s para fortalecer la seguridad en <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a>, a través de la cooperación con los distintos órdenes de gobierno y sociedad civil. <a href="https://t.co/hB7pV7cHQ7">pic.twitter.com/hB7pV7cHQ7</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1206766880821661696?ref_src=twsrc%5Etfw">17 de diciembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-12-16'
        },
        {
          title: 'Reunión de coordinación con el equipo de trabajo de la SEPPE',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">El 2019 ha dejado buenos resultados para <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a>. <br>Pero en el Gob de <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>, sabemos que aún falta mucho por hacer. <br>Estamos cerrando el año trabajando para enfocar las acciones del <a href="https://twitter.com/gobiernohidalgo?ref_src=twsrc%5Etfw">@gobiernohidalgo</a> y que en 2020 nuestras familias tengan más oportunidades de salir adelante. <a href="https://t.co/zKT0UsycAD">pic.twitter.com/zKT0UsycAD</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1207072556840177664?ref_src=twsrc%5Etfw">17 de diciembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-12-17'
        },
        {
          title: 'Entrevista de radio en el programa Enfoque Regional en 100.5 sobre la gira en Europa y las nuevas inversiones',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">3,300 mdp de nuevas inversiones para <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a>, derivado de las reuniones de Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> en su gira a Europa. <br>¿Quieres saber más? <br>Escucha <a href="https://twitter.com/hashtag/EnfoqueRegional?src=hash&amp;ref_src=twsrc%5Etfw">#EnfoqueRegional</a>, en punto de las 18:00 h por <a href="https://twitter.com/hashtag/SuperEstereo?src=hash&amp;ref_src=twsrc%5Etfw">#SuperEstereo</a> 100.5 Fm. <br>Estaré con Yolanda Perez, platicando de esto y más.</p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1207087103797936128?ref_src=twsrc%5Etfw">17 de diciembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-12-17'
        },
        {
          title: 'Entrevista de radio en el programa Vocales radio en 98.1 sobre la gira en Europa y las nuevas inversiones',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">¿Quieres saber más sobre la gira del Gobernador <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> por Europa y que beneficios trajo al Estado? <br>No te pierdas <a href="https://twitter.com/vocalesradio?ref_src=twsrc%5Etfw">@vocalesradio</a> en punto de las 8:00 h, estaré con <a href="https://twitter.com/hashtag/Andr%C3%A9sTorres?src=hash&amp;ref_src=twsrc%5Etfw">#AndrésTorres</a> platicando sobre esto. <br>Sintonízanos por 98.1 FM de <a href="https://twitter.com/RedHidalgoRadio?ref_src=twsrc%5Etfw">@RedHidalgoRadio</a>.</p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1207296514235736065?ref_src=twsrc%5Etfw">18 de diciembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-12-18'
        },
        {
          title: 'Entrevista de radio en el programa Ultra Noticias en 102.9 sobre la gira en Europa y las nuevas inversiones',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">El Gobernador <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>, encabezó una gira por Europa que dejó buenos resultados para Hidalgo. <br>¿Quieres saber más? <br>En punto de las 9:05 am, estaré con <a href="https://twitter.com/hashtag/DanielMartinez?src=hash&amp;ref_src=twsrc%5Etfw">#DanielMartinez</a> en <a href="https://twitter.com/hashtag/UltraNoticias?src=hash&amp;ref_src=twsrc%5Etfw">#UltraNoticias</a>, para platicar de esto. <br>Escúchala por 📻 102.9 FM de Ultra Hidalgo.</p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1207313106084487168?ref_src=twsrc%5Etfw">18 de diciembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-12-18'
        },
        {
          title: 'Entrevista de radio en el programa Enlace Hidalgo en 90.1 sobre la gira en Europa y las nuevas inversiones',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">El Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>, trajo grandes noticias para <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a> de su gira de trabajo en Europa. <br>¿Quieres saber cuáles?<br>Escucha <a href="https://twitter.com/hashtag/EnlaceHidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#EnlaceHidalgo</a> en punto de las 19:30 h, por <a href="https://twitter.com/nq_radio?ref_src=twsrc%5Etfw">@nq_radio</a> 90.1 FM,  estaré platicando con Carmen Larrieta sobre esto y más. <br>¡Sintonízanos!</p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1207469745840111616?ref_src=twsrc%5Etfw">19 de diciembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-12-18'
        },
        {
          title: 'Sinodal enexamen de la Maestria de Gestión y Alta gerencia pública',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Inicio este viernes como sinodal invitado de un examen profesional en <a href="https://twitter.com/elcolegiohgo?ref_src=twsrc%5Etfw">@elcolegiohgo</a>. <br>Tuvimos una interesante discusión sobre ingresos públicos y los retos que enfrentan los gobiernos actuales para atender las necesidades más apremiantes de la población. <a href="https://t.co/HhhwslsCpW">https://t.co/HhhwslsCpW</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1208045383747821568?ref_src=twsrc%5Etfw">20 de diciembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-12-20'
        },
        {
          title: 'Entrevista con Rodolfo Ortiz en Nq Radio sobre la gira por Europa y las nuevas inversiones',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Hoy en punto de las 14:30 h, estaré con <a href="https://twitter.com/RodolfoOrtizE?ref_src=twsrc%5Etfw">@RodolfoOrtizE</a> en <a href="https://twitter.com/nq_radio?ref_src=twsrc%5Etfw">@nq_radio</a> 90.1 FM, platicando sobre la gira de trabajo por Europa que encabezó el Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> y los beneficios que trajo para <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a>. <br>¡Sintonízanos 📻!</p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1208120251365253120?ref_src=twsrc%5Etfw">20 de diciembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-12-20'
        },
        {
          title: 'Reunión con equipos de diversas secretarias del Gobierno del Estado de Hidalgo',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Me reuní con equipos del <a href="https://twitter.com/gobiernohidalgo?ref_src=twsrc%5Etfw">@gobiernohidalgo</a>, para seguir reforzando las acciones en uno de los temas prioritarios para nuestras familias: combate a la pobreza. <br>En lo que va de la admón. de <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>, más de 167 mil hidalguenses han salido de esta situación y <a href="https://twitter.com/hashtag/vamosporm%C3%A1s?src=hash&amp;ref_src=twsrc%5Etfw">#vamospormás</a>. <a href="https://t.co/qYx0hoIuxI">pic.twitter.com/qYx0hoIuxI</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1208136944045002757?ref_src=twsrc%5Etfw">20 de diciembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-12-20'
        },
        {
          title: 'Asistencia al evento del inicio de operaciones del Túnel Emisor Oriente',
          id: 'Apasco',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Acompañé al Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>, al Presidente <a href="https://twitter.com/lopezobrador_?ref_src=twsrc%5Etfw">@lopezobrador_</a>, a <a href="https://twitter.com/GMarquezColin?ref_src=twsrc%5Etfw">@GMarquezColin</a>, Sria. de <a href="https://twitter.com/SE_mx?ref_src=twsrc%5Etfw">@SE_mx</a>, a <a href="https://twitter.com/alfredodelmazo?ref_src=twsrc%5Etfw">@alfredodelmazo</a>, Gob. del <a href="https://twitter.com/Edomex?ref_src=twsrc%5Etfw">@Edomex</a>, a <a href="https://twitter.com/Claudiashein?ref_src=twsrc%5Etfw">@Claudiashein</a>, Jefa de Gob. de la <a href="https://twitter.com/hashtag/CDMX?src=hash&amp;ref_src=twsrc%5Etfw">#CDMX</a> y al empresario <a href="https://twitter.com/hashtag/CarloSlim?src=hash&amp;ref_src=twsrc%5Etfw">#CarloSlim</a>, al inicio de operaciones del Túnel Emisor Oriente.<br>📸 Foto por: Mauricio Huizar <a href="https://t.co/9TykOLzB3f">pic.twitter.com/9TykOLzB3f</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1209185299072315392?ref_src=twsrc%5Etfw">23 de diciembre de 2019</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2019-12-23'
        },
        {
          title: 'Entrevista en el programa "Charlas de Café" por Presumiendo México TV',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Amigos los invitamos a ver su programa <a href="https://twitter.com/hashtag/CharlasdeCaf%C3%A9?src=hash&amp;ref_src=twsrc%5Etfw">#CharlasdeCafé</a> en su nueva temporada 2020; hoy lunes a partir de las 18:00 pm tendremos como padrino al  Secretario <a href="https://twitter.com/JLRomoCruz?ref_src=twsrc%5Etfw">@JLRomoCruz</a> de la <a href="https://twitter.com/SEPPEHidalgo?ref_src=twsrc%5Etfw">@SEPPEHidalgo</a>; quién nos platicará sobre su vida.<br>Agradecemos a <a href="https://twitter.com/Chikitacafe?ref_src=twsrc%5Etfw">@Chikitacafe</a> por las facilidades.<a href="https://twitter.com/hashtag/pmtvhgo?src=hash&amp;ref_src=twsrc%5Etfw">#pmtvhgo</a> <a href="https://t.co/xpotWehMwb">pic.twitter.com/xpotWehMwb</a></p>&mdash; PRESUMIENDO MEXICO TV HIDALGO (@PresumiendoHgo) <a href="https://twitter.com/PresumiendoHgo/status/1212424852856066049?ref_src=twsrc%5Etfw">1 de enero de 2020</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-01-01'
        },
        {
          title: 'Visita del Presidente Andres Manuel Lopez Obrador a la Región Otomí Tepehua',
          id: 'Tenango de Doria',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Damos inicio a un nuevo año de trabajo, presentes en el Diálogo del Gobernador <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> y el Pdte. <a href="https://twitter.com/lopezobrador_?ref_src=twsrc%5Etfw">@lopezobrador_</a>, con los Pueblos Otomí y Tepehua en <a href="https://twitter.com/hashtag/TenangoDeDoria?src=hash&amp;ref_src=twsrc%5Etfw">#TenangoDeDoria</a>, en su primera visita oficial del 2020 a <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a>. <a href="https://t.co/dQLBhlpGw9">pic.twitter.com/dQLBhlpGw9</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1213561575908487169?ref_src=twsrc%5Etfw">4 de enero de 2020</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-01-04'
        },
        {
          title: 'Cabalgata de Reyes',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Fue un gusto, acompañar al Gobernador <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> a la Cabalgata de <a href="https://twitter.com/hashtag/ReyesMagosHidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#ReyesMagosHidalgo</a> en nuestra capital. <br>Una noche llena de magia, ilusión y mucha diversión para las familias que se dieron cita. <a href="https://t.co/2fHNIMnNvK">pic.twitter.com/2fHNIMnNvK</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1214032240952274945?ref_src=twsrc%5Etfw">6 de enero de 2020</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-01-05'
        },
        {
          title: 'Tradicional Partida de Rosca de Reyes',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Comenzamos la semana acompañando al Gobernador <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> a la tradicional partida de la Rosca de <a href="https://twitter.com/hashtag/ReyesMagosHidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#ReyesMagosHidalgo</a> de 800 m y más de 3 Toneladas de peso. <br>Vivimos un gran ambiente junto a los cientos de familias que hoy se dieron cita en Plaza Juárez de nuestra capital. <a href="https://t.co/M1QxBF3tDR">pic.twitter.com/M1QxBF3tDR</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1214276194243354631?ref_src=twsrc%5Etfw">6 de enero de 2020</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-01-06'
        },
        {
          title: 'Cabalgata de Reyes',
          id: 'Tulancingo',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Fue un gusto estar junto al Gobernador <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> y las familias de <a href="https://twitter.com/hashtag/Tulancingo?src=hash&amp;ref_src=twsrc%5Etfw">#Tulancingo</a> que se dieron cita para disfrutar de la tradicional Cabalgata de <a href="https://twitter.com/hashtag/ReyesMagosHidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#ReyesMagosHidalgo</a>. <br>¡Muchas gracias a todos por asistir! <a href="https://t.co/JZTxS4j5EE">pic.twitter.com/JZTxS4j5EE</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1214383777142779904?ref_src=twsrc%5Etfw">7 de enero de 2020</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-01-06'
        },
        {
          title: 'Reunion con Juan de Dios Pontigo, Secretario Ejecutivo del Consejo Estatal de Seguridad Pública',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Me reuní con <a href="https://twitter.com/pontigoloyola?ref_src=twsrc%5Etfw">@pontigoloyola</a>, Srio. Ejecutivo del <a href="https://twitter.com/Srio_CespHgo?ref_src=twsrc%5Etfw">@Srio_CespHgo</a> para que, a través de sus estadísticas, focalicemos las políticas públicas en materia de seguridad y mantengamos a <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a> como uno de los estados más seguros de México; como es la visión del Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>. <a href="https://t.co/Zibn9CmM04">pic.twitter.com/Zibn9CmM04</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1214711591838584834?ref_src=twsrc%5Etfw">8 de enero de 2020</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-01-07'
        },
        {
          title: 'Reunión con SEDESOH',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Me reuní con <a href="https://twitter.com/DanielRolandoJ?ref_src=twsrc%5Etfw">@DanielRolandoJ</a> de <a href="https://twitter.com/SEDESOHidalgo?ref_src=twsrc%5Etfw">@SEDESOHidalgo</a>, para afinar los nuevos proyectos del Gobierno de <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> que implementaremos este 2020 para combatir la pobreza y hacerle frente a las necesidades de los hidalguenses. <a href="https://t.co/Q2Xv0f4DbW">pic.twitter.com/Q2Xv0f4DbW</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1214717553697808392?ref_src=twsrc%5Etfw">8 de enero de 2020</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-01-07'
        },
        {
          title: 'Reunión con el Sistema DIFH',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Me reuní con <a href="https://twitter.com/PatyGonzalez_?ref_src=twsrc%5Etfw">@PatyGonzalez_</a>, Directora del <a href="https://twitter.com/difhgo?ref_src=twsrc%5Etfw">@difhgo</a> para revisar y fortalecer los proyectos que implementaremos en este año. <br>Estamos trabajando para que quienes más lo necesitan, tengan las herramientas para salir adelante; como lo indicó el Gobernador <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>. <a href="https://t.co/CVhHycUXqi">pic.twitter.com/CVhHycUXqi</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1215010772465717248?ref_src=twsrc%5Etfw">8 de enero de 2020</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-01-08'
        },
        {
          title: 'Cabalgata de Reyes',
          id: 'Tizayuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">¡Que gran noche vivimos hoy junto al Gobernador <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>!<br>La Cabalgata de <a href="https://twitter.com/hashtag/ReyesMagosHidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#ReyesMagosHidalgo</a> llenó de alegría y diversión las calles de <a href="https://twitter.com/hashtag/Tizayuca?src=hash&amp;ref_src=twsrc%5Etfw">#Tizayuca</a>, y las familias que se dieron cita vivieron un momento inolvidable. <a href="https://twitter.com/hashtag/HidalgoCreceContigo?src=hash&amp;ref_src=twsrc%5Etfw">#HidalgoCreceContigo</a> <a href="https://t.co/o9vJ4rUBqV">pic.twitter.com/o9vJ4rUBqV</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1215102555803484160?ref_src=twsrc%5Etfw">9 de enero de 2020</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-01-08'
        },
        {
          title: 'Cabalgata de Reyes',
          id: 'Ixmiquilpan',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">¡Qué gran noche vivimos en <a href="https://twitter.com/hashtag/Ixmiquilpan?src=hash&amp;ref_src=twsrc%5Etfw">#Ixmiquilpan</a>!<br>Junto al Gobernador <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> y las cientos de familias que se dieron cita, disfrutamos de la Cabalgata de <a href="https://twitter.com/hashtag/ReyesMagosHidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#ReyesMagosHidalgo</a>: un espectáculo único lleno de alegría y diversión para todas las edades. <a href="https://t.co/c2DwTLgtkJ">pic.twitter.com/c2DwTLgtkJ</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1215846902446596096?ref_src=twsrc%5Etfw">11 de enero de 2020</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-01-10'
        },
        {
          title: 'Gira por la Sierra Gorda del Estado',
          id: 'Jacala',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Comenzamos este sábado muy temprano, camino a la Sierra Gorda de nuestro Estado 🚗 para dar seguir seguimiento a las solicitudes hechas en las <a href="https://twitter.com/hashtag/AudienciasP%C3%BAblicas?src=hash&amp;ref_src=twsrc%5Etfw">#AudienciasPúblicas</a> del Gobernador <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>. <a href="https://twitter.com/hashtag/HidalgoCreceContigo?src=hash&amp;ref_src=twsrc%5Etfw">#HidalgoCreceContigo</a> <a href="https://t.co/rj0fAZa23q">pic.twitter.com/rj0fAZa23q</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1215998308893777920?ref_src=twsrc%5Etfw">11 de enero de 2020</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-01-11'
        },
        {
          title: 'Cabalgata de Reyes',
          id: 'Tula de Allende',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Me dio mucho gusto acompañar al Gobernador <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> a la Cabalgata de <a href="https://twitter.com/hashtag/ReyesMagosHidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#ReyesMagosHidalgo</a> en <a href="https://twitter.com/hashtag/TulaDeAllende?src=hash&amp;ref_src=twsrc%5Etfw">#TulaDeAllende</a>. <br>Vivimos un momento familiar lleno de alegría y diversión con los personajes favoritos de los niños. <a href="https://t.co/70aPquwcru">pic.twitter.com/70aPquwcru</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1216555418345885696?ref_src=twsrc%5Etfw">13 de enero de 2020</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-01-12'
        },
        {
          title: 'Reunión de Protección a Victimas',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Hoy nos volvemos a reunir con rep. de esas organizaciones para darle seguimiento y cumplir con la instrucción del Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>: proporcionar las herramientas necesarias para atender a las víctimas de estos casos.<a href="https://twitter.com/hashtag/HidalgoCreceContigo?src=hash&amp;ref_src=twsrc%5Etfw">#HidalgoCreceContigo</a>. <a href="https://t.co/Kj3qtE7wx9">pic.twitter.com/Kj3qtE7wx9</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1216886518402502656?ref_src=twsrc%5Etfw">14 de enero de 2020</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-01-13'
        },
        {
          title: 'Entrevista de Radio en Neurotika con Edmundo Pineda',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Hoy estaré junto a <a href="https://twitter.com/hashtag/EdmundoPineda?src=hash&amp;ref_src=twsrc%5Etfw">#EdmundoPineda</a> en su programa <a href="https://twitter.com/hashtag/EnPortada?src=hash&amp;ref_src=twsrc%5Etfw">#EnPortada</a>, a través de <a href="https://twitter.com/NeurotikPachuca?ref_src=twsrc%5Etfw">@NeurotikPachuca</a>. <br>Hablando sobre los más de 23 mil empleos que se han creado en 39 meses del gobierno de <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>. <br>¿Cómo lo conseguimos? <br>Escucha el 106.1 FM, en punto de las 20:30 h.<br><br>¡No te la pierdas!</p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1216904240104214528?ref_src=twsrc%5Etfw">14 de enero de 2020</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-01-13'
        },
        {
          title: 'Reunión de coordinación con el equipo de trabajo de la SEPPE',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Junto al equipo de trabajo de la <a href="https://twitter.com/SEPPEHidalgo?ref_src=twsrc%5Etfw">@SEPPEHidalgo</a>, evaluamos las políticas públicas del Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> que implementaremos este 2020, el objetivo: continuar con los buenos resultados, mejorar la calidad de vida de los hidalguenses y que tengan más oportunidades para salir adelante. <a href="https://t.co/a1FICTZY2Y">pic.twitter.com/a1FICTZY2Y</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1217198207446462465?ref_src=twsrc%5Etfw">14 de enero de 2020</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-01-14'
        },
        {
          title: 'Entrevista en NQ Radio con Carmen Larrieta',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">La estrategia en materia de inversiones y generación de empleos está dando resultados positivos para <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a>. <br>¿Quieres saber cuáles son?🤔<br>Escucha <a href="https://twitter.com/hashtag/EnlaceHidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#EnlaceHidalgo</a> en punto de las 19:30 h, por <a href="https://twitter.com/nq_radio?ref_src=twsrc%5Etfw">@nq_radio</a> 90.1 FM, estaré platicando <a href="https://twitter.com/hashtag/CarmenLarrieta?src=hash&amp;ref_src=twsrc%5Etfw">#CarmenLarrieta</a> sobre esto y más. <br>¡Sintonízanos!</p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1217251777793404929?ref_src=twsrc%5Etfw">15 de enero de 2020</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-01-14'
        },
        {
          title: 'Reunión con el Secretario de Salud, Dr. Marco Antonio Escamilla Acosta',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">La salud de nuestras familias es prioridad en el Gobierno de <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>.<br>Por eso, me reuní con el Srio. <a href="https://twitter.com/SSH_Escamilla?ref_src=twsrc%5Etfw">@SSH_Escamilla</a> de <a href="https://twitter.com/Salud_Hidalgo?ref_src=twsrc%5Etfw">@Salud_Hidalgo</a> para revisar y fortalecer las políticas públicas que les permitan a los hidalguenses tener acceso a servicios médicos de calidad. <a href="https://t.co/UaykNdoalZ">pic.twitter.com/UaykNdoalZ</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1217507187230113794?ref_src=twsrc%5Etfw">15 de enero de 2020</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-01-15'
        },
        {
          title: 'Ceremonia con motivo del 151 Aniversario de la Creación del Estado de Hidalgo',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Hoy en <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a>: ¡Estamos de fiesta! <br>Han pasado <a href="https://twitter.com/hashtag/151A%C3%B1osDeOrgullo?src=hash&amp;ref_src=twsrc%5Etfw">#151AñosDeOrgullo</a> desde que entró en vigencia el decreto de erección de nuestro Estado.<br>Me dio mucho gusto acompañar al Gobernador <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> a las actividades conmemorativas del aniversario. <a href="https://t.co/Z9AtRUCYLK">pic.twitter.com/Z9AtRUCYLK</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1217893968064778242?ref_src=twsrc%5Etfw">16 de enero de 2020</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-01-16'
        },
        {
          title: 'Reunión de seguimiento con ONGs',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Junto al Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> y los Srios del <a href="https://twitter.com/gobiernohidalgo?ref_src=twsrc%5Etfw">@gobiernohidalgo</a>, nos reunimos con representantes de 9 organizaciones no gubernamentales para darle seguimiento a los temas tratados en diciembre pasado con ellos y que nos interesan a todos: los derechos y la seguridad de los hidalguenses <a href="https://t.co/hJm3zgMOZ3">pic.twitter.com/hJm3zgMOZ3</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1217979137245306880?ref_src=twsrc%5Etfw">17 de enero de 2020</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-01-16'
        },
        {
          title: 'Audiencia Pública',
          id: 'Tlahuiltepa',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr"><a href="https://twitter.com/hashtag/Tlahuiltepa?src=hash&amp;ref_src=twsrc%5Etfw">#Tlahuiltepa</a>: ahí vamos. 🚗🚑🚓<br>El Gobernador <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> y todo el equipo del <a href="https://twitter.com/gobiernohidalgo?ref_src=twsrc%5Etfw">@gobiernohidalgo</a>, estaremos en <a href="https://twitter.com/hashtag/AudienciaP%C3%BAblica?src=hash&amp;ref_src=twsrc%5Etfw">#AudienciaPública</a> para acercarles a los habitantes de esta región: brigadas médicas móviles, vacantes de empleo pero sobretodo; respuesta a sus necesidades. <a href="https://t.co/RYVjIQUqeR">pic.twitter.com/RYVjIQUqeR</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1218165827385430016?ref_src=twsrc%5Etfw">17 de enero de 2020</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-01-17'
        },
        {
          title: 'Macro simulacro 2020',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">No podemos saber cuándo ocurrirán los desastres pero sí podemos estar prevenidos.<br>Esta mañana, participamos en el <a href="https://twitter.com/hashtag/MacroSimulacro2020?src=hash&amp;ref_src=twsrc%5Etfw">#MacroSimulacro2020</a> con el objetivo de fortalecer la cultura de prevención y rápida respuesta ante las posibles emergencias. <a href="https://t.co/ouym37MuXV">pic.twitter.com/ouym37MuXV</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1219327481012006912?ref_src=twsrc%5Etfw">20 de enero de 2020</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-01-20'
        },
        {
          title: 'Reunión con SEDECO',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Pero no es suficiente, por eso me reuní con el Srio. <a href="https://twitter.com/SFVargasT?ref_src=twsrc%5Etfw">@SFVargasT</a> de <a href="https://twitter.com/Sedeco_Hgo?ref_src=twsrc%5Etfw">@Sedeco_Hgo</a> para reforzar las acciones en materia de generación de empleos y seguir creando oportunidades para que los hidalguenses puedan salir adelante y que <a href="https://twitter.com/hashtag/HidalgoCrezcaContigo?src=hash&amp;ref_src=twsrc%5Etfw">#HidalgoCrezcaContigo</a>. <a href="https://t.co/UKc92zx6Ny">pic.twitter.com/UKc92zx6Ny</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1219846542569431041?ref_src=twsrc%5Etfw">22 de enero de 2020</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-01-21'
        },
        {
          title: 'Audiencia Pública',
          id: 'Emiliano Zapata',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">¡Vámonos! 🚗🚓🚑👩🏻‍💻🧑🏽‍🌾<br>¿A dónde? <br>• Al Mpio. de <a href="https://twitter.com/hashtag/EmilianoZapata?src=hash&amp;ref_src=twsrc%5Etfw">#EmilianoZapata</a><br>¿A qué? <br>• A la <a href="https://twitter.com/hashtag/AudienciaP%C3%BAblica?src=hash&amp;ref_src=twsrc%5Etfw">#AudienciaPública</a> del Gobernador <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> y todo el <a href="https://twitter.com/gobiernohidalgo?ref_src=twsrc%5Etfw">@gobiernohidalgo</a>. <br>¿Para qué? <br>• Para dar respuesta a las necesidades de las familias de la región. <a href="https://t.co/GnZjehvA3a">pic.twitter.com/GnZjehvA3a</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1220369215019835392?ref_src=twsrc%5Etfw">23 de enero de 2020</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-01-23'
        },
        {
          title: 'Visita del Secretario de Hacienda Arturo Herrera',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Desde mayo pasado, el índice de delito ha disminuido, derivado de la entrada en operaciones del centro de videovigilancia más moderno de América Latina: el <a href="https://twitter.com/C5i_Hidalgo?ref_src=twsrc%5Etfw">@C5i_Hidalgo</a> <a href="https://t.co/T30l0ALiU5">https://t.co/T30l0ALiU5</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1221834269040898051?ref_src=twsrc%5Etfw">27 de enero de 2020</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-01-24'
        },
        {
          title: 'Reuniones de trabajo en el Despacho',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet" data-lang="es"><p lang="es" dir="ltr">Cuando tienes un objetivo en mente, no hay día que no trabajes en él.<br>Nuestro objetivo en el Gob de <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> es impulsar el desarrollo de <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a>.<br>Este sábado tuvimos un productivo día de trabajo dando seguimiento a las acciones del <a href="https://twitter.com/gobiernohidalgo?ref_src=twsrc%5Etfw">@gobiernohidalgo</a> y que <a href="https://twitter.com/hashtag/HidalgoCrezcaContigo?src=hash&amp;ref_src=twsrc%5Etfw">#HidalgoCrezcaContigo</a> <a href="https://t.co/9ImKkvoPuT">pic.twitter.com/9ImKkvoPuT</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1221212542183387141?ref_src=twsrc%5Etfw">25 de enero de 2020</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-01-25'
        },
        {
          title: 'Entrega de aulas digitales, libros y útiles escolares a instituciones de Educación Media Superior y Superior',
          id: 'Tizayuca',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">La educación es la herramienta más poderosa para impulsar el desarrollo de nuestro Estado. En el <a href="https://twitter.com/gobiernohidalgo?ref_src=twsrc%5Etfw">@gobiernohidalgo</a> lo sabemos; por eso, con gusto acompañé al Gob <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> a entregar aulas digitales, libros y útiles escolares a instituciones de Educación Media Superior y Superior <a href="https://t.co/umT9ROSJdq">pic.twitter.com/umT9ROSJdq</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1221892773411901441?ref_src=twsrc%5Etfw">January 27, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-01-27'
        },
        {
          title: 'Reunión de coordinación con el equipo de trabajo de la SEPPE',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr"><a href="https://twitter.com/hashtag/Reuni%C3%B3nDeCoordinaci%C3%B3n?src=hash&amp;ref_src=twsrc%5Etfw">#ReuniónDeCoordinación</a> con todo mi equipo de la <a href="https://twitter.com/SEPPEHidalgo?ref_src=twsrc%5Etfw">@SEPPEHidalgo</a>, para revisar y fortalecer las políticas públicas del Gobernador <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> con el fin de acelerar el desarrollo integral en <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a>. <br>Estamos trabajando para que <a href="https://twitter.com/hashtag/HidalgoCrezcaContigo?src=hash&amp;ref_src=twsrc%5Etfw">#HidalgoCrezcaContigo</a>. <a href="https://t.co/mJWl6c7zKQ">pic.twitter.com/mJWl6c7zKQ</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1221925966768898049?ref_src=twsrc%5Etfw">January 27, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-01-27'
        },
        {
          title: 'Recorrido por el Hospital General del ISSSTE Columba Rivera Osorio',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">Junto al Gobernador <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> y <a href="https://twitter.com/LuisAntoRamirez?ref_src=twsrc%5Etfw">@LuisAntoRamirez</a>, Dir. Gral. del <a href="https://twitter.com/ISSSTE_mx?ref_src=twsrc%5Etfw">@ISSSTE_mx</a> recorrimos el Hospital General Columba Rivera Osorio de <a href="https://twitter.com/hashtag/Pachuca?src=hash&amp;ref_src=twsrc%5Etfw">#Pachuca</a>. <br>El objetivo es seguir mejorando los servicios de salud para que nuestras familias tengan acceso a atención médica de calidad. <a href="https://t.co/SqPqayOub2">pic.twitter.com/SqPqayOub2</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1222294640755400709?ref_src=twsrc%5Etfw">January 28, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-01-28'
        },
        {
          title: 'Entrevista por 97.1 para tratar tema de Beneficios de las Audiencias Públicas',
          id: 'Tulancingo',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">Para toda la región de <a href="https://twitter.com/hashtag/Tulancingo?src=hash&amp;ref_src=twsrc%5Etfw">#Tulancingo</a>, los invito a escuchar <a href="https://twitter.com/hashtag/S%C3%BAperEst%C3%A9reoMiled?src=hash&amp;ref_src=twsrc%5Etfw">#SúperEstéreoMiled</a> por 97.1 FM 📻.<br>Estaré con Ma. Antonieta Islas en punto de las 8:10 am, platicando sobre los beneficios para los hidalguenses de la <a href="https://twitter.com/hashtag/AudienciaP%C3%BAblica?src=hash&amp;ref_src=twsrc%5Etfw">#AudienciaPública</a> del Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> hoy, en el Mpio. de <a href="https://twitter.com/hashtag/AguaBlanca?src=hash&amp;ref_src=twsrc%5Etfw">#AguaBlanca</a>.</p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1222879189717725184?ref_src=twsrc%5Etfw">January 30, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-01-30'
        },
        {
          title: 'Entrevista por 90.5 NQ Radio para tratar tema de Beneficios de las Audiencias Públicas',
          id: 'Tulancingo',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">La <a href="https://twitter.com/hashtag/AudienciaP%C3%BAblica?src=hash&amp;ref_src=twsrc%5Etfw">#AudienciaPública</a> del Gobernador <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> en el Mpio. de <a href="https://twitter.com/hashtag/AguaBlanca?src=hash&amp;ref_src=twsrc%5Etfw">#AguaBlanca</a>, trae beneficios para las familias de la región. <br>¿Quieres saber cuáles? <br>Escucha a las 8:30 am, <a href="https://twitter.com/hashtag/EnlaceHidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#EnlaceHidalgo</a> por <a href="https://twitter.com/nq_radio?ref_src=twsrc%5Etfw">@nq_radio</a> 90.1 FM; estaré con Juan José Caballero platicando sobre esto y más.</p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1222888606718746629?ref_src=twsrc%5Etfw">January 30, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-01-30'
        },
        {
          title: 'Entrevista por 1140 AM Radio para tratar tema de Beneficios de las Audiencias Públicas',
          id: 'Tulancingo',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">La <a href="https://twitter.com/hashtag/AudienciaP%C3%BAblica?src=hash&amp;ref_src=twsrc%5Etfw">#AudienciaPública</a> del Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> llegó al Mpio. de <a href="https://twitter.com/hashtag/AguaBlanca?src=hash&amp;ref_src=twsrc%5Etfw">#AguaBlanca</a> para beneficiar a los habitantes de la región. <br>¿De qué manera? <br>Te lo platico a las 9:00 am, por el 1140 AM de <a href="https://twitter.com/RedHidalgoRadio?ref_src=twsrc%5Etfw">@RedHidalgoRadio</a>, junto a Marcos Alarcón Velasco. <br>¡Te esperamos!</p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1222894741232087042?ref_src=twsrc%5Etfw">January 30, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-01-30'
        },
        {
          title: 'Audiencia Pública',
          id: 'Agua Blanca de Iturbide',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">Atendimos y escuchamos a más de 2,600 personas en <a href="https://twitter.com/hashtag/AudienciaP%C3%BAblica?src=hash&amp;ref_src=twsrc%5Etfw">#AudienciaPública</a>.<br>Esa es la visión del Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>: ir a donde haga falta y darle a los hidalguenses, las herramientas para que se desarrollen e <a href="https://twitter.com/hashtag/HidalgoCrezca?src=hash&amp;ref_src=twsrc%5Etfw">#HidalgoCrezca</a> con todos ellos. <a href="https://t.co/oj1byiMNuY">pic.twitter.com/oj1byiMNuY</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1223052280360001536?ref_src=twsrc%5Etfw">January 31, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-01-30'
        },
        {
          title: 'Instalación de la Comisión Interinstitucional contra la Trata de Personas para el Estado de Hidalgo',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">Acompañé al Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> a la instalación de la Comisión Interinstitucional contra la Trata de Personas para el Estado de Hidalgo.<br>Estamos haciendo un frente común con dif. organismos y sociedad civil; que garantice y proteja los derechos de quiénes son víctimas de este delito <a href="https://t.co/lfQUdDgf8g">pic.twitter.com/lfQUdDgf8g</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1223428942083674112?ref_src=twsrc%5Etfw">February 1, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-01-31'
        },
        {
          title: 'Reunión con el equipo de la SEPPE',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">Terminamos este viernes en reunión con el equipo de la <a href="https://twitter.com/hashtag/SEPPEH?src=hash&amp;ref_src=twsrc%5Etfw">#SEPPEH</a>. <br>La instrucción del Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> es clara: fortalecer las políticas públicas del <a href="https://twitter.com/gobiernohidalgo?ref_src=twsrc%5Etfw">@gobiernohidalgo</a> para que nuestras familias tengan más y mejores oportunidades. <br>Queremos que <a href="https://twitter.com/hashtag/HidalgoCrezcaContigo?src=hash&amp;ref_src=twsrc%5Etfw">#HidalgoCrezcaContigo</a>. <a href="https://t.co/5QVwa5knDz">pic.twitter.com/5QVwa5knDz</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1223473759450910721?ref_src=twsrc%5Etfw">February 1, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-01-31'
        },
        {
          title: 'Reuniones de trabajo en el Despacho',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">Hoy tuvimos un productivo sábado de trabajo. 👌🏼 <br>Porque sin importar el día, en el Gobierno de <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> trabajamos para que tengas más y mejores oportunidades, salgas adelante, mejores tu calidad de vida y que <a href="https://twitter.com/hashtag/HidalgoCrezcaContigo?src=hash&amp;ref_src=twsrc%5Etfw">#HidalgoCrezcaContigo</a>. <a href="https://t.co/zZtKR4Hffq">pic.twitter.com/zZtKR4Hffq</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1223763587036065793?ref_src=twsrc%5Etfw">February 2, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-02-01'
        },
        {
          title: 'Visita del Secretario de Turismo Miguel Torruco Marqués',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">Es un día muy especial para los hidalguenses, porque hoy Hidalgo se erige como Sede Bienal de <a href="https://twitter.com/hashtag/TianguisPueblosM%C3%A1gicos?src=hash&amp;ref_src=twsrc%5Etfw">#TianguisPueblosMágicos</a>.<br><br>Acompañado de <a href="https://twitter.com/TorrucoTurismo?ref_src=twsrc%5Etfw">@TorrucoTurismo</a>, titular de <a href="https://twitter.com/SECTUR_mx?ref_src=twsrc%5Etfw">@SECTUR_mx</a>, realizamos este importante anuncio, que coloca a Hidalgo en el marco turístico nacional e internacional. <a href="https://t.co/Uv1VxxNIJp">pic.twitter.com/Uv1VxxNIJp</a></p>&mdash; Omar Fayad (@omarfayad) <a href="https://twitter.com/omarfayad/status/1224779546563633152?ref_src=twsrc%5Etfw">February 4, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-02-04'
        },
        {
          title: 'Entrevista con Miguel Ríos por CCRTv',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">Te invito a seguir la plática con <a href="https://twitter.com/hashtag/MiguelR%C3%ADos?src=hash&amp;ref_src=twsrc%5Etfw">#MiguelRíos</a> por <a href="https://twitter.com/CCRtv_?ref_src=twsrc%5Etfw">@CCRtv_</a>, en punto de las 17:45 h. <br>¿De qué hablaremos? <br>De las acciones del Gobierno de <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> que le dan a nuestras familias, más y mejores oportunidades. <br><br>Aquí te dejo el link: <br>📲|| <a href="https://t.co/2OBtHnOHLP">https://t.co/2OBtHnOHLP</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1225200452637057024?ref_src=twsrc%5Etfw">February 5, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-02-05'
        },
        {
          title: 'Reunión con Enrique Simón de la Comisión de Pueblos Indigenas',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">Para que <a href="https://twitter.com/hashtag/HidalgoCrezcaContigo?src=hash&amp;ref_src=twsrc%5Etfw">#HidalgoCrezcaContigo</a>, como es la visión del Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>, nadie se puede quedar atrás. <br>Me reuní con <a href="https://twitter.com/Quique_Simon?ref_src=twsrc%5Etfw">@Quique_Simon</a>, titular de <a href="https://twitter.com/cedspi?ref_src=twsrc%5Etfw">@cedspi</a> para que nuestros pueblos indígenas tengan más y mejores oportunidades y salgan adelante. <a href="https://t.co/CSfNNRVI1b">pic.twitter.com/CSfNNRVI1b</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1225267106989604865?ref_src=twsrc%5Etfw">February 6, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-02-05'
        },
        {
          title: 'Reunión sobre Laboratorio de Gobierno Digital y Políticas Públicas para el Estado de Hidalgo',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">Hoy junto al Srio. <a href="https://twitter.com/LamanCarranza?ref_src=twsrc%5Etfw">@LamanCarranza</a> de <a href="https://twitter.com/PlaneacionHgo?ref_src=twsrc%5Etfw">@PlaneacionHgo</a>, nos reunimos con <a href="https://twitter.com/RemesDe?ref_src=twsrc%5Etfw">@RemesDe</a>, Coordinador académico del <a href="https://twitter.com/LNPP_MX?ref_src=twsrc%5Etfw">@LNPP_MX</a> del <a href="https://twitter.com/CIDE_MX?ref_src=twsrc%5Etfw">@CIDE_MX</a> para platicar sobre el potencial del Laboratorio de Gobierno Digital y Políticas Públicas para el Estado de Hidalgo, como lo indicó el Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>. <a href="https://t.co/wrHaYeZYBG">pic.twitter.com/wrHaYeZYBG</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1225515279104520201?ref_src=twsrc%5Etfw">February 6, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-02-06'
        },
        {
          title: 'Entrevista con Carmen Larrieta por NQ Radio',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">Las <a href="https://twitter.com/hashtag/AudienciasP%C3%BAblicas?src=hash&amp;ref_src=twsrc%5Etfw">#AudienciasPúblicas</a> del Gob <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>, acerca a los hidalguenses diferentes servicios y respuesta a sus necesidades.<br>¿Quieres saber más?<br>Escucha <a href="https://twitter.com/hashtag/EnlaceHidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#EnlaceHidalgo</a> en punto de las 19:10 h, por <a href="https://twitter.com/nq_radio?ref_src=twsrc%5Etfw">@nq_radio</a> 90.1 FM, estaré platicando <a href="https://twitter.com/hashtag/CarmenLarrieta?src=hash&amp;ref_src=twsrc%5Etfw">#CarmenLarrieta</a> sobre esto y más.<br>¡Sintonízanos!</p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1225581746940502019?ref_src=twsrc%5Etfw">February 7, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-02-06'
        },
        {
          title: 'Entrevista con Belinda Perez Rios por Radio y Televisión de Hidalgo',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">En unos minutos más, a las 19:30 h; platicaré con <a href="https://twitter.com/BelindaPrezRios?ref_src=twsrc%5Etfw">@BelindaPrezRios</a> a través de <a href="https://twitter.com/hashtag/HidalgoNoticias?src=hash&amp;ref_src=twsrc%5Etfw">#HidalgoNoticias</a> por <a href="https://twitter.com/RadioyTVHidalgo?ref_src=twsrc%5Etfw">@RadioyTVHidalgo</a>, sobre las <a href="https://twitter.com/hashtag/AudienciasP%C3%BAblicas?src=hash&amp;ref_src=twsrc%5Etfw">#AudienciasPúblicas</a> del Gobernador <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> y los beneficios que traen para los hidalguenses. <br>¡Síguenos!</p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1225590344923873280?ref_src=twsrc%5Etfw">February 7, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-02-06'
        },
        {
          title: 'Inauguración de Milky Mich',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">Me da gusto que un proyecto como <a href="https://twitter.com/hashtag/MilkyMich?src=hash&amp;ref_src=twsrc%5Etfw">#MilkyMich</a>, al que le hemos dado seguimiento en el <a href="https://twitter.com/gobiernohidalgo?ref_src=twsrc%5Etfw">@gobiernohidalgo</a>, hoy abra sus puertas con el formato de franquicia en otro de los grandes proyectos que han llegado en estos 41 meses de la administración de <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>, <a href="https://twitter.com/hashtag/ExplanadaPachuca?src=hash&amp;ref_src=twsrc%5Etfw">#ExplanadaPachuca</a>. <a href="https://t.co/LwF8OBCtiq">pic.twitter.com/LwF8OBCtiq</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1225617295491375104?ref_src=twsrc%5Etfw">February 7, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-02-06'
        },
        {
          title: 'Entrevista con Andres Torres en Vocales Radio',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">La <a href="https://twitter.com/hashtag/AudienciaP%C3%BAblica?src=hash&amp;ref_src=twsrc%5Etfw">#AudienciaPública</a> del Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> llega hoy a <a href="https://twitter.com/hashtag/VillaDeTezontepec?src=hash&amp;ref_src=twsrc%5Etfw">#VillaDeTezontepec</a> para beneficio de nuestras familias. <br>¿De qué manera?<br>No te pierdas <a href="https://twitter.com/vocalesradio?ref_src=twsrc%5Etfw">@vocalesradio</a> a las 8:00 h, estaré con <a href="https://twitter.com/hashtag/Andr%C3%A9sTorres?src=hash&amp;ref_src=twsrc%5Etfw">#AndrésTorres</a>, platicando sobre esto y más.<br>Sintonízanos por 98.1 FM de <a href="https://twitter.com/hashtag/RedHidalgoRadio?src=hash&amp;ref_src=twsrc%5Etfw">#RedHidalgoRadio</a>.</p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1225778770486996992?ref_src=twsrc%5Etfw">February 7, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-02-07'
        },
        {
          title: 'Audiencia Pública',
          id: 'Villa de Tezontepec',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">La instrucción del Gobernador <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> es que sea el <a href="https://twitter.com/gobiernohidalgo?ref_src=twsrc%5Etfw">@gobiernohidalgo</a> quien vaya hasta donde están los hidalguenses, para resolver sus necesidades y no al revés.<br>Llevamos la <a href="https://twitter.com/hashtag/AudienciaP%C3%BAblica?src=hash&amp;ref_src=twsrc%5Etfw">#AudienciaPública</a> al Mpio. de <a href="https://twitter.com/hashtag/VillaDeTezontepec?src=hash&amp;ref_src=twsrc%5Etfw">#VillaDeTezontepec</a> para beneficiar a nuestras familias. <a href="https://t.co/O3mCuWdtKL">pic.twitter.com/O3mCuWdtKL</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1225945478392512512?ref_src=twsrc%5Etfw">February 8, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-02-07'
        },
        {
          title: 'Recorrido de supervisión por el nuevo Aeropuerto I. Felipe Ángeles.',
          id: 'Zumpango',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">Acompañé al Gob <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> y al Pdte <a href="https://twitter.com/lopezobrador_?ref_src=twsrc%5Etfw">@lopezobrador_</a>, hoy en el <a href="https://twitter.com/hashtag/DiaDelaFuerzaAereaMexicana?src=hash&amp;ref_src=twsrc%5Etfw">#DiaDelaFuerzaAereaMexicana</a> <br>a un recorrido de supervisión por el nuevo Aeropuerto I. Felipe Ángeles.<br>Ya son notables los avances de este proyecto que, estamos seguros, ayudará al desarrollo de <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a>. <a href="https://t.co/6mGO9CZ79n">pic.twitter.com/6mGO9CZ79n</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1226966301140226048?ref_src=twsrc%5Etfw">February 10, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-02-10'
        },
        {
          title: 'Reunión con la Secretaría de Salud',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">La salud de los hidalguenses es prioridad para el Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>. <br>Me reuní con el Srio <a href="https://twitter.com/SSH_Escamilla?ref_src=twsrc%5Etfw">@SSH_Escamilla</a> de <a href="https://twitter.com/Salud_Hidalgo?ref_src=twsrc%5Etfw">@Salud_Hidalgo</a> para coordinar las acciones del <a href="https://twitter.com/gobiernohidalgo?ref_src=twsrc%5Etfw">@gobiernohidalgo</a> que le permitan a nuestras familias, tener acceso a servicios de salud de calidad y que <a href="https://twitter.com/hashtag/HidalgoCrezcaContigo?src=hash&amp;ref_src=twsrc%5Etfw">#HidalgoCrezcaContigo</a> <a href="https://t.co/y9ACSKLxMV">pic.twitter.com/y9ACSKLxMV</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1227048206007250944?ref_src=twsrc%5Etfw">February 11, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-02-10'
        },
        {
          title: 'Inauguración de la 3er. Semana del Periodismo',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">La importancia del periodismo radica en el poder de darle voz a muchas personas y sentido a los acontecimientos de todos los días. <br><br>En representación del Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>, inauguramos la 3a. Semana del Periodismo <a href="https://twitter.com/hashtag/Hidalgo2020?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo2020</a>. <a href="https://t.co/LSEY9B6NUG">pic.twitter.com/LSEY9B6NUG</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1227650662844026880?ref_src=twsrc%5Etfw">February 12, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-02-12'
        },
        {
          title: 'Banderazo inicial de la 4a. y 5a. Etapa de la Supervía Colosio',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">Hoy <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a> tiene otra cara, resultado de las obras que se han ejecutado en estos 41 meses del <a href="https://twitter.com/gobiernohidalgo?ref_src=twsrc%5Etfw">@gobiernohidalgo</a> y que están transformando la movilidad en nuestro Estado. <br>Acompañé al Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> al banderazo inicial de la 4a. y 5a. Etapa de la <a href="https://twitter.com/hashtag/Superv%C3%ADaColosio?src=hash&amp;ref_src=twsrc%5Etfw">#SupervíaColosio</a>. <a href="https://t.co/eJdhKPt2bC">pic.twitter.com/eJdhKPt2bC</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1227767556917739520?ref_src=twsrc%5Etfw">February 13, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-02-12'
        },
        {
          title: 'Audiencia Pública',
          id: 'San Felipe Orizatlán',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">Ya estamos en la <a href="https://twitter.com/hashtag/HuastecaHidalguense?src=hash&amp;ref_src=twsrc%5Etfw">#HuastecaHidalguense</a> para la Audiencia Pública del Gobernador <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> en <a href="https://twitter.com/hashtag/SanFelipeOrizatlan?src=hash&amp;ref_src=twsrc%5Etfw">#SanFelipeOrizatlan</a>.<br>Aprovecharé la visita para identificar las áreas de oportunidad que mejoren la calidad de vida de nuestras familias en <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a>. <a href="https://t.co/1oaCZoV7CE">pic.twitter.com/1oaCZoV7CE</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1227990705454419969?ref_src=twsrc%5Etfw">February 13, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-02-13'
        },
        {
          title: 'Reunión de coordinación con el equipo de trabajo de la SEPPE',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">La <a href="https://twitter.com/hashtag/Reuni%C3%B3nDeCoordinaci%C3%B3n?src=hash&amp;ref_src=twsrc%5Etfw">#ReuniónDeCoordinación</a> que hacemos periódicamente en la <a href="https://twitter.com/SEPPEHidalgo?ref_src=twsrc%5Etfw">@SEPPEHidalgo</a>, nos permite identificar los principales problemas de los hidalguenses y enfocar las acciones del Gobierno de <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>, en darles respuesta pronta para mejorar la calidad de vida de nuestras familias. <a href="https://t.co/RWRMoAcnDO">pic.twitter.com/RWRMoAcnDO</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1229507640411262976?ref_src=twsrc%5Etfw">February 17, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-02-17'
        },
        {
          title: 'Reunión con los titulares de la SEPH, el Instituto de la Juventud y el Instituto del Deporte.',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">El futuro de <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a> es ya de los jóvenes hidalguenses. Por eso, en el Gobierno de <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> y junto al Srio. <a href="https://twitter.com/atilanorp?ref_src=twsrc%5Etfw">@atilanorp</a> de <a href="https://twitter.com/SEPHidalgo?ref_src=twsrc%5Etfw">@SEPHidalgo</a>, <a href="https://twitter.com/fatimabanos?ref_src=twsrc%5Etfw">@fatimabanos</a> del <a href="https://twitter.com/deportehidalgo?ref_src=twsrc%5Etfw">@deportehidalgo</a> y <a href="https://twitter.com/YoshioCF?ref_src=twsrc%5Etfw">@YoshioCF</a> de <a href="https://twitter.com/juventudHGO?ref_src=twsrc%5Etfw">@juventudHGO</a> estamos discutiendo la estrategia para generarles más y mejores oportunidades. <a href="https://t.co/2WSDXP1a14">pic.twitter.com/2WSDXP1a14</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1229567645290201093?ref_src=twsrc%5Etfw">February 18, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-02-17'
        },
        {
          title: 'Reunión con los equipos de SEDESO, CEDSPI, Cultura y RyTVHgo',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">Me reuní con el Srio. <a href="https://twitter.com/Olaff111?ref_src=twsrc%5Etfw">@Olaff111</a> de <a href="https://twitter.com/CulturaHidalgo?ref_src=twsrc%5Etfw">@CulturaHidalgo</a>, el Subsrio. <a href="https://twitter.com/EscamillaRene?ref_src=twsrc%5Etfw">@EscamillaRene</a> de <a href="https://twitter.com/SEDESOHidalgo?ref_src=twsrc%5Etfw">@SEDESOHidalgo</a>, <a href="https://twitter.com/Quique_Simon?ref_src=twsrc%5Etfw">@Quique_Simon</a> de <a href="https://twitter.com/cedspi?ref_src=twsrc%5Etfw">@cedspi</a> y Cristian Guerrero de <a href="https://twitter.com/RadioyTVHidalgo?ref_src=twsrc%5Etfw">@RadioyTVHidalgo</a> para continuar con las acciones en combate a la pobreza y que <a href="https://twitter.com/hashtag/HidalgoCrezcaContigo?src=hash&amp;ref_src=twsrc%5Etfw">#HidalgoCrezcaContigo</a>. <a href="https://t.co/Yhjr0Bg2WW">pic.twitter.com/Yhjr0Bg2WW</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1229613648844337154?ref_src=twsrc%5Etfw">February 18, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-02-17'
        },
        {
          title: 'Impartición de conferencia en el marco de la Cumbre de Energías Renovables en Nuevo León',
          id: 'Monterrey, Nuevo León',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">En el <a href="https://twitter.com/gobiernohidalgo?ref_src=twsrc%5Etfw">@gobiernohidalgo</a> sabemos que ante el mundo globalizado en el que vivimos, apostar por las energías renovables y el desarrollo sustentable nos permite ser más competitivos y reducir los rezagos que por años, han impedido a <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a> salir adelante. <a href="https://twitter.com/hashtag/CUMBRENERG%C3%8DANL?src=hash&amp;ref_src=twsrc%5Etfw">#CUMBRENERGÍANL</a> <a href="https://t.co/z2vi2XeGho">pic.twitter.com/z2vi2XeGho</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1230199826769268738?ref_src=twsrc%5Etfw">February 19, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-02-19'
        },
        {
          title: 'Entrevista con Gerardo Islas en Al Aire 98.1 FM',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">En punto de las 14:30 estaré con <a href="https://twitter.com/hashtag/GerardoIslas?src=hash&amp;ref_src=twsrc%5Etfw">#GerardoIslas</a> en <a href="https://twitter.com/alaire981?ref_src=twsrc%5Etfw">@alaire981</a> de <a href="https://twitter.com/RedHidalgoRadio?ref_src=twsrc%5Etfw">@RedHidalgoRadio</a> 98.1 FM, desde la <a href="https://twitter.com/hashtag/CUMBRENERGIANL?src=hash&amp;ref_src=twsrc%5Etfw">#CUMBRENERGIANL</a> platicando sobre las acciones del Gob de <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> en materia de energía y desarrollo sustentable que nos colocan como el cluster energético del centro de México</p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1230224448109895681?ref_src=twsrc%5Etfw">February 19, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-02-19'
        },
        {
          title: 'Entre vista con Mara Olvera por Hidalgo Noticias',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">En punto de las 19:30 estaré en <a href="https://twitter.com/hashtag/HidalgoNoticias?src=hash&amp;ref_src=twsrc%5Etfw">#HidalgoNoticias</a> con <a href="https://twitter.com/MaraLiOlvera?ref_src=twsrc%5Etfw">@MaraLiOlvera</a> por <a href="https://twitter.com/hashtag/HidalgoRadio?src=hash&amp;ref_src=twsrc%5Etfw">#HidalgoRadio</a> 98.1 FM, platicando sobre la visión del Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> en materia energética y competitividad que ya es una realidad para el Estado y que fue reconocida hoy en la <a href="https://twitter.com/hashtag/CUMBRENERGIANL?src=hash&amp;ref_src=twsrc%5Etfw">#CUMBRENERGIANL</a>.</p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1230301057735168000?ref_src=twsrc%5Etfw">February 20, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-02-19'
        },
        {
          title: 'Entrevista con Andres Torres en Vocales Radio',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">Ayer en la <a href="https://twitter.com/hashtag/CUMBRENERGIANL?src=hash&amp;ref_src=twsrc%5Etfw">#CUMBRENERGIANL</a>, se reconoció la estrategia del Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> en materia energética que nos coloca como referente nacional en este tema.<br>Estaré con <a href="https://twitter.com/hashtag/Andr%C3%A9sTorres?src=hash&amp;ref_src=twsrc%5Etfw">#AndrésTorres</a> en <a href="https://twitter.com/vocalesradio?ref_src=twsrc%5Etfw">@vocalesradio</a> por 98.1 FM, en punto de las 8:00 h platicando sobre esto y más.¡Sintonízanos!</p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1230491075493711878?ref_src=twsrc%5Etfw">February 20, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-02-20'
        },
        {
          title: 'Entrevista con Manolo Larrieta en Panorama Informativo',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">Hoy <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a> es el motor energético del centro del país, por eso, durante la <a href="https://twitter.com/hashtag/CUMBRENERGIANL?src=hash&amp;ref_src=twsrc%5Etfw">#CUMBRENERGIANL</a> se reconoció la estrategia del Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> en este sector.<br>A las 9:40 AM, estaré con <a href="https://twitter.com/ManoloLarrieta?ref_src=twsrc%5Etfw">@ManoloLarrieta</a> en <a href="https://twitter.com/hashtag/PanoramaInformativo?src=hash&amp;ref_src=twsrc%5Etfw">#PanoramaInformativo</a> de <a href="https://twitter.com/grupoacir?ref_src=twsrc%5Etfw">@grupoacir</a> 92.5 FM, platicando sobre esto y más</p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1230515082045591552?ref_src=twsrc%5Etfw">February 20, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-02-20'
        },
        {
          title: 'Visita al COBAEH CEMSAD de Tlanalapa',
          id: 'Tlanalapa',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">Visitamos el <a href="https://twitter.com/hashtag/COBAEH?src=hash&amp;ref_src=twsrc%5Etfw">#COBAEH</a> <a href="https://twitter.com/hashtag/CEMSaD?src=hash&amp;ref_src=twsrc%5Etfw">#CEMSaD</a> de <a href="https://twitter.com/hashtag/Tlanalapa?src=hash&amp;ref_src=twsrc%5Etfw">#Tlanalapa</a> para platicar con los chavos sobre qué les hace falta. <br>La instrucción del Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> es acercarles todas las oportunidades que necesiten para explotar su potencial y salgan adelante para que <a href="https://twitter.com/hashtag/HidalgoCrezca?src=hash&amp;ref_src=twsrc%5Etfw">#HidalgoCrezca</a> con ellos. <a href="https://t.co/WXi5U6KIbc">pic.twitter.com/WXi5U6KIbc</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1230558151428079617?ref_src=twsrc%5Etfw">February 20, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-02-20'
        },
        {
          title: 'Visita al Centro de Salud de Tlanalapa',
          id: 'Tlanalapa',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">Por instrucción del Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> y previo a la <a href="https://twitter.com/hashtag/AudienciaP%C3%BAblica?src=hash&amp;ref_src=twsrc%5Etfw">#AudienciaPública</a>, hicimos <a href="https://twitter.com/hashtag/VisitasSorpresa?src=hash&amp;ref_src=twsrc%5Etfw">#VisitasSorpresa</a> al Centro de Salud de <a href="https://twitter.com/hashtag/Tlanalapa?src=hash&amp;ref_src=twsrc%5Etfw">#Tlanalapa</a> y a la Unidad de Salud de <a href="https://twitter.com/hashtag/Chiconcuac?src=hash&amp;ref_src=twsrc%5Etfw">#Chiconcuac</a> para identificar las áreas de oportunidad que debemos atender para mejorar la atención médica para ti y tu familia <a href="https://t.co/RSj2sciIW7">pic.twitter.com/RSj2sciIW7</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1230573838917746688?ref_src=twsrc%5Etfw">February 20, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-02-20'
        },
        {
          title: 'Audiencia Pública en Tlanalapa',
          id: 'Tlanalapa',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">El Gobierno de <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> está transformando la manera de hacer las cosas en <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a>.<br>Recorriendo todos los rincones del Estado para resolver las necesidades de los hidalguenses. <br>La instrucción del Gobernador es: La <a href="https://twitter.com/hashtag/AudienciaP%C3%BAblica?src=hash&amp;ref_src=twsrc%5Etfw">#AudienciaPública</a> sigue, hasta que no quede nadie por atender. <a href="https://t.co/uGgov1iv3i">pic.twitter.com/uGgov1iv3i</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1230593008845774848?ref_src=twsrc%5Etfw">February 20, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-02-20'
        },
        {
          title: 'Reunión con los equipos de DIFH, SEDESO, CEDSPI, Cultura y RyTVHgo',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">Por eso, me reuní con los Srios. <a href="https://twitter.com/DanielRolandoJ?ref_src=twsrc%5Etfw">@DanielRolandoJ</a> de <a href="https://twitter.com/SEDESOHidalgo?ref_src=twsrc%5Etfw">@SEDESOHidalgo</a>, <a href="https://twitter.com/LamanCarranza?ref_src=twsrc%5Etfw">@LamanCarranza</a> de <a href="https://twitter.com/PlaneacionHgo?ref_src=twsrc%5Etfw">@PlaneacionHgo</a>, <a href="https://twitter.com/PatyGonzalez_?ref_src=twsrc%5Etfw">@PatyGonzalez_</a> de <a href="https://twitter.com/difhgo?ref_src=twsrc%5Etfw">@difhgo</a>,<a href="https://twitter.com/Quique_Simon?ref_src=twsrc%5Etfw">@Quique_Simon</a> de <a href="https://twitter.com/cedspi?ref_src=twsrc%5Etfw">@cedspi</a> y Cristian Guerrero de <a href="https://twitter.com/RadioyTVHidalgo?ref_src=twsrc%5Etfw">@RadioyTVHidalgo</a> para coordinar estrategias que generen más y mejores oportunidades para ti y tu familia <a href="https://t.co/DUqSvGoeQH">pic.twitter.com/DUqSvGoeQH</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1230704274826358785?ref_src=twsrc%5Etfw">February 21, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-02-20'
        },
        {
          title: 'Encuentro con Jovenes Indigenas',
          id: 'El Cardonal',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">Hoy tenemos un <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a> diferente al del pasado, resultado de las acciones del Gob. de <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>.<br>Les pedí a los jóvenes que aprovechen las oportunidades y recuerden siempre que sus raíces indígenas, su conocimiento y la fuerza que tienen en el corazón nadie se las va a quitar. <a href="https://t.co/DrUHiOlqJx">pic.twitter.com/DrUHiOlqJx</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1230922810693910531?ref_src=twsrc%5Etfw">February 21, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-02-21'
        },
        {
          title: 'Visita de Beatriz Gutierrez Muller a Actopan en "Fandangos por la lectura"',
          id: 'Actopan',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">Impulsar la lectura en nuestras niñas, niños y jóvenes, les dará a ellos más oportunidades para salir adelante y a <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a>, una mejor calidad de vida. <br><br>Acompañé al Gobernador <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> y a la Dra. <a href="https://twitter.com/BeatrizGMuller?ref_src=twsrc%5Etfw">@BeatrizGMuller</a> a la 7a. edición de &quot;Fandangos por la Lectura&quot;. <a href="https://t.co/o31DFZXNqY">pic.twitter.com/o31DFZXNqY</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1230967926435516417?ref_src=twsrc%5Etfw">February 21, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-02-21'
        },
        {
          title: 'Entrevista con Georgina Obregón por Replica Hidalgo',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">Las <a href="https://twitter.com/hashtag/AudienciasP%C3%BAblicas?src=hash&amp;ref_src=twsrc%5Etfw">#AudienciasPúblicas</a> del Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> representan una oportunidad para los hidalguenses de resolver sus necesidades, sin la necesidad de moverse de su municipio. <a href="https://twitter.com/hashtag/EnVivo?src=hash&amp;ref_src=twsrc%5Etfw">#EnVivo</a> 🔴 con <a href="https://twitter.com/hashtag/GeorginaObreg%C3%B3n?src=hash&amp;ref_src=twsrc%5Etfw">#GeorginaObregón</a> por <a href="https://twitter.com/Replica_Hgo?ref_src=twsrc%5Etfw">@Replica_Hgo</a> 98.1 FM. <a href="https://t.co/TcUDtvLeG4">pic.twitter.com/TcUDtvLeG4</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1231033746276724738?ref_src=twsrc%5Etfw">February 22, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-02-21'
        },
        {
          title: 'Entrevista con Andres Torres en Vocales Radio',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">Más de 2,500 jóvenes han sido beneficiados con una beca de <a href="https://twitter.com/hashtag/MiPrimerEmpleo?src=hash&amp;ref_src=twsrc%5Etfw">#MiPrimerEmpleo</a> para que sigan desarrollándose en lo personal como en lo profesional. Lo mejor, cerca del 70% han sido contratados después de su periodo.<br><br>Ya estamos <a href="https://twitter.com/hashtag/EnVivo?src=hash&amp;ref_src=twsrc%5Etfw">#EnVivo</a> 🔴 en <a href="https://twitter.com/vocalesradio?ref_src=twsrc%5Etfw">@vocalesradio</a> con <a href="https://twitter.com/hashtag/Andr%C3%A9sTorres?src=hash&amp;ref_src=twsrc%5Etfw">#AndrésTorres</a>. <a href="https://t.co/vAg0SV0uFC">pic.twitter.com/vAg0SV0uFC</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1231947339130122251?ref_src=twsrc%5Etfw">February 24, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-02-24'
        },
        {
          title: 'Entrevista con Belinda Perez Rios por Radio y Televisión de Hidalgo',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">En <a href="https://twitter.com/hashtag/MiPrimerEmpleo?src=hash&amp;ref_src=twsrc%5Etfw">#MiPrimerEmpleo</a> tenemos más de 800 empresas y 1000 vacantes para que los jóvenes de nuestro Estado, entren al mundo laboral de manera más fácil. <br><br>Gracias a <a href="https://twitter.com/BelindaPrezRios?ref_src=twsrc%5Etfw">@BelindaPrezRios</a> y todo el equipo de <a href="https://twitter.com/HgoNoticiasTV?ref_src=twsrc%5Etfw">@HgoNoticiasTV</a> por permitirme llegar a su auditorio. <a href="https://t.co/oM9s6FmL6Q">pic.twitter.com/oM9s6FmL6Q</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1231958008051056640?ref_src=twsrc%5Etfw">February 24, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-02-24'
        },
        {
          title: 'Evento por el Día de la Bandera',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">En el marco del evento del <a href="https://twitter.com/hashtag/DiaDeLaBandera?src=hash&amp;ref_src=twsrc%5Etfw">#DiaDeLaBandera</a>, hice entrega de nuestra bandera a la escolta integrada por el equipo de la <a href="https://twitter.com/SEPPEHidalgo?ref_src=twsrc%5Etfw">@SEPPEHidalgo</a>, como símbolo de nuestro compromiso con el Estado y con el país, así como de nuestro orgullo por ser hidalguenses. <a href="https://t.co/uxXuKRLV2V">pic.twitter.com/uxXuKRLV2V</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1232027748790497280?ref_src=twsrc%5Etfw">February 24, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-02-24'
        },
        {
          title: 'Celebración del 59° Aniversario del Día Nacional del Estado de Kuwait y 29° Aniversario de su Liberación',
          id: 'CDMX',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">Acompañé al Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> a la celebración del 59° Aniversario del Día Nacional del Estado de Kuwait 🇰🇼 y 29° Aniversario de su Liberación. <br>Gracias al Embajador de <a href="https://twitter.com/hashtag/Kuwait?src=hash&amp;ref_src=twsrc%5Etfw">#Kuwait</a>, Muteb Saleh Almutoteh por la invitación y la anfitrionía de su rep, Sr. Consejero, Khaled Alkhurainej. <a href="https://t.co/3nyYHOkJwK">pic.twitter.com/3nyYHOkJwK</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1232094060472565760?ref_src=twsrc%5Etfw">February 25, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-02-24'
        },
        {
          title: 'Entre vista con Mara Olvera por Hidalgo Noticias',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">Escucha <a href="https://twitter.com/hashtag/HidalgoNoticias?src=hash&amp;ref_src=twsrc%5Etfw">#HidalgoNoticias</a>, estaré con <a href="https://twitter.com/MaraLiOlvera?ref_src=twsrc%5Etfw">@MaraLiOlvera</a> platicando sobre todo lo que tienes que saber del programa del Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>: <a href="https://twitter.com/hashtag/MiPrimerEmpleo?src=hash&amp;ref_src=twsrc%5Etfw">#MiPrimerEmpleo</a>, enfocado a los jóvenes recién egresados de <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a> <br>📻 98.1 FM <a href="https://twitter.com/RedHidalgoRadio?ref_src=twsrc%5Etfw">@RedHidalgoRadio</a><br>🕗 19:30 h<a href="https://twitter.com/hashtag/MiPrimerEmpleo?src=hash&amp;ref_src=twsrc%5Etfw">#MiPrimerEmpleo</a>: <a href="https://t.co/FhCNYXLj4c">https://t.co/FhCNYXLj4c</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1232113553122918400?ref_src=twsrc%5Etfw">February 25, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-02-24'
        },
        {
          title: 'Reunión con los titulares de la SEPH, el Instituto de la Juventud y el Instituto del Deporte.',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">Hoy en el Gob. de <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>, estamos apostando por los jóvenes para que <a href="https://twitter.com/hashtag/HidalgoCrezca?src=hash&amp;ref_src=twsrc%5Etfw">#HidalgoCrezca</a> con ellos. <br>Por eso, me reuní con el Srio. <a href="https://twitter.com/atilanorp?ref_src=twsrc%5Etfw">@atilanorp</a> de <a href="https://twitter.com/SEPHidalgo?ref_src=twsrc%5Etfw">@SEPHidalgo</a>, <a href="https://twitter.com/YoshioCF?ref_src=twsrc%5Etfw">@YoshioCF</a> de <a href="https://twitter.com/juventudHGO?ref_src=twsrc%5Etfw">@juventudHGO</a> y <a href="https://twitter.com/fatimabanos?ref_src=twsrc%5Etfw">@fatimabanos</a> de <a href="https://twitter.com/deportehidalgo?ref_src=twsrc%5Etfw">@deportehidalgo</a> para seguir creándoles oportunidades y que salgan adelante. <a href="https://t.co/LFOjj5Ycut">pic.twitter.com/LFOjj5Ycut</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1232425662776008705?ref_src=twsrc%5Etfw">February 25, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-02-25'
        },
        {
          title: 'Reunión con los equipos de trabajo de SEDESO, DIFH Radio Y Tv de Hidalgo',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">Me reuní con el Srio. <a href="https://twitter.com/DanielRolandoJ?ref_src=twsrc%5Etfw">@DanielRolandoJ</a> y con el Subsrio. <a href="https://twitter.com/EscamillaRene?ref_src=twsrc%5Etfw">@EscamillaRene</a> de <a href="https://twitter.com/SEDESOHidalgo?ref_src=twsrc%5Etfw">@SEDESOHidalgo</a>, así como con Cristian Guerrero de <a href="https://twitter.com/RadioyTVHidalgo?ref_src=twsrc%5Etfw">@RadioyTVHidalgo</a> para enfocar las acciones del <a href="https://twitter.com/gobiernohidalgo?ref_src=twsrc%5Etfw">@gobiernohidalgo</a> en generar mejores oportunidades para que <a href="https://twitter.com/hashtag/HidalgoCrezcaContigo?src=hash&amp;ref_src=twsrc%5Etfw">#HidalgoCrezcaContigo</a>. <a href="https://t.co/dwQEorN9sz">pic.twitter.com/dwQEorN9sz</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1232755586946736128?ref_src=twsrc%5Etfw">February 26, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-02-26'
        },
        {
          title: 'Conferencia de Prensa sobre: Índice de Estado de Derecho del World Justice Project 2019 e incidencia delictiva',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">Junto al Srio. <a href="https://twitter.com/Mauricio_Delmar?ref_src=twsrc%5Etfw">@Mauricio_Delmar</a>, <a href="https://twitter.com/juanluislomeli?ref_src=twsrc%5Etfw">@juanluislomeli</a> de <a href="https://twitter.com/SeGobHidalgo?ref_src=twsrc%5Etfw">@SeGobHidalgo</a> y <a href="https://twitter.com/pontigoloyola?ref_src=twsrc%5Etfw">@pontigoloyola</a> de <a href="https://twitter.com/Srio_CespHgo?ref_src=twsrc%5Etfw">@Srio_CespHgo</a>, daré una conferencia de prensa sobre: Índice de Estado de Derecho del World Justice Project 2019 e incidencia delictiva, enero 2020.<br><br>Sigue el <a href="https://twitter.com/hashtag/Live?src=hash&amp;ref_src=twsrc%5Etfw">#Live</a> por: <a href="https://t.co/zrPuU0Yunq">https://t.co/zrPuU0Yunq</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1233089361069080576?ref_src=twsrc%5Etfw">February 27, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-02-27'
        },
        {
          title: 'Reunión con los titulares de la SEPH, el Instituto de la Juventud y el Instituto del Deporte.',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">Me reuní con el Srio. <a href="https://twitter.com/atilanorp?ref_src=twsrc%5Etfw">@atilanorp</a> de <a href="https://twitter.com/SEPHidalgo?ref_src=twsrc%5Etfw">@SEPHidalgo</a>, <a href="https://twitter.com/YoshioCF?ref_src=twsrc%5Etfw">@YoshioCF</a> de <a href="https://twitter.com/juventudHGO?ref_src=twsrc%5Etfw">@juventudHGO</a> y <a href="https://twitter.com/fatimabanos?ref_src=twsrc%5Etfw">@fatimabanos</a> de <a href="https://twitter.com/deportehidalgo?ref_src=twsrc%5Etfw">@deportehidalgo</a> para coordinar las acciones del <a href="https://twitter.com/gobiernohidalgo?ref_src=twsrc%5Etfw">@gobiernohidalgo</a> en apoyar a los chavos de nuestro Estado y que tengan todo para salir adelante. <a href="https://t.co/BKYRNBOcGq">pic.twitter.com/BKYRNBOcGq</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1233214782926446594?ref_src=twsrc%5Etfw">February 28, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-02-27'
        },
        {
          title: 'Reunión con alumnos del Colegio de Hidalgo',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">En el <a href="https://twitter.com/gobiernohidalgo?ref_src=twsrc%5Etfw">@gobiernohidalgo</a> estamos orgullosos del talento que tenemos en nuestros jóvenes hidalguenses.<br>Desde el Gobierno de <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> seguiremos impulsando su desarrollo, acercándoles las herramientas que necesiten para que <a href="https://twitter.com/hashtag/HidalgoCrezca?src=hash&amp;ref_src=twsrc%5Etfw">#HidalgoCrezca</a> con ellos. <a href="https://t.co/23bJuBQp7z">pic.twitter.com/23bJuBQp7z</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1233483265207676928?ref_src=twsrc%5Etfw">February 28, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-02-28'
        },
        {
          title: 'Reunión con el Secretario de Salud, Dr. Marco Antonio Escamilla Acosta',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">La salud de los hidalguenses, es prioridad para el Gob. de <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>. Por eso, me reuní con el Srio. <a href="https://twitter.com/SSP_Hidalgo?ref_src=twsrc%5Etfw">@SSP_Hidalgo</a> de <a href="https://twitter.com/Salud_Hidalgo?ref_src=twsrc%5Etfw">@Salud_Hidalgo</a> con un objetivo:<br>seguir mejorando los servicios de salud para ofrecerte a ti y a tu familia, atención médica de calidad y que <a href="https://twitter.com/hashtag/HidalgoCrezcaContigo?src=hash&amp;ref_src=twsrc%5Etfw">#HidalgoCrezcaContigo</a> <a href="https://t.co/uJWjCRPWT7">pic.twitter.com/uJWjCRPWT7</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1233528499161329664?ref_src=twsrc%5Etfw">February 28, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-02-28'
        },
        {
          title: 'Reunión con los titulares y equipos de la Secretaría de Desarrollo Social, Unidad e Planeación y DIFH',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">En el Gobierno de <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> trabajamos diariamente para que <a href="https://twitter.com/hashtag/HidalgoCrezcaContigo?src=hash&amp;ref_src=twsrc%5Etfw">#HidalgoCrezcaContigo</a>. <br>Este sábado me reuní con los Srios. <a href="https://twitter.com/LamanCarranza?ref_src=twsrc%5Etfw">@LamanCarranza</a>, <a href="https://twitter.com/DanielRolandoJ?ref_src=twsrc%5Etfw">@DanielRolandoJ</a>, <a href="https://twitter.com/PatyGonzalez_?ref_src=twsrc%5Etfw">@PatyGonzalez_</a> y equipos del <a href="https://twitter.com/gobiernohidalgo?ref_src=twsrc%5Etfw">@gobiernohidalgo</a> para seguir generando oportunidades que te permitan salir adelante. <a href="https://t.co/rg8PVtp10C">pic.twitter.com/rg8PVtp10C</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1233838196326141952?ref_src=twsrc%5Etfw">February 29, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-02-29'
        },
        {
          title: 'Reuniones de trabajo en el Despacho',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">Seguimos esta productiva jornada sabatina; en reuniones de trabajo que nos permiten identificar áreas de oportunidad para acelerar el desarrollo del Estado, como es la visión del Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>; que generen más y mejores oportunidades para que <a href="https://twitter.com/hashtag/HidalgoCrezcaContigo?src=hash&amp;ref_src=twsrc%5Etfw">#HidalgoCrezcaContigo</a>. <a href="https://t.co/Swv4brIVk9">pic.twitter.com/Swv4brIVk9</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1233878699558092801?ref_src=twsrc%5Etfw">February 29, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-02-29'
        },
        {
          title: 'Reunión de trabajo con el equipo de la SEDESO',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">La estrategia de combate a la pobreza ha dado resultados positivos pero no estamos satisfechos, <a href="https://twitter.com/hashtag/VamosPorM%C3%A1s?src=hash&amp;ref_src=twsrc%5Etfw">#VamosPorMás</a>.<br>me reuní con el Srio <a href="https://twitter.com/DanielRolandoJ?ref_src=twsrc%5Etfw">@DanielRolandoJ</a> de <a href="https://twitter.com/SEDESOHidalgo?ref_src=twsrc%5Etfw">@SEDESOHidalgo</a>, para seguir enfocando las acciones del Gobierno de <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>, en mejorar la calidad de vida de nuestras familias. <a href="https://t.co/8P5AxDweut">pic.twitter.com/8P5AxDweut</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1234561859384152071?ref_src=twsrc%5Etfw">March 2, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-03-02'
        },
        {
          title: 'Reunión con el equipo de la SEMOT',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">Recibí al Srio. <a href="https://twitter.com/joseguevaram?ref_src=twsrc%5Etfw">@joseguevaram</a> de <a href="https://twitter.com/MovilidadHgo?ref_src=twsrc%5Etfw">@MovilidadHgo</a> y a todo su equipo de trabajo en la <a href="https://twitter.com/SEPPEHidalgo?ref_src=twsrc%5Etfw">@SEPPEHidalgo</a>. <br>En el Gobierno de <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> creemos que la movilidad en <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a> debe basarse en un servicio público de calidad, para ti y para tu familia; para que <a href="https://twitter.com/hashtag/HidalgoCrezcaContigo?src=hash&amp;ref_src=twsrc%5Etfw">#HidalgoCrezcaContigo</a>. <a href="https://t.co/2R6NjijvQQ">pic.twitter.com/2R6NjijvQQ</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1234598391415328768?ref_src=twsrc%5Etfw">March 2, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-03-02'
        },
        {
          title: 'Reunión de coordinación con el equipo de trabajo de la SEPPE',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">Hoy, con el equipo de la <a href="https://twitter.com/SEPPEHidalgo?ref_src=twsrc%5Etfw">@SEPPEHidalgo</a>, tuvimos <a href="https://twitter.com/hashtag/Reuni%C3%B3nDeCoordinaci%C3%B3n?src=hash&amp;ref_src=twsrc%5Etfw">#ReuniónDeCoordinación</a>. <br>Damos seguimiento a las políticas públicas del Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>, para impulsar el desarrollo de <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a>, generar oportunidades y mejorar la calidad de vida de nuestras familias. <a href="https://t.co/K17QSOd62w">pic.twitter.com/K17QSOd62w</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1234620138193870848?ref_src=twsrc%5Etfw">March 2, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-03-02'
        },
        {
          title: 'Reunión de trabajo con los equipos de la SEDECO y la SECTUR',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr"><a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a> ya está en los ojos del mundo, por las acciones del Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> en materia de inversiones y turismo, que generan más y mejores empleos para nuestras familias.<br>Junto a los Srios <a href="https://twitter.com/SFVargasT?ref_src=twsrc%5Etfw">@SFVargasT</a> de <a href="https://twitter.com/Sedeco_Hgo?ref_src=twsrc%5Etfw">@Sedeco_Hgo</a> y <a href="https://twitter.com/EduardoJavierBG?ref_src=twsrc%5Etfw">@EduardoJavierBG</a> de <a href="https://twitter.com/SECTURHidalgo?ref_src=twsrc%5Etfw">@SECTURHidalgo</a>, <a href="https://twitter.com/hashtag/VamosPorM%C3%A1s?src=hash&amp;ref_src=twsrc%5Etfw">#VamosPorMás</a>. <a href="https://t.co/yRyGzgnkhw">pic.twitter.com/yRyGzgnkhw</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1234908510762274816?ref_src=twsrc%5Etfw">March 3, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-03-03'
        },
        {
          title: 'Reunión de trabajo con la SOPOT, la secretaría de Finanzas Públicas Hacienda y',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">Junto al Srio. <a href="https://twitter.com/JoseMenesesA?ref_src=twsrc%5Etfw">@JoseMenesesA</a> y el equipo de trabajo de <a href="https://twitter.com/FinanzasHidalgo?ref_src=twsrc%5Etfw">@FinanzasHidalgo</a>, nos reunimos con integrantes de <a href="https://twitter.com/Hacienda_Mexico?ref_src=twsrc%5Etfw">@Hacienda_Mexico</a> y la <a href="https://twitter.com/SCT_mx?ref_src=twsrc%5Etfw">@SCT_mx</a> con un objetivo: coordinar las estrategias para seguir impulsando el desarrollo integral de <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a>. <a href="https://t.co/cHmCASmyPI">pic.twitter.com/cHmCASmyPI</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1235076726474133504?ref_src=twsrc%5Etfw">March 4, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-03-03'
        },
        {
          title: 'Entrevista en Super Estereo con Maria Antonieta Islas',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">La estrategia del Gob. <a href="https://twitter.com/hashtag/OmarFayad?src=hash&amp;ref_src=twsrc%5Etfw">#OmarFayad</a>: <a href="https://twitter.com/hashtag/HidalgoSeguro?src=hash&amp;ref_src=twsrc%5Etfw">#HidalgoSeguro</a> y la entrada en operaciones del <a href="https://twitter.com/hashtag/C5iHidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#C5iHidalgo</a>, han dado como resultado la disminución de la incidencia delictiva en <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a>. <br>Estaré en <a href="https://twitter.com/hashtag/S%C3%BAperStereoMiled?src=hash&amp;ref_src=twsrc%5Etfw">#SúperStereoMiled</a> 97.1 FM, a las 8:20 h con Ma. Antonieta Islas, platicando sobre esto y más.</p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1235203525002620928?ref_src=twsrc%5Etfw">March 4, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-03-04'
        },
        {
          title: 'Reunión con empresarios y los secretarios Mauricio Delmar y Sergio Vargas',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">La estrategia del Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>: <a href="https://twitter.com/hashtag/HidalgoSeguro?src=hash&amp;ref_src=twsrc%5Etfw">#HidalgoSeguro</a> ya está dando resultados positivos, disminuyendo el índice delictivo.<br>Queremos reforzarla a través de la participación de los empresarios de <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a>.<br>Me reuní con ellos, junto a los Srios <a href="https://twitter.com/Mauricio_Delmar?ref_src=twsrc%5Etfw">@Mauricio_Delmar</a> y <a href="https://twitter.com/SFVargasT?ref_src=twsrc%5Etfw">@SFVargasT</a>. <a href="https://t.co/4mnQ5xHLyo">pic.twitter.com/4mnQ5xHLyo</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1235322806717632515?ref_src=twsrc%5Etfw">March 4, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-03-04'
        },
        {
          title: 'Reunión de CONAGO para tratar el tema de Coronavirus',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">Acompañé al Gob <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> a una reunión de trabajo de la <a href="https://twitter.com/CONAGO_oficial?ref_src=twsrc%5Etfw">@CONAGO_oficial</a> y miembros del sector salud del <a href="https://twitter.com/GobiernoMX?ref_src=twsrc%5Etfw">@GobiernoMX</a>, para abordar la situación del <a href="https://twitter.com/hashtag/CoronavirusMx?src=hash&amp;ref_src=twsrc%5Etfw">#CoronavirusMx</a>, <a href="https://twitter.com/hashtag/COVID19?src=hash&amp;ref_src=twsrc%5Etfw">#COVID19</a>. <a href="https://t.co/WA9OYGVrOS">pic.twitter.com/WA9OYGVrOS</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1235368177208614912?ref_src=twsrc%5Etfw">March 5, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-03-04'
        },
        {
          title: 'Reunión con el equipo de la Secretaría de Salud',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">Para dar seguimiento a la reunión del Gob <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> con autoridades fed. sobre el <a href="https://twitter.com/hashtag/coronavirus?src=hash&amp;ref_src=twsrc%5Etfw">#coronavirus</a>, me reúno con el equipo de <a href="https://twitter.com/Salud_Hidalgo?ref_src=twsrc%5Etfw">@Salud_Hidalgo</a>.<br>Queremos alinear nuestras acciones con las del <a href="https://twitter.com/GobiernoMX?ref_src=twsrc%5Etfw">@GobiernoMX</a> para reforzar la prevención y cuidados ante el panorama mundial que enfrentamos. <a href="https://t.co/JSSTWflFCW">pic.twitter.com/JSSTWflFCW</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1235432254370992128?ref_src=twsrc%5Etfw">March 5, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-03-04'
        },
        {
          title: 'Reunión con los titulares del Instituto de la Juventud y el Instituto del Deporte.',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">En <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a>, nos apoyamos de nuestros jóvenes para salir adelante. <br>Por eso, me reuní con <a href="https://twitter.com/YoshioCF?ref_src=twsrc%5Etfw">@YoshioCF</a> de <a href="https://twitter.com/juventudHGO?ref_src=twsrc%5Etfw">@juventudHGO</a> y <a href="https://twitter.com/fatimabanos?ref_src=twsrc%5Etfw">@fatimabanos</a> de <a href="https://twitter.com/deportehidalgo?ref_src=twsrc%5Etfw">@deportehidalgo</a> para enfocar las acciones del Gobierno de <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>, en generar oportunidades que los impulsen y les permita alcanzar sus metas. <a href="https://t.co/EhU7jn23nQ">pic.twitter.com/EhU7jn23nQ</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1235628150828064769?ref_src=twsrc%5Etfw">March 5, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-03-05'
        },
        {
          title: 'Entrega de la medalla al merito de la promocion y defensa de los Derechos Humanos',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">Desde el <a href="https://twitter.com/gobiernohidalgo?ref_src=twsrc%5Etfw">@gobiernohidalgo</a>, seguiremos trabajando de la mano con la sociedad civil para que a <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a> le vaya mejor, para tener más oportunidades y para mejorar la calidad de vida de nuestras familias.<br>Hoy se refuerza la esperanza de un mejor Estado para que <a href="https://twitter.com/hashtag/HidalgoCrezcaContigo?src=hash&amp;ref_src=twsrc%5Etfw">#HidalgoCrezcaContigo</a> <a href="https://t.co/dUu78DWwUl">pic.twitter.com/dUu78DWwUl</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1235681621313024038?ref_src=twsrc%5Etfw">March 5, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-03-05'
        },
        {
          title: 'Reunión con el equipo de la Secretaría de Salud',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">Me reuní con el equipo de <a href="https://twitter.com/Salud_Hidalgo?ref_src=twsrc%5Etfw">@Salud_Hidalgo</a> para continuar con los esfuerzos y estrategias de prevención y cuidados ante el <a href="https://twitter.com/hashtag/coronavirus?src=hash&amp;ref_src=twsrc%5Etfw">#coronavirus</a>, como lo ha instruido el Gobernador <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>. <br>Tu salud y la de tu familia, es prioridad para el <a href="https://twitter.com/gobiernohidalgo?ref_src=twsrc%5Etfw">@gobiernohidalgo</a>. <a href="https://t.co/nQrVWdhJSn">pic.twitter.com/nQrVWdhJSn</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1235716178321870848?ref_src=twsrc%5Etfw">March 5, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-03-05'
        },
        {
          title: 'Reunión con el equipo de SEDECO',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">En <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a> trabajamos con vista al futuro, para que tú y tu familia tengan más oportunidades. <br>Junto al Srio. <a href="https://twitter.com/SFVargasT?ref_src=twsrc%5Etfw">@SFVargasT</a> y personal de <a href="https://twitter.com/HidalgoSOPOT?ref_src=twsrc%5Etfw">@HidalgoSOPOT</a> revisamos proyectos estratégicos, para generar más empleos para ti y para tu familia, como ha pedido el Gobernador <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>. <a href="https://t.co/lg5PYI15VN">pic.twitter.com/lg5PYI15VN</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1236017426048921601?ref_src=twsrc%5Etfw">March 6, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-03-06'
        },
        {
          title: 'Reunión con los equipos de la SEDECO, la Comisión de Pueblos indigenas, SOPOT y SEDESO',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">Queremos seguir demostrando que en <a href="https://twitter.com/hashtag/HidalgoS%C3%ADSePuede?src=hash&amp;ref_src=twsrc%5Etfw">#HidalgoSíSePuede</a> salir adelante y hacer realidad los grandes proyectos.<br>Me reuní con el Srio. <a href="https://twitter.com/SFVargasT?ref_src=twsrc%5Etfw">@SFVargasT</a> de <a href="https://twitter.com/Sedeco_Hgo?ref_src=twsrc%5Etfw">@Sedeco_Hgo</a>, <a href="https://twitter.com/Quique_Simon?ref_src=twsrc%5Etfw">@Quique_Simon</a> de <a href="https://twitter.com/cedspi?ref_src=twsrc%5Etfw">@cedspi</a>, <a href="https://twitter.com/HernndezGalindo?ref_src=twsrc%5Etfw">@HernndezGalindo</a> de <a href="https://twitter.com/energiahidalgo?ref_src=twsrc%5Etfw">@energiahidalgo</a> y equipos de <a href="https://twitter.com/SEDESOHidalgo?ref_src=twsrc%5Etfw">@SEDESOHidalgo</a> y <a href="https://twitter.com/HidalgoSOPOT?ref_src=twsrc%5Etfw">@HidalgoSOPOT</a> para ir por más. <a href="https://t.co/xDNWJTaQxk">pic.twitter.com/xDNWJTaQxk</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1236088738779926530?ref_src=twsrc%5Etfw">March 7, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-03-06'
        },
        {
          title: 'Reunión de trabajo con los secretarios y equipos de Salud y SEDECO',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">En el Gobierno de <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> dejamos de ser del <a href="https://twitter.com/hashtag/YaM%C3%A9rito?src=hash&amp;ref_src=twsrc%5Etfw">#YaMérito</a> al <a href="https://twitter.com/hashtag/S%C3%ADSePuede?src=hash&amp;ref_src=twsrc%5Etfw">#SíSePuede</a> de los grandes proyectos; liberando y aprovechando nuestro potencial y apostando por sectores estratégicos para que <a href="https://twitter.com/hashtag/HidalgoCrezcaContigo?src=hash&amp;ref_src=twsrc%5Etfw">#HidalgoCrezcaContigo</a>.<br>Junto a los Srios. <a href="https://twitter.com/SFVargasT?ref_src=twsrc%5Etfw">@SFVargasT</a> y <a href="https://twitter.com/SSH_Escamilla?ref_src=twsrc%5Etfw">@SSH_Escamilla</a>, <a href="https://twitter.com/hashtag/VamosPorM%C3%A1s?src=hash&amp;ref_src=twsrc%5Etfw">#VamosPorMás</a>. <a href="https://t.co/ofZnTHZv7Z">pic.twitter.com/ofZnTHZv7Z</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1237122266288324610?ref_src=twsrc%5Etfw">March 9, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-03-09'
        },
        {
          title: 'Reunión con el equipo de la SEPH',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">En el Gob. de <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> estamos seguros que apostar por la educación de <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a>, siempre será una buena inversión.<br>Eso estamos haciendo, dándole a nuestros estudiantes las herramientas para explotar su potencial y salir adelante.<br>Me reuní con el Srio. <a href="https://twitter.com/atilanorp?ref_src=twsrc%5Etfw">@atilanorp</a> de <a href="https://twitter.com/SEPHidalgo?ref_src=twsrc%5Etfw">@SEPHidalgo</a>. <a href="https://t.co/8UmtlRni6o">pic.twitter.com/8UmtlRni6o</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1237184721597206529?ref_src=twsrc%5Etfw">March 10, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-03-09'
        },
        {
          title: 'Declaración de patrimonio cultural a los sitios que fueron parte del incendio en la mina y el corte de listón del centro comunitario el Bordo',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">Durante las actividades por los 100 años de esta tragedia, el Gobernador <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> develó la placa conmemorativa, entregó el decreto de declaración de patrimonio cultural a los sitios que fueron parte del incendio en la mina y el corte de listón del centro comunitario <a href="https://twitter.com/hashtag/ElBordo?src=hash&amp;ref_src=twsrc%5Etfw">#ElBordo</a>. <a href="https://t.co/Kh6OqZsS6w">pic.twitter.com/Kh6OqZsS6w</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1237451681836793857?ref_src=twsrc%5Etfw">March 10, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-03-10'
        },
        {
          title: 'Conferencia de Prensa sobre el Coronavirus en Hidalgo',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">En <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a> no existen casos confirmados del <a href="https://twitter.com/hashtag/COVID2019?src=hash&amp;ref_src=twsrc%5Etfw">#COVID2019</a>, sin embargo, por instrucciones del Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> se tienen acciones preventivas ante posibles escenarios posteriores, completa coordinación con el <a href="https://twitter.com/GobiernoMX?ref_src=twsrc%5Etfw">@GobiernoMX</a> y una permanente campaña de prevención y detección. <a href="https://t.co/7pIRGRvo9y">pic.twitter.com/7pIRGRvo9y</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1237499263111835651?ref_src=twsrc%5Etfw">March 10, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-03-10'
        },
        {
          title: 'Entrevista en Buen día Hidalgo por RyTV Hgo',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">Seguimos en <a href="https://twitter.com/hashtag/BuenDia?src=hash&amp;ref_src=twsrc%5Etfw">#BuenDia</a> <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a> por Canal 12.1 de <a href="https://twitter.com/RadioyTVHidalgo?ref_src=twsrc%5Etfw">@RadioyTVHidalgo</a>, platicando sobre el programa <a href="https://twitter.com/hashtag/PonTuNegocio?src=hash&amp;ref_src=twsrc%5Etfw">#PonTuNegocio</a> <a href="https://twitter.com/hashtag/YoTeApoyo?src=hash&amp;ref_src=twsrc%5Etfw">#YoTeApoyo</a>, un fomento por parte del Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> para que quienes quieran emprender, lo puedan hacer con apoyo del <a href="https://twitter.com/gobiernohidalgo?ref_src=twsrc%5Etfw">@gobiernohidalgo</a>. <a href="https://t.co/BQVXHe6qvI">pic.twitter.com/BQVXHe6qvI</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1237768679602847744?ref_src=twsrc%5Etfw">March 11, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-03-11'
        },
        {
          title: 'Reunión de coordinación con el equipo de trabajo de la SEPPE',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">Hoy tuvimos <a href="https://twitter.com/hashtag/Reuni%C3%B3nDeCoordinaci%C3%B3n?src=hash&amp;ref_src=twsrc%5Etfw">#ReuniónDeCoordinación</a> en la <a href="https://twitter.com/SEPPEHidalgo?ref_src=twsrc%5Etfw">@SEPPEHidalgo</a>, con el objetivo de reforzar las políticas públicas del Gobierno de <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> y seguir transformando <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a>, creando oportunidades y acelerando el desarrollo de nuestra entidad y de nuestras familias. <a href="https://twitter.com/hashtag/VamosPorM%C3%A1s?src=hash&amp;ref_src=twsrc%5Etfw">#VamosPorMás</a> <a href="https://t.co/GpzVyRtvyW">pic.twitter.com/GpzVyRtvyW</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1237814579561816064?ref_src=twsrc%5Etfw">March 11, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-03-11'
        },
        {
          title: 'Entrega de la Sala de Juicios Orales de la Escuela Superior de Actopan de la UAEH',
          id: 'Actopan',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">En el Gob de <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a>, hemos puesto nuestra esperanza en los jóvenes y ellos en Hidalgo, de crecer juntos.<br>Los hidalguenses pueden estar seguros que cuentan con todo el respaldo del <a href="https://twitter.com/gobiernohidalgo?ref_src=twsrc%5Etfw">@gobiernohidalgo</a>, que les acercará las oportunidades para explotar su potencial y salir adelante <a href="https://t.co/gig4N242AC">pic.twitter.com/gig4N242AC</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1237866357095403520?ref_src=twsrc%5Etfw">March 11, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-03-11'
        },
        {
          title: 'Reunión con los secretarios Atilano Rodríguez y Daniel Jimenez',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">En el Gobierno de <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> estamos combatiendo la pobreza e impulsando la educación porque sabemos que van de la mano para salir adelante. <br>Junto a los Srios. <a href="https://twitter.com/atilanorp?ref_src=twsrc%5Etfw">@atilanorp</a> y <a href="https://twitter.com/DanielRolandoJ?ref_src=twsrc%5Etfw">@DanielRolandoJ</a>, estamos aportando <a href="https://twitter.com/hashtag/IdeasPorHidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#IdeasPorHidalgo</a>, por nuestras familias, para nuestro desarrollo. <a href="https://t.co/xCVdA7J0FT">pic.twitter.com/xCVdA7J0FT</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1238221792197648385?ref_src=twsrc%5Etfw">March 12, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-03-11'
        },
        {
          title: 'Banderazo del Inicio de obras del Distribuidor Vial Venta Prieta y distribuidor multiple Galerias',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">Me dió mucho gusto estar junto al Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> en el banderazo del Inicio de obras del Distribuidor Vial <a href="https://twitter.com/hashtag/VentaPrieta?src=hash&amp;ref_src=twsrc%5Etfw">#VentaPrieta</a> y el Distribuidor Múltiple <a href="https://twitter.com/hashtag/Galer%C3%ADas?src=hash&amp;ref_src=twsrc%5Etfw">#Galerías</a>. <br>Seguimos transformando <a href="https://twitter.com/hashtag/Hidalgo?src=hash&amp;ref_src=twsrc%5Etfw">#Hidalgo</a>, todo con una sola visión: la de mejorar la calidad la vida de nuestras familias. <a href="https://t.co/PogbEIqpVD">pic.twitter.com/PogbEIqpVD</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1238316690754228224?ref_src=twsrc%5Etfw">March 13, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-03-12'
        },
        {
          title: 'Informe de actividades de Adolfo Pontigo Loyola, Rector de la UAEH',
          id: 'Pachuca',
          url: '<blockquote class="twitter-tweet"><p lang="es" dir="ltr">Acompañé con gusto al Gob. <a href="https://twitter.com/omarfayad?ref_src=twsrc%5Etfw">@omarfayad</a> al 3er. Informe de Actividades por parte de <a href="https://twitter.com/apontigoloyola?ref_src=twsrc%5Etfw">@apontigoloyola</a>, Rector de la <a href="https://twitter.com/UAEH_OFICIAL?ref_src=twsrc%5Etfw">@UAEH_OFICIAL</a>.<br>En el <a href="https://twitter.com/gobiernohidalgo?ref_src=twsrc%5Etfw">@gobiernohidalgo</a>, apoyamos la educación porque sabemos que es el arma más poderosa para que nuestros jóvenes salgan adelante. <a href="https://t.co/B7wA8deCc1">pic.twitter.com/B7wA8deCc1</a></p>&mdash; José Luis Romo Cruz (@JLRomoCruz) <a href="https://twitter.com/JLRomoCruz/status/1238682221269200896?ref_src=twsrc%5Etfw">March 14, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          start: '2020-03-13'
        }
        /*{
          title: '',
          id: '',
          url: '',
          start: '2020-02-17'
        }*/
      ],
      eventClick: function(item){
        $("#url").empty();
        item.jsEvent.preventDefault();
        console.log(item);
        $("#exampleModal").modal("show");
        $("#titulo").text(item.event.title);
        $("#lugar").text(item.event.id);  
        $("#url").append(item.event.url);   
      }
      
    });
    calendar.render();
  });
