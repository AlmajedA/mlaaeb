import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Script from "next/script";
import { useRef } from 'react'
import Carousel from 'react-bootstrap/Carousel';


export default function Home() {
  let carouselRef = useRef();
  const scrollHandler = (e) => {
    e.preventDefault()
    // @ts-ignore
    carouselRef.current.element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }



  return (

    <>
      <Head>
        <title>MLAAEB</title>
        <meta name='keywords' content='Court Reservation'/>

      </Head>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      />


      <div>
      <Carousel className='mb-5' indicators={false} controls={false}>
        <Carousel.Item>
          <Image
            className="d-block w-100 m-auto"
            src="/wallpaper.jpeg"
            alt="First slide"
            width={512} height={512 + 128}
          />
          <Carousel.Caption className='h-75'>
            <h1 className='display-6' style={{"color": "#FFE77AFF"}}><b>MLAAEB</b></h1>
            <h1 className='display-2' style={{"color": "black"}}><b>LIFE IS BETTER WITH</b></h1>
            <h1 className='display-5' style={{"color": "#FFE77AFF"}}><b>SPORTS</b></h1>
            <button onClick={scrollHandler} className='btn btn-success btn-lg m-5' style={{"color": "#FFE77AFF"}}> Get Started! </button>
          </Carousel.Caption>
        </Carousel.Item>
        </Carousel>




      <h1 className='text-center'>High Rated Courts</h1>          

      <Carousel ref={carouselRef} className='mb-5'>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="/football_court.jpeg"
            alt="First slide"
            width={512} height={512}
          />
          <Carousel.Caption>
            <h3>Football Court</h3>
            <p>Reserve The best football court in Dammam from here.</p>
            <Link className='btn btn-success' href='/dashboard'>More Details</Link>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="/tennis_court.jpeg"
            alt="Second slide"
            width={512} height={512}
          />

          <Carousel.Caption>
            <h3>Tennis Court</h3>
            <p>Reserve the best tennis court in Dhahran from here.</p>
            <Link className='btn btn-success' href='/'>More Details</Link>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="/padel.jpg"
            alt="Third slide"
            width={512} height={512}
          />

          <Carousel.Caption>
            <h3>Padel Court</h3>
            <p>Reserve The best padel court in Dammam from here.</p>
            <Link className='btn btn-success' href='/'>More Details</Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>


      

    </div>
      

      
    </>
  )
}