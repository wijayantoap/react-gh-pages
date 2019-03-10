import React from 'react';
import firebase from '../../Firebase';
import { Link } from 'react-router-dom';
import { BlogCover, BlogSection, BlogList } from '../../layout/Blog';
import { HeadingSecondary } from '../../base/Typography';
import { Button } from '../../components/Button';

class Show extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blog: {},
            key: ''
        };
    }

    componentDidMount() {
        const ref = firebase.firestore().collection('blogs').doc(this.props.match.params.id);
        ref.get().then((doc) => {
            if (doc.exists) {
                this.setState({
                    blog: doc.data(),
                    key: doc.id,
                    isLoading: false
                });
            } else {
                console.log("No such document!")
            }
        });
    }

    delete(id) {
        firebase.firestore().collection('blogs').doc(id).delete().then(() => {
            console.log('Document succesfully deleted!');
            this.props.history.push('/blog')
        }).catch((error) => {
            console.log('Error removing document: ', error);
        })
    }

    render() {
        return (
            <div>
                <BlogCover>
                    <BlogSection>
                        <BlogList>
                            <div>
                                <HeadingSecondary>{this.state.blog.title}</HeadingSecondary>
                            </div>
                            <div>
                            <div style={{ height: '55vh', overflowY: 'scroll', fontSize: 21 }}>
                                <p>{this.state.blog.content}</p>
                            </div>
                            </div>
                        </BlogList>
                        {/* <Button onClick={this.delete.bind(this, this.state.key)}>Delete</Button> */}
                        <Link to={'/blog'}><Button background={'rgb(114, 68, 59, .4)'} color={'white'}>&larr; Back to Blog</Button></Link>
                    </BlogSection>
                </BlogCover>
            </div>
        );
    }
}

export default Show;