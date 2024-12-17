

"use client"; // Mark the file as a client component
import hooliLogo from '../public/hooli.png';
import lyftLogo from '../public/lyft.png';
import springLogo from '../public/fa-brands-3.png';
import stripeLogo from '../public/stripe.png';
import awsLogo from '../public/aws.png';
import discordLogo from '../public/discord.png';

import { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';

const featuredProduct = {
  id: 1,
  name: 'Floating Phone',
  price: '$1,139.33',
  availability: 'Availability :',
  stock: 'In Stock',
  description:
    'Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.',
    rating: 4.5,
    reviews: '10 Reviews',
    images: [
    'https://s3-alpha-sig.figma.com/img/2b79/e11e/d885dbe3ab31e6f0c95ec64b26599246?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z8Aiv-ZF~0ylx-m1e8za55uz9xlfUicSfsbg354K~i0v-qt87hTbh25eTvU2oLca1Talf6Pa2A6YZIyrM27D7uAt0S7Byn3MnSWQco3lXf5ksIssbWGTt3hmfMpdvjsvOQpPHHdeT4Sp~M7YO1cieAsUKMGW7I7eZmb44i1IByyYF-TwODzdgGP7ZxremCXptG9KVFhDxJlBz~zjrK9BMS3f24nEtW~2RnCdMXOWkrzIiKx2rWd3ulgE2z4ELGWf6hUlW2-kW81Nf~NzMiyunnraycg-2SxPAISE86LyLkdGo~-L4yexRkZ-~eaSxiIF8D~fnjOObuhwBcz4L73jmA__',
    'https://s3-alpha-sig.figma.com/img/8823/5526/0767f5620ba9dda5365be14f4ce71741?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JXjmFBEBk2cdhVBo9EI8Lx-kxoAGTPBKchYvhmGiKbIjmD8itP2NN-mtAJNBD4GVvIroN0fYon~bAvg~dkotdIKrKxbgLzDkmc7glADMvoy58Nq5sX0~RJB6mYKCXno~ShXkvYM0xuMILKh1sLMaWjA9TcCIbV5iULGhlvEN1~FGKZWhnkNAQau9T2VSRKnJiTTlHPymMEO99WNwQhyeGRApNiGWfCfYfLVpeAeZk4SJzAhvL0cIBYpg0pEXtA5XbmmR8bT1N3ZJjXYh4NR5p36Qlgauu0-3lx0eIxEB19lxGPv8usTkCOQ8gIt~K4XJYZnGth4jwgUxfpn-q22UAw__',
    'https://s3-alpha-sig.figma.com/img/2b79/e11e/d885dbe3ab31e6f0c95ec64b26599246?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z8Aiv-ZF~0ylx-m1e8za55uz9xlfUicSfsbg354K~i0v-qt87hTbh25eTvU2oLca1Talf6Pa2A6YZIyrM27D7uAt0S7Byn3MnSWQco3lXf5ksIssbWGTt3hmfMpdvjsvOQpPHHdeT4Sp~M7YO1cieAsUKMGW7I7eZmb44i1IByyYF-TwODzdgGP7ZxremCXptG9KVFhDxJlBz~zjrK9BMS3f24nEtW~2RnCdMXOWkrzIiKx2rWd3ulgE2z4ELGWf6hUlW2-kW81Nf~NzMiyunnraycg-2SxPAISE86LyLkdGo~-L4yexRkZ-~eaSxiIF8D~fnjOObuhwBcz4L73jmA__',
  ],
  colors: ['#4C5562', '#0A7D4D', '#3E3E3E', '#F06543'],
};

const bestsellerProducts = [
  { id: 1, name: 'Graphic Design', category:'English Department', price: '$6.48', image: 'https://s3-alpha-sig.figma.com/img/0bfc/bfef/c49b63d0071c5ef94c3d4dde5f05172f?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lgSHYswfpRGwaqaIML-1P3EEoTX3LwpHG1uAXzTmS8wGPFXCi7egZQKSzGfxFKwkr4EPvgBglwQd0VbUEf9UdBXYF0Bn3yuEgJbqQRJ0~4GOEbpYX1mj35p7Nvtin0fYIcItktyZFp841Q6VPqlWA1WNFnv63eVR5rVAYmV3i1WsplOJAz5deGC1GSndeMsXK4FsJp7lamtVMV4aaFprMKqZfytXuSKwAp7fV2QZxer4Qz21VB6Z~eaGDpCLav42gSUFlwkxdh3PdR5itsfUXEPZLIpr1Llt45XqYwRxbBL5N-GWIM3rZZQy5idcfbvGtQBfunkSWubGOifFHqMh3w__' },
  { id: 2, name: 'Graphic Design', category:'English Department', price: '$6.48', image: 'https://s3-alpha-sig.figma.com/img/f454/f9ee/9a7979dac6cbd7699a260c7deacd7b13?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X3QDy80fZNlpXnp7A6Nk5hIAf1tioGzRGoCh-gseRENWFSZqI6TrsolmGOJaKOOEmdUn0bIpqioiJ6~yUam~9BD0Xk6G2Xn0y62V6ntZbWaefwjMYsbo7Xg7Lo3CV9Zzj8zwkJUcxMuKiP-xyUClHh7zGbojEND-B17Trg8hCsgq4JrnVE04HQK0GUZ8REcJq9FEB8BeKNnTADRs9U8-sIvS1FhBQOj7F0ZF9J6VHDQso6B2LUUXiZiyBNUcA6DG3es0~kkX~zboSGEBOTHKX07Lc8E4KX13CPy0e7FYraUAkc0cunV6NihdNVbrEyIWYU~F6QMRpydYKkmOQmMZ7Q__' },
  { id: 3, name: 'Graphic Design', category:'English Department', price: '$6.48', image: 'https://s3-alpha-sig.figma.com/img/685f/2d7c/3cabc3250d9fd223e5b93cebd2761439?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ekjPOD62em8mHR5m1VnDmAkILlpZ~lTq4nFVTJqsrcQhIqrakuYEbK3zL-e0IoEOQS9fXEei9yauDQav4lhXExy3yz8sbKiQWKOBsHUrDSZzuiHpUu43ruM-pEsVwTzgl-uDLpFOFbN7z97fpqjbEXticlUZwQwC813qt978uP7XsAqf50sFukTKMyvvZeyfJVePK7C3fAYFSLKC6hg4SHPqVYO-AMoLkSnvbfhaa~~h~feGa4cXslB1VQO1e3nM0xKvQTSY1hU0jl7K13yKvX4~p8fOTk92CBFB1Z2TlOxZNYkhXYiiW2SeM88s0J8dL5q0FDtlEiFexiDd7YwoSw__' },
  { id: 4, name: 'Graphic Design', category:'English Department', price: '$6.48', image: 'https://s3-alpha-sig.figma.com/img/079b/4c5d/47938d7b09087b31f361063fb40f9a11?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iCmlw~DewheSRCUZIckA2rI7qCm3ZwxZUW9U3ukDDstmWggIcxhtZbP8ePAWOuMyVlYlKNEfMcHozdmLahNc0zHHQfmnbN4rrN49d~AUnVzfUndSEE2VNg0ufiXGM28CUTnp4VOKNIn62IgeMOgl26ELvqOa3ojMJ7~~LxTnARgjCAr-D8eXtApMlGDYQYJBjwoyPMoNDZ4ibJUCrU3n36AUXJuFQdj0AdqjTcjZ2Q9GGV2U0TK4AP4wwcF2Ejm7OI0q6vat0tlnPhtawQnQDWzqMTvyUPVSvcDadqvePYMCUVNQweozNjGQMMOfJSUbRbMRtjIwbu7B35zyg86hcA__' },
  { id: 5, name: 'Graphic Design', category:'English Department', price: '$6.48', image: 'https://s3-alpha-sig.figma.com/img/926b/f1d6/5669af4e049e20ceb30aa6408b6a79f3?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aGP~Llbs4B4xlVM3rM1d7myL89qEZO26aL0wusme~Ru0Y6d3HSw7BoAfzc~ThjrCRsYj5fqEcdQaInV~Cg5CDFnY4ZQqV1HVOiYNjFCWx2pij2bdGo2VpslYy84n-BTK76QPlNUHoiaKBahMMoewbfoucYMct163cCcrxlkHq3EJS4F3EoLUCM-ZbjMsfTr82DHR~vL0oxvbpae5GWknsHf1nATFZKzhiTZMz7uvkSVL4mUA9y1CUREUB28oN36GAhvZgvN-UfboTB1Hsim6pMI~xvtXOYyBvMrOwRVIrRjp854o44-z8FIrXulmQNuTbkowAcreORuRhoNnRUhoSQ__' },
  { id: 6, name: 'Graphic Design', category:'English Department', price: '$6.48', image: 'https://s3-alpha-sig.figma.com/img/a93e/41b4/2e460896a15fe5f82a56836939f30577?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YdbBC0oag0cgin2fjtv2lRQfrdoyDxyKYWqWkwXvpF5f94lifMY-r-l3KOHTDkfjEDD0H~odRKtsnzbtJ7Cezo4Xl5fijCKEupClKWhSaO4zcstUZmANctafV~w7AyXB0xjkJiO1uD4wKZDZa-Jbbygql2ZjknsLzCj52MpBUX9DFlBardXq3db1h3rjcRh2weFfFgxiV6RLej92J1q10m7ndJa7rSypg5NoaO~4djuiW1vlAU1vgpWTvgOfokGfSAncnXuy9fNH5iQ1xpyRwwCr~Gp-v3xXS6RU3M0PKbXGGRLQEbO3YNRug5~~acuW0jtogXHiB6VWRyxuemQymQ__' },
  { id: 7, name: 'Graphic Design', category:'English Department', price: '$6.48', image: 'https://s3-alpha-sig.figma.com/img/0bfc/bfef/c49b63d0071c5ef94c3d4dde5f05172f?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lgSHYswfpRGwaqaIML-1P3EEoTX3LwpHG1uAXzTmS8wGPFXCi7egZQKSzGfxFKwkr4EPvgBglwQd0VbUEf9UdBXYF0Bn3yuEgJbqQRJ0~4GOEbpYX1mj35p7Nvtin0fYIcItktyZFp841Q6VPqlWA1WNFnv63eVR5rVAYmV3i1WsplOJAz5deGC1GSndeMsXK4FsJp7lamtVMV4aaFprMKqZfytXuSKwAp7fV2QZxer4Qz21VB6Z~eaGDpCLav42gSUFlwkxdh3PdR5itsfUXEPZLIpr1Llt45XqYwRxbBL5N-GWIM3rZZQy5idcfbvGtQBfunkSWubGOifFHqMh3w__' },
  { id: 8, name: 'Graphic Design', category:'English Department', price: '$6.48', image: 'https://s3-alpha-sig.figma.com/img/f454/f9ee/9a7979dac6cbd7699a260c7deacd7b13?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X3QDy80fZNlpXnp7A6Nk5hIAf1tioGzRGoCh-gseRENWFSZqI6TrsolmGOJaKOOEmdUn0bIpqioiJ6~yUam~9BD0Xk6G2Xn0y62V6ntZbWaefwjMYsbo7Xg7Lo3CV9Zzj8zwkJUcxMuKiP-xyUClHh7zGbojEND-B17Trg8hCsgq4JrnVE04HQK0GUZ8REcJq9FEB8BeKNnTADRs9U8-sIvS1FhBQOj7F0ZF9J6VHDQso6B2LUUXiZiyBNUcA6DG3es0~kkX~zboSGEBOTHKX07Lc8E4KX13CPy0e7FYraUAkc0cunV6NihdNVbrEyIWYU~F6QMRpydYKkmOQmMZ7Q__' },

];

const Navbar = () => {
  return (
    <header className= "text-black py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">Bandage</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="hover:text-blue-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Shop
              </a>
            </li>
            <li><a href="#">blog</a></li>
            <li>
              <a href="#" className="hover:text-blue-400">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                pages
              </a>
            </li>
           {/* Person Icon */}
<a href="#" className="flex items-center space-x-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-sky-600"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
  <span className='text-sky-600 ' >Login/Register</span>
</a>

{/* Search Icon */}
<a href="#" className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-sky-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </a>
          {/* Cart Icon */}
<a href="#" className="flex items-center space-x-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-sky-600"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
</a>
{/* Heart Icon */}
<a href="#" className="flex items-center space-x-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-sky-600 "
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
</a>
          </ul>
        </nav>
      </div>
    </header>
  );
};


const RatingStars = ({ rating }: { rating: number }) => {
  const stars = Array(4)
    .fill(false)
    .map((_, index) => index < Math.floor(rating)); // Full stars
  const halfStar = rating % 1 !== 0; // Half-star check

  const emptyStarsCount = Math.max(0, 5 - stars.length - (halfStar ? 1 : 0)); // Ensure non-negative value

  return (
    <div className="flex items-center">
      {stars.map((fullStar, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          fill={fullStar ? 'currentColor' : 'none'}
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-5 h-5 text-yellow-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 17.75l-6.3 3.3 1.2-7-5.2-5.1 7.1-.6L12 2l3.2 6.75 7.1.6-5.2 5.1 1.2 7-6.3-3.3z"
          />
        </svg>
      ))}
      {halfStar && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-5 h-5 text-yellow-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 17.75l-6.3 3.3 1.2-7-5.2-5.1 7.1-.6L12 2l3.2 6.75 7.1.6-5.2 5.1 1.2 7-6.3-3.3z"
          />
        </svg>
      )}
      {Array(emptyStarsCount)
        .fill(false)
        .map((_, index) => (
          <svg
            key={index + stars.length}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5 text-gray-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 17.75l-6.3 3.3 1.2-7-5.2-5.1 7.1-.6L12 2l3.2 6.75 7.1.6-5.2 5.1 1.2 7-6.3-3.3z"
            />
          </svg>
        ))}
    </div>
  );
};


export default function Page() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Navigation logic for next/previous images
  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === featuredProduct.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? featuredProduct.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <Navbar />
      <Head>
        <title>{featuredProduct.name}</title>
        <meta name="description" content="Product Details Page" />
      </Head>

      {/* Product Container */}
      <div className="max-w-4xl mx-auto p-6">
        {/* Layout: Left - Main Image, Right - Product Details */}
        <div className="flex flex-col-reverse md:flex-row gap-6">
          {/* Image Section (Left Side) */}
          <div className="relative w-full md:w-1/2 h-96 mx-auto border rounded-lg overflow-hidden shadow-lg">
            {/* Main Image */}
            <Image
              src={featuredProduct.images[currentImageIndex]}
              alt={`Product image ${currentImageIndex + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />

            {/* Left Arrow */}
            <button
              onClick={handlePrevImage}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
            >
              &lt;
            </button>

            {/* Right Arrow */}
            <button
              onClick={handleNextImage}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
            >
              &gt;
            </button>
          </div>

          {/* Product Info Section (Right Side) */}
          <div className="w-full md:w-1/2">

          <h4 className="text-1xl font-montserrat mb-4">{featuredProduct.name}</h4>
    
            {/* Rating */}
            <div className="flex items-center space-x-2">
        <RatingStars rating={featuredProduct.rating} />
        <p className="text-black ">{featuredProduct.reviews}</p>
        </div>

            <p className="text-green-600 font-semibold text-xl">{featuredProduct.price}</p>
            <p className="text-black font-semibold mb-4">{featuredProduct.availability} <span className="ml-2 text-sky-300">{featuredProduct.stock}</span>
</p>
            <p className="text-gray-600 mb-4">{featuredProduct.description}</p>
            {/* Horizontal Line */}
            <hr className="my-4 border-t-2 border-gray-300" />

            {/* Colors */}
            <div className="flex items-center mt-4">
              <span className="mr-2">Colors:</span>
              {featuredProduct.colors.map((color, index) => (
                <div
                  key={index}
                  className="w-6 h-6 rounded-full border-2 mr-2"
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Thumbnails Below Main Image */}
        <div className="flex justify-left gap-4 mt-4">
          {featuredProduct.images.slice(1, 3).map((image, index) => (
            <div
              key={index}
              className={`w-20 h-20 border-2 rounded-lg overflow-hidden cursor-pointer ${
                currentImageIndex === index + 1 ? 'border-blue-500' : 'border-gray-300'
              }`}
              onClick={() => setCurrentImageIndex(index + 1)}
            >
              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                width={80}
                height={80}
                objectFit="cover"
              />
            </div>
          ))}
        </div>
      </div>
          {/* center Navbar */}
      <nav className="text-black py-4 font-montserrat">
        <div className="container mx-auto flex justify-center space-x-8">
          {/* Description */}
          <div className="text-center">
              <a href="#" className="hover:text-blue-400">
                Description
              </a>
          </div>

          {/* Additional Details */}
          <div className="text-center">
              <a href="#" className="hover:text-blue-400">
                Shop
              </a>
          </div>

          {/* Reviews */}
          <div className="text-center">
              <a href="#" className="hover:text-blue-400">
                Reviews (0)
              </a>
          </div>
        </div>
      </nav>

      <div className="flex items-start justify-between border rounded-lg p-6 shadow-lg">
  {/* Image Section */}
  <div className="flex-1 flex items-center justify-center">
    <img
      src="https://s3-alpha-sig.figma.com/img/8b0c/0f76/c949a2cffacf01d40c82241e905719cb?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BBs87soJ9tfLl8T9KH0Y29KIlfQJ72pPFe08ROLWLPg9MTVdW31xCnov7PNexR~8x6KE7RAoWU3KNAeMcPRjmaLJDF2piavrKnBt1prigrDGDOWPiIcqrf8TuHMdG7NqgrtAmfEcUwIQsEirPmBWLNTPnXN4YeLVZKqHt07VLe~vEXuHKi9byCq5Tm7~IVbio2-oIRswVXK39OkMzlDjuNhmJclmb7Y2LX5tubt8gUSZ8GiCYcA~WTgAQUZq~J570lE1VqsXleGZVlOKI3Z7RgU8sKPUT2QoL-46C8QDTSDvcO3KEFO-RIxBFS9buYuiwlswng8QAZHiml7OUZ2cCg__"
      alt="Image"
      className="w-[392px] h-[332px] object-cover rounded-lg"
    />
  </div>

  {/* Center Content Section */}
  <div className="flex-1 flex flex-col items-center text-center space-y-4 px-4">
    <h5 className="text-xl font-semibold">the quick fox jumps over </h5>
    <p className="text-gray-700">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
    <p className="text-gray-700">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
    <p className="text-gray-700">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
  </div>

  {/* Left Content Section */}
  <div className="flex-1 flex flex-col space-y-6 px-0">
    {/* First h5 with bullet points */}
    <div>
      <h5 className="text-xl font-semibold mb-4">the quick fox jumps over</h5>
      <ul className="space-y-2">
        <li className="flex items-center space-x-2">
          <span className="text-xl">&gt;</span>
          <p className="text-gray-700">the quick fox jumps over the lazy dog</p>
        </li>
        <li className="flex items-center space-x-2">
          <span className="text-xl">&gt;</span>
          <p className="text-gray-700">the quick fox jumps over the lazy dog</p>
        </li>
        <li className="flex items-center space-x-2">
          <span className="text-xl">&gt;</span>
          <p className="text-gray-700">the quick fox jumps over the lazy dog</p>
        </li>
        <li className="flex items-center space-x-2">
          <span className="text-xl">&gt;</span>
          <p className="text-gray-700">the quick fox jumps over the lazy dog</p>
        </li>
      </ul>
    </div>

    {/* Second h5 with bullet points */}
    <div >
      <h5 className="text-xl font-semibold mb-4">the quick fox jumps over</h5>
      <ul className="space-y-2">
        <li className="flex items-center space-x-2">
          <span className="text-xl">&gt;</span>
          <p className="text-gray-700">the quick fox jumps over the lazy dog</p>
        </li>
        <li className="flex items-center space-x-2">
          <span className="text-xl">&gt;</span>
          <p className="text-gray-700">the quick fox jumps over the lazy dog</p>
        </li>
        <li className="flex items-center space-x-2">
          <span className="text-xl">&gt;</span>
          <p className="text-gray-700">the quick fox jumps over the lazy dog</p>
        </li>
      </ul>
    </div>
  </div>
</div>



      {/* Bestseller Products */}
      <section className="container mx-auto px-4 py-10">
        <h3 className="text-2xl font-semibold mb-6 ">BESTSELLER PRODUCTS <div className="flex justify-center items-center py-2">
         <div className="flex justify-center">
  </div>
</div></h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {bestsellerProducts.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg overflow-hidden shadow-md bg-white"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h4 className="text-lg font-semibold mb-2">{product.name}</h4>
                <p className="text-gray-700 text-sm">{product.category}</p>
                <p className='text-gray-400'> $16.48<span className="text-green-500 font-bold ml-2">{product.price}</span></p>
              </div>
            </div>
          ))}
              
        </div>

        <nav className="flex items-center justify-center space-x-16 p-4 ml-20 " style={{ marginTop: "50px" }}>
  {/* Hooli Logo */}
  
   <Image src={hooliLogo} alt="AWS Logo" width={103} height={34} />

  {/* Lyft Logo */}
  <Image src={lyftLogo} alt="AWS Logo" width={83} height={58} />


  {/* Spring Logo */}
  <Image src={springLogo} alt="AWS Logo" width={103} height={42} />

   {/* AWS Logo */}
   <Image src={awsLogo} alt="AWS Logo" width={104} height={62} />

   {/* Discord Logo */}
   <Image src={discordLogo} alt="AWS Logo" width={76} height={72} />
</nav>
      </section>
         
      <nav className="text-black py-4 font-montserrat">
  <div className="container mx-auto flex items-center justify-between">
    {/* Left: H5 Text */}
    <div>
      <h5 className="text-2xl font-bold ml-72">Bandage</h5>
    </div>

    {/* Right: Social Icons */}
    <div className="flex items-center space-x-6 mr-48">
      {/* Facebook SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        className="text-blue-600 cursor-pointer"
      >
        <path
          d="M22 12.07c0-5.53-4.48-10.01-10-10.01S2 6.54 2 12.07c0 4.99 3.66 9.17 8.53 9.89v-7h-2.56v-2.89h2.56V8.74c0-2.5 1.48-3.9 3.81-3.9 1.1 0 2.25.2 2.25.2v2.48h-1.27c-1.25 0-1.63.78-1.63 1.58v1.9h2.77l-.44 2.89h-2.33v7.01c4.87-.72 8.53-4.9 8.53-9.89z"
        />
      </svg>

      {/* Instagram SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        className="text-pink-600 cursor-pointer"
      >
        <path
          d="M12 2.16c3.2 0 3.584.012 4.85.07 1.17.057 1.954.25 2.42.415a4.92 4.92 0 0 1 1.78 1.178c.41.41.903 1.037 1.178 1.78.164.466.357 1.25.415 2.42.057 1.265.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.057 1.17-.25 1.954-.415 2.42a4.92 4.92 0 0 1-1.178 1.78c-.41.41-1.037.903-1.78 1.178-.466.164-1.25.357-2.42.415-1.265.057-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.057-1.954-.25-2.42-.415a4.92 4.92 0 0 1-1.78-1.178c-.41-.41-.903-1.037-1.178-1.78-.164-.466-.357-1.25-.415-2.42-.057-1.265-.07-1.65-.07-4.85s.012-3.584.07-4.85c.057-1.17.25-1.954.415-2.42A4.92 4.92 0 0 1 4.85 2.645c.41-.41 1.037-.903 1.78-1.178.466-.164 1.25-.357 2.42-.415C8.416 2.172 8.8 2.16 12 2.16zm0 1.777c-3.154 0-3.512.012-4.745.07-1.084.053-1.667.23-2.056.381a3.33 3.33 0 0 0-1.26.85c-.34.34-.615.78-.85 1.26-.15.39-.328.972-.381 2.056-.057 1.233-.07 1.59-.07 4.745s.012 3.512.07 4.745c.053 1.084.23 1.667.381 2.056.23.48.51.92.85 1.26.34.34.78.615 1.26.85.39.15.972.328 2.056.381 1.233.057 1.59.07 4.745.07s3.512-.012 4.745-.07c1.084-.053 1.667-.23 2.056-.381a3.33 3.33 0 0 0 1.26-.85c.34-.34.615-.78.85-1.26.15-.39.328-.972.381-2.056.057-1.233.07-1.59.07-4.745s-.012-3.512-.07-4.745c-.053-1.084-.23-1.667-.381-2.056a3.33 3.33 0 0 0-.85-1.26c-.34-.34-.78-.615-1.26-.85-.39-.15-.972-.328-2.056-.381-1.233-.057-1.59-.07-4.745-.07zm0 4.584a5.42 5.42 0 1 1 0 10.84 5.42 5.42 0 0 1 0-10.84zm0 1.778a3.642 3.642 0 1 0 0 7.284 3.642 3.642 0 0 0 0-7.284zm4.937-1.233a1.02 1.02 0 1 1 0-2.04 1.02 1.02 0 0 1 0 2.04z"
        />
      </svg>

      {/* Twitter SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        className="text-blue-400 cursor-pointer"
      >
        <path
          d="M23.643 4.937a9.56 9.56 0 0 1-2.828.775 4.958 4.958 0 0 0 2.163-2.723 9.678 9.678 0 0 1-3.127 1.195 4.92 4.92 0 0 0-8.384 4.482A13.949 13.949 0 0 1 1.671 3.149a4.92 4.92 0 0 0 1.523 6.573 4.903 4.903 0 0 1-2.225-.616v.061a4.926 4.926 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.084 4.93 4.93 0 0 0 4.604 3.417A9.868 9.868 0 0 1 0 19.54 13.92 13.92 0 0 0 7.548 21c9.142 0 14.307-7.72 14.307-14.422 0-.22-.005-.436-.015-.651a10.325 10.325 0 0 0 2.533-2.622z"
        />
      </svg>
    </div>
  </div>
</nav>
<div className="flex justify-center items-center py-2">
  <div className="h-0.5  bg-gray-200 w-2/3 mx-auto"></div>
</div>

<div className="container mx-auto p-2 ml-8">
  {/* Flex container for 5 columns */}
  <div className="flex justify-between">
    {/* Column 1 */}
    <div className="flex-1 flex flex-col space-y-2 text-center">
      <div><h3 className='font-bold'><a href="#" >Company Info </a></h3></div>
      <div><a href="#">About Us</a></div>
      <div><a href="#">Carrier</a></div>
      <div><a href="#">We are Hiring</a></div>
      <div><a href="#">Blog</a></div>
    </div>

    {/* Column 2 */}
    <div className="flex-1 flex flex-col space-y-2 text-center">
      <div><h3 className='font-bold'><a href="#">Legal</a></h3></div>
      <div><a href="#">About Us</a></div>
      <div><a href="#">Carrier</a></div>
      <div><a href="#">We are Hiring</a></div>
      <div><a href="#">Blog</a></div>
    </div>

    {/* Column 3 */}
    <div className="flex-1 flex flex-col space-y-2 text-center">
    <div><h3 className='font-bold'><a href="#">Features</a></h3></div>
      <div><a href="#">About Us</a></div>
      <div><a href="#">Carrier</a></div>
      <div><a href="#">We are Hiring</a></div>
      <div><a href="#">Blog</a></div>
    </div>

    {/* Column 4 */}
    <div className="flex-1 flex flex-col space-y-2 text-center">
    <div><h3 className='font-bold'><a href="#">Resources</a></h3></div>
      <div><a href="#">About Us</a></div>
      <div><a href="#">Carrier</a></div>
      <div><a href="#">We are Hiring</a></div>
      <div><a href="#">Blog</a></div>
    </div>

    {/* Column 5 */}
<div className="flex-1 flex flex-col space-y-4 text-center">
  {/* Heading */}
  <div>
    <h3 className="font-bold text-lg">Get in Touch</h3>
  </div>

  {/* Email Input and Subscribe Button */}
  <div className="flex items-center justify-center space-x-2">
    <input
      type="email"
      placeholder="Your Email"
      className="w-2/3 px-4 py-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button className="px-4 py-2 bg-blue-500 text-white font-semibold  hover:bg-blue-600">
      Subscribe
    </button>
  </div>

  {/* Bottom Text */}
  <div className="text-sm text-gray-500 mt-2">
    We'll never share your email with anyone else.
  </div>
</div>

  </div>
</div>
    </div>
  );
}
