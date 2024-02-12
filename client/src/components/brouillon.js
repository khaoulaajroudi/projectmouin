function showForm(){
    loginForm.classList.add("active")

}
onClick={showForm()} 
let loginForm = document.querySelector('.login-form')






//import Korg from "./components/Korg";
//<div className="boxs"> {card.map((el)=> <Korg data={el } />)}</div>
//const card =[
    {
      picture: 'https://cdn.korg.com/fr/products/upload/b48e3d7f78d82ae9c25303be877e2572_sp.png',
      name: "korg pa4x",
      description: " profisional aranger ",
      prix: "7000dt ",
    },
    { picture: "https://cdn.korg.com/fr/products/upload/b48e3d7f78d82ae9c25303be877e2572_sp.png",
    name: "korg pa3x",
    description: " profisional aranger ",
    prix: "6500dt ",
  },
  { picture: "https://cdn.korg.com/fr/products/upload/b48e3d7f78d82ae9c25303be877e2572_sp.png",
  name: "korg pa700x",
  description: " profisional aranger ",
  prix: "6000dt ",
  },
  { picture: "https://cdn.korg.com/fr/products/upload/b48e3d7f78d82ae9c25303be877e2572_sp.png",
  name: "korg pa2x",
  description: " profisional aranger ",
  prix: "2000dt ",
  },
  { picture: "https://cdn.korg.com/fr/products/upload/b48e3d7f78d82ae9c25303be877e2572_sp.png",
  name: "korg pa5x",
  description: " profisional aranger ",
  prix: "15000dt ",
  }
 // ]


 <section className='carosel'  id='carosel'>
    <div className='content'>
    <h3> music instru  a vos service </h3>
    <p> bienvenue chez nous</p>
    <h2 className='btn'> decouvrir plus</h2>
    </div>
    <div className='cont'>
    <span className='image-btn red' data-src></span> 
    <span className='image-btn'></span> 
     <span className='image-btn'></span> 
      <span className='image-btn'></span> 
     
    </div>
    <div className='image'>
    
    <image src="./components/videos/pearl.mp4" id='image-slider' ></image>
    </div>

      </section>