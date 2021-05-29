import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    CssBaseline,
    useScrollTrigger,
    Slide,
    useTheme,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Divider,
    Button,
    Grid,
    TextField,

} from '@material-ui/core';
import clsx from 'clsx';
// import MenuIcon from '@material-ui/icons/Menu';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { useStyles } from "./style";
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
// import SaveIcon from '@material-ui/icons/Save';


interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
    children: React.ReactElement;
}




function HideOnScroll(props: Props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

export default function HideAppBar(props: Props) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                    elevation={1}
                >
                    <Toolbar>
                        <Grid
                            container
                            direction="row"
                            justify="space-around"
                            alignItems="center"
                        >
                            <Grid item xs={12} sm={4}>
                                <form className={classes.search} noValidate autoComplete="off">
                                    <TextField id="standard-basic" label="Search..."
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <SearchIcon />
                                                </InputAdornment>
                                            )
                                        }} />
                                </form>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Grid
                                    container
                                    direction="row"
                                    justify="center"
                                    alignItems="center"
                                >
                                <Grid item xs={3} sm={2}>
                                    <Typography variant="h6" noWrap className={classes.title}>
                                            Six<span>-</span> <br />two
                                    </Typography>
                                </Grid>
                                    <Divider orientation="vertical" variant="middle" style={{height: "2rem"}} />
                                <Grid item xs={3} sm={3}>
                                    <Typography variant="h6" noWrap className={classes.title}>
                                        <small>Powered by</small><br />
                                        <span>Two f times</span>
                                    </Typography>
                                </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Button
                                    aria-label="open drawer"
                                    onClick={handleDrawerOpen}
                                    className={clsx(open && classes.hide)}
                                    color="primary"
                                    size="large"
                                    endIcon={<ArrowDropDownIcon />}
                                >
                                    CATEGORIES
                        </Button>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />
                <Typography paragraph>
                    Top Stories
                </Typography>
            </main>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="right"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <Button onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </Button>
                </div>
                <Divider />
                <List>
                    {['The Travel Project', 'Real Talk', 'Incredible humans', 'Travel Hacks', 'Make Travel Matter', 'How do I...', 'Much'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['BECOME A COMMUNITY CREATOR', 'Explore the world with Two f time', 'Two f time.com'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </div>
    );
}