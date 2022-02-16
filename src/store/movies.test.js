import reducer from "./movies";

var mockdata = {"totalAmount":2,
                "data":[
                    {
                        "id":354912,
                        "title":"Coco",
                        "tagline":"The celebration of a lifetime",
                        "vote_average":7.8,
                        "vote_count":3619,
                        "release_date":"2017-10-27",
                        "poster_path":"https://image.tmdb.org/t/p/w500/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg",
                        "overview":"Despite his family’s baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel's family history.",
                        "budget":175000000,
                        "revenue":700920729,
                        "genres":["Adventure","Comedy","Family","Animation"],
                        "runtime":105
                    },
                    {
                        "id":10328,
                        "title":"Cocoon",
                        "tagline":"Beyond the innocence of youth, and the wisdom of age, lies the wonder of... Cocoon",
                        "vote_average":6.5,
                        "vote_count":425,
                        "release_date":"1985-06-21",
                        "poster_path":"https://image.tmdb.org/t/p/w500/foIhEPQoqDctfwsHmmYwbNz5A2g.jpg",
                        "overview":"A group of aliens return to earth to take back some cocoons of their people they left behind from an earlier trip. They kept the recovered cocoons in the swimming pool of a house they rented in a small Florida town. Their mission is hampered by a number of old people from an elderly home nearby, who have been secretly using the pool and discovering the unusual power of these cocoons.",
                        "budget":0,
                        "revenue":85313124,
                        "genres":["Comedy","Drama","Science Fiction"],
                        "runtime":117
                    }],
                    "offset":0,
                    "limit":6
                }

test("intial State",()=>{
    expect(reducer([], {})).toEqual([]);
});

test('should handle GET_POST_START', () => {
    const postsRequested = {
      list : [],
      loading: true
    };
    // it's empty on purpose because it's just starting to fetch posts
    expect(reducer(postsRequested.list, {})).toEqual([]);
  });

test("should handle GET_POST_SUCCESS",() => {
    const postsReceived = {
        list: mockdata.data,
        loading: false
      };
    expect(reducer(postsReceived.list,{})).toEqual(mockdata.data)
  });

test('should handle GET_POST_FAIL', () => {
    const postsRequestFailed = {
      list: [],
      loading: false
    };
    expect(reducer(postsRequestFailed.list, {})).toEqual([]);
  });