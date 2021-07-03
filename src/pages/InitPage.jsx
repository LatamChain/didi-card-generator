import React, { Fragment } from 'react'
import clsx from 'clsx';
import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography';
import { Grid, Link, Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import {Link as LinkRoute} from 'react-router-dom'
import LandingIconos from '../components/LandingIconos';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: '110ch',
    padding: theme.spacing(3),
    minHeight: '80ch',
    margin: '40px auto !important'
  },
  margin: {
    padding: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(1),
    },
  },
  title: {
    textAlign: 'center',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
  card: {
    padding: 28,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  }, 
  document: {
    color: 'gray',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    fontSize: 18,
  },
  gridBtn: {
    textAlign: 'center',
    bottom: 0,
    alignSelf: 'flex-end',
    flex: '1 0 0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    width: '100%',
  }
}));

const InitPage = () => {

  const classes = useStyles();

  return (
    <Container fixed={true} maxWidth="md">
        <Card className={clsx(classes.margin, classes.root, classes.card)}>
            <Grid container>
                <Grid item md={12}>
                    <Typography variant="h5" component="h5" className={clsx(classes.title)}>
                        Title
                    </Typography>
                </Grid>
                {/* Columns */}
                <Grid item md={12} lg={6} style={{ width: '100%' }} >
                    <div className="principal_btn_container">
                        <Button 
                            variant="contained" 
                            size="large" 
                            color="primary" 
                            component={LinkRoute}
                            to="/form"
                        >Generate Card</Button>
                        <Button 
                            variant="contained" 
                            size="large" 
                            color="primary" 
                            onClick={alert}
                        >Other</Button>
                        <Button 
                            variant="contained"
                            size="large"
                            color="primary"
                            onClick={alert}
                        >Other</Button>
                    </div>
                </Grid>

                {/* Columns */}
                <Grid item md={12} lg={6}>
                    <Typography component="p" className={classes.document}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus voluptate suscipit quod et fugiat adipisci odit maiores distinctio, voluptatum, possimus atque consequuntur nemo praesentium iusto quasi soluta illum dolore rerum.
                    </Typography>
                </Grid>

            </Grid>
        </Card>
    </Container>
  )
}
export default InitPage