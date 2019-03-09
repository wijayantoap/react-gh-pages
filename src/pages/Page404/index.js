import React from 'react';
import { Link } from "react-router-dom";

import { Header404, Header__text_box } from '../../layout/Header404';
import { HeadingPrimary, HeadingPrimary__main, HeadingPrimary__sub } from '../../base/Typography';
import { Button } from '../../components/Button';

class Page404 extends React.Component {
    render() {
        return(
            <div>
                <Header404>
                    <Header__text_box>
                        <HeadingPrimary>
                            <HeadingPrimary__main>404</HeadingPrimary__main>
                            <HeadingPrimary__sub>
                                Cannot locate the page
                            </HeadingPrimary__sub>
                        </HeadingPrimary>
                        <div><Link to={'/'}><Button>Go back</Button></Link></div>
                    </Header__text_box>
                </Header404>
            </div>
        );
    }
}

export default Page404;