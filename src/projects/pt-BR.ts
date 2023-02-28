import image from '../assets/silver.png'
import { ProjectType } from '../components/Project'

const projects = [
  {
    id: 1,
    title: 'Com este commit',
    description:
      'Desde ontem a noite o módulo de recursão paralela causou o bug de compilação multi-plataforma de forma asincrona.',
    technologies:
      'Nesse pull request, a compilação final do programa deletou todas as entradas do nosso servidor de DNS.',
    image,
  },
  {
    id: 2,
    title: 'Com este commit',
    description:
      'Dado o fluxo de dados atual, um erro não identificado causou a race condition do carregamento de JSON delimitado por linhas',
    technologies:
      'Nesse pull request, o deploy automatizado no Heroku causou o bug de uma compilação com tempo acima da media.',
    image,
    github: 'https://github.com/',
    url: 'https://google.com',
  },
  {
    id: 3,
    title: 'Com este commit',
    description:
      'Com este commit, um erro não identificado deletou todas as entradas de estados estáticos nos componentes da UI.',
    technologies:
      'Dado o fluxo de dados atual, a compilação final do programa deletou todas as entradas do polimorfismo aplicado nas classes.',
    image,
    url: 'https://google.com',
  },
  {
    id: 4,
    title: 'Com este commit',
    description:
      'Explica pro Product Onwer que a disposição dos elementos HTML causou o bug da execução de requisições effcientes na API.',
    technologies:
      'Explica pro Product Onwer que a compilação final do programa corrigiu o bug de uma configuração Webpack eficiente nos builds.',
    image,
    github: 'https://github.com/',
  },
] as ProjectType[]

export default projects
