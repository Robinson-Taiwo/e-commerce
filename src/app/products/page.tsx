import BreadcrumbBar from '@/components/BreadCrumbComponent'
import { PaginationDemo } from '@/components/Pagination'
import ProductCard from '@/components/ProductCard'
import { products } from '@/components/products'
import React from 'react'

const Products = () => {
  return (
    <div className='flex items-center justify-center' >
      <div className="max-w-6xl w-full  ">

        <BreadcrumbBar />

        <div>
          <section className="py-10">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">




              {/* Product List */}
              <div className="">
                <div className=" lg:grid-cols-4 grid-cols-2  md:grid-cols-3  grid p-2 space-y-4 place-content-center gap-2 place-items-center w-full ">
                  {products.map(product => (
                    <ProductCard
                      key={product.id}
                      name={product.name}
                      price={product.price}
                      imageUrl={product.imageUrl}
                      discount={product.discount}
                      rating={product.rating}
                      reviews={product.reviews}
                      deliveryInfo={product.deliveryInfo}
                      tag={product.tag}
                    />
                  ))}
                </div>
              </div>

              {/* View All Button */}
            </div>
          </section>
        </div>
        <div className="w-full items-center lg:p-6 lg:pb-10 pb-14 justify-center" >

          <PaginationDemo />
        </div>
      </div>

    </div>
  )
}

export default Products
