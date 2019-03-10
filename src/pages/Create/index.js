import React from 'react';
import firebase from '../../Firebase';
import { Link } from 'react-router-dom';

class Create extends React.Component {
    constructor() {
        super();
        this.ref = firebase.firestore().collection('blogs');
        this.state = {
            title: '',
            content: '',
            author: ''
        };
    }

    onChange = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { title, content, author } = this.state;

        this.ref.add({
            title,
            content,
            author
        }).then((docRef) => {
            this.setState({
                title: '',
                content: '',
                author: ''
            });
            this.props.history.push('/blog');
        }).catch((error) => {
            console.error('Error adding post: ', error);
        })
    }

    render() {
        const { title, content, author } = this.state
        return(
            <div>
                <h3>Add blog</h3>
                <div>
                    <form onSubmit={this.onSubmit}>
                        <div>
                            <h5>Title</h5>
                            <input type="text" name="title" value={title} onChange={this.onChange} placeholder="Title" />
                        </div>
                        <div>
                            <h5>Content</h5>
                            <input type="text" name="content" value={content} onChange={this.onChange} placeholder="Content" />
                        </div>
                        <div>
                            <h5>Author</h5>
                            <input type="text" name="author" value={author} onChange={this.onChange} placeholder="Author" />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Create;