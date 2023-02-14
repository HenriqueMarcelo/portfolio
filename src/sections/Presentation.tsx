import maroon from '../assets/maroon.png'
import silver from '../assets/silver.png'

export function Presentantion() {
  return (
    <section className="bg-neutral-900 pb-20">
      <article className="container mx-auto ">
        <div className="p-8 sm:p-24 bg-neutral-300 rounded-lg mx-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-16">
            <div className="col-span-2 sm:col-span-1">
              <img src={silver} className="sm:hidden" />
              <img src={maroon} className="hidden sm:block" />
            </div>
            <div className="col-span-2 text-right flex items-center justify-end">
              <div className="">
                <h2 className="text-6xl">Lorem ipsum</h2>
                <hr className="h-1 w-32 my-4 bg-orange-600 border-0 mr-0 ml-auto"></hr>
                <div className="flex">
                  {/* <p className="w-0 flex-grow leading-7"> */}
                  <p className="leading-7">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis eros nibh, convallis molestie eleifend suscipit,
                    iaculis at turpis. Maecenas volutpat venenatis velit eu
                    finibus. Praesent enim neque, ultrices non imperdiet in,
                    sagittis a mi. Nullam non ex vitae est molestie luctus.
                    Morbi vel cursus ex, nec sodales odio. Integer tempor est
                    vel lorem finibus, nec ullamcorper diam ornare. Vestibulum
                    ante ipsum primis in faucibus orci luctus et ultrices
                    posuere cubilia curae;
                    <span className="flex gap-4 justify-end mt-8">
                      <a
                        href=""
                        className="text-orange-600 font-bold text-lg hover:underline"
                      >
                        Linkedin
                      </a>
                      <a
                        href=""
                        className="text-orange-600 font-bold text-lg hover:underline"
                      >
                        Github
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}
