import { makeStyles, Theme } from '@material-ui/core';
import { FONTS } from '../theme/mainTheme';

export const useBackedByStyles = makeStyles<Theme>(theme => ({
  root: {
    position: 'relative',
    zIndex: 3,
    padding: theme.spacing(8, 0),
    background: '#ffffff url(./images/ellipse_blue.svg) no-repeat center -350%',
    backgroundSize: '500% 90%',
    borderRadius: '30px',
    minHeight: '100vh',
    maxWidth: 1440,
    [theme.breakpoints.up('lg')]: {
      paddingTop: 100,
      minHeight: 'unset',
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingBottom: 120,
      borderRadius: '120px',
      background:
        '#ffffff url(./images/ellipse_blue.svg) no-repeat center 460%',
      backgroundSize: '200% 90%',
    },
  },
  container: {},
  title: {
    fontSize: 24,
    fontFamily: FONTS.title,
    fontWeight: 500,
    marginBottom: theme.spacing(8),
    transitionDelay: '0.2s',
    [theme.breakpoints.up('md')]: {
      fontSize: 44,
      lineHeight: '66px',
      marginBottom: theme.spacing(10),
    },
  },
  imgWrap: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 100,
    padding: theme.spacing(2),
    '&:nth-child(2n)': {
      transitionDelay: '0.3s',
    },
    [theme.breakpoints.up('md')]: {
      '&:nth-child(3n+1)': {
        transitionDelay: 0,
      },
      '&:nth-child(3n+2)': {
        transitionDelay: '0.3s',
      },
      '&:nth-child(3n+3)': {
        transitionDelay: '0.6s',
      },
    },
  },
  img: {
    maxWidth: '100%',
    height: 'auto',
  },
  profile: {
    maxWidth: '100%',
    height: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: 72,
    },
  },

  name: {
    fontFamily: FONTS.title,
    display: 'block',
    marginTop: 10,
    textAlign: 'center',
  },
  filler: {
    position: 'relative',
    '&::before': {
      position: 'absolute',
      top: '-25vh',
      content: `''`,
      height: '100vh',
      width: '100%',
      zIndex: 1,
      display: 'block',
      [theme.breakpoints.up('lg')]: {
        backgroundColor: theme.palette.background.default,
      },
    },
  },
}));
