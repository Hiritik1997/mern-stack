import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';

class Home extends Component {
    state ={
        comments: [ ]
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then( res => {
            //console.log('Response from API',res);
            this.setState({
                comments: res.data.slice(0, 10)
            })
            //console.log('Our home state',this.state.posts);
        })
    }
    
    render() {
        const { comments } = this.state;
        const commentList = comments.length ? (
            comments.map(comment => {
                return (
                    <div className='comment card' key={comment.id}>
                        
                        <div className='card-content'>
                            <Link to = {'/' + comment.id} >
                                <span className='card-title'>{comment.name}</span>
                            </Link>
                    
                            <ul>
                                <li>{comment.id}</li>
                                <li>{comment.email}</li>
                                <li>{comment.body}</li>
                            </ul>
                            {comment.id % 2===0 ? <img className="image1" src="http://cdn.24.co.za/files/Cms/General/d/4320/28d1220097b54f79907f2d810b51ad0b.jpg" alt="oops! not found!" /> : <img className="image1" src="https://www.htxt.co.za/wp-content/uploads/2014/11/GAME-OF-THRONES.jpg" alt="oops! not found!" />}
                        </div>
                    </div>
                )
            })
        ) : (
            <p className='center'> No comments yet </p>
        )
        
        return(
            <div className='center'>
                <h4 className='container'>Homepage</h4>
                { commentList }
            </div>
        )
    }
}

export default Home;

