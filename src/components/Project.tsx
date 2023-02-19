import silver from '../assets/silver.png'

interface ProjectProps {
  orientation?: 'right' | 'left'
}

export function Project({ orientation = 'left' }: ProjectProps) {
  return (
    <article className="container mx-auto px-8">
      <div className="grid grid-cals-1 gap-8 sm:grid-cols-2 sm:gap-32 pb-20">
        {orientation === 'right' && (
          <div className="">
            <img src={silver} alt="" />
          </div>
        )}
        {orientation === 'left' && (
          <div className="block sm:hidden">
            <img src={silver} alt="" />
          </div>
        )}
        <div className={`sm:text-custom-${orientation}`}>
          <h2 className="text-6xl mb-6">Fusce aliquet</h2>
          <h3 className="text-4xl mb-4">lacus quis semper</h3>
          <p className="leading-7 mb-12">
            ultrices non imperdiet in, sagittis a mi. Nullam non ex vitae est
            molestie luctus. Morbi vel cursus ex, nec sodales odio. Integer
            tempor est vel lorem finibus, nec ullamcorper diam ornare.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae;
          </p>
          <h3 className="text-4xl mb-4">lacus quis semper</h3>
          <p className="leading-7 mb-12">
            ultrices non imperdiet in, sagittis a mi. Nullam non ex vitae est
            molestie luctus. Morbi vel cursus ex, nec sodales odio. Integer
            tempor est vel lorem finibus, nec ullamcorper diam ornare.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae;
          </p>
          <div
            className={`flex gap-5 ${orientation === 'right' && 'justify-end'}`}
          >
            <a className="bg-neutral-900 text-white py-3.5 px-7 rounded-full cursor-pointer hover:bg-neutral-700 transition">
              GitHub
            </a>
            <a className="bg-neutral-900 text-white py-3.5 px-7 rounded-full cursor-pointer hover:bg-neutral-700 transition">
              Link
            </a>
          </div>
        </div>
        {orientation === 'left' && (
          <div className="hidden sm:block">
            <img src={silver} alt="" className="ml-auto" />
          </div>
        )}
      </div>
    </article>
  )
}
