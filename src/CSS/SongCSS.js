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

  div: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 4fr 4fr',
    gridTemplateAreas: '"image rank title artist"',
    alignItems: 'center',
    width: '85%',
    height: '100%',
    margin: '0 auto',
    overflowY: 'hidden'
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

  title: {
    margin: '0 10px',
    fontSize: '40px',
    gridArea: 'title'
  },

  artist: {
    margin: '0 10px',
    fontSize: '40px',
    fontWeight: 'bold',
    gridArea: 'artist'
  }
};

export default CSS;