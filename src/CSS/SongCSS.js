const CSS = {
  link: {
    position: 'relative',
    display: 'block',
    margin: '0',
    width: '100%',
    height: '200px',
    borderRadius: '10px',
    transition: 'all 0.2s ease',
    '&:link': {
      textDecoration: 'none',
      color: 'black'
    },
    '&:visited': {
      color: 'black'
    },
    '&:hover': {
      boxShadow: '0 0 10px black',
      color: '#F2522E',
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
    justifySelf: 'center',
    borderRadius: '5px'
  },

  rank: {
    margin: '0 10px 0',
    fontSize: '55px',
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
    fontSize: '25px',
    gridArea: 'title'
  },

  artistContainer: {
    maxHeight: '200px',
    overflowY: 'hidden',
  },

  artist: {
    margin: '0 10px',
    textAlign: 'center',
    fontSize: '25px',
    fontWeight: 'bold',
    gridArea: 'artist'
  }
};

export default CSS;