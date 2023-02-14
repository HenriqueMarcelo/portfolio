export function Presentantion() {
  return (
    <section className="bg-neutral-900 pb-20">
      <article className="container mx-auto p-24 bg-neutral-300 rounded-lg">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <img
              src="http://via.placeholder.com/420x580.png/7E7E7E"
              alt=""
              className=""
            />
          </div>
          <div className="col-span-2 text-right flex items-center justify-end">
            <div className="">
              <h2 className="text-6xl">Lorem ipsum</h2>
              <hr className="h-1 w-32 my-4 bg-orange-600 border-0 mr-0 ml-auto"></hr>
              <div className="flex">
                {/* <p className="w-0 flex-grow leading-7"> */}
                <p className="leading-7">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  eros nibh, convallis molestie eleifend suscipit, iaculis at
                  turpis. Maecenas volutpat venenatis velit eu finibus. Praesent
                  enim neque, ultrices non imperdiet in, sagittis a mi. Nullam
                  non ex vitae est molestie luctus. Morbi vel cursus ex, nec
                  sodales odio. Integer tempor est vel lorem finibus, nec
                  ullamcorper diam ornare. Vestibulum ante ipsum primis in
                  faucibus orci luctus et ultrices posuere cubilia curae;
                  <div className="flex gap-4 justify-end mt-8">
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
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}
