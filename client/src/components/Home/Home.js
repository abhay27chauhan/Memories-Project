import { useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import Posts from '../Posts/Posts.js';
import Form from '../Form/Form.js';
import { getPosts } from '../../redux/post/post.actions';

function Home() {
    const currentId = useSelector(state => state.id);
    const dispatch = useDispatch();

    console.log(currentId);

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch])

    return (
        <Grow in>
            <Container>
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts/>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home
