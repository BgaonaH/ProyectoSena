import { useState } from 'react';
import { StarIcon } from '@heroicons/react/20/solid';
import { Radio, RadioGroup } from '@headlessui/react';
import { Box, Button, Grid, LinearProgress, Rating } from '@mui/material';
import ProductReviewCard from './ProductReviewCard';
import  {chicloso}  from '../../../Data/chicloso';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import { useNavigate } from 'react-router-dom';

const product = {
  name: 'Basic Tee 6-Pack',
  price: '$192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
  ],

  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: '#', average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function ProductDetail() {

  const [quantity, setQuantity] = useState(1); // Estado para mantener la cantidad de productos
  const navigate=useNavigate();
  // Función para aumentar la cantidad de productos
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Función para disminuir la cantidad de productos
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const handleAddToCart =()=>{
      navigate("/cart");
  }

  return (
    <div className="bg-white lg:px-20">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={breadcrumb.href}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10">
          {/* Image gallery */}
          <div className="flex flex-col items-center">
            <div className="overflow-hidden rounded-lg max-[30rem] max-h-[35rem]">
              <img
                src={product.images[0].src}
                alt={product.images[0].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="flex flex-wrap space-x-5 justify-center">
              {product.images.map((item, index) => (
                <div
                  key={index}
                  className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:col-span-1 maxt-auto max-w-2x1 px-4 pb-16 sm:px-6 lg:max-w-7x1 lg:px-8 lg:pb-24">
            <div className="lg:col-span-2 ">
              <h2 className="text-lg lg:text-xl font-semibold text-gray-900 text-left">
                {product.name}
              </h2>
              <h2 className="text-lg lg:text-xl text-gray-900 opacity-60 pt-1 text-left">
                {product.description}
              </h2>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h3 className="sr-only">Product information</h3>
              <div className="flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-6">
                <p className="font-semibold">{product.price}</p>
              </div>

              {/* Reviews */}
              <div className="mt-6">
                <Rating name="read-only" value={reviews.average} readOnly />
                <p className="opacity-50 text-sm text-left">
                  {reviews.totalCount} Reviews
                </p>
              </div>

              {/* Quantity */}
              <div className="mt-6 flex items-center justify-center py-1">
                <button
                  onClick={decreaseQuantity}
                  className="px-3 py-1 border border-gray-300 rounded-md focus:outline-none"
                >
                  -
                </button>
                <span className="mx-3 text-xl">{quantity}</span>
                <button
                  onClick={increaseQuantity}
                  className="px-3 py-1 border border-gray-300 rounded-md focus:outline-none"
                >
                  +
                </button>
              </div>

              {/* Add to bag button */}
              <Button onClick={handleAddToCart} variant='contained' sx={{px: "2rem", py: "1rem,", bgcolor: "red",
                '&:hover': { bgcolor: '#cc0000', },
              }}>
                Agregar al carrito
              </Button>
            </div>

            {/* Description and details */}
            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              <div>
                <h3 className="sr-only">Description</h3>
                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {product.description}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>
                <div className="mt-4">
                  <ul
                    role="list"
                    className="list-disc space-y-2 pl-4 text-sm"
                  >
                    {product.highlights.map((highlight, index) => (
                      <li key={index} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">
                  Details
                </h2>
                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{product.details}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*rating and reviews*/}
       <section> 
          <h2 className='font-semibold text-lg text-left pb-4'>Recent Reviews & Rating</h2>
          <div className='border p-5'>
            <Grid container spacing={3}>
              <Grid item xs={12} md={7}>
                <div className='space-y-5'>
                  {[1, 1, 1].map((item) => <ProductReviewCard />)}
                </div>
              </Grid>

              <Grid item xs={5}>
                <h1 className='text-xl font-semibold pb-2'>Product ratings</h1>

                <div className='flex items-center space-x-3'>
                  <Rating name="read-only" value={4.6} precision={.5} readOnly />
                  <p className='opacity-60'>34390 Ratings</p>
                </div>

                <Box className="mt-5 space-y-3">
                  <Grid container alignItems="center" gap={2}>
                    <Grid items xs={2}>
                      <p>Excellent</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress sx={{ bgcolor: "Lightgray", borderRadius: 4, height: 7 }}
                        variant="determinate" value={40} color="success" />

                    </Grid>
                  </Grid>

                  <Grid container alignItems="center" gap={2}>
                    <Grid items xs={2}>
                      <p>Very Good</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress sx={{ bgcolor: "Lightgray", borderRadius: 4, height: 7 }}
                        variant="determinate" value={30} color="success" />
                    </Grid>
                  </Grid>
                  
                  <Grid container alignItems="center" gap={2}>
                    <Grid items xs={2}>
                      <p>Good</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress sx={{ bgcolor: "Lightgray", borderRadius: 4, height: 7,  "& .MuiLinearProgress-barColorPrimary": {
                        backgroundColor: "#FFFF00", // Amarillo en formato hexadecimal
                      },  }}
                        variant="determinate" value={25} />
                    </Grid>
                  </Grid>

                  <Grid container alignItems="center" gap={2}>
                    <Grid items xs={2}>
                      <p>Average</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress sx={{ bgcolor: "Lightgray", borderRadius: 4, height: 7 }}
                        variant="determinate" value={20} color="warning" />
                    </Grid>
                  </Grid>
                  <Grid container alignItems="center" gap={2}>
                    <Grid items xs={2}>
                      <p>Poor</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress sx={{ bgcolor: "Lightgray", borderRadius: 4, height: 7 }}
                        variant="determinate" value={15} color="error" />
                    </Grid>
                  </Grid>

                </Box>

              </Grid>

            </Grid>
          </div>
        </section>
        {/* Productos Similares*/ }
        <section className='pt-10'>
          <h2 className='py-5 text-lg font-bold text-left'>Productos Similares</h2>
          <div className='flex flex-wrap space-y-5'>
            {chicloso.map((item)=><HomeSectionCard product={item}/>)}
          </div>
        </section>
        
      </div>
    </div>
  );
}

