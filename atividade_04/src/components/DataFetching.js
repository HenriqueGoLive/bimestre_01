import React, {useState, useEffect} from 'react';
import axios from 'axios';

function DataFetching(){

    const [posts, setPosts] = useState ([]);

    useEffect (() => {
        axios.get('https://api.github.com/orgs/rocketseat/repos')
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    })

    return (


        <div>

            <h1>Atividade_04</h1>

            <ul>{
                
                posts.map(
                    post => (
                        <p>

                            <h2 style={{color: 'pink'}}>{post.name}</h2>
                            <p/>
                            {post.description}
                            <p/>
                            <a href={post.html_url}>Click Aqui</a>

                            </p>
                    ))}</ul>

        </div>

    )

}

export default DataFetching