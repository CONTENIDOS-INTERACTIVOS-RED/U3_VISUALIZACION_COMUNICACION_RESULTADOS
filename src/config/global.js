export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Fundamentos de la Visualización de Datos',
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
        titulo: 'Importancia de la visualización en la toma de decisiones',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Del dato a la sabiduría – Cadena DIKW',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Casos internacionales de alto impacto y ejemplo aplicado: diagnóstico visual para la toma de decisiones',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Principios del diseño de gráficos e infografías',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Principios visuales fundamentales',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Fundamentos psicológicos del diseño',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Tipologías de gráficos y su uso táctico',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Casos reales y crítica visual',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Presentación de resultados y reportes de BI',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Comunicación de hallazgos a diferentes audiencias',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Tipologías de audiencias y reportes',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Elementos clave para comunicar hallazgos',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Técnicas narrativas para comunicar hallazgos',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: '<em>Storytelling</em> ejecutivo',
            hash: 't_3_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.6',
            titulo: 'Aplicación integrada: Caso Nestlé LATAM',
            hash: 't_3_6',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Herramientas recomendadas y su aplicación estratégica',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'PowerPoint + Power BI (vistas incrustadas)',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Tableau Storypoints',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Infogram',
            hash: 't_4_3',
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
        'López Cantos, F. J. (2018). <em>Cultura visual y conocimiento científico: comunicación transmedia de la ciencia en la era Big Data</em>. Editorial UOC.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/116307',
    },
    {
      referencia:
        'Sadowsky, J. (2013). <em>Las siete reglas del storytelling: inspire a su equipo con liderazgo auténtico</em>. Ediciones Granica.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/66757',
    },
    {
      referencia:
        'Castro, C., Barredo Ibáñez, D., & Arcila Calderón, C. (2017). <em>Analítica y visualización de datos en Twitter</em>. Editorial UOC.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/58659',
    },
    {
      referencia:
        'Pérez Cortés, A. (2010). <em>Implementación de tableros de control (indicadores) en el área de mejora continua en una empresa de manufactura</em>. Instituto Tecnológico de Puebla.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/85648',
    },
    {
      referencia:
        'Ortega Martínez, J. A. (2011). <em>Diagnóstico empresarial mediante el análisis económico-financiero</em>. Editorial Desclée de Brouwer.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/47974',
    },
    {
      referencia:
        'Palomo Zurdo, R. J. (2010). <em>Enciclopedia de Economía y Negocios (2): Análisis de sensibilidad - base de datos empresarial</em>. Wolters Kluwer España.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/204382',
    },
  ],
  glosario: [
    {
      termino: 'Análisis exploratorio',
      definicion:
        'Proceso inicial de análisis de datos que permite identificar patrones, tendencias, anomalías y relaciones antes de aplicar modelos estadísticos o predictivos.',
    },
    {
      termino: 'BI (Business Intelligence)',
      definicion:
        'Conjunto de estrategias, metodologías y herramientas que transforman datos en información útil para apoyar la toma de decisiones empresariales.',
    },
    {
      termino: 'Carga cognitiva',
      definicion:
        'Cantidad de esfuerzo mental que una persona necesita para procesar la información presentada, especialmente en entornos visuales y digitales.',
    },
    {
      termino: 'DAX',
      definicion:
        'Lenguaje de fórmulas utilizado en Power BI para crear cálculos personalizados, medidas y columnas dentro de modelos de datos.',
    },
    {
      termino: 'DIKW',
      definicion:
        'Modelo jerárquico que describe la transformación de los datos en conocimiento útil, pasando por las etapas de Datos, Información, Conocimiento y Sabiduría.',
    },
    {
      termino: 'Dashboard',
      definicion:
        'Tablero de control visual que integra y resume indicadores clave de desempeño (KPIs) para facilitar el análisis y la toma de decisiones.',
    },
    {
      termino: 'Data-to-ink ratio',
      definicion:
        'Proporción entre la tinta utilizada para mostrar datos relevantes y la usada en elementos decorativos, principio propuesto por Edward Tufte para mejorar la claridad visual.',
    },
    {
      termino: 'Gestalt',
      definicion:
        'Conjunto de principios psicológicos que explican cómo las personas perciben, organizan e interpretan patrones y estructuras visuales.',
    },
    {
      termino: 'Indicador clave (KPI)',
      definicion:
        'Métrica cuantitativa que mide el desempeño de un proceso, área o estrategia frente a un objetivo definido.',
    },
    {
      termino: 'Infografía',
      definicion:
        'Representación visual que combina gráficos, texto e iconografía para comunicar datos o conceptos de forma clara, atractiva y comprensible.',
    },
    {
      termino: 'Looker Studio',
      definicion:
        'Herramienta gratuita de Google para crear dashboards e informes visuales conectados a fuentes de datos como Google Sheets y Google Analytics.',
    },
    {
      termino: 'Metabase',
      definicion:
        'Herramienta de visualización de código abierto orientada al análisis ágil de datos mediante consultas SQL o interfaces gráficas.',
    },
    {
      termino: 'Power BI',
      definicion:
        'Herramienta de Microsoft para análisis empresarial y visualización de datos que permite crear reportes y dashboards interactivos.',
    },
    {
      termino: 'RawGraphs',
      definicion:
        'Herramienta de código abierto que permite crear visualizaciones personalizadas a partir de datos estructurados sin necesidad de programación.',
    },
  ],
}
