<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'4. Herramientas recomendadas y su aplicación estratégica'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-1.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema4/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") En esta sección se presentan herramientas digitales clave que potencian las presentaciones ejecutivas y facilitan la toma de decisiones basada en datos. Una de las más efectivas es la integración de PowerPoint con Power BI, que permite combinar narrativa visual e interactividad en un mismo entorno.

    #t_4_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.1] PowerPoint + Power BI (vistas incrustadas)
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/2.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Esta integración es ideal para presentaciones ejecutivas que combinan el flujo narrativo lineal de PowerPoint con la interactividad de dashboards de Power BI. Permite que los tomadores de decisiones exploren visualmente los datos sin salir de la presentación, favoreciendo la toma de decisiones basada en información actualizada.
    
        .bg-color-2.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema4/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5 Ejemplo aplicado
              p.mb-0 Unilever Global utiliza esta integración para reportes ESG (Environmental, Social and Governance), permitiendo a los líderes interactuar en tiempo real con métricas ambientales y de inclusión durante reuniones de comité, sin depender de reportes estáticos.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Cómo usar la integración PowerPoint + Power BI
      
    p.mb-5 Para aprovechar esta herramienta de manera estratégica, se recomienda seguir los siguientes pasos:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema4/4.png")
            .col-lg-7
              h5 1. Crear el dashboard en Power BI Desktop
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Descargar e instalar Power BI Desktop (gratis desde Microsoft Store o instalador .exe). 
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Conectar datos (Excel, SQL, CSV) y transformarlos con Power Query. 
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Diseñar visualizaciones (gráficos de barras, líneas, mapas, tablas) y configurar títulos y leyendas.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema4/5.png")
            .col-lg-7
              h5 2. Publicar en Power BI Service (nube)
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Hacer clic en Publicar para subir el informe. 
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Hacer clic en Publicar para subir el informe. 
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema4/6.png")
            .col-lg-7
              h5 3. Insertar en PowerPoint (Microsoft 365)
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Ir a Insertar → Mis complementos → Power BI. 
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Iniciar sesión, seleccionar el panel publicado y embeberlo como iframe. 
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 En modo presentación, se pueden aplicar filtros, visualizar tooltips y navegar sin salir de la diapositiva. 

    #t_4_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.2] Tableau Storypoints
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema4/7.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Tableau Storypoints es una herramienta que permite contar historias con datos mediante una secuencia de visualizaciones interactivas. Esta funcionalidad resulta especialmente útil cuando se requiere explicar hallazgos complejos paso a paso, facilitando que la audiencia siga una narrativa clara y secuencial.
    
        .bg-color-10.p-5(data-aos="fade-left")
          p.mb-0 Esta función permite crear narrativas visuales guiadas, donde cada “punto de historia” es equivalente a una diapositiva con un gráfico o panel interactivo. Es ideal para presentar análisis progresivos, resaltar cambios en el tiempo y estructurar un discurso de tipo inicio – nudo – desenlace.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto ¿Cómo se usa?
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/8.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Para implementar Tableau Storypoints en un flujo de trabajo típico se sigue este proceso:
    
        .bg-color-1.p-5(data-aos="fade-left")
          ul.lista-ul--color
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Se diseña el dashboard y las visualizaciones en Tableau Desktop.
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Se organiza el contenido en Storypoints, cada uno con su gráfico y explicación.
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Se publica en Tableau Server o Tableau Public, según el nivel de acceso requerido.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Ejemplo aplicado
    
    .bg-color-4.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.order-2
          figure
            img(src='@/assets/curso/tema4/9.png', alt='')
        .col-lg.order-1.mb-3.mb-lg-0
          .p-4
            p.mb-0(data-aos="fade-up") Bank of America utiliza Tableau Storypoints para presentaciones regulatorias, mostrando cómo evolucionan los riesgos operacionales en el tiempo. Esta narrativa ayuda a los auditores a comprender la historia detrás de los indicadores más allá de un gráfico aislado.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Paso a paso para construir un Tableau Story (Storypoints)
    
    p.mb-5 Para crear una historia completa en Tableau, se recomienda seguir los siguientes pasos secuenciales:

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/10.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="1. Conectar los datos")
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Abrir Tableau Desktop o Public Edition. 
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Seleccionar la opción Conectar a datos (Excel, CSV o Google Sheets).
    
          .div(titulo="2. Crear vistas individuales (hojas)")
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Diseñar gráficos básicos (barras, líneas, mapas). 
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Cada hoja representa una visualización específica, como ventas por región o evolución mensual de KPIs.
    
          .div(titulo="3. Añadir una nueva Story")
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Hacer clic en la pestaña Nueva historia (New Story). 
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Definir el tamaño de la historia (predefinido o personalizado).
    
          .div(titulo="4. Construir Storypoints")
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Arrastrar hojas o dashboards al primer punto. 
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Agregar título o pie de página para explicar el hallazgo. 
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Usar Blank para puntos nuevos o Duplicate para clonar y filtrar.
          .div(titulo="5. Editar cada punto visual")
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Ajustar leyendas, tamaños y resaltar datos clave. 
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Incluir explicaciones breves o llamadas a la acción.
          .div(titulo="6. Navegación y presentación")
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Usar la barra de Storypoints para avanzar o retroceder entre visualizaciones
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 En modo presentación o tras publicar, navegar con flechas o thumbnails.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Ejemplos de gráficos recurrentes en Storypoints
    
    p.mb-5 Antes de seleccionar las visualizaciones, conviene conocer los tipos de gráficos que mejor funcionan en historias interactivas:
    
    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema4/11.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Gráfico de barras comparativas
              p Comparar ventas reales vs. objetivo; ideal para resaltar brechas.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema4/12.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Mapa de calor o coroplético
              p Mostrar distribución regional de indicadores (p. ej., tasa de recompra por departamento).
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema4/13.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Gráfica de líneas con tendencia
              p Visualizar evolución temporal de KPIs (ventas, costes, churn).
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema4/14.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Tabla con KPIs destacados
              p Mostrar logros vs. metas, con indicadores tipo semáforo o barras de avance.

    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema4/24.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Estas visualizaciones pueden formar 3–4 Storypoints, siguiendo un flujo de problema → evidencia → análisis segmentado → propuesta de acción.

    .bg-full-width.bg-color-7
      .p-4.p-md-5
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Opciones gratuitas y tutoriales recomendados

        p.mb-5 Para iniciar con Tableau Storypoints sin costo, estas son herramientas y recursos útiles:

        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema4/15.svg" alt="" style="width: 90px")
              h5.text-center Tableau Desktop Public Edition
              p.mb-0.text-center Gratuito, ideal para estudiantes; permite visualizaciones ilimitadas y publicación en Tableau Public.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema4/16.svg" alt="" style="width: 90px")
              h5.text-center Plan estudiantil de licencia completa
              p.mb-0.text-center Licencia gratuita por un año con todas las funciones, incluidas conexiones privadas.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema4/17.svg" alt="" style="width: 90px")
              h5.text-center Tutoriales paso a paso
              p.mb-0.text-center <em>GeeksforGeeks: "How to Create a Story in Tableau"</em>
              p.mb-0.text-center <em>DataCamp: "Creating Stories in Tableau"</em>

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto ¿Por qué usar Tableau Storypoints?
        
        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema4/18.png", data-aos="zoom-in")
          .col-lg-8
            p(data-aos="fade-left") Elegir esta funcionalidad aporta tres ventajas estratégicas principales:
            .bg-color-4.p-5(data-aos="fade-left")
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Ofrece una narrativa visual clara y escalonada, guiando a la audiencia en un orden lógico.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Mantiene la interactividad al trabajar en Desktop/Public o publicar en la nube.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Facilita la comprensión de temas complejos paso a paso, como en el ejemplo de Bank of America.

    #t_4_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.3] Infogram
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema4/19.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Infogram es una herramienta online de visualización de datos que permite crear gráficos, mapas e infografías interactivas sin necesidad de conocimientos avanzados de diseño o business intelligence. Es ideal para reportes institucionales, comunicados públicos e informes para audiencias no técnicas, donde la claridad visual y la narrativa son prioritarias.
    
        .bg-color-10.p-5.mb-3(data-aos="fade-left")
          p.mb-0 Su función principal es convertir datos en historias visuales atractivas. Gracias a su diseño intuitivo y capacidad interactiva, permite comunicar tendencias, comparaciones y resultados clave de forma sencilla y profesional.
        h5 Ejemplo aplicado:
        p El Alto Comisionado de las Naciones Unidas para los Refugiados (ACNUR) utiliza Infogram para dashboards humanitarios, mostrando tendencias migratorias mediante mapas, líneas de tiempo e infografías. Esto facilita que públicos generales y tomadores de decisión comprendan los datos sin necesidad de análisis técnico

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto ¿Cómo se usa?
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/20.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Para trabajar con Infogram basta con seguir un flujo básico:
        .bg-color-1.p-5(data-aos="fade-left")
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p 1.	Acceder a la plataforma en  <br>
            a.anexo.mb-4.mb-lg-0.bg-color-white(href="https://www.infogram.com" target="_blank")
              .anexo__icono.bg-color-13
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p <b>Ir al sitio</b> www.infogram.com
          ul.lista-ul--color.mb-0
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 2.	Seleccionar una plantilla (barras, mapas, cronologías, KPI, etc.).
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 3.	Cargar los datos desde Excel, Google Sheets o ingresarlos manualmente.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 4.	Personalizar el diseño con colores corporativos, logotipos y textos narrativos.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 5.	Publicar el proyecto de forma pública o embeberlo en un sitio web.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Ventajas principales
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema4/21.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Antes de ver el proceso paso a paso, conviene conocer sus ventajas:
        .bg-color-4.p-5(data-aos="fade-left")
          ul.lista-ul--color.mb-0
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Acceso inmediato desde el navegador, sin instalación.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Interfaz intuitiva con función de arrastrar y soltar.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Importación directa de datos desde Excel, Google Sheets o CSV.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Adecuada para comunicar datos a audiencias no técnicas.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Permite embeber proyectos en blogs, presentaciones o plataformas educativas.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Paso a paso para crear un Infogram desde Excel
    
    p.mb-5 A continuación, se presenta la tabla con el paso a paso para crear un Infogram desde Excel.

    .row.align-items-start.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/22.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
    
        AcordionA(tipo="b")
          .div(titulo="1. Acceder a la plataforma")
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p Ingresar a  
              a.anexo.mb-4.mb-lg-0.bg-color-white(href="https://www.infogram.com" target="_blank")
                .anexo__icono.bg-color-13
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p <b>Ir al sitio</b> www.infogram.com
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Crear una cuenta gratuita con correo institucional, Google o LinkedIn.
    
          .div(titulo="2. Crear un nuevo proyecto")
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Hacer clic en Create → Infographic o Dashboard. 
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Seleccionar una plantilla prediseñada o Blank para iniciar desde cero.
    
          .div(titulo="3. Cargar los datos desde Excel")
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 - Ir a la barra lateral y seleccionar Add Chart. - Elegir el tipo de gráfico: barras, líneas, pastel, mapas, KPI o tablas. - Hacer clic en el gráfico → Edit data → Import Excel (.xlsx) o pegar los datos manualmente. Ejemplo práctico: Si el Excel contiene: Categoría – Ventas Tecnología – 15000 Muebles – 10000 Suministros – 8000 Puede representarse como: - Gráfico de columnas → Comparativo por categoría. - Indicador (KPI) → Total por categoría. - Gráfico circular → Distribución porcentual.
    
          .div(titulo="4. Personalizar el diseño")
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Cambiar colores corporativos, tipografías y leyendas.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Agregar títulos, subtítulos y textos narrativos. - Insertar íconos, imágenes o mapas según la historia visual.
          .div(titulo="5. Publicar o compartir")
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Hacer clic en Share y seleccionar: 
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Enlace público para compartir.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Código embed para integrar en un sitio web. 
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Descarga como PNG (gratis) o PDF/PowerPoint (PRO). 
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Comparativa de herramientas de visualización gratuitas
    
    p.mb-5 Las siguientes plataformas permiten crear visualizaciones online sin instalar software:

    .titulo-figura.mb-4
      h5 Tabla 5.
      span Comparativa de herramientas de visualización gratuitas
    .tabla-a.color-acento-botones.mb-5.tbl 
      table
        thead
          tr
            th.bg-color-3.text-white Herramienta
            th.bg-color-3.text-white Gratuita
            th.bg-color-3.text-white Requiere instalación
            th.bg-color-3.text-white Nivel de uso
        tbody
          tr
            td Infogram
            td Sí
            td No
            td Muy fácil
          tr.bg-color-6
            td Canva + gráficos
            td Sí
            td No
            td Fácil
          tr
            td Google Looker Studio
            td Sí
            td No
            td Intermedio
          tr.bg-color-6
            td Datawrapper
            td Sí
            td No
            td Fácil
          tr
            td Piktochart
            td Sí
            td No
            td Fácil



    p.mb-5 Infogram destaca por su simplicidad y enfoque narrativo, siendo la opción más intuitiva para usuarios sin experiencia en BI.

    .bg-full-width.bg-color-3.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2.text-white
            h2.mb-4(data-aos="flip-up") Evaluación del impacto de la información visualizada
            p.mb-4(data-aos="fade-right") Se invita a leer el documento Evaluación del impacto de la información visualizada, donde se aborda el análisis profundo del valor estratégico de las visualizaciones de datos en entornos de inteligencia de negocios. 
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Evaluación del impacto de la información visualizada.
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/23.png', alt='')

    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/204382" target="_blank" rel="noopener noreferrer") Palomo Zurdo, R. J. (Coord.). (2010). Enciclopedia de Economía y Negocios (2), Análisis de sensibilidad - base de datos empresarial: ( ed.). Wolters Kluwer España - Ciudad Educativa. 
            
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://learn.microsoft.com/power-bi" target="_blank" rel="noopener noreferrer") Microsoft. (s. f.). Power BI documentation. Microsoft.  (Nota: se emplea “s. f.” si no se encuentra la fecha de publicación)



            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=FESG7GTjc-4" target="_blank" rel="noopener noreferrer") HUB UIO. [HUB UIO]. (2021, 26 de octubre). Power BI desde cero - clase 1 | Curso gratuito de Power BI [Video]. YouTube. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=iXFob3A5o4s" target="_blank" rel="noopener noreferrer") Grupo Orvital. [Grupo Orvital]. (2023, 1 de agosto). Curso Power BI desde cero | Clase 1 - Introducción [Video]. YouTube.





          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema4',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál es el principal objetivo de la visualización de datos en un entorno organizacional?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Embellecer informes con gráficos llamativos',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Embellecer informes con gráficos llamativos',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Eliminar la necesidad de análisis estadístico',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Reemplazar la comunicación verbal',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              'Si vas a mostrar un gráfico en una reunión y quieres que se entienda rápido y sin distracciones, ¿qué deberías evitar?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Usar solo los datos importantes',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Llenar el gráfico con formas y colores innecesarios',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Mostrar solo una parte de los resultados',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Usar colores planos y contrastes simples',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Cuál de las siguientes herramientas permite la creación gratuita de dashboards interactivos en la nube?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Power BI Pro',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Tableau Desktop',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Google Looker Studio',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'SAP Analytics Cloud',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Qué técnica mejora la comprensión de hallazgos mediante la conexión de datos con una narrativa estructurada?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Análisis predictivo',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Data Mining',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Storytelling con datos',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Algoritmos de agrupamiento',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Cuál es un riesgo común en la visualización de datos que afecta la interpretación?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Uso de un título descriptivo',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Exceso de contraste de colors',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Ejes mal escalados',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Falta de iconografía',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
