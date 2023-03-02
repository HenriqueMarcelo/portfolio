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

import { ProjectType } from '../components/Project'

const projects = [
  {
    id: 1,
    title: 'Toyoserra',
    description:
      'Desde ontem a noite o módulo de recursão paralela causou o bug de compilação multi-plataforma de forma asincrona.',
    technologies:
      'Nesse pull request, a compilação final do programa deletou todas as entradas do nosso servidor de DNS.',
    image: imageToyoserra,
    url: 'https://www.toyoserra.com.br/',
  },
  {
    id: 2,
    title: 'Conteco',
    description:
      'Dado o fluxo de dados atual, um erro não identificado causou a race condition do carregamento de JSON delimitado por linhas',
    technologies:
      'Nesse pull request, o deploy automatizado no Heroku causou o bug de uma compilação com tempo acima da media.',
    image: imageConteco,
    url: 'https://contecoimobiliaria.com.br/',
  },
  {
    id: 3,
    title: 'União Mundial',
    description:
      'Com este commit, um erro não identificado deletou todas as entradas de estados estáticos nos componentes da UI.',
    technologies:
      'Dado o fluxo de dados atual, a compilação final do programa deletou todas as entradas do polimorfismo aplicado nas classes.',
    image: imageUniaoMundial,
    url: 'https://www.uniaomundial.com.br/',
  },
  {
    id: 4,
    title: 'Valesca Marotti',
    description:
      'Explica pro Product Onwer que a disposição dos elementos HTML causou o bug da execução de requisições effcientes na API.',
    technologies:
      'Explica pro Product Onwer que a compilação final do programa corrigiu o bug de uma configuração Webpack eficiente nos builds.',
    image: imageValesca,
    url: 'https://www.valescamarotti.com.br/',
  },
  {
    id: 5,
    title: 'Toyoserra Seminovos',
    description:
      'Explica pro Product Onwer que a disposição dos elementos HTML causou o bug da execução de requisições effcientes na API.',
    technologies:
      'Explica pro Product Onwer que a compilação final do programa corrigiu o bug de uma configuração Webpack eficiente nos builds.',
    image: imageSeminovos,
    url: 'http://seminovos.toyoserra.com.br/',
  },
  {
    id: 6,
    title: 'Nova Friburgo Country Clube',
    description:
      'Explica pro Product Onwer que a disposição dos elementos HTML causou o bug da execução de requisições effcientes na API.',
    technologies:
      'Explica pro Product Onwer que a compilação final do programa corrigiu o bug de uma configuração Webpack eficiente nos builds.',
    image: imageNFCC,
    url: 'https://www.nfcc.com.br/',
  },
  {
    id: 7,
    title: 'CuboUP',
    description:
      'Explica pro Product Onwer que a disposição dos elementos HTML causou o bug da execução de requisições effcientes na API.',
    technologies:
      'Explica pro Product Onwer que a compilação final do programa corrigiu o bug de uma configuração Webpack eficiente nos builds.',
    image: imageCubo,
  },
  {
    id: 8,
    title: 'Fator X Live',
    description:
      'Explica pro Product Onwer que a disposição dos elementos HTML causou o bug da execução de requisições effcientes na API.',
    technologies:
      'Explica pro Product Onwer que a compilação final do programa corrigiu o bug de uma configuração Webpack eficiente nos builds.',
    image: imageFatorX,
  },
  {
    id: 9,
    title: 'Colors',
    description:
      'Explica pro Product Onwer que a disposição dos elementos HTML causou o bug da execução de requisições effcientes na API.',
    technologies:
      'Explica pro Product Onwer que a compilação final do programa corrigiu o bug de uma configuração Webpack eficiente nos builds.',
    image: imageColors,
    github: 'https://github.com/HenriqueMarcelo/color-wallpaper',
  },
  {
    id: 10,
    title: 'Vocab++',
    description:
      'Explica pro Product Onwer que a disposição dos elementos HTML causou o bug da execução de requisições effcientes na API.',
    technologies:
      'Explica pro Product Onwer que a compilação final do programa corrigiu o bug de uma configuração Webpack eficiente nos builds.',
    image: imageVocabPlusPlus,
    url: 'https://kursi.com.br/vocab-plus-plus/',
    github: 'https://github.com/HenriqueMarcelo/vocab-plus-plus',
  },
  {
    id: 11,
    title: 'Ignite Feed',
    description:
      'Explica pro Product Onwer que a disposição dos elementos HTML causou o bug da execução de requisições effcientes na API.',
    technologies:
      'Explica pro Product Onwer que a compilação final do programa corrigiu o bug de uma configuração Webpack eficiente nos builds.',
    image: imageIgniteFeed,
    url: 'https://henriquemarcelo.github.io/ignite-feed/',
    github: 'https://github.com/HenriqueMarcelo/ignite-feed',
  },
  {
    id: 12,
    title: 'Todo List',
    description:
      'Explica pro Product Onwer que a disposição dos elementos HTML causou o bug da execução de requisições effcientes na API.',
    technologies:
      'Explica pro Product Onwer que a compilação final do programa corrigiu o bug de uma configuração Webpack eficiente nos builds.',
    image: imageTodoList,
    url: 'https://henriquemarcelo.github.io/to-do-list/',
    github: 'https://github.com/HenriqueMarcelo/to-do-list',
  },
  {
    id: 12,
    title: 'Ignite Timer',
    description:
      'Explica pro Product Onwer que a disposição dos elementos HTML causou o bug da execução de requisições effcientes na API.',
    technologies:
      'Explica pro Product Onwer que a compilação final do programa corrigiu o bug de uma configuração Webpack eficiente nos builds.',
    image: imageIgniteTimer,
    url: 'https://henriquemarcelo.github.io/ignite-timer/#/',
    github: 'https://github.com/HenriqueMarcelo/ignite-timer',
  },
  {
    id: 12,
    title: 'DT Money',
    description:
      'Explica pro Product Onwer que a disposição dos elementos HTML causou o bug da execução de requisições effcientes na API.',
    technologies:
      'Explica pro Product Onwer que a compilação final do programa corrigiu o bug de uma configuração Webpack eficiente nos builds.',
    image: imageDTMoney,
    github: 'https://henriquemarcelo.github.io/dt-money/',
  },
  {
    id: 13,
    title: 'Coffee Delivery',
    description:
      'Explica pro Product Onwer que a disposição dos elementos HTML causou o bug da execução de requisições effcientes na API.',
    technologies:
      'Explica pro Product Onwer que a compilação final do programa corrigiu o bug de uma configuração Webpack eficiente nos builds.',
    image: imageCoffeeDelivery,
    github: 'https://github.com/HenriqueMarcelo/coffee-delivery',
    url: 'https://coffee-delivery.kursi.com.br/',
  },
  {
    id: 13,
    title: 'Github Blog',
    description:
      'Explica pro Product Onwer que a disposição dos elementos HTML causou o bug da execução de requisições effcientes na API.',
    technologies:
      'Explica pro Product Onwer que a compilação final do programa corrigiu o bug de uma configuração Webpack eficiente nos builds.',
    image: imageGithubBlog,
    github: 'https://github.com/HenriqueMarcelo/github-blog',
    url: 'https://github-blog.kursi.com.br/',
  },
  {
    id: 13,
    title: 'Ignite Shop',
    description:
      'Explica pro Product Onwer que a disposição dos elementos HTML causou o bug da execução de requisições effcientes na API.',
    technologies:
      'Explica pro Product Onwer que a compilação final do programa corrigiu o bug de uma configuração Webpack eficiente nos builds.',
    image: imageIgniteShop,
    github: 'https://github.com/HenriqueMarcelo/ignite-shop',
    url: 'https://ignite-shop-gilt.vercel.app/',
  },
  {
    id: 13,
    title: 'Ignite Call',
    description:
      'Explica pro Product Onwer que a disposição dos elementos HTML causou o bug da execução de requisições effcientes na API.',
    technologies:
      'Explica pro Product Onwer que a compilação final do programa corrigiu o bug de uma configuração Webpack eficiente nos builds.',
    image: imageIgniteCall,
    github: 'https://github.com/HenriqueMarcelo/ignite-call',
    url: 'https://ignite-call-alpha.vercel.app/',
  },
] as ProjectType[]

export default projects
