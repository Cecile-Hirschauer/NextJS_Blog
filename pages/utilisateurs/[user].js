import React from 'react'
import { v4 as uuidv4 } from 'uuid';

export default function user(props) {
    // console.log(props)
    return (
        <div className='container px-4 pt-3'>
            <h2 className="text-center">
                Nom de l'utilisateur: {props.user.username}
            </h2>
            <div className="row justify-content-center">
                <div className="col-12 col-lg-8">
                    <div className="card p-2">
                        <div className="card-body">
                            <div className="card-title">
                                <h4 className="card-title">{props.user.name}</h4>
                                <h5 className="card-subtitle mb-2 text-muted">
                                Username: {props.user.username} 
                                    </h5>
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        Email: {props.user.email}
                                    </li>
                                    <li className="list-group-item">
                                        Site web: {props.user.website}
                                    </li>
                                    <li className="list-group-item">
                                        Téléphone: {props.user.phone}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export async function getStaticProps(context) {
    const id = context.params.user;
    const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await data.json();

    return {
        props: {
            user
        }
    }
}

export async function getStaticPaths() {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await data.json();

    const paths = users.map(item => (
        { params: { user: item.id.toString() } }
    ))

    return {
        paths,
        fallback: false
    }
}