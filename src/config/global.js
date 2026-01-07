export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Presentación de resultados y reportes de BI',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Presentación de resultados y reportes de BI',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Comunicación de hallazgos a diferentes audiencias',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Tipologías de audiencias y reportes',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Elementos clave para comunicar hallazgos',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Técnicas narrativas para comunicar hallazgos',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: '<em>Storytelling</em> ejecutivo',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Aplicación integrada: Caso Nestlé LATAM',
            hash: 't_1_6',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Herramientas recomendadas y su aplicación estratégica',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'PowerPoint + Power BI (vistas incrustadas)',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Tableau Storypoints',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Infogram',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Rave Gómez, E. D. (Comp.). (2019). <em>Análisis de casos empresariales: una perspectiva para enfrentar los desafíos gerenciales</em>. (1 ed.). D - Institución Universitaria de Envigado.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/226483',
    },
    {
      referencia:
        'Santiesteban Zaldívar, E. (2011). <em>Análisis de la rentabilidad económica: tecnología propuesta para incrementar la eficiencia empresarial</em>. Editorial Universitaria.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/71436',
    },
    {
      referencia:
        'Uribe Macías, M. E. & Cujiño Ibarra, M. J. (2014). <em>La estrategia en la historia empresarial: análisis de dos casos empresariales</em>. Sello Editorial Universidad del Tolima.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/71018',
    },
  ],
  glosario: [
    {
      termino: 'Automatización de reportes',
      definicion:
        'Proceso de generación automática de informes a partir de flujos de datos programados mediante herramientas BI y ETL.',
    },
    {
      termino: 'BI (Business Intelligence)',
      definicion:
        'Conjunto de herramientas y técnicas que permiten transformar datos en información útil para la toma de decisiones.',
    },
    {
      termino: 'Dashboard',
      definicion:
        'Panel visual que presenta de forma interactiva datos clave para monitoreo y análisis.',
    },
    {
      termino: 'ETL (Extract, Transform, Load)',
      definicion:
        'Proceso para extraer, transformar y cargar datos desde múltiples fuentes hacia un repositorio o dashboard.',
    },
    {
      termino: 'KCI (Key Control Indicator)',
      definicion:
        'Indicador que mide el grado de cumplimiento o control sobre un proceso clave.',
    },
    {
      termino: 'KPI (Key Performance Indicator)',
      definicion:
        'Indicador clave para medir el cumplimiento de objetivos estratégicos.',
    },
    {
      termino: 'KRI (Key Risk Indicator)',
      definicion:
        'Indicador que permite medir el nivel de exposición a un riesgo específico.',
    },
    {
      termino: 'Minimización cognitiva',
      definicion:
        'Técnica de diseño visual que reduce el esfuerzo mental requerido para comprender una visualización.',
    },
    {
      termino: 'Periodicidad',
      definicion:
        'Frecuencia con la que un informe o dashboard es actualizado o entregado.',
    },
    {
      termino: 'Scoring visual',
      definicion:
        'Método para evaluar la efectividad de una visualización desde el punto de vista del usuario final.',
    },
    {
      termino: 'Storytelling ejecutivo',
      definicion:
        'Narrativa estratégica que convierte hallazgos analíticos en mensajes persuasivos orientados a la acción.',
    },
    {
      termino: 'Tipologías de reporte',
      definicion:
        'Clasificación de los informes según su uso operativo, táctico o estratégico.',
    },
    {
      termino: 'Trazabilidad',
      definicion:
        'Capacidad de seguir el origen y transformación de los datos utilizados en una visualización.',
    },
  ],
}
