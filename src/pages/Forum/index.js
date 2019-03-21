import React from 'react';
import ForumHeader from '../../components/ForumHeader';
import { Grid } from '@material-ui/core';
import SideNavigation from '../../components/SideNavigation';

class Forum extends React.Component {
    render() {
        return(
            <div className="forum" style={{ height: '150rem' }}>
                <ForumHeader />
                <Grid container style={{ marginTop: '10rem', }}>
                    <Grid item style={{ marginRight: '5rem', width: '19rem' }}>
                        <SideNavigation />
                    </Grid>
                    <Grid item>
                        Content
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Forum;