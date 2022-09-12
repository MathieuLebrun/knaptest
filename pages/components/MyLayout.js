import Link from 'next/link'

function  MyLayout({children}){
    return (
        <div className='container'>
        <nav>
          <div className='header'>
              <div className='linkAction'>
                <Link href="/" ><a>Action à vérifier</a></Link>  
              </div>
          </div>
        </nav>     
        {children}
        
      </div>
    );
}
export default MyLayout;