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
  image: string
  github?: string
  url?: string
}

const projects = [
  {
    id: 1,
    title: 'Toyoserra',
    enUS: {
      description: '',
      technologies: '',
    },
    ptBR: {
      description:
        'Desde ontem a noite o módulo de recursão paralela causou o bug de compilação multi-plataforma de forma asincrona.',
      technologies:
        'Nesse pull request, a compilação final do programa deletou todas as entradas do nosso servidor de DNS.',
    },
    image: imageToyoserra,
    url: 'https://www.toyoserra.com.br/',
  },
  {
    id: 2,
    title: 'Conteco',
    enUS: {
      description: '',
      technologies: '',
    },
    ptBR: {
      description:
        'Dado o fluxo de dados atual, um erro não identificado causou a race condition do carregamento de JSON delimitado por linhas',
      technologies:
        'Nesse pull request, o deploy automatizado no Heroku causou o bug de uma compilação com tempo acima da media.',
    },
    image: imageConteco,
    url: 'https://contecoimobiliaria.com.br/',
  },
  {
    id: 3,
    title: 'União Mundial',
    enUS: {
      description: '',
      technologies: '',
    },
    ptBR: {
      description:
        'Com este commit, um erro não identificado deletou todas as entradas de estados estáticos nos componentes da UI.',
      technologies:
        'Dado o fluxo de dados atual, a compilação final do programa deletou todas as entradas do polimorfismo aplicado nas classes.',
    },
    image: imageUniaoMundial,
    url: 'https://www.uniaomundial.com.br/',
  },
  {
    id: 4,
    title: 'Valesca Marotti',
    enUS: {
      description: '',
      technologies: '',
    },
    ptBR: {
      description: '',
      technologies: '',
    },
    image: imageValesca,
    url: 'https://www.valescamarotti.com.br/',
  },
  {
    id: 5,
    title: 'Toyoserra Seminovos',
    enUS: {
      description: '',
      technologies: '',
    },
    ptBR: {
      description: '',
      technologies: '',
    },
    image: imageSeminovos,
    url: 'http://seminovos.toyoserra.com.br/',
  },
  {
    id: 6,
    title: 'Nova Friburgo Country Clube',
    enUS: {
      description: '',
      technologies: '',
    },
    ptBR: {
      description: '',
      technologies: '',
    },
    image: imageNFCC,
    url: 'https://www.nfcc.com.br/',
  },
  {
    id: 7,
    title: 'CuboUP',
    enUS: {
      description: '',
      technologies: '',
    },
    ptBR: {
      description: '',
      technologies: '',
    },
    image: imageCubo,
  },
  {
    id: 8,
    title: 'Fator X Live',
    enUS: {
      description: '',
      technologies: '',
    },
    ptBR: {
      description: '',
      technologies: '',
    },
    image: imageFatorX,
  },
  {
    id: 9,
    title: 'Colors',
    enUS: {
      description: '',
      technologies: '',
    },
    ptBR: {
      description:
        'O projeto Colors é uma coleção de imagens de todas as cores disponíveis no CSS. Ele foi criado para criar wallpapers artísticos e simplistas. Ele foi criado utilizando curiosamente HTML e JavaScript. As imagens eram geradas dentro de uma tag <canvas> e o arquivo .png final foi criado simplesmente fazendo o download da imagem gerada. ',
      technologies: 'Html, CSS e JavaScript',
    },
    image: imageColors,
    github: 'https://github.com/HenriqueMarcelo/color-wallpaper',
    url: 'https://github.com/HenriqueMarcelo/color-wallpaper#example-images',
  },
  {
    id: 10,
    title: 'Vocab++',
    enUS: {
      description: '',
      technologies: '',
    },
    ptBR: {
      description:
        'O Vocab++ é um projeto que desenvolvi para auxiliar no aprendizado de vocabulário de línguas estrangeiras. Ele foi construído para que eu pudesse colocar em prática conhecimentos sobre Vue3 e ci/cd com GitHub Actions.',
      technologies:
        'Para a construção do projeto, foram utilizadas tecnologias como: Vue3, SASS, Vite, ESLint, Github Actions',
    },
    image: imageVocabPlusPlus,
    url: 'https://kursi.com.br/vocab-plus-plus/',
    github: 'https://github.com/HenriqueMarcelo/vocab-plus-plus',
  },
  {
    id: 11,
    title: 'Ignite Feed',
    enUS: {
      description: '',
      technologies: '',
    },
    ptBR: {
      description:
        'O Ignnite Feed é um aplicativo web que simula o funcionamento de uma interface gráfica de um feed de uma rede social. O projeto foi desenvolvido durante o curso Ignite da Rocketseat, com o objetivo de aprender sobre React, Typescript e manipulação de datas.',
      technologies:
        'Para a construção do projeto, foram utilizadas tecnologias como: React, Typescript, DateFNS, Faker e ESLint',
    },
    image: imageIgniteFeed,
    url: 'https://henriquemarcelo.github.io/ignite-feed/',
    github: 'https://github.com/HenriqueMarcelo/ignite-feed',
  },
  {
    id: 12,
    title: 'Todo List',
    enUS: {
      description: '',
      technologies: '',
    },
    ptBR: {
      description:
        'O To Do List é um aplicativo web que funciona como uma lista de tarefas. Com ele é possível criar tarefas, marcar como concluídas e remover as tarefas. O projeto foi desenvolvido durante o curso Ignite da Rocketseat, com o objetivo de ensinar os conceitos básicos do React, Typescript e manipulação de formulários.',
      technologies:
        'Para a construção do projeto, foram utilizadas React e Typescript.',
    },
    image: imageTodoList,
    url: 'https://henriquemarcelo.github.io/to-do-list/',
    github: 'https://github.com/HenriqueMarcelo/to-do-list',
  },
  {
    id: 12,
    title: 'Ignite Timer',
    enUS: {
      description: '',
      technologies: '',
    },
    ptBR: {
      description:
        'Ignite Timer é um projeto de um timer de foco construído para ajudar as pessoas a gerenciar seu tempo e aumentar sua produtividade. Esse projeto foi criado com o objetivo de colocar em prática os conceitos de React, TypeScript e gerenciamento de estado com Context API, aprendidos durante o curso Ignite da Rocketseat.',
      technologies:
        'Para a construção do projeto, foram utilizadas tecnologias como React, TypeScript e Context API. Além disso foi utilizado bibliotecas como styled-components, react-hook-form, zod, react-router-dom, entre outras.',
    },
    image: imageIgniteTimer,
    url: 'https://henriquemarcelo.github.io/ignite-timer/#/',
    github: 'https://github.com/HenriqueMarcelo/ignite-timer',
  },
  {
    id: 12,
    title: 'DT Money',
    enUS: {
      description: '',
      technologies: '',
    },
    ptBR: {
      description:
        'DT Money é um projeto de controle financeiro pessoal criado com o objetivo de auxiliar no gerenciamento de despesas e receitas. O projeto foi desenvolvido durante o curso Ignite da Rocketseat, com o intuito de aplicar os conceitos de React e TypeScript na prática, além de aprimorar os conhecimentos em manipulação de estado, uso de API e estilização de componentes.',
      technologies:
        'Para a construção do DT Money, foram utilizadas tecnologias como React, TypeScript e Styled Components. Além disso, foram utilizadas bibliotecas como Axios, React Hook Form, Zod e Radix. O projeto também utiliza o conceito de contexto do React para gerenciar o estado global da aplicação.',
    },
    image: imageDTMoney,
    github: 'https://henriquemarcelo.github.io/dt-money/',
  },
  {
    id: 13,
    title: 'Coffee Delivery',
    enUS: {
      description: '',
      technologies: '',
    },
    ptBR: {
      description:
        'O Coffee Delivery é um projeto de uma interface gráfica para uma loja virtual de cafés. Ele não está integrado com um back-end, mas foi criado para simular o front-end de uma aplicação real. Ele foi criado como um desafio no curso Ignite da Rocketseat com o objetivo de colocarmos em prática habilidades que foram aprendidas no curso, como a criação de uma aplicação React, componentes estilizados, useContext, SPA, formulários, Typescript, e muito mais.',
      technologies:
        'Para a construção do Coffee Delivery, foram utilizadas tecnologias como ReactJS, TypeScript, styled-components e a bibliotecas como: React Hook Form, React Router, Styled Components, Phosphor React e muito mais.',
    },
    image: imageCoffeeDelivery,
    github: 'https://github.com/HenriqueMarcelo/coffee-delivery',
    url: 'https://coffee-delivery.kursi.com.br/',
  },
  {
    id: 14,
    title: 'Github Blog',
    enUS: {
      description: '',
      technologies: '',
    },
    ptBR: {
      description:
        "O projeto Github Blog é uma aplicação web que permite aos usuários criarem e gerenciarem seus próprios blogs diretamente pelo Github. Ele foi desenvolvido como um desafio do curso Ignite da Rocketseat com o objetivo de colocarmos em práticas conceitos como: Acesso a API's, criação de aplicação do tipo SPA, leitura e exibição de Markdown, criação de componentes estilizados.",
      technologies:
        'Para a construção do projeto, foram utilizadas tecnologias como React, Typescript, styled-components, Axios e a API do Github para integração com o Github Issues. Além disso, foram utilizadas bibliotecas como react-markdown, date-fns e react-hook-form. ',
    },
    image: imageGithubBlog,
    github: 'https://github.com/HenriqueMarcelo/github-blog',
    url: 'https://github-blog.kursi.com.br/',
  },
  {
    id: 15,
    title: 'Ignite Shop',
    enUS: {
      description: '',
      technologies: '',
    },
    ptBR: {
      description:
        'Ignite Shop é um projeto desenvolvido durante o curso Ignite da Rocketseat. Trata-se de uma loja virtual que permite a visualização e compra de produtos. O objetivo do projeto é ensinar os alunos a construírem uma aplicação Next.JS, completa e funcional utilizando tecnologias modernas de desenvolvimento web.',
      technologies:
        'Para a construção do projeto, foram utilizadas tecnologias como Next.js, ReactJS, Stitches, Typescript e integração com a API da Stripe.  Além disso, foram utilizadas bibliotecas como: axios, keen-slider, use-shopping-cart. Com essas tecnologias, foi possível criar uma aplicação com excelente performance e alta qualidade de código.',
    },
    image: imageIgniteShop,
    github: 'https://github.com/HenriqueMarcelo/ignite-shop',
    url: 'https://ignite-shop-gilt.vercel.app/',
  },
  {
    id: 16,
    title: 'Ignite Call',
    enUS: {
      description: '',
      technologies: '',
    },
    ptBR: {
      description:
        'Ignite Call" é um projeto desenvolvido durante o curso Ignite da Rocketseat que tem como objetivo oferecer um sistema de agendamentos online integrado ao Google Agenda. Com ele, é possível cadastrar dias e horários disponíveis para agendamento e os clientes podem visualizar os horários disponíveis em um calendário e fazer o agendamento diretamente pelo sistema.',
      technologies:
        'Para a construção do projeto, foram utilizadas diversas tecnologias, como Next.js, Prisma, React Hook Form, Zod, Google APIs, Next Auth, Axios e MySQL, entre outras. Também foi necessário realizar o deploy do banco de dados na plataforma Planetscale e da aplicação no Vercel. O projeto foi uma oportunidade de aprender e aplicar conceitos importantes como integração de sistemas, manipulação de cookies, customização de componentes, querys SQL e otimizações de SEO.',
    },
    image: imageIgniteCall,
    github: 'https://github.com/HenriqueMarcelo/ignite-call',
    url: 'https://ignite-call-alpha.vercel.app/',
  },
] as ProjectI18nType[]

export default projects
