import Head from 'next/head'
import Image from 'next/image'
import Footer from '../Comps/Footer'
import Navbar from '../Comps/Navbar'
import Link from 'next/link'
import Script from "next/script";


export default function Home() {
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

      <div className="carousel slide">
          

          <div className="carousel-inner">
            <div className="carousel-item active">
              <Image src="/wallpaper.jpeg" className="d-block w-100 m-auto" alt="..." width={512} height={512}/>
              <div className="carousel-caption h-50">
                <h5>Welcome to <b>MLAAEB</b>!</h5>
                <p>The best place to reserve a court and enjoy your time with your family and friends</p>
                
              </div>
            </div>
            
            
          </div>
          
        </div>
      

        

        

        <div id="carouselExampleCaptions" className="carousel slide mt-4">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <Image src="/football_court.jpeg" className="d-block w-75 m-auto" alt="..." width={512} height={512}/>
              <div className="carousel-caption d-none d-md-block">
                <h5>Football Court</h5>
                <p>Reserve The best football court in Dammam from here.</p>
                <Link className='btn btn-success' href='/'>More Details</Link>
              </div>
            </div>
            <div className="carousel-item">
              <Image src="/tennis_court.jpeg" className="d-block w-75 m-auto" alt="..." width={512} height={512}/>
              <div className="carousel-caption d-none d-md-block">
                <h5>Tennis Court</h5>
                <p>Reserve the best tennis court in Dhahran from here.</p>
                <Link className='btn btn-success' href='/'>More Details</Link>
              </div>
            </div>
            <div className="carousel-item">
              <Image src="/padel.jpg" className="d-block w-75 m-auto" alt="..." width={512} height={512}/>
              <div className="carousel-caption d-none d-md-block">
                <h5>Padel Court</h5>
                <p>Reserve The best padel court in Dammam from here.</p>
                <Link className='btn btn-success' href='/'>More Details</Link>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      

      
    </>
  )
}