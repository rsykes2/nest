import { getAllProducts } from "../lib/shopify"
import ProductCard from '../Components/ProductCard'
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'
import Layout from '../Components/Layout'

export default function Home({ products }) {

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <Hero></Hero>
        <Footer></Footer>
        <h1 className="text-2xl font-extrabold  mb-6  text-center , text-teal-600"  >
          Our Products
        </h1><br/>
        <div  className="text-2xl font-extrabold  mb-6  text-center , text-teal-600" >The best</div>
        
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
         {
            products.map(product => (
              <ProductCard key={product.node.id} product={product} />
            ))
          }
       </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const products = await getAllProducts()

  return {
    props: { products }, // will be passed to the page component as props
  }
}

