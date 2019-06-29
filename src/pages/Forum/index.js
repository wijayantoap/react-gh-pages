import React from 'react';
import ForumHeader from '../../components/ForumHeader';
import { Grid } from '@material-ui/core';
import SideNavigation from '../../components/SideNavigation';
import ForumDiscussion from '../ForumDiscussion';

class Forum extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            currentPage: 'all'
        }
    }

    navigationOnClick = (e) => {
        this.setState({
            currentPage: e.currentTarget.dataset.page
        })
    }

    renderSwitch(param) {
        switch(param) {
            case 'all':
                return <ForumDiscussion />;
            case 'following':
                return 'following'
            case 'tag':
                return 'tag'
            default:
                return 'all';
        }
      }

    render() {
        return(
            <div className="forum" style={{ height: '150rem' }}>
                <ForumHeader />
                <Grid container style={{ marginTop: '10rem', }}>
                    <Grid item style={{ marginRight: '5rem', width: '19rem' }}>
                        <SideNavigation navigationOnClick={this.navigationOnClick}/>
                    </Grid>
                    <Grid item>
                    <Grid container direction="column" alignItems="flex-start">
                        <Grid item>
                            Hello
                        </Grid>
                        <Grid item>
                            {this.renderSwitch(this.state.currentPage)}
                        </Grid>
                    </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Forum;