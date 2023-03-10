import imageToyoserra from '../assets/projects/toyoserra.png'
import imageValesca from '../assets/projects/valesca.png'
import imageNFCC from '../assets/projects/nfcc.png'
import imageCubo from '../assets/projects/cubo.png'
import imageConteco from '../assets/projects/conteco.png'
import imageUniaoMundial from '../assets/projects/uniao_mundial.png'
import imageSeminovos from '../assets/projects/seminovos.png'
import imageFatorX from '../assets/projects/fatorx.png'
import imageColors from '../assets/projects/colors.png'
import imageVocabPlusPlus from '../assets/projects/vocab_plus_plus.png'

import imageGithubBlog from '../assets/projects/blog.png'
import imageCoffeeDelivery from '../assets/projects/coffee_delivery.png'
import imageDTMoney from '../assets/projects/dt_money.png'
import imageIgniteFeed from '../assets/projects/ignite_feed.png'
import imageIgniteShop from '../assets/projects/ignite_shop.png'
import imageIgniteTimer from '../assets/projects/ignite_timer.png'
import imageIgniteCall from '../assets/projects/ignite_call.png'
import imageIgniteDesignSystem from '../assets/projects/ignite_design_system.png'
import imageTodoList from '../assets/projects/todo_list.png'

export interface ProjectI18nType {
  id: number
  title?: string
  enUS: {
    description: string
    technologies: string
  }
  ptBR: {
    description?: string
    technologies?: string
  }
  category: 'laravel' | 'react' | 'vue' | 'other'
  image: string
  github?: string
  url?: string
}

const projects = [
  {
    id: 10,
    title: 'Ignite Call',
    enUS: {
      description:
        "Ignite Call is a project developed during Rocketseat's Ignite course which aims to offer an online appointment system integrated with Google Calendar. With it, it is possible to register days and times available for scheduling and clients can view the available times in a calendar and schedule directly through the system.",
      technologies:
        'To build the project, several technologies were used, such as Next.js, Prisma, React Hook Form, Zod, Google APIs, Next Auth, Axios and MySQL, among others. In addition, we use the Design System built previously (as you can see in the project below). We also deployed the database to the Planetscale platform and deployed the application to Vercel. The project was an opportunity to learn and apply important concepts such as system integration, cookie handling, component customization, SQL queries and SEO optimizations.',
    },
    ptBR: {
      description:
        'Ignite Call ?? um projeto desenvolvido durante o curso Ignite da Rocketseat que tem como objetivo oferecer um sistema de agendamentos online integrado ao Google Agenda. Com ele, ?? poss??vel cadastrar dias e hor??rios dispon??veis para agendamento e os clientes podem visualizar os hor??rios dispon??veis em um calend??rio e fazer o agendamento diretamente pelo sistema.',
      technologies:
        'Para a constru????o do projeto, foram utilizadas diversas tecnologias, como Next.js, Prisma, React Hook Form, Zod, Google APIs, Next Auth, Axios e MySQL, entre outras. Al??m disso, utilizamos o pr??prio Design System constru??do anteriormente (como voc?? pode ver no projeto abaixo). Tamb??m foi realizado o deploy do banco de dados para a plataforma Planetscale e o deploy da aplica????o para o Vercel. O projeto foi uma oportunidade de aprender e aplicar conceitos importantes como integra????o de sistemas, manipula????o de cookies, customiza????o de componentes, querys SQL e otimiza????es de SEO.',
    },
    image: imageIgniteCall,
    github: 'https://github.com/HenriqueMarcelo/ignite-call',
    url: 'https://ignite-call-alpha.vercel.app/',
    category: 'react',
  },
  {
    id: 111,
    title: 'Ignite Design System',
    enUS: {
      description:
        "Ignite Call is a project developed during Rocketseat's Ignite course which aims to offer an online appointment system integrated with Google Calendar. With it, it is possible to register days and times available for scheduling and clients can view the available times in a calendar and schedule directly through the system.",
      technologies:
        'To build the project, several technologies were used, such as Next.js, Prisma, React Hook Form, Zod, Google APIs, Next Auth, Axios and MySQL, among others. We also deployed the database to the Planetscale platform and deployed the application to Vercel. The project was an opportunity to learn and apply important concepts such as system integration, cookie handling, component customization, SQL queries and SEO optimizations.',
    },
    ptBR: {
      description:
        'O projeto Ignite Design System ?? um conjunto completo de ferramentas de Design System constru??do dentro do curso Ignite da Rocketseat. Ele ?? composto de tr??s pacotes, cada um com sua pr??pria funcionalidade espec??fica. O pacote de tokens exporta valores, cores e outras informa????es compartilhadas. O pacote de componentes exporta componentes React. Por fim, o pacote de documenta????o cont??m uma documenta????o completa que explica como utilizar e mostra exemplos dos componentes do design system.',
      technologies:
        'Na constru????o do Ignite Design System foram utilizadas diversas tecnologias de ponta, incluindo React, Typescript, Stitches, Phosphor Icons e Radix. Al??m disso, foram utilizadas ferramentas como turborepo e changesets para gerenciar v??rias depend??ncias em um ??nico reposit??rio e garantir que cada pacote esteja sincronizado com as vers??es mais recentes. O projeto tamb??m foi enviado para o NPM e Github Pages, utilizando o Github Actions.',
    },
    image: imageIgniteDesignSystem,
    github: 'https://github.com/HenriqueMarcelo/ignite-design-system',
    url: 'https://henriquemarcelo.github.io/ignite-design-system/',
    category: 'react',
  },
  {
    id: 11,
    title: 'Ignite Shop',
    enUS: {
      description:
        "Ignite Shop is a project developed during Rocketseat's Ignite course. It is an online store that allows the viewing and purchasing of products. The goal of the project is to teach the students to build a complete and functional Next.JS application using modern web development technologies.",
      technologies:
        "To build the project, technologies like Next.js, ReactJS, Stitches, Typescript and integration with Stripe's API were used. Besides this, libraries such as axios, keen-slider, use-shopping-cart were used. With these technologies it was possible to create an application with excellent performance and high code quality.",
    },
    ptBR: {
      description:
        'Ignite Shop ?? um projeto desenvolvido durante o curso Ignite da Rocketseat. Trata-se de uma loja virtual que permite a visualiza????o e compra de produtos. O objetivo do projeto ?? ensinar os alunos a constru??rem uma aplica????o Next.JS, completa e funcional utilizando tecnologias modernas de desenvolvimento web.',
      technologies:
        'Para a constru????o do projeto, foram utilizadas tecnologias como Next.js, ReactJS, Stitches, Typescript e integra????o com a API da Stripe.  Al??m disso, foram utilizadas bibliotecas como: axios, keen-slider, use-shopping-cart. Com essas tecnologias, foi poss??vel criar uma aplica????o com excelente performance e alta qualidade de c??digo.',
    },
    image: imageIgniteShop,
    github: 'https://github.com/HenriqueMarcelo/ignite-shop',
    url: 'https://ignite-shop-gilt.vercel.app/',
    category: 'react',
  },
  {
    id: 12,
    title: 'Github Blog',
    enUS: {
      description:
        "The Github Blog project is a web application that allows users to create and manage their own blogs directly from Github. It was developed as a challenge for Rocketseat's Ignite course with the goal of putting into practice concepts such as: API access, SPA application creation, reading and displaying Markdown and creation of styled components.",
      technologies:
        'To build the project we used technologies such as React, Typescript, styled-components, Axios and the Github API for integration with Github Issues. Additionally, libraries such as react-markdown, date-fns and react-hook-form were used.',
    },
    ptBR: {
      description:
        "O projeto Github Blog ?? uma aplica????o web que permite aos usu??rios criarem e gerenciarem seus pr??prios blogs diretamente pelo Github. Ele foi desenvolvido como um desafio do curso Ignite da Rocketseat com o objetivo de colocarmos em pr??ticas conceitos como: Acesso a API's, cria????o de aplica????o SPA, leitura e exibi????o de Markdown e cria????o de componentes estilizados.",
      technologies:
        'Para a constru????o do projeto, foram utilizadas tecnologias como React, Typescript, styled-components, Axios e a API do Github para integra????o com o Github Issues. Al??m disso, foram utilizadas bibliotecas como react-markdown, date-fns e react-hook-form.',
    },
    image: imageGithubBlog,
    github: 'https://github.com/HenriqueMarcelo/github-blog',
    url: 'https://github-blog.kursi.com.br/',
    category: 'react',
  },
  {
    id: 13,
    title: 'Coffee Delivery',
    enUS: {
      description:
        "Coffee Delivery is a project of a graphical interface for an online coffee shop. It is not integrated with a back-end, but was created to simulate the front-end of a real application. It was created as a challenge in Rocketseat's Ignite course with the objective of putting into practice skills learned in the course, such as the creation of a React application, stylized components, useContext, SPA, forms, Typescript, and much more.",
      technologies:
        'To build the Coffee Delivery, we used technologies such as ReactJS, TypeScript, styled-components and libraries such as: React Hook Form, React Router, Styled Components, Phosphor React and more.',
    },
    ptBR: {
      description:
        'O Coffee Delivery ?? um projeto de uma interface gr??fica para uma loja virtual de caf??s. Ele n??o est?? integrado com um back-end, mas foi criado para simular o front-end de uma aplica????o real. Ele foi criado como um desafio no curso Ignite da Rocketseat com o objetivo de colocarmos em pr??tica habilidades que foram aprendidas no curso, como a cria????o de uma aplica????o React, componentes estilizados, useContext, SPA, formul??rios, Typescript, e muito mais.',
      technologies:
        'Para a constru????o do Coffee Delivery, foram utilizadas tecnologias como ReactJS, TypeScript, styled-components e a bibliotecas como: React Hook Form, React Router, Styled Components, Phosphor React e muito mais.',
    },
    image: imageCoffeeDelivery,
    github: 'https://github.com/HenriqueMarcelo/coffee-delivery',
    url: 'https://coffee-delivery.kursi.com.br/',
    category: 'react',
  },
  {
    id: 14,
    title: 'DT Money',
    enUS: {
      description:
        'DT Money is a personal finance project created with the objective of helping the management of expenses and income. The project was developed during the Rocketseat Ignite course, with the intention of applying the concepts of React and TypeScript in practice, as well as improving the knowledge of state manipulation, API usage and component styling.',
      technologies:
        'To build DT Money, technologies such as React, TypeScript and Styled Components were used. In addition, libraries such as Axios, React Hook Form, Zod and Radix were used. The project also uses the React context concept to manage the global state of the application.',
    },
    ptBR: {
      description:
        'DT Money ?? um projeto de controle financeiro pessoal criado com o objetivo de auxiliar no gerenciamento de despesas e receitas. O projeto foi desenvolvido durante o curso Ignite da Rocketseat, com o intuito de aplicar os conceitos de React e TypeScript na pr??tica, al??m de aprimorar os conhecimentos em manipula????o de estado, uso de API e estiliza????o de componentes.',
      technologies:
        'Para a constru????o do DT Money, foram utilizadas tecnologias como React, TypeScript e Styled Components. Al??m disso, foram utilizadas bibliotecas como Axios, React Hook Form, Zod e Radix. O projeto tamb??m utiliza o conceito de contexto do React para gerenciar o estado global da aplica????o.',
    },
    image: imageDTMoney,
    github: 'https://henriquemarcelo.github.io/dt-money/',
    category: 'react',
  },
  {
    id: 15,
    title: 'Ignite Timer',
    enUS: {
      description:
        "Ignite Timer is a focus timer project built to help people manage their time and increase their productivity. This project was created with the goal of putting into practice the concepts of React, TypeScript and state management with Context API, learned during Rocketseat's Ignite course.",
      technologies:
        'To build the project, technologies such as React, TypeScript and Context API were used. In addition, libraries such as styled-components, react-hook-form, zod, react-router-dom, and others were used.',
    },
    ptBR: {
      description:
        'Ignite Timer ?? um projeto de um timer de foco constru??do para ajudar as pessoas a gerenciar seu tempo e aumentar sua produtividade. Esse projeto foi criado com o objetivo de colocar em pr??tica os conceitos de React, TypeScript e gerenciamento de estado com Context API, aprendidos durante o curso Ignite da Rocketseat.',
      technologies:
        'Para a constru????o do projeto, foram utilizadas tecnologias como React, TypeScript e Context API. Al??m disso, foram utilizadas bibliotecas como styled-components, react-hook-form, zod, react-router-dom, entre outras.',
    },
    image: imageIgniteTimer,
    url: 'https://henriquemarcelo.github.io/ignite-timer/#/',
    github: 'https://github.com/HenriqueMarcelo/ignite-timer',
    category: 'react',
  },
  {
    id: 16,
    title: 'ToDo List',
    enUS: {
      description:
        "The ToDo List is a web application that works like a task list. With it you can create tasks, mark as done and remove tasks. The project was developed during Rocketseat's Ignite course, with the goal of teaching the basics of React, Typescript and form manipulation.",
      technologies: 'React and Typescript were used to build the project.',
    },
    ptBR: {
      description:
        'O ToDo List ?? um aplicativo web que funciona como uma lista de tarefas. Com ele ?? poss??vel criar tarefas, marcar como conclu??das e remover as tarefas. O projeto foi desenvolvido durante o curso Ignite da Rocketseat, com o objetivo de ensinar os conceitos b??sicos do React, Typescript e manipula????o de formul??rios.',
      technologies:
        'Para a constru????o do projeto, foram utilizadas React e Typescript.',
    },
    image: imageTodoList,
    url: 'https://henriquemarcelo.github.io/to-do-list/',
    github: 'https://github.com/HenriqueMarcelo/to-do-list',
    category: 'react',
  },
  {
    id: 17,
    title: 'Ignite Feed',
    enUS: {
      description:
        "The Ignite Feed is a web application that simulates the operation of a graphical interface of a social network feed. The project was developed during Rocketseat's Ignite course, with the goal of learning about React, Typescript and date manipulation.",
      technologies:
        'To build the project, technologies like: React, Typescript, DateFNS, Faker and ESLint were used.',
    },
    ptBR: {
      description:
        'O Ignite Feed ?? um aplicativo web que simula o funcionamento de uma interface gr??fica de um feed de uma rede social. O projeto foi desenvolvido durante o curso Ignite da Rocketseat, com o objetivo de aprender sobre React, Typescript e manipula????o de datas.',
      technologies:
        'Para a constru????o do projeto, foram utilizadas tecnologias como: React, Typescript, DateFNS, Faker e ESLint.',
    },
    image: imageIgniteFeed,
    url: 'https://henriquemarcelo.github.io/ignite-feed/',
    github: 'https://github.com/HenriqueMarcelo/ignite-feed',
    category: 'react',
  },
  {
    id: 18,
    title: 'Fator X Live',
    enUS: {
      description:
        'A web application and administrative system that supported the Fator X 2021 event. Users logged in with their accounts and had access to a news feed, links to the event, and material downloads.',
      technologies:
        'React, TypeScript, Redux, Bootstrap and SASS were used to build the application.',
    },
    ptBR: {
      description:
        'Uma aplica????o web e sistema administrativo que dava suporte ao evento Fator X 2021. Os usu??rios faziam login com suas contas e tinham acesso a um feed de not??cias, links para o evento e download de material.',
      technologies:
        'Para o constru????o foi utilizado React, TypeScript, Redux, Bootstrap e SASS.',
    },
    image: imageFatorX,
    category: 'react',
  },

  {
    id: 20,
    title: 'Toyoserra',
    enUS: {
      description:
        'A complete institutional website and administrative system. With static pages, dynamic pages and contact forms.',
      technologies:
        'The website was built using Laravel and Bootstrap. For Bootstrap we used the "theming" function where we recompiled Bootstrap so that its default classes followed our visual identity. This way the development and especially the maintenance are greatly simplified.',
    },
    ptBR: {
      description:
        'Um website institucional e sistema administrativo completo. Com p??ginas est??ticas, p??ginas din??micas e formul??rios de contato.',
      technologies:
        'O website foi constru??do utilizando Laravel e Bootstrap. Para o Bootstrap utilizamos a fun????o ???theming??? onde recompilamos o Bootstrap para que suas classes padr??es seguissem nossa identidade visual. Assim o desenvolvimento e principalmente a manuten????o s??o muito simplificadas.',
    },
    image: imageToyoserra,
    url: 'https://www.toyoserra.com.br/',
    category: 'laravel',
  },
  {
    id: 21,
    title: 'Conteco',
    enUS: {
      description:
        'A complete website and administrative system for a real estate company. Where, in the administrative system, the available properties that will be displayed on the website are registered. The website also has searches and listings based on characteristics so that customers can find what they are looking for more easily.',
      technologies:
        'The website was built using Laravel and Bootstrap. For Bootstrap we used the "theming" function where we recompiled Bootstrap so that its default classes followed the visual identity. This way the development and especially the maintenance are greatly simplified.',
    },
    ptBR: {
      description:
        'Um website e sistema administrativo completo para uma imobili??ria. Onde, no sistema administrativo, s??o cadastrados os im??veis dispon??veis que ser??o exibidos no website. O website tamb??m possui buscas e listagem baseados nas caracter??sticas para que os clientes possam encontrar o que est??o procurando com maior facilidade.',
      technologies:
        'O website foi constru??do utilizando Laravel e Bootstrap. Para o Bootstrap utilizamos a fun????o ???theming??? onde recompilamos o Bootstrap para que suas classes padr??es seguissem a identidade visual. Assim o desenvolvimento e principalmente a manuten????o s??o muito simplificadas.',
    },
    image: imageConteco,
    url: 'https://contecoimobiliaria.com.br/',
    category: 'laravel',
  },
  {
    id: 22,
    title: 'Uni??o Mundial',
    enUS: {
      description:
        'A complete website and administrative system for a metallurgical company. With static and dynamic pages, a search for registered products based on their characteristics and integration with external customer systems.',
      technologies:
        'The website was built using Laravel and Bootstrap. For Bootstrap we used the "theming" function where we recompiled Bootstrap so that its standard classes followed the visual identity. This way the development and especially the maintenance are greatly simplified.',
    },
    ptBR: {
      description:
        'Um website e sistema administrativo completo para uma metal??rgica. Com p??ginas est??ticas e din??micas, uma pesquisa por produtos cadastrados a partir de suas caracter??sticas e integra????o com sistemas externos de clientes.',
      technologies:
        'O website foi constru??do utilizando Laravel e Bootstrap. Para o Bootstrap utilizamos a fun????o ???theming??? onde recompilamos o Bootstrap para que suas classes padr??es seguissem a identidade visual. Assim o desenvolvimento e principalmente a manuten????o s??o muito simplificadas.',
    },
    image: imageUniaoMundial,
    url: 'https://www.uniaomundial.com.br/',
    category: 'laravel',
  },
  {
    id: 23,
    title: 'Valesca Marotti',
    enUS: {
      description:
        'A complete website and administrative system for a real estate company. Where, in the administrative system, the available properties that will be shown in the website are registered. The website also has searches and listings based on characteristics so that clients can find what they are looking for more easily.',
      technologies:
        'The website was built using Laravel and Bootstrap. For Bootstrap we used the "theming" function where we recompiled Bootstrap so that its default classes followed the visual identity. This way the development and especially the maintenance are greatly simplified.',
    },
    ptBR: {
      description:
        'Um website e sistema administrativo completo para uma imobili??ria. Onde, no sistema administrativo, s??o cadastrados os im??veis dispon??veis que ser??o exibidos no website. O website tamb??m possui buscas e listagem baseados nas caracter??sticas para que os clientes possam encontrar o que est??o procurando com maior facilidade.',
      technologies:
        'O website foi constru??do utilizando Laravel e Bootstrap. Para o Bootstrap utilizamos a fun????o ???theming??? onde recompilamos o Bootstrap para que suas classes padr??es seguissem a identidade visual. Assim o desenvolvimento e principalmente a manuten????o s??o muito simplificadas.',
    },
    image: imageValesca,
    url: 'https://www.valescamarotti.com.br/',
    category: 'laravel',
  },
  {
    id: 24,
    title: 'Toyoserra Seminovos',
    enUS: {
      description:
        'A website and administrative system for a used-car salesman. The information about the cars can be registered by the administrative system manually or received through API requests made to an external system. The website has a search and contact form.',
      technologies:
        'For the construction we used Laravel and Bootstrap. For Bootstrap we used the "theming" function where we recompiled Bootstrap so that its default classes followed the visual identity. This way the development and especially the maintenance are greatly simplified.',
    },
    ptBR: {
      description:
        'Um website e sistema administrativo um vendedor de carros seminovos. As informa????es dos autom??veis podem ser cadastrados pelo sistema administrativo de forma manual ou recebidos atrav??s de requisi????es API feitas a um sistema externo. O website possui uma busca e um formul??rio de contato.',
      technologies:
        'Para a constru????o utilizamos Laravel e Bootstrap. Para o Bootstrap utilizamos a fun????o ???theming??? onde recompilamos o Bootstrap para que suas classes padr??es seguissem a identidade visual. Assim o desenvolvimento e principalmente a manuten????o s??o muito simplificadas.',
    },
    image: imageSeminovos,
    url: 'http://seminovos.toyoserra.com.br/',
    category: 'laravel',
  },
  {
    id: 25,
    title: 'Nova Friburgo Country Clube',
    enUS: {
      description:
        'A website and administrative system for a club. The website has several static pages, contact forms and dynamic information pages that are registered by the administrative system.',
      technologies:
        'For the construction we used Laravel and Bootstrap. We recompiled Bootstrap so that its default classes followed the visual identity of the site. This way the development and especially the maintenance are very simplified.',
    },
    ptBR: {
      description:
        'Um website e sistema administrativo para um clube. O website apresenta v??rias p??ginas est??ticas, formul??rios de contato e p??ginas com informa????es din??micas que s??o cadastradas pelo sistema administrativo.',
      technologies:
        'Para a constru????o utilizamos Laravel e Bootstrap. N??s recompilamos o Bootstrap para que suas classes padr??es seguissem a identidade visual do site. Assim o desenvolvimento e principalmente a manuten????o s??o muito simplificadas.',
    },
    image: imageNFCC,
    url: 'https://www.nfcc.com.br/',
    category: 'laravel',
  },
  {
    id: 26,
    title: 'CuboUP',
    enUS: {
      description:
        'A complete ERP system where I worked specifically on the part of creating posts in social networks and obtaining permissions to do so.',
      technologies: 'The system was built using Laravel, Bootstrap and VueJS.',
    },
    ptBR: {
      description:
        'Um sistema ERP completo onde eu trabalhei especificamente na parte de cria????o de postagens nas redes sociais e na obten????o de permiss??es para fazer tal a????o.',
      technologies:
        'O sistema foi constru??do utilizando Laravel, Bootstrap e VueJS.',
    },
    image: imageCubo,
    category: 'laravel',
  },

  {
    id: 30,
    title: 'Vocab++',
    enUS: {
      description:
        'Vocab++ is a project I developed to help learning foreign language vocabulary. It was built so that I could put into practice knowledge about Vue3 and ci/cd with GitHub Actions.',
      technologies:
        'To build the project, I used technologies such as: Vue3, Vite, ESLint, Github Actions.',
    },
    ptBR: {
      description:
        'O Vocab++ ?? um projeto que desenvolvi para auxiliar no aprendizado de vocabul??rio de l??nguas estrangeiras. Ele foi constru??do para que eu pudesse colocar em pr??tica conhecimentos sobre Vue3 e ci/cd com GitHub Actions.',
      technologies:
        'Para a constru????o do projeto, foram utilizadas tecnologias como: Vue3, Vite, ESLint, Github Actions.',
    },
    image: imageVocabPlusPlus,
    url: 'https://kursi.com.br/vocab-plus-plus/',
    github: 'https://github.com/HenriqueMarcelo/vocab-plus-plus',
    category: 'other',
  },
  {
    id: 31,
    title: 'Colors',
    enUS: {
      description:
        'The Colors project is a collection of images of all the colors available in CSS. It was created to create artistic and simplistic wallpapers. It was created using HTML and JavaScript. The images were generated within a <canvas> tag and the final .png file was created by simply downloading the generated image.',
      technologies: 'Html, CSS and JavaScript',
    },
    ptBR: {
      description:
        'O projeto Colors ?? uma cole????o de imagens de todas as cores dispon??veis no CSS. Ele foi criado para criar wallpapers art??sticos e simplistas. Ele foi criado utilizando HTML e JavaScript. As imagens eram geradas dentro de uma tag <canvas> e o arquivo .png final foi criado simplesmente fazendo o download da imagem gerada.',
      technologies: 'Html, CSS e JavaScript',
    },
    image: imageColors,
    github: 'https://github.com/HenriqueMarcelo/color-wallpaper',
    url: 'https://github.com/HenriqueMarcelo/color-wallpaper#example-images',
    category: 'other',
  },
] as ProjectI18nType[]

export default projects
