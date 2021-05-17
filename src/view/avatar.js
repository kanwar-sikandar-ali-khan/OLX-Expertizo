import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { useHistory } from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));

export default function ImageAvatar({ imageUrl }) {
    const classes = useStyles();
    const history = useHistory();



    return (
        <div className={classes.root}>

            <Avatar style={{ cursor: 'pointer' }}
                onClick={() => history.push('/dashboard/profile')} alt="profile"
                src={imageUrl} className={classes.large} />
        </div>
        
        );
}
