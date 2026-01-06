<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Importancia de la visualización en la toma de decisiones'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") En el pasado, bastaba con contar con reportes numéricos periódicos para evaluar procesos. Sin embargo, hoy, en un entorno caracterizado por la velocidad, la incertidumbre y la abundancia de datos, esta aproximación resulta insuficiente. La visualización de datos ha emergido como un recurso esencial, no por su apariencia estética, sino por su capacidad para sintetizar grandes volúmenes de información compleja en representaciones visuales claras, comprensibles y estratégicamente orientadas.
    
        .bg-color-1.px-4.py-5(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Organismos internacionales como la OECD (2020) y firmas como Gartner destacan que las organizaciones que utilizan dashboards e informes visuales inteligentes tienen una mayor capacidad de respuesta ante escenarios inciertos y logran integrar múltiples fuentes de datos de forma eficiente para respaldar decisiones empresariales. Así, la visualización se convierte en un habilitador clave de la inteligencia organizacional y en una extensión operativa de los sistemas de soporte a decisiones (DSS).
    


    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Del dato a la sabiduría – Cadena DIKW
    
    p.mb-5 Para comprender en profundidad por qué la visualización genera valor, es necesario introducir el modelo de pensamiento DIKW, que explica cómo los datos se transforman en conocimiento útil para la toma de decisiones. Este modelo, ampliamente utilizado en la gestión de la información y respaldado por estándares como la ISO 30401, define cuatro niveles:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/3.png")
            .col-lg-7
              h5 Data (Dato)
              p Hechos aislados y sin contexto. Ejemplo: cada transacción registrada en caja.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/4.png")
            .col-lg-7
              h5 Information (Información)
              p Datos estructurados y contextualizados. Ejemplo: ventas por ciudad o canal.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/5.png")
            .col-lg-7
              h5 Knowledge (Conocimiento)
              p Surge al identificar patrones y relaciones. Ejemplo: reconocer que en ciertas zonas las ventas disminuyen los fines de semana.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/6.png")
            .col-lg-7
              h5 Wisdom (Sabiduría)
              p Se alcanza al aplicar juicio estratégico basado en ese conocimiento. Ejemplo: implementar una campaña promocional para mejorar ventas en franjas horarias específicas.
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/7.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") La visualización se ubica como un eje central en esta cadena, ya que permite pasar del dato a la sabiduría mediante representaciones que conectan los distintos niveles: revela patrones ocultos (conocimiento), sintetiza información clave para el usuario (información) y activa escenarios de acción (sabiduría).
    
        .bg-color-4.px-4.py-5(data-aos="fade-left")
          p.mb-0 Para un profesional con formación tradicional, este enfoque representa una evolución natural del control y monitoreo hacia la gestión basada en analítica visual. Deja de ser un lector de reportes para convertirse en un intérprete de patrones, un generador de narrativas estratégicas y un facilitador de decisiones accionables.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/8.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Este enfoque responde no solo a una necesidad tecnológica, sino también a una transformación cultural en el mundo organizacional, donde saber leer, diseñar e interpretar visualizaciones se ha convertido en parte del lenguaje gerencial contemporáneo.
    
        .bg-color-1.p-5.mb-3(data-aos="fade-left")
          p.mb-0 A medida que los datos han dejado de ser simples registros de control para convertirse en activos estratégicos, la visualización se consolida como una herramienta clave que conecta el análisis con la acción. Tal como plantea la cadena DIKW, transformar datos en sabiduría requiere un proceso estructurado en el que la visualización actúa como el vehículo que traduce la complejidad en comprensión y la comprensión en decisiones oportunas.
        p Esta capacidad de traducir datos en decisiones ha posicionado la visualización como una pieza central en los sistemas de Business Intelligence (BI) y Data Analytics, al integrarse con tecnologías como tableros de control (dashboards), informes automatizados y plataformas interactivas de análisis exploratorio.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Evidencia internacional y estado del arte

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema1/9.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Según el estudio Analytics Comes of Age del McKinsey Global Institute (2016), las organizaciones que implementan visualización avanzada tienen una probabilidad cinco veces mayor de tomar decisiones con mayor rapidez que aquellas que no lo hacen. 
    
        .bg-color-2.p-5.mb-3(data-aos="fade-left")
          p.mb-0 Además, empresas líderes en sectores como salud, manufactura y servicios financieros están migrando hacia modelos de data storytelling, de modo que sus equipos no solo accedan a los datos, sino que los comprendan y los apliquen en tiempo real.
        p Por su parte, organismos como la ISO (Organización Internacional de Normalización) integran la visualización en estándares como la ISO 8000 (calidad de datos) y la ISO 25000 (calidad de software), reconociendo su papel en la validación, interpretación y presentación confiable de información crítica.
        h5 Investigaciones doctorales recientes en universidades como el MIT, el Tecnológico de Monterrey y la Universidad de Warwick han demostrado que el uso de dashboards interactivos mejora significativamente la toma de decisiones tácticas, en particular cuando se implementan en áreas como cadenas de suministro, talento humano y gestión financiera.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Aplicaciones directas en gestión
    
    p.mb-5 La visualización estratégica permite:

    .bg-full-width.bg-color-info
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema1/10.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="6%" y="96%" numero="+")
                h5 Detectar oportunidades de mejora
                p Al analizar tendencias en tiempo real, los equipos pueden anticiparse a cambios en el comportamiento del cliente, cuellos de botella operativos o variaciones en la demanda.
    
              .bg-color-white.box-shadow.p-3(x="70%" y="16.5%" numero="+")
                h5 Identificar anomalías
                p Mediante gráficos de control, mapas de calor o alertas visuales, es posible detectar desviaciones en indicadores clave antes de que se conviertan en fallas o pérdidas.
    
              .bg-color-white.box-shadow.p-3(x="58%" y="96%" numero="+")
                h5 Comunicar KPIs a stakeholders
                p Un dashboard bien diseñado no solo informa, sino que alinea a los equipos en torno a métricas comunes y objetivos estratégicos. Esto fomenta la colaboración y el enfoque en los resultados.
    
    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/11.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 En este sentido, visualizar ya no es una habilidad técnica secundaria, sino una competencia estratégica transversal que conecta áreas, personas y decisiones mediante un lenguaje común: el de los datos organizados, comprensibles y aplicables.
    
    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Casos internacionales de alto impacto y ejemplo aplicado: diagnóstico visual para la toma de decisiones
    
    p.mb-5 La visualización de datos se ha consolidado como una herramienta esencial en contextos de alta complejidad global, al permitir transformar grandes volúmenes de información en decisiones comprensibles y oportunas. Este apartado presenta casos internacionales emblemáticos en los que el uso de dashboards ha sido clave para comunicar riesgos, evaluar políticas y gestionar información en tiempo real. A partir de estos referentes, se plantea un ejercicio práctico que permitirá simular un proceso de diagnóstico visual, fortaleciendo la capacidad de interpretar datos estratégicos y tomar decisiones informadas en escenarios empresariales y del sector público.

    .row.align-items-start.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/12.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
    
        AcordionA(tipo="b")
          .div(titulo="Johns Hopkins COVID-19 Dashboard")
            p Herramienta de referencia global en salud pública. Ofrece actualización en tiempo real y visualización interactiva. Referencia: Dong, E., Du, H., & Gardner, L. (2020). The Lancet Infectious Diseases, 20(5), 533–534.
    
          .div(titulo="Banco Mundial – World Development Indicators")
            p Presenta gráficos comparativos y mapas dinámicos por país. Facilita decisiones sobre inversión y formulación de políticas públicas.
    
          .div(titulo="ONU – Portal de datos sobre los ODS")
            p Visualiza indicadores de desarrollo sostenible mediante dashboards temáticos con acceso a conjuntos de datos abiertos.
          .div(titulo="Bloomberg Terminal")
            p Herramienta especializada para análisis financiero. Permite la visualización de activos globales, gráficos en tiempo real y tableros de riesgos.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Ejercicio aplicado: diagnóstico visual para la toma de decisiones
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/13.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Visualización propuesta: gráfico de líneas por región que representa las ventas mensuales de enero a junio en cuatro regiones: Norte, Sur, Este y Oeste. La información se muestra mediante un dashboard interactivo que permite aplicar filtros por producto, canal de venta y ejecutivo comercial.
    
        .bg-color-5.p-5.mb-3(data-aos="fade-left")
          ul.lista-ul--color.mb-0
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Eje X: meses del año (enero a junio).
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Eje Y: total de ventas mensuales (en USD).
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Cada línea representa una región (Norte, Sur, Este, Oeste).
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Las líneas correspondientes a Sur, Este y Oeste se mantienen dentro del rango de 45,000 a 55,000 dólares.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 La línea correspondiente a la región Norte presenta una caída brusca a 28,000 dólares en abril.
        p Este ejercicio permite analizar una desviación significativa en el comportamiento comercial de una región, identificar posibles causas y proponer acciones correctivas. Así, se pone en práctica la capacidad de diagnóstico visual en contextos reales de toma de decisiones.

    .titulo-figura.mb-4
      h5 Figura 1.
      span Gráfico de líneas de ventas mensuales por región
    .row.justify-content-center.align-items-center.mb-5.bg-color-6.p-4
      .col-lg-8    
        figure
          img(src="@/assets/curso/tema1/14.png", data-aos="zoom-in")
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Análisis resumido y estratégico
    
    p.mb-5 A partir del ejercicio de diagnóstico visual, se identifican hallazgos clave que orientan la interpretación de los datos y la toma de decisiones en un escenario empresarial simulado

    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/15.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Patrón identificado
              p Las regiones Sur, Este y Oeste mantienen una tendencia mensual de ventas relativamente estable, con variaciones leves que pueden atribuirse al comportamiento natural del mercado.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/16.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Anomalía crítica
              p La región Norte presenta una caída abrupta en el mes de abril, con un total de ventas de 28,000 dólares, cifra considerablemente inferior al promedio regional de 50,000 dólares. Esta variación sugiere una posible interrupción operativa, una estrategia comercial ineficaz o una afectación logística específica.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/17.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Decisión recomendada
              p Se propone realizar un análisis causal inmediato de la situación en la región Norte durante abril. Entre las acciones sugeridas se encuentran:
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 ●	Revisión del abastecimiento logístico o de la cobertura territorial.	
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 ●	Refuerzo de promociones en puntos de venta estratégicos.	
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 ●	Reestructuración de las metas comerciales por zona.
    
    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/11.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Este caso pone en evidencia el valor de la visualización en contextos organizacionales, ya que permite detectar patrones y anomalías de forma inmediata y respaldar decisiones fundamentadas en datos confiables. 


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/230419 " target="_blank" rel="noopener noreferrer") Ballvé, A. M. (2023). El tablero de control: la revolución de la información directiva en el siglo XXI: (1 ed.). Ediciones Granica. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://learn.microsoft.com/es-es/power-bi/ " target="_blank" rel="noopener noreferrer") Microsoft. (2024). Documentación oficial de Power BI. Microsoft Learn. 


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=LnIJ1eky9D8&t=40s&ab_channel=OpenWebinars " target="_blank" rel="noopener noreferrer") OpenWebinars. (2019, 15 de abril). POWER BI: ¿Qué es?. [Video]. Youtube. 



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
