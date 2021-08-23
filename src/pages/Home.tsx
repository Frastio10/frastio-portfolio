import React from 'react'
import image from '../assets/img/image.jpg'

function Home(){
   
    
    return(
       <section className="banner">
           <div className="container">
               <div className="row" style={{height:'800px'}}>
                    <div className="col-12 d-flex align-items-center">
                        <div className="text-center w-100">
                            <img src={image} alt="" className="col-md-2 rounded-circle" style={{boxSizing:'border-box', objectFit:'fill', height:'300px'}}/>
                            <h1 className="text-light weight-600">Hi, I'm Frastio Agustian</h1>
                            <h6 className="text-light mb-4">Web Developer</h6>
                            <p className="text-light lead col-md-12 col-lg-8 mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sint ea voluptas, commodi inventore fugiat.</p>
                        </div>
                    </div>
               </div>
           </div>
       </section>
    )
}

export default Home