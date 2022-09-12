import Image from 'next/image'
import p1 from './photo.png'
import p2 from './lait.png'
import Link from 'next/link'

const  Check = () => {
    

    return (
        
        <div className='check'>
          <div className='checkG'>

            
            
            <Image
                
                src={p1}
                alt="Picture of the author"
                width={1400}
                height={700}
            />
            
            
            
            <div className='footer'>
            <h2>Type d'action : scanné</h2>
            Commentaires: Vérifier si l'article a été scanné
            </div>
          </div>

          <div className='checkD'>
            <h1 className='AC' >Article concerné</h1>
            <div className='article'>
            <Image
                
                src={p2}
                alt="Picture of the author"
                width={200}
                height={200}
            />
            <h2>Titre article</h2>
            <p>8.49€</p>
            <p>EAN / ID artivle</p>
            </div>

            <Link href="/" ><a className='button1'>Non frauduleux</a></Link>  
            <Link href="/" ><a className='button2'>À contrôler</a></Link> 
          </div>
          
        </div>
        
    );
}

export default Check;