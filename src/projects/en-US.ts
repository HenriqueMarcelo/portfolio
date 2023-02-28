import image from '../assets/silver.png'
import { ProjectType } from '../components/Project'

const projects = [
  {
    id: 1,
    title: 'With this commit',
    description:
      'As of last night the parallel recursion module caused the cross-platform compilation bug asynchronously.',
    technologies:
      'In this pull request, the final compilation of the program deleted all entries from our DNS server.',
    image,
  },
  {
    id: 2,
    title: 'With this commit',
    description:
      'Given the current data flow, an unidentified error caused the race condition of the line-delimited JSON upload',
    technologies:
      'In this pull request, the automated deployment on Heroku caused the bug of an above average build time.',
    image,
    github: 'https://github.com/',
    url: 'https://google.com',
  },
  {
    id: 3,
    title: 'With this commit',
    description:
      'With this commit, an unidentified error has deleted all static state entries in UI components.',
    technologies:
      'Given the current data flow, the final compile of the program deleted all entries of the polymorphism applied to the classes.',
    image,
    url: 'https://google.com',
  },
  {
    id: 4,
    title: 'With this commit',
    description:
      'Explains pro Product Onwer that the layout of the HTML elements caused the bug of executing effcient requests in the API.',
    technologies:
      'Explains pro Product Onwer that the final build of the program fixed the bug of an efficient Webpack configuration in the builds.',
    image,
    github: 'https://github.com/',
  },
] as ProjectType[]

export default projects
