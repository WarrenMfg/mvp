const CSS = {
  link: {
    position: 'relative',
    display: 'block',
    margin: '0',
    width: '100%',
    height: '200px',
    borderRadius: '10px',
    '&:link': {
      textDecoration: 'none',
      color: 'black'
    },
    '&:visited': {
      color: 'black'
    },
    '&:hover': {
      boxShadow: '0 0 10px black',
      zIndex: '1'
    }
  },

  containerDiv: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 4fr 4fr',
    gridTemplateAreas: '"image rank title artist"',
    alignItems: 'center',
    width: '85%',
    height: '100%',
    margin: '0 auto',
  },

  image: {
    width: '106px',
    height: '106px',
    gridArea: 'image',
    justifySelf: 'center'
  },

  rank: {
    margin: '0',
    fontSize: '75px',
    gridArea: 'rank',
    justifySelf: 'center'
  },

  titleContainer: {
    maxHeight: '200px',
    overflowY: 'hidden',
  },

  title: {
    margin: '0 10px',
    textAlign: 'center',
    fontSize: '40px',
    gridArea: 'title'
  },

  artistContainer: {
    maxHeight: '200px',
    overflowY: 'hidden',
  },

  artist: {
    margin: '0 10px',
    textAlign: 'center',
    fontSize: '40px',
    fontWeight: 'bold',
    gridArea: 'artist'
  }
};

export default CSS;