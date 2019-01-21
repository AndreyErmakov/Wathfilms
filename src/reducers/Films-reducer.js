const initialState = [
  { name:'Fist book',
    descriptions:'blaa bala bala',
    img:'https://static9.depositphotos.com/1146092/1150/i/450/depositphotos_11501977-stock-photo-dog-watching-a-movie.jpg'
  },
  { name:'Two book',
    descriptions:'blaa bala bala',
    img:'http://pikchyriki.net/avatar/iz-filmov/100/126.jpg'
  },
  { name:'thire book',
    descriptions:'blaa bala bala',
    img:'http://kinogo.cc/uploads/posts/2018-09/1536302594_kak.zhenit.holostyaka.jpg'
  },
  { name:'For book',
    descriptions:'blaa bala bala',
    img:'http://kinogo.cc/uploads/posts/2018-09/1536302594_kak.zhenit.holostyaka.jpg'
  },
  { name:'for book',
    descriptions:'blaa bala bala',
    img:'http://kinogo.cc/uploads/posts/2018-09/1536302594_kak.zhenit.holostyaka.jpg'
  },
  { name:'Last book',
    descriptions:'blaa bala bala',
    img:'http://kinogo.cc/uploads/posts/2018-09/1536302594_kak.zhenit.holostyaka.jpg'
  },
  
]

export function filmsReducer(state = initialState, action) {
 switch (action.type) {
    case 'SET_FILMS':
      return { ...state, films: action.payload }

    default:
      return state
  }
}