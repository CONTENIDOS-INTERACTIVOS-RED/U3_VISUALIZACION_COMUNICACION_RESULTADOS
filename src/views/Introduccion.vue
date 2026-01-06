<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-1.tarjeta.p-4.h-100(data-aos="fade-left")
          p(data-aos="fade-left") En entornos organizacionales cada vez más impulsados por los datos, contar con habilidades para transformar cifras en representaciones visuales comprensibles se ha vuelto una competencia esencial. Esta unidad aborda los fundamentos de la visualización de datos, una herramienta clave dentro de la analítica avanzada que permite comprender fenómenos, detectar patrones y comunicar hallazgos de manera efectiva.
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/intro/1.png" data-aos="zoom-in")
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-2.tarjeta.p-4.h-100(data-aos="fade-left")
          p(data-aos="fade-left") La visualización no se limita a representar datos gráficamente, sino que constituye un puente entre el análisis técnico y la acción estratégica. Su valor radica en facilitar la toma de decisiones informadas, optimizar la gestión y comunicar información de forma clara a diversos públicos. Por ello, esta unidad se sitúa como base del curso, estableciendo las herramientas conceptuales y prácticas necesarias para construir visualizaciones útiles, éticas y alineadas con objetivos organizacionales.
    
    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/intro/2.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Al finalizar esta unidad, se espera que el estudiante sea capaz de diseñar visualizaciones de datos aplicando principios de percepción visual, diseño gráfico y uso de herramientas especializadas como Power BI, Tableau y Google Looker Studio. También se busca que comprenda el rol estratégico de la visualización en la comunicación de resultados y en la generación de valor a partir de los datos.   

</template>
