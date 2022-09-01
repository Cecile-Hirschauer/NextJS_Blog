import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Tutoriel nextjs" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="container px-4 pt-5">

        <h1>Bienvenue sur Code.io</h1>
        <span>Le club communautaire des afficionados de développement web</span>

        <div className="row mt-5">

          <div className="col-12 col-sm-6" style={{minHeight: "200px"}}>
            <div className="card w-100 h-100">
              <div className="card-body">
                <h5 className="card-title">Lisez les articles</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Maximisez votre culture web
                </h6>
                <p className="card-text">
                  Chaque auteur tente de vous apporter le plus de valeur possible par article.
                </p>
                <Link href='/blog'>
                  <a>Visitez le blog</a>
                </Link>
              </div>
            </div>
          </div>



          <div className="col-12 col-sm-6" style={{minHeight: "200px"}}>
            <div className="card w-100 h-100">
              <div className="card-body">
                <h5 className="card-title">
                  Faites un tour vers la liste de membres
                </h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Rencontrez des devs
                </h6>
                <p className="card-text">
                  Ajoutez, invitez et discutez avec les différents membres.
                </p>
                <Link href='/utilisteurs'>
                  <a>Découvrez la liste de membres</a>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
