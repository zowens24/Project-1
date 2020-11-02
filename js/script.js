// IPO : Input > Process > Output

// Constants and State Variables (Data)

// Constant Data
//romance movies
const RO_URL = ['https://www.omdbapi.com/?apikey=364a927d&t=titanic&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=the+notebook&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=ghost&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=call+me+by+your+name&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=casablanca&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=moonstruck&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=dirty+dancing&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=a+star+is+born&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=brokeback+mountain&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=an+officer+and+a+gentleman&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=roman+holiday&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=love+story&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=gone+with+the+wind&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=carol&plot=full']

//comedy movies
const CO_URL = ['https://www.omdbapi.com/?apikey=364a927d&t=the+big+lebowski&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=some+like+it+hot&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=this+is+spinal+tap&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=airplane&plot=full']

//action movies
const AC_URL = []
const rand_ac_movie = AC_URL[(Math.random() * AC_URL.length) | 0]
//scifi movies 
const SCI_URL = []
const rand_sci_movie = SCI_URL[(Math.random() * SCI_URL.length) | 0]
//musicals
const MUS_URL = []
const rand_mus_movie = MUS_URL[(Math.random() * MUS_URL.length) | 0]
//animated movies
const AN_URL = []
const rand_an_movie = AN_URL[(Math.random() * AN_URL.length) | 0]
//dramas
const DRA_URL = []
const rand_dra_movie = DRA_URL[(Math.random() * DRA_URL.length) | 0]
//documentaries
const DOC_URL = []
const rand_doc_movie = DOC_URL[(Math.random() * DOC_URL.length) | 0]
//thrillers
const THR_URL = []
const rand_thr_movie = THR_URL[(Math.random() * THR_URL.length) | 0]
//horror
const HOR_URL = []
const rand_hor_movie = HOR_URL[(Math.random() * HOR_URL.length) | 0]
//romcoms
const ROCO_URL = []
const rand_roco_movie = ROCO_URL[(Math.random() * ROCO_URL.length) | 0]
//random
const RAND_URL = []
const rand_rand_movie = RAND_URL[(Math.random() * RAND_URL.length) | 0]

// State Data
let romanceMovieData;
let comedyMovieData;

// Cached Element References 
const $romance = $('#romance');
const $comedy = $('#comedy');
const $action = $('#action');
const $scifi = $('#scifi');
const $musical = $('#musical');
const $animation = $('#animation');
const $drama = $('#drama');
const $doc = $('#doc');
const $thriller = $('#thriller');
const $horror = $('#horror');
const $romcom = $('#romcom');
const $random = $('#random');


// Attached Event Listeners
$romance.on('click', handleClickR);
$comedy.on('click', handleClickC)
// Functions
function handleClickR() {
    //fetch data using AJAX 
    
    const rand_ro_movie = RO_URL[(Math.random() * RO_URL.length) | 0]
    
    $.ajax(rand_ro_movie).then(function (data) {
        // take the returned data and assign it to a global vairable
        romanceMovieData = data;
        //call render and tell the function that it needs to display a modal
        render(true);
      function render(showModal) {
          if (showModal === true) {
        const $RoModalContent = $(`<h5>${romanceMovieData.Title}</h5><br>
        <img src="${romanceMovieData.Poster}"/><br>
        <p>Year: ${romanceMovieData.Year} </p><br>
        <p>Rated: ${romanceMovieData.Rated} </p><br>
        <p>Runtime: ${romanceMovieData.Runtime} </p><br>
        <p>Director: ${romanceMovieData.Director} </p><br>
        <p>Writer: ${romanceMovieData.Writer} </p><br>
        <p>Actors: ${romanceMovieData.Actors} </p><br>
        <p>Plot: ${romanceMovieData.Plot} </p>`);
        const $RoModal = $('#moviemodalR')
     $RoModal.html($RoModalContent)
     $RoModal.modal();
          }
      }
       console.log(data)
        //call render to visualize it to the DOM
        //render();

    }, function (error) {
        console.log('error: ', error);
    });
}

   
    //show modal 

    //generate the html for the inner content for the modal
    //call the modal function on the modal element
   
    
    function handleClickC() {
        //fetch data using AJAX 
        
        const rand_co_movie = CO_URL[(Math.random() * CO_URL.length) | 0]
        
        $.ajax(rand_co_movie).then(function (data) {
            // take the returned data and assign it to a global vairable
            comedyMovieData = data;
            //call render and tell the function that it needs to display a modal
            render(true);
          function render(showModal) {
              if (showModal === true) {
            const $CoModalContent = $(`<h5>${comedyMovieData.Title}</h5><br>
            <img src="${comedyMovieData.Poster}"/><br>
            <p>Year: ${comedyMovieData.Year} </p><br>
            <p>Rated: ${comedyMovieData.Rated} </p><br>
            <p>Runtime: ${comedyMovieData.Runtime} </p><br>
            <p>Director: ${comedyMovieData.Director} </p><br>
            <p>Writer: ${comedyMovieData.Writer} </p><br>
            <p>Actors: ${comedyMovieData.Actors} </p><br>
            <p>Plot: ${comedyMovieData.Plot} </p>`);
            const $CoModal = $('#moviemodalC')
         $CoModal.html($CoModalContent)
         $CoModal.modal();
              }
          }
           console.log(data);
            //call render to visualize it to the DOM
            //render();
    
        }, function (error) {
            console.log('error: ', error);
        });
    }
    




