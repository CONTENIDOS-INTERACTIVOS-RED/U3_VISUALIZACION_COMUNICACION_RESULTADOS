<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Principios del diseño de gráficos e infografías'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Comprender los fundamentos técnicos y cognitivos de la visualización es clave para crear representaciones que no solo resulten ordenadas visualmente, sino que comuniquen de forma clara y orientada a la acción los resultados de un análisis de datos.
    
        .bg-color-2.px-4.py-5.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El uso estratégico de la visualización de datos permite identificar oportunidades, anticiparse a problemas y comunicar con claridad los indicadores clave en las organizaciones.
        p El diseño visual aplicado a la analítica de datos se apoya en referentes ampliamente reconocidos como Edward Tufte y Stephen Few, quienes proponen lineamientos para eliminar el “ruido visual” y maximizar el valor informativo de cada representación. Estos principios se complementan con fundamentos de la psicología cognitiva, como la teoría de la Gestalt y la teoría de la carga cognitiva (Sweller), que explican cómo las personas priorizan la información y cómo se puede facilitar su interpretación mediante el diseño adecuado.

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Principios visuales fundamentales

    p.mb-5 Para diseñar gráficos e infografías funcionales y comprensibles, es necesario aplicar una serie de principios visuales que garanticen claridad, coherencia estética y facilidad de interpretación. A continuación, se presentan los principales:

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/3.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Claridad y eliminación de ruido visual")
            p Evitar distracciones innecesarias. Todo elemento debe tener una función informativa. Por ejemplo, preferir un gráfico de barras limpio sobre uno 3D con sombras o texturas.
    
          .div(titulo="Jerarquía visual: uso del tamaño, color y ubicación")
            p Organizar elementos visuales para guiar la atención del usuario. Se recomienda ubicar los KPIs clave en la parte superior, utilizar tamaños mayores para las métricas principales y aplicar colores contrastantes.
    
          .div(titulo="Coherencia cromática y semiótica visual")
            p Utilizar colores con significados consistentes. Por ejemplo, respetar la paleta institucional: verde para positivo, rojo para alerta. Es importante evitar contradicciones visuales.
    
          .div(titulo="Minimalismo informativo (data-to-ink ratio)")
            p Reducir los elementos decorativos que no aportan información directa. Se sugiere eliminar cuadrículas innecesarias, mostrar solo los ejes pertinentes y centrarse en los datos clave.
    
    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Fundamentos psicológicos del diseño

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/4.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Comprender cómo las personas perciben y procesan la información visual permite diseñar representaciones que no solo sean estéticamente correctas, sino también accesibles, comprensibles y funcionales para la toma de decisiones.
    
        .bg-color-4.px-4.py-5(data-aos="fade-left")
          p.mb-0 Una vez establecidos los principios técnicos del diseño visual —como claridad, jerarquía, coherencia y minimalismo—, es necesario profundizar en cómo la mente humana interpreta esa información. Este subtema aborda los fundamentos psicológicos del diseño visual, que permiten construir gráficos y tableros no solo atractivos, sino también eficientes y accesibles para distintas audiencias.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/5.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Se denomina "fundamentos psicológicos del diseño" porque se centra en cómo el cerebro humano percibe, organiza y retiene la información visual, lo cual tiene implicaciones directas en la efectividad de dashboards, informes e infografías que los profesionales utilizan en sus campos de acción.
    
        .bg-color-1.p-5.mb-3(data-aos="fade-left")
          p.mb-0 El estudio de la percepción y la cognición visual es especialmente relevante para quienes trabajan en áreas como analítica de datos, ingeniería industrial, gestión de operaciones, educación, salud o inteligencia de negocios. El propósito final de un gráfico o visualización no es solo representar datos, sino facilitar decisiones. Para ello, el usuario debe poder comprender el contenido sin realizar un esfuerzo cognitivo excesivo.
        p Este contenido se presenta a continuación de los principios visuales porque no basta con organizar correctamente los elementos en pantalla: es necesario comprender cómo los va a interpretar el lector. Esto permite evitar la sobrecarga mental, mejorar la retención de la información y diseñar con empatía cognitiva.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Fundamento 1: teoría de la Gestalt
    
    p.mb-5 Esta teoría, desarrollada por la escuela de psicología alemana (Wertheimer, Koffka y Köhler), plantea que el cerebro humano tiende a organizar la información visual en patrones coherentes. Sus principios son ampliamente utilizados en el diseño de visualizaciones, ya que permiten estructurar la información de forma intuitiva y facilitar su interpretación. A continuación, se presentan los principios más relevantes de la Gestalt aplicados al diseño de dashboards, informes e infografías:

    TabsC.color-primario.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Proximidad" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Proximidad
            p Los elementos cercanos se perciben como relacionados. Por ejemplo, agrupar indicadores financieros dentro de un mismo bloque en un dashboard facilita su análisis conjunto.
    
          .col-md-8.col-lg-5.col-xl-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/6.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Similitud" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Similitud
            p Los elementos con forma o color similar se interpretan como parte de una misma categoría. Se puede usar el mismo color para representar las ventas de diferentes países dentro de una misma región.
    
          .col-md-8.col-lg-5.col-xl-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/7.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Continuidad" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Continuidad
            p La mente tiende a seguir flujos o líneas visuales naturales. En diagramas de flujo, las conexiones deben organizarse de izquierda a derecha o de arriba hacia abajo para facilitar la lectura.
    
          .col-md-8.col-lg-5.col-xl-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/8.png', alt='', style="width: 100%;")
    
    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/31.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 La aplicación de estos principios se observa en diversos contextos profesionales, como la industria manufacturera (tableros de control de procesos), la logística (visualización de rutas), la educación (materiales didácticos visuales) y las plataformas de Business Intelligence, como Tableau o Power BI.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Fundamento 2: carga cognitiva y atención visual

    .bg-full-width.bg-color-7
      .p-4.p-md-5
        .row.mb-5
          .col-lg-4.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/9.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            .bg-color-2.p-4(data-aos="fade-left").mb-3
              p.mb-0 Diseñar con base en cómo funciona la atención humana es esencial para evitar que una visualización se convierta en una fuente de confusión. Este fundamento se basa en investigaciones de John Sweller (teoría de la carga cognitiva) y Richard E. Mayer (teoría del aprendizaje multimedia), quienes demostraron que la mente tiene una capacidad limitada para procesar información al mismo tiempo.
            p(data-aos="fade-left") Cuando una visualización presenta demasiados datos o está mal estructurada, se genera sobrecarga cognitiva y se dificulta la comprensión. A continuación, se presentan algunas implicaciones clave:
        
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/10.svg" alt="" style="width: 90px")
              h5.text-center Exceso de elementos gráficos
              p.mb-0.text-center Simplificar y destacar solo los datos esenciales.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/11.svg" alt="" style="width: 90px")
              h5.text-center Combinación de múltiples tipos de gráficos sin conexión lógica
              p.mb-0.text-center Establecer una narrativa clara entre los elementos visuales.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/12.svg" alt="" style="width: 90px")
              h5.text-center Falta de guía visual
              p.mb-0.text-center Utilizar colores, flechas, tamaños y posiciones que orienten la atención del lector.

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto ¿Dónde se aplica?
        
        
        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/13.png", data-aos="zoom-in")
          .col-lg-8
            p(data-aos="fade-left") Este principio es especialmente relevante en:
            .bg-color-4.p-5(data-aos="fade-left")
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Tableros operativos que requieren respuestas rápidas (por ejemplo, en energía, salud o mantenimiento industrial).
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Entornos educativos o administrativos, donde un exceso de datos puede dificultar la comprensión de los indicadores clave.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Fundamento 3: tiempo de comprensión vs. nivel de detalle
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema2/14.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") No todas las visualizaciones requieren el mismo nivel de profundidad. Este principio parte de una regla práctica: cuanto mayor es la complejidad visual, más tiempo requiere el usuario para interpretarla. Por eso, es fundamental ajustar el nivel de detalle según el perfil del público objetivo. A continuación, se presenta cómo este fundamento se traduce en decisiones de diseño:
    
        .bg-color-1.p-5.mb-3(data-aos="fade-left")
          h5 Dashboard ejecutivo
          p Incluir solo KPIs clave, sin datos operativos
          .border-top.color-primario
          h5.mt-3 Dashboard táctico
          p.mb-0 Permitir navegación por capas (drill-down) para usuarios que necesitan profundizar.
    
    .bg-full-width.bg-color-9
      .p-4.p-md-5
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto ¿Dónde se aplica?

        p.mb-5 Este principio es útil en:

        .row.justify-content-center
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-3.mb-5
              .px-4.p-4
                .row.align-items-center
                  .col-lg-auto
                    img(src="@/assets/curso/tema2/15.svg", style="max-width: 90px").mx-auto
                  .col-lg.text-white
                    h5 01
                    p.mb-0 Presentaciones ante comités directivos
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-3.mb-5
              .px-4.p-4
                .row.align-items-center
                  .col-lg-auto
                    img(src="@/assets/curso/tema2/16.svg", style="max-width: 90px").mx-auto
                  .col-lg.text-white
                    h5 02
                    p.mb-0 Informes de gestión y regulatorios
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-3.mb-5
              .px-4.p-4
                .row.align-items-center
                  .col-lg-auto
                    img(src="@/assets/curso/tema2/17.svg", style="max-width: 90px").mx-auto
                  .col-lg.text-white
                    h5 03
                    p.mb-0 Cuadros de mando corporativos

        p.mb-5 Conocer y aplicar estos fundamentos psicológicos permite diseñar visualizaciones más comprensibles, centradas en las personas y útiles para la toma de decisiones. Estos principios se traducen en mejores resultados, menos errores y mayor alineación entre equipos.

    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Tipologías de gráficos y su uso táctico

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema2/18.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Una vez comprendidos los principios visuales —claridad, jerarquía, coherencia y minimalismo— junto con los fundamentos psicológicos del diseño —percepción visual, carga cognitiva y tiempo de comprensión—, el enfoque se traslada hacia un componente esencialmente práctico: la elección adecuada del tipo de gráfico según el objetivo del análisis y la intención comunicativa.
    
        .bg-color-10.p-5.mb-3(data-aos="fade-left")
          p.mb-0 No todos los gráficos cumplen la misma función. Seleccionar la visualización correcta no solo mejora la comprensión de los datos, sino que también previene errores interpretativos, facilita la lectura rápida y permite actuar con mayor precisión en diversos contextos organizacionales. En este sentido, la elección del gráfico deja de ser una cuestión estética para convertirse en una decisión estratégica.
        p Esta competencia es clave para profesionales de inteligencia de negocios, control de gestión, logística, marketing, finanzas y otras áreas en las que el análisis se traduce en decisiones visuales. A continuación, se presentan los principales tipos de gráficos, su propósito táctico y un enlace a una imagen ilustrativa de libre acceso para consulta académica:

    .bg-full-width.bg-color-11
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5.align-items-center
          .col-lg-8.mb-3.mb-lg-0.order-lg-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/20.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Gráfico de barras
                p.text-center Comparar magnitudes entre categorías, como ventas por producto o región.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/21.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Gráfico de columnas
                p.text-center Comparar datos en formato vertical. Útil para dashboards financieros y seguimiento de KPIs.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/22.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Gráfico de líneas
                p.text-center Visualizar la evolución temporal de una variable, como ventas mensuales o crecimiento.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/23.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Gráfico de cajas (boxplot)
                p.text-center Analizar la dispersión de los datos, detectar valores atípicos y observar la mediana. Común en análisis de procesos y calidad.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/24.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Gráfico de dispersión
                p.text-center Explorar correlaciones entre dos variables. Útil en análisis estadísticos y en modelos predictivos..
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/25.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Gráfico de burbujas
                p.text-center Representar tres dimensiones de datos. Ideal para análisis de posicionamiento de productos o segmentos..
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/26.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Gráfico circular (torta)
                p.text-center Mostrar proporciones entre categorías. Se recomienda solo cuando hay pocas categorías para evitar confusión.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/27.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Treemap
                p.text-center Representar composiciones jerárquicas en espacios compactos. Útil para análisis de portafolios o ventas agrupadas.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/28.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Barras apiladas (stacked bars)
                p.text-center Comparar componentes dentro de categorías. Recomendado para visualizar estructuras de costos, desempeño por área o ventas acumuladas.
    
          .col-lg-4.order-lg-1
            figure
              img(src='@/assets/curso/tema2/19.png', alt='')
    
    #t_2_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.4] Casos reales y crítica visual
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema2/29.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") La selección adecuada de gráficos no solo depende del conocimiento técnico y cognitivo, sino también del contexto real en el que se aplican. Comprender cómo impactan las visualizaciones en diferentes escenarios permite conectar el diseño gráfico informativo con su efecto estratégico en la toma de decisiones.
    
        .bg-color-2.p-5.mb-3(data-aos="fade-left")
          p.mb-0 Después de estudiar los principios del diseño visual, los fundamentos cognitivos y las tipologías de gráficos, este subtema propone analizar casos reales en los que las visualizaciones han sido empleadas con distintos fines: informar, persuadir, manipular o comunicar técnicamente. Cada caso se estructura a partir de una problemática visual concreta, una solución basada en la teoría del diseño y una aplicación adaptada a los objetivos comunicacionales y a la audiencia.
        p Este ejercicio no solo refuerza la comprensión conceptual, sino que fomenta el pensamiento crítico visual, una competencia fundamental en roles que integran análisis de datos con comunicación de resultados, como ocurre en la gestión corporativa, los medios, la política pública y la investigación internacional.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Caso 1: selección de gráfico en informes ejecutivos
    
    p.mb-5 En muchos informes corporativos se utilizan gráficos circulares para representar más de seis categorías, lo cual dificulta la lectura y genera ambigüedad visual. La solución consiste en emplear gráficos de barras horizontales ordenadas, que permiten comparar los valores de manera más clara.

    .titulo-figura.mb-4
      h5 Tabla 1.
      span Caso 1. Selección adecuada del tipo de gráfico en informes ejecutivos
    .tabla-a.color-acento-botones.mb-5.tbl
      table
        thead
          tr
            th.bg-color-3.text-white Elemento
            th.bg-color-3.text-white Selección
        tbody
          tr
            td Tipo de gráfico recomendado
            td Barras horizontales ordenadas
          tr.bg-color-6
            td Propósito
            td Comparación entre categorías
          tr
            td Justificación
            td Mejora la legibilidad y el orden de lectura de valores altos a bajos
          tr.bg-color-6
            td Objetivo comunicacional
            td Comparar participaciones porcentuales entre unidades de negocio
          tr
            td Audiencia
            td Directivos de estrategia y gestión financiera
          tr.bg-color-6
            td Resultado
            td Mayor claridad en las reuniones ejecutivas y mejor toma de decisiones presupuestales

    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Caso 2: análisis de visualizaciones en medios de comunicación
    
    p.mb-5 Durante coberturas electorales, algunos medios han utilizado gráficos de barras truncadas en el eje Y, lo cual exagera diferencias mínimas entre candidatos. La solución implica restaurar el eje Y completo o, si se recorta, indicar claramente el corte y agregar anotaciones.

    .titulo-figura.mb-4
      h5 Tabla 2.
      span Caso 2: análisis de visualizaciones en medios de comunicación
    .tabla-a.color-acento-botones.mb-5.tbl
      table
        thead
          tr
            th.bg-color-3.text-white Mecanismo
            th.bg-color-3.text-white Descripción y características
            th.bg-color-3.text-white Ventajas
            th.bg-color-3.text-white Limitaciones / Uso recomendado
        tbody
          tr
            td Collar con placa identificativa
            td Placa con nombre del animal y datos del tutor, visible en el collar o arnés.
            td Identificación inmediata y sin equipos especiales.
            td Puede perderse o retirarse. Se recomienda como complemento, no como único método.
          tr.bg-color-6
            td Tatuaje de identificación
            td Código alfanumérico tatuado en zonas del cuerpo (oreja, abdomen).
            td Bajo costo, útil en campañas de esterilización.
            td Puede desvanecerse; requiere base de datos activa. Útil como refuerzo del microchip.
          tr
            td Microchip de identificación (RFID)
            td Dispositivo subcutáneo con código único, escaneable por lector.
            td Permanente, difícil de falsificar, reconocido internacionalmente.
            td Requiere lector y base de datos activa. Es el método más confiable y recomendado.
          tr.bg-color-6
            td Dispositivos GPS / telemetría
            td Tecnología de rastreo en tiempo real mediante aplicaciones móviles.
            td Prevención de extravíos, útil en zonas rurales.
            td No es válido legalmente; depende de batería e internet. Solo complemento.
          tr
            td Placas digitales con QR
            td Código QR que enlaza a una ficha digital del animal.
            td Información extensa y actualizable; fácil acceso con celular.
            td Requiere conexión y mantenimiento del perfil digital. Recomendado como complemento.
          tr.bg-color-6
            td Identificación genética (ADN)
            td Análisis de muestras biológicas para comparar perfiles genéticos.
            td Precisión absoluta; útil en disputas legales o casos de maltrato.
            td Alto costo y complejidad. No viable para identificación masiva o cotidiana.
          tr
            td Marcas temporales / etiquetas de campaña
            td Elementos plásticos o textiles usados en jornadas institucionales.
            td Útiles en vacunación, esterilización o censos.
            td Valor solo operativo y transitorio. No constituyen identificación formal.



    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Caso 3: crítica a visualizaciones del Banco Mundial y otras organizaciones
    
    p.mb-5 En reportes sobre pobreza y salud, algunos dashboards institucionales presentan colores poco contrastantes o saturados, lo cual dificulta su lectura, especialmente para personas con daltonismo o en contextos multilingües. La solución se basa en mejorar la accesibilidad visual y adaptar la segmentación geográfica.

    .titulo-figura.mb-4
      h5 Tabla 3.
      span Caso 3: crítica a visualizaciones del Banco Mundial y otras organizaciones
    .tabla-a.color-acento-botones.mb-5.tbl  
      table
        thead
          tr
            th.bg-color-3.text-white Mecanismo
            th.bg-color-3.text-white Descripción y características
            th.bg-color-3.text-white Ventajas
            th.bg-color-3.text-white Limitaciones / Uso recomendado
        tbody
          tr
            td Collar con placa identificativa
            td Placa con nombre del animal y datos del tutor, visible en el collar o arnés.
            td Identificación inmediata y sin equipos especiales.
            td Puede perderse o retirarse. Se recomienda como complemento, no como único método.
          tr.bg-color-6
            td Tatuaje de identificación
            td Código alfanumérico tatuado en zonas del cuerpo (oreja, abdomen).
            td Bajo costo, útil en campañas de esterilización.
            td Puede desvanecerse; requiere base de datos activa. Útil como refuerzo del microchip.
          tr
            td Microchip de identificación (RFID)
            td Dispositivo subcutáneo con código único, escaneable por lector.
            td Permanente, difícil de falsificar, reconocido internacionalmente.
            td Requiere lector y base de datos activa. Es el método más confiable y recomendado.
          tr.bg-color-6
            td Dispositivos GPS / telemetría
            td Tecnología de rastreo en tiempo real mediante aplicaciones móviles.
            td Prevención de extravíos, útil en zonas rurales.
            td No es válido legalmente; depende de batería e internet. Solo complemento.
          tr
            td Placas digitales con QR
            td Código QR que enlaza a una ficha digital del animal.
            td Información extensa y actualizable; fácil acceso con celular.
            td Requiere conexión y mantenimiento del perfil digital. Recomendado como complemento.
          tr.bg-color-6
            td Identificación genética (ADN)
            td Análisis de muestras biológicas para comparar perfiles genéticos.
            td Precisión absoluta; útil en disputas legales o maltrato.
            td Alto costo y complejidad. No es viable para identificación masiva o cotidiana.
          tr
            td Marcas temporales / etiquetas de campaña
            td Elementos plásticos o textiles usados en jornadas institucionales.
            td Útiles en vacunación, esterilización o censos.
            td Valor solo operativo y transitorio. No constituyen identificación formal.



    p.mb-5 Estos casos demuestran que la selección correcta del tipo de gráfico no es un detalle técnico, sino una decisión estratégica que incide directamente en la comprensión, la transparencia y la credibilidad del análisis. Saber cuándo utilizar una línea, una barra, un mapa o un treemap puede marcar la diferencia entre un informe útil y uno que induce al error.

    .bg-full-width.bg-color-3.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2.text-white
            h2.mb-4(data-aos="flip-up") Herramientas de visualización – comparativa técnica y estratégica
            p.mb-4(data-aos="fade-right") Se invita a leer el documento “Herramientas de visualización”, donde se aborda una comparativa detallada entre diversas herramientas para la visualización de datos, tales como Power BI, Tableau, Google Looker Studio, entre otras.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Herramientas de visualización – comparativa técnica y estratégica.
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/30.png', alt='')






    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/153298 " target="_blank" rel="noopener noreferrer") Zangaro, M. (2019). La producción de conocimiento en las ciencias sociales y las humanidades: ( ed.). Ediciones del Aula Taller. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/58566 " target="_blank" rel="noopener noreferrer") Fernández, E. P. (2017). Big data: eje estratégico en la industria audiovisual: ( ed.). Editorial UOC. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://help.tableau.com/current/guides/get-started/es-es/get-started-overview.htm " target="_blank" rel="noopener noreferrer") Tableau. (2024). Guía de primeros pasos con Tableau. Tableau Help.  


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=WA9pm68o1rQ&ab_channel=knowmadmood " target="_blank" rel="noopener noreferrer") knowmad mood  (2018, 4 de diciembre). Visualización de datos en tiempo real con Power BI | atSistemas. [Video]. Youtube. 



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
