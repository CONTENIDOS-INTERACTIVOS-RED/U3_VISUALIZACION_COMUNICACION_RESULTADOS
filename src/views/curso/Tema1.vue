<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Presentación de resultados y reportes de BI'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-1.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema3/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Presentar resultados es tan importante como analizarlos. En un entorno donde los líderes requieren información rápida, sintetizada y visualmente comprensible, la habilidad para construir reportes ejecutivos y visualizaciones efectivas se convierte en un factor diferenciador. Esta sección aborda cómo transformar los análisis en entregables claros, confiables y accionables.


    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Comunicación de hallazgos a diferentes audiencias

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/2.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") La comunicación de hallazgos implica una traducción estratégica: convertir modelos complejos en historias comprensibles para quienes toman decisiones. No todas las audiencias requieren el mismo nivel de detalle ni poseen las mismas competencias técnicas, por lo que el analista debe ajustar el mensaje según el nivel directivo, operativo o social.
    
        .bg-color-4.px-4.py-5.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema3/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 De acuerdo con Knaflic (2017) y Therón (2021), comunicar hallazgos no es solo presentar datos, sino convertirlos en narrativas comprensibles que generen acción, aplicando el principio de “información en contexto”.
        p Aportes clave de los principales referentes en visualización y comunicación d e datos:

    .bg-full-width.bg-color-11
      .p-4.p-md-5
        .row.align-items-start.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/4.png", alt="").mb-4.mb-lg-0
          .col-lg-8
        
            AcordionA(tipo="b")
              .div(titulo="Cole Nussbaumer Knaflic (2017)")
                p En Storytelling with Data, plantea que el valor de la visualización radica en su comprensión por la audiencia, más que en la exactitud. Sus tres principios son
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Comprender a la audiencia 
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Simplificar sin sacrificar contenido 
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Enfocar el mensaje hacia una acción
        
              .div(titulo="Rafael Therón (2021)")
                p En Visualización de datos: caminos de ida y vuelta entre arte y ciencia, aporta una mirada epistemológica. Propone: 
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Dar sentido narrativo, ético y funcional a cada visualización 
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Diseñar dashboards con estructura semántica 
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Evaluar la experiencia del usuario (UX) en visualizaciones interactivas
        
        p.mb-5 Un dato aislado carece de sentido si no se contextualiza considerando:

        .row.justify-content-center
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-3.mb-5
              .px-4.p-4
                .row.align-items-center
                  .col-lg-auto
                    img(src="@/assets/curso/tema3/5.svg", style="max-width: 90px").mx-auto
                  .col-lg.text-white
                    h5 01
                    p.mb-0 Quién lo recibe
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-3.mb-5
              .px-4.p-4
                .row.align-items-center
                  .col-lg-auto
                    img(src="@/assets/curso/tema3/5.svg", style="max-width: 90px").mx-auto
                  .col-lg.text-white
                    h5 02
                    p.mb-0 Para qué lo necesita
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-3.mb-5
              .px-4.p-4
                .row.align-items-center
                  .col-lg-auto
                    img(src="@/assets/curso/tema3/5.svg", style="max-width: 90px").mx-auto
                  .col-lg.text-white
                    h5 03
                    p.mb-0 Qué impacto genera

        p.mb-5 Por ejemplo, un KPI financiero no tiene el mismo significado para un ingeniero de procesos, un director de innovación o un líder comunitario. Por ello, el analista debe traducir, contextualizar y narrar el hallazgo según las necesidades cognitivas y estratégicas de cada audiencia.

    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Tipologías de audiencias y reportes
    
    .bg-color-1.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.order-2
          figure
            img(src='@/assets/curso/tema3/6.png', alt='')
        .col-lg.order-1.mb-3.mb-lg-0
          .p-4
            p.mb-0(data-aos="fade-up") La efectividad de un reporte no depende solo del dato, sino de su adecuación a la audiencia y del tipo de reporte que se utilice.

    .bg-full-width.bg-color-7
      .p-4.p-md-5
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Tipologías de audiencias
        
        p.mb-5 Antes de elegir el formato del reporte, es clave identificar el tipo de audiencia para ajustar el nivel de detalle y el enfoque comunicativo:

        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/7.svg" alt="" style="width: 90px")
              h5.text-center Técnica
              p.mb-0.text-center Interesada en metodología, datos crudos, algoritmos y precisión estadística
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/8.svg" alt="" style="width: 90px")
              h5.text-center Directiva
              p.mb-0.text-center Busca impactos, proyecciones, riesgos y retornos
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/9.svg" alt="" style="width: 90px")
              h5.text-center Social
              p.mb-0.text-center Prioriza comprensión general, implicaciones éticas y beneficios colectivos

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Tipologías de reportes
        
        p.mb-5 Una vez identificada la audiencia, se debe seleccionar el tipo de reporte que mejor sirva como vehículo de comunicación.
    
        .titulo-figura.mb-0
          h5 Tabla 4.
          span Tipologías de reportes
    .tabla-a.color-acento-botones.mb-5.tbl 
      table
        thead
          tr
            th.bg-color-3.text-white Tipo de reporte
            th.bg-color-3.text-white Propósito
            th.bg-color-3.text-white Frecuencia
            th.bg-color-3.text-white Áreas típicas
            th.bg-color-3.text-white Ejemplo aplicado
        tbody
          tr
            td Operativo
            td Monitorear el funcionamiento diario para garantizar continuidad y eficiencia
            td Diario o en tiempo real
            td Producción, logística, mantenimiento
            td
              h5 Panel diario de producción
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Métricas: unidades/hora, consumo energético
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Aplicación: identificar cuellos de botella
          tr.bg-color-6
            td Táctico
            td Supervisar rendimiento de áreas o proyectos y permitir ajustes a corto/mediano plazo
            td Semanal o quincenal
            td Ventas, marketing, atención al cliente
            td
              h5 Informe semanal de ventas por canal
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Métricas: ticket promedio, conversiones
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Aplicación: activar campañas ante caídas
          tr
            td Estratégico
            td Analizar el desempeño general para decisiones de largo plazo
            td Trimestral, semestral o anual
            td Alta dirección, inversionistas
            td
              h5 Presentación de resultados financieros
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Métricas: EBITDA, crecimiento interanual
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Aplicación: orientar inversión y estrategia



    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Elementos clave para comunicar hallazgos
    
    .bg-full-width.bg-color-11
      .p-4.p-md-5
        p.mb-5 Una vez definida la audiencia y el formato de reporte, la estructura del mensaje debe cumplir con tres principios para generar impacto:

        .row.justify-content-center
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-3.mb-5
              .px-4.p-4
                .row.align-items-center
                  .col-lg-auto
                    img(src="@/assets/curso/tema3/10.svg", style="max-width: 90px").mx-auto
                  .col-lg.text-white
                    h5 01
                    p.mb-0 Conectar con el problema
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-3.mb-5
              .px-4.p-4
                .row.align-items-center
                  .col-lg-auto
                    img(src="@/assets/curso/tema3/11.svg", style="max-width: 90px").mx-auto
                  .col-lg.text-white
                    h5 02
                    p.mb-0 Mostrar evidencia clara
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-3.mb-5
              .px-4.p-4
                .row.align-items-center
                  .col-lg-auto
                    img(src="@/assets/curso/tema3/12.svg", style="max-width: 90px").mx-auto
                  .col-lg.text-white
                    h5 03
                    p.mb-0 Proponer una acción concreta

        p.mb-5 Estos principios transforman los datos en historias con propósito, formando la base del storytelling ejecutivo, que convierte los reportes en herramientas para decisiones informadas.


    #t_1_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.4] Técnicas narrativas para comunicar hallazgos
    
    p.mb-5 Para que un análisis de BI se transforme en información accionable, es necesario estructurar su comunicación mediante cuatro elementos clave. Estos funcionan como puente entre el dato crudo y la decisión informada.

    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/13.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 1. Título narrativo
              p Un buen título no solo describe, sino que revela el aprendizaje principal. 
              p Ejemplo: 
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Título descriptivo: “Informe de ventas Q2 2025” 
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Título narrativo: “Las ventas en canal digital crecieron 24 % tras simplificar el proceso de compra” 
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Responde a la pregunta: “¿Qué aprendimos?”
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/14.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 2. Visualización clara y comparativa
              p Las gráficas deben resaltar lo importante, ser fáciles de leer y permitir comparación entre períodos o escenarios. 
              p Ejemplo: 
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Gráfico de barras comparando ticket promedio de clientes nuevos vs. recurrentes 
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Debe incluir: título claro, ejes etiquetados y uso de colores de énfasis.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/15.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 3. Análisis resumido (causa-efecto-recomendación)
              p Se interpreta la evidencia para explicar el porqué de los hallazgos y orientar decisiones. 
              p Ejemplo: 
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Causa: Disminución de ventas en región sur 
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Efecto: Menor rentabilidad del portafolio 
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Recomendación: Rediseñar promociones según estacionalidad
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/16.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 4. Llamado a la acción basado en datos
              p Se finaliza con una acción clara, viable y medible, respaldada por el análisis. 
              p Ejemplo: 
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 “Lanzar una campaña de retargeting para la categoría hogar en agosto, midiendo tasa de recompra a 30 días.”
    
    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/17.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Estos elementos, organizados en una narrativa coherente, dan paso al storytelling ejecutivo, que convierte el reporte en una herramienta movilizadora para la toma de decisiones.


    #t_1_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.5] Storytelling ejecutivo
    
    .bg-full-width.bg-color-12.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-6.order-lg-2
            figure
              img(src="@/assets/curso/tema3/18.svg", data-aos="zoom-in")
          .col-lg-6.order-lg-1
            p(data-aos="fade-left").mb-4 A continuación, se presenta un podcast que explica cómo aplicar el storytelling ejecutivo para transformar hallazgos de negocio en presentaciones claras, persuasivas y orientadas a la toma de decisiones estratégicas.
    
            TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
              texto="El storytelling ejecutivo"
              tiempo
              :audio="require('../../assets/curso/podcast/podcast1.mp3')"
            )
    
    #t_1_6.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.6] Aplicación integrada: Caso Nestlé LATAM
    
    p.mb-5 Para ilustrar cómo se combinan elementos de comunicación y storytelling ejecutivo, se presenta un caso real de BI aplicado:

    .bg-full-width.bg-color-info
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-10
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema3/19.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="8%" y="81.5%" numero="+")
                h5 1. Identificación del público
                p Comité directivo de e-commerce
    
              .bg-color-white.box-shadow.p-3(x="22%" y="15%" numero="+")
                h5 2. Tipo de reporte
                p Estratégico, presentado en comité trimestral
    
              .bg-color-white.box-shadow.p-3(x="35%" y="81.5%" numero="+")
                h5 3. Título narrativo
                p “El 42 % de clientes no regresan después de su primera compra: ¿cómo activar la recompra?”
    
              .bg-color-white.box-shadow.p-3(x="50%" y="15%" numero="+")
                h5 4. Visualización
                p Gráfico de barras con cohorts mensuales y línea de tendencia de recompra (%).
    
              .bg-color-white.box-shadow.p-3(x="63.5%" y="81.5%" numero="+")
                h5 5. Análisis resumido
                p Baja recompra en clientes de categoría infantil; causas: navegación y falta de promociones postcompra
              
              .bg-color-white.box-shadow.p-3(x="78%" y="15%" numero="+")
                h5 6. Llamado a la acción
                p Campaña personalizada con retargeting en Meta Ads
    
              .bg-color-white.box-shadow.p-3(x="91.5%" y="81.5%" numero="+")
                h5 7. Narrativa ejecutiva
                p.mb-0 Inicio: caída en tasa de recompra 
                p.mb-0 Nudo: evidencia visual por categoría 
                p.mb-0 Desenlace: propuesta de fidelización y test A/B

    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/17.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Este modelo muestra cómo un dato aislado se transforma en una historia con propósito, cerrando el ciclo de BI: dato → análisis → narrativa → decisión.

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/47974" target="_blank" rel="noopener noreferrer") Ortega Martínez, J. A. (2011). Diagnóstico empresarial mediante el análisis económico-financiero: ( ed.). Editorial Desclée de Brouwer. 
            
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.storytellingwithdata.com/blog/2021/9/avoiding-clutter" target="_blank" rel="noopener noreferrer") Nussbaumer Knaflic, C. (9 de septiembre de 2021). Avoiding clutter in data visualizations. Storytelling With Data Blog.  


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=XcaW069_e_o" target="_blank" rel="noopener noreferrer") Ministerio TIC Colombia. [Ministerio TIC Colombia]. (2021, 3 de junio). Curso básico de Power BI – Clase 1: ¿Qué es Power BI? [Video]. YouTube.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema3',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
