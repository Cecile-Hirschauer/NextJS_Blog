import React from 'react'
import Link from 'next/link'
import { v4 as uuidv4} from 'uuid'

export default function utilisateurs(props) {

  //console.log(props);

  return (
    <div className='container px-4 mt-5'>
      <h1 className='text-center'>Liste des membres</h1>
      <div className="row justify-content-center mt-5">
        {props.users.map(user => (
          <div key={uuidv4()} className="col-12 col-lg-6 m-3">
            <div className="card">
              <div className="card-body d-flex justify-content-between">
                <h5 className="card-title">{user.name}</h5>
                <Link href={`/utilisateurs/${user.id}`}>
                  <a className='ml-auto card-link'>Contacter</a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const data = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await data.json();

  return {
    props: {
      users
    }
  }
}

// https://jsonplaceholder.typicode.com/users
