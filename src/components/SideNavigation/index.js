import React from 'react';
import PropTypes from 'prop-types';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import Star from '@material-ui/icons/Star';
import styled from 'styled-components';

const styles = theme => ({
  menuItem: { 
      '& $primary': {
        fontSize: '1.2rem',
      color: '#808080',
    },
      borderRadius: '.5rem',
    '&:focus': {
      backgroundColor: 'rgb(249, 249, 249)',
      '& $primary, & $icon': {
        color: '#808080',
        fontWeight: 'bold',
      },
    },
  },
  primary: {},
  icon: {},
});

const Button = styled.div`
    display: inline-block;
    text-align: center;
    white-space: nowrap;
    cursor: pointer;
    line-height: 2rem;
    padding: .8rem 1.3rem;
    color: white;
    font-size: 1.6rem;
    background-color: #444;
    border-radius: .5rem;

    :hover {
        /* background-color: #f9f9f9; */
    }
`;

function ListItemComposition(props) {
  const { classes } = props;

  return (
    <Paper elevation={0}>
        <Button style={{ marginBottom: '1rem' }}>Start a discussion</Button>
        <MenuList>
            <MenuItem className={classes.menuItem}>
            <ListItemIcon className={classes.icon}>
                <SendIcon />
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.primary }} inset primary="Sent mail" />
            </MenuItem>
            <MenuItem className={classes.menuItem}>
            <ListItemIcon className={classes.icon}>
                <Star />
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.primary }} inset primary="Drafts" />
            </MenuItem>
            <MenuItem className={classes.menuItem}>
            <ListItemIcon className={classes.icon}>
                <InboxIcon />
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.primary }} inset primary="Inbox" />
            </MenuItem>
        </MenuList>
    </Paper>
  );
}

ListItemComposition.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListItemComposition);