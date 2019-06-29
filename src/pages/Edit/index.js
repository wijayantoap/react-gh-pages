import React from 'react';
import firebase from '../../Firebase';
import { Link } from 'react-router-dom';

class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: '',
            title: '',
            content: '',
            author: ''
        };
    }

    componentDidMount() {
        const ref = firebase.firestore().collection('blogs').doc(this.props.match.params.id);
        ref.get().then((doc) => {
            if (doc.exists) {
                const blog = doc.data();
                this.setState({
                    key: doc.id,
                    title: blog.title,
                    content: blog.content,
                    author: blog.author
                });
            } else {
                console.log("No such post!");
            }
        });
    }

    onChange = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState({ board:state});
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { title, content, author } = this.state;

        const updateRef = firebase.firestore().collection('blogs').doc(this.state.key);
        updateRef.set({
            title,
            content,
            author
        }).then((docRef) => {
            this.setState({
                key: '',
                title: '',
                content: '',
                author: ''
            });
            this.props.history.push('/show/' + this.props.match.params.id);
        }).catch((error) => {
            console.log('Error adding post: ', error);
        })
    }

    render() {
        return (
            <div>
                <h3>Edit post</h3>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <h5>Title</h5>
                        <input type="text" name="title" value={this.state.title} onChange={this.onChange} placeholder="Title" />
                    </div>  
                    <div>
                        <h5>Content</h5>
                        <input type="text" name="content" value={this.state.content} onChange={this.onChange} placeholder="Content" />
                    </div>
                    <div>
                        <h5>Author</h5>
                        <input type="text" name="author" value={this.state.author} onChange={this.onChange} placeholder="Author" />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Edit;