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
      description: '',
      technologies: '',
    },
    ptBR: {
      description:
        'Ignite Call" é um projeto desenvolvido durante o curso Ignite da Rocketseat que tem como objetivo oferecer um sistema de agendamentos online integrado ao Google Agenda. Com ele, é possível cadastrar dias e horários disponíveis para agendamento e os clientes podem visualizar os horários disponíveis em um calendário e fazer o agendamento diretamente pelo sistema.',
      technologies:
        'Para a construção do projeto, foram utilizadas diversas tecnologias, como Next.js, Prisma, React Hook Form, Zod, Google APIs, Next Auth, Axios e MySQL, entre outras. Também foi realizado o deploy do banco de dados para a plataforma Planetscale e o deploy da aplicação para o  Vercel. O projeto foi uma oportunidade de aprender e aplicar conceitos importantes como integração de sistemas, manipulação de cookies, customização de componentes, querys SQL e otimizações de SEO.',
    },
    image: imageIgniteCall,
    github: 'https://github.com/HenriqueMarcelo/ignite-call',
    url: 'https://ignite-call-alpha.vercel.app/',
    category: 'react',
  },
  {
    id: 11,
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
    category: 'react',
  },
  {
    id: 12,
    title: 'Github Blog',
    enUS: {
      description: '',
      technologies: '',
    },
    ptBR: {
      description:
        "O projeto Github Blog é uma aplicação web que permite aos usuários criarem e gerenciarem seus próprios blogs diretamente pelo Github. Ele foi desenvolvido como um desafio do curso Ignite da Rocketseat com o objetivo de colocarmos em práticas conceitos como: Acesso a API's, criação de aplicação SPA, leitura e exibição de Markdown e criação de componentes estilizados.",
      technologies:
        'Para a construção do projeto, foram utilizadas tecnologias como React, Typescript, styled-components, Axios e a API do Github para integração com o Github Issues. Além disso, foram utilizadas bibliotecas como react-markdown, date-fns e react-hook-form.',
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
    category: 'react',
  },
  {
    id: 14,
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
    category: 'react',
  },
  {
    id: 15,
    title: 'Ignite Timer',
    enUS: {
      description: '',
      technologies: '',
    },
    ptBR: {
      description:
        'Ignite Timer é um projeto de um timer de foco construído para ajudar as pessoas a gerenciar seu tempo e aumentar sua produtividade. Esse projeto foi criado com o objetivo de colocar em prática os conceitos de React, TypeScript e gerenciamento de estado com Context API, aprendidos durante o curso Ignite da Rocketseat.',
      technologies:
        'Para a construção do projeto, foram utilizadas tecnologias como React, TypeScript e Context API. Além disso, foram utilizadas bibliotecas como styled-components, react-hook-form, zod, react-router-dom, entre outras.',
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
      description: '',
      technologies: '',
    },
    ptBR: {
      description:
        'O ToDo List é um aplicativo web que funciona como uma lista de tarefas. Com ele é possível criar tarefas, marcar como concluídas e remover as tarefas. O projeto foi desenvolvido durante o curso Ignite da Rocketseat, com o objetivo de ensinar os conceitos básicos do React, Typescript e manipulação de formulários.',
      technologies:
        'Para a construção do projeto, foram utilizadas React e Typescript.',
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
      description: '',
      technologies: '',
    },
    ptBR: {
      description:
        'O Ignite Feed é um aplicativo web que simula o funcionamento de uma interface gráfica de um feed de uma rede social. O projeto foi desenvolvido durante o curso Ignite da Rocketseat, com o objetivo de aprender sobre React, Typescript e manipulação de datas.',
      technologies:
        'Para a construção do projeto, foram utilizadas tecnologias como: React, Typescript, DateFNS, Faker e ESLint.',
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
      description: '',
      technologies: '',
    },
    ptBR: {
      description:
        'Uma aplicação web e sistema administrativo que dava suporte ao evento Fator X 2021. Os usuários faziam login com suas contas e tinham acesso a um feed de notícias, links para o evento e download de material.',
      technologies:
        'Para o construção foi utilizado React, TypeScript, Redux, Bootstrap e SASS.',
    },
    image: imageFatorX,
    category: 'react',
  },

  {
    id: 20,
    title: 'Toyoserra',
    enUS: {
      description: '',
      technologies: '',
    },
    ptBR: {
      description:
        'Um website institucional e sistema administrativo completo. Com páginas estáticas, páginas dinâmicas e formulários de contato.',
      technologies:
        'O website foi construído utilizando Laravel e Bootstrap. Para o Bootstrap utilizamos a função “theming” onde recompilamos o Bootstrap para que suas classes padrões seguissem nossa identidade visual. Assim o desenvolvimento e principalmente a manutenção são muito simplificadas.',
    },
    image: imageToyoserra,
    url: 'https://www.toyoserra.com.br/',
    category: 'laravel',
  },
  {
    id: 21,
    title: 'Conteco',
    enUS: {
      description: '',
      technologies: '',
    },
    ptBR: {
      description:
        'Um website e sistema administrativo completo para uma imobiliária. Onde, no sistema administrativo, são cadastrados os imóveis disponíveis que serão exibidos no website. O website também possui buscas e listagem baseados nas características para que os clientes possam encontrar o que estão procurando com maior facilidade.',
      technologies:
        'O website foi construído utilizando Laravel e Bootstrap. Para o Bootstrap utilizamos a função “theming” onde recompilamos o Bootstrap para que suas classes padrões seguissem a identidade visual. Assim o desenvolvimento e principalmente a manutenção são muito simplificadas.',
    },
    image: imageConteco,
    url: 'https://contecoimobiliaria.com.br/',
    category: 'laravel',
  },
  {
    id: 22,
    title: 'União Mundial',
    enUS: {
      description: '',
      technologies: '',
    },
    ptBR: {
      description:
        'Um website e sistema administrativo completo para uma metalúrgica. Com páginas estáticas e dinâmicas, uma pesquisa por produtos cadastrados a partir de suas características e integração com sistemas externos de clientes.',
      technologies:
        'O website foi construído utilizando Laravel e Bootstrap. Para o Bootstrap utilizamos a função “theming” onde recompilamos o Bootstrap para que suas classes padrões seguissem a identidade visual. Assim o desenvolvimento e principalmente a manutenção são muito simplificadas.',
    },
    image: imageUniaoMundial,
    url: 'https://www.uniaomundial.com.br/',
    category: 'laravel',
  },
  {
    id: 23,
    title: 'Valesca Marotti',
    enUS: {
      description: '',
      technologies: '',
    },
    ptBR: {
      description:
        'Um website e sistema administrativo completo para uma imobiliária. Onde, no sistema administrativo, são cadastrados os imóveis disponíveis que serão exibidos no website. O website também possui buscas e listagem baseados nas características para que os clientes possam encontrar o que estão procurando com maior facilidade.',
      technologies:
        'O website foi construído utilizando Laravel e Bootstrap. Para o Bootstrap utilizamos a função “theming” onde recompilamos o Bootstrap para que suas classes padrões seguissem a identidade visual. Assim o desenvolvimento e principalmente a manutenção são muito simplificadas.',
    },
    image: imageValesca,
    url: 'https://www.valescamarotti.com.br/',
    category: 'laravel',
  },
  {
    id: 24,
    title: 'Toyoserra Seminovos',
    enUS: {
      description: '',
      technologies: '',
    },
    ptBR: {
      description:
        'Um website e sistema administrativo um vendedor de carros seminovos. As informações dos automóveis podem ser cadastrados pelo sistema administrativo de forma manual ou recebidos através de requisições API feitas a um sistema externo. O website possui uma busca e um formulário de contato.',
      technologies:
        'Para a construção utilizamos Laravel e Bootstrap. Para o Bootstrap utilizamos a função “theming” onde recompilamos o Bootstrap para que suas classes padrões seguissem a identidade visual. Assim o desenvolvimento e principalmente a manutenção são muito simplificadas.',
    },
    image: imageSeminovos,
    url: 'http://seminovos.toyoserra.com.br/',
    category: 'laravel',
  },
  {
    id: 25,
    title: 'Nova Friburgo Country Clube',
    enUS: {
      description: '',
      technologies: '',
    },
    ptBR: {
      description:
        'Um website e sistema administrativo para um clube. O website apresenta várias páginas estáticas, formulários de contato e páginas com informações dinâmicas que são cadastradas pelo sistema administrativo.',
      technologies:
        'Para a construção utilizamos Laravel e Bootstrap. Nós recompilamos o Bootstrap para que suas classes padrões seguissem a identidade visual do site. Assim o desenvolvimento e principalmente a manutenção são muito simplificadas.',
    },
    image: imageNFCC,
    url: 'https://www.nfcc.com.br/',
    category: 'laravel',
  },
  {
    id: 26,
    title: 'CuboUP',
    enUS: {
      description: '',
      technologies: '',
    },
    ptBR: {
      description:
        'Um sistema ERP completo onde eu trabalhei especificamente na parte de criação de postagens nas redes sociais e na obtenção de permissões para fazer tal ação.',
      technologies:
        'O sistema foi construído utilizando Laravel, Bootstrap e VueJS.',
    },
    image: imageCubo,
    category: 'laravel',
  },

  {
    id: 30,
    title: 'Vocab++',
    enUS: {
      description: '',
      technologies: '',
    },
    ptBR: {
      description:
        'O Vocab++ é um projeto que desenvolvi para auxiliar no aprendizado de vocabulário de línguas estrangeiras. Ele foi construído para que eu pudesse colocar em prática conhecimentos sobre Vue3 e ci/cd com GitHub Actions.',
      technologies:
        'Para a construção do projeto, foram utilizadas tecnologias como: Vue3, Vite, ESLint, Github Actions.',
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
      description: '',
      technologies: '',
    },
    ptBR: {
      description:
        'O projeto Colors é uma coleção de imagens de todas as cores disponíveis no CSS. Ele foi criado para criar wallpapers artísticos e simplistas. Ele foi criado utilizando HTML e JavaScript. As imagens eram geradas dentro de uma tag <canvas> e o arquivo .png final foi criado simplesmente fazendo o download da imagem gerada.',
      technologies: 'Html, CSS e JavaScript',
    },
    image: imageColors,
    github: 'https://github.com/HenriqueMarcelo/color-wallpaper',
    url: 'https://github.com/HenriqueMarcelo/color-wallpaper#example-images',
    category: 'other',
  },
] as ProjectI18nType[]

export default projects
