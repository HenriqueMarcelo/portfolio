import { Project } from '../components/Project'

export function Projects() {
  return (
    <section className="bg-neutral-300 pt-20">
      <Project />
      <Project orientation="right" />
      <Project />
    </section>
  )
}
