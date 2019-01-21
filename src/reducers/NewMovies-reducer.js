const initialState = [
  { name:'Fist book',
    descriptions:'blaa bala bala',
    img:'http://kinogo.cc/uploads/posts/2019-01/thumbs/1547133008_esher.jpg'
  },
  { name:'Two book',
    descriptions:'blaa bala bala',
    img:'http://kinogo.cc/uploads/posts/2019-01/thumbs/1547132664_granicy.jpg'
  },
  { name:'thire book',
    descriptions:'blaa bala bala',
    img:'http://kinogo.cc/uploads/posts/2019-01/thumbs/1547131768_gorkovmeksike.jpg'
  },
  { name:'For book',
    descriptions:'blaa bala bala',
    img:'http://kinogo.cc/uploads/posts/2019-01/thumbs/1547132477_kadavr.jpg'
  },
  { name:'for book',
    descriptions:'blaa bala bala',
    img:'http://kinogo.cc/uploads/posts/2018-09/1536302594_kak.zhenit.holostyaka.jpg'
  },
  { name:'Last book',
    descriptions:'blaa bala bala',
    img:'http://kinogo.cc/uploads/posts/2019-01/thumbs/1547131958_semparnechistyh.jpg'
  },
  
]

export function newMoviesReducer(state = initialState, action) {
 switch (action.type) {
    case 'SET_NEW_MOVIES':
      return { ...state, newMovies: action.payload }

    default:
      return state
  }
}