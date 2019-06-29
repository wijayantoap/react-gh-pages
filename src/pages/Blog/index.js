import React from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../Firebase';
import UnsplashClient from '../../Unsplash';
import { database } from 'firebase';
import { pexelsClient } from '../../Pexels';
import Image from "react-graceful-image";
import defaultImg from '../../img/discover.jpeg';
import { BlogCover, BlogSection, BlogList, BlogTitle } from '../../layout/Blog';
import { HeadingSecondary } from '../../base/Typography';
import { Button } from '../../components/Button';

class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('blogs');
        this.unsubscribe = null;
        this.state = {
            blogs: [],
            img: '',
        };
    }

    onCollectionUpdate = (querySnapshot) => {
        const blogs = [];
        querySnapshot.forEach((doc) => {
            const { author, title, content } = doc.data();
            blogs.push({
                key: doc.id,
                doc, // DocumentSnapshot
                author,
                title,
                content
            });
        });
        this.setState({
            blogs
        });
    }

    componentWillMount() {
        
    }

    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
        // RANDOM PHOTO

        // fetch('https://api.unsplash.com/photos/random?client_id=' + "799a71b9d2a0d422c3d0bd87340cbc749e515642bc99adfccb2d99b381bf47f1")
		// .then(res => res.json())
		// .then(data => {
        //     this.setState({ img: data.urls.regular });
		// })
		// .catch(e => {
        //     console.log('Error happened during fetching!', e);
        //     pexelsClient.search("nature", 1, 1)
        //         .then((result) => {
        //             this.setState({ img: result.photos[0].src.landscape });
        //         }).
        //         catch(e => {
        //             console.log(e);
        //         });
        // });
    }

    render() {
        return (
            <div>
                <BlogCover>
                    <BlogSection>
                    <Link to={'/'}><Button style={{ marginTop: 8 }} background={'rgb(114, 68, 59, .4)'} color={'white'}>&larr; Back to Home</Button></Link>
                        <BlogList>
                            <div>
                                <HeadingSecondary>Blog</HeadingSecondary>
                            </div>
                            <div>
                                {/* <Link to={'/create'}>Create</Link> */}
                                <div style={{ height: '55vh', overflowY: 'scroll' }}>
                                    {this.state.blogs.map(blog =>
                                        <div key={blog.key}>
                                            <Link to={`/show/${blog.key}`}><BlogTitle>{blog.title}</BlogTitle></Link>
                                        </div>)}
                                </div>
                            </div>
                        </BlogList>
                    </BlogSection>
                </BlogCover>
            </div>
        );
    }
}

export default Blog;