import React from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../Firebase';
import Avatar from '@material-ui/core/Avatar';
import img from '../../logo.svg';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = {
    avatar: {
      backgroundColor: 'rgb(249, 249, 249)'
    },
    bigAvatar: {
      margin: 10,
      width: 60,
      height: 60,
    },
  };

class ForumDiscussion extends React.Component {
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
    }

    render() {

        const { classes } = this.props;

        return (
            <div>
                {this.state.blogs.map(blog =>
                    <Grid container key={blog.key} direction="row" style={{ padding: '1.2rem 0' }}>
                        <Grid item style={{ marginRight: '2rem' }}>
                            <Avatar alt="image" src={img} className={classes.avatar} />
                        </Grid>
                        <Grid item style={{ alignSelf: "center" }}>
                            <Grid container direction="column" justify="center">
                            <Link to={`/show/${blog.key}`} style={{ textDecoration: 'none', color: '#111', marginBottom: '.3rem' }}>
                                <span style={{ fontSize: '1.6rem' }}>{blog.title}</span>
                            </Link>
                            <div>{blog.author} started xxx hours ago</div>
                            </Grid>
                        </Grid>
                    </Grid>)}
            </div>
        );
    }
}

export default withStyles(styles)(ForumDiscussion);