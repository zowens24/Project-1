// IPO : Input > Process > Output

// Constants and State Variables (Data)

// Constant Data
//romance movies
const RO_URL = ['http://www.omdbapi.com/?apikey=364a927d&t=titanic', 'http://www.omdbapi.com/?apikey=364a927d&t=the+notebook', 'http://www.omdbapi.com/?apikey=364a927d&t=ghost', 'http://www.omdbapi.com/?apikey=364a927d&t=call+me+by+your+name', 'http://www.omdbapi.com/?apikey=364a927d&t=casablanca', 'http://www.omdbapi.com/?apikey=364a927d&t=moonstruck', 'http://www.omdbapi.com/?apikey=364a927d&t=dirty+dancing', 'http://www.omdbapi.com/?apikey=364a927d&t=a+star+is+born', 'http://www.omdbapi.com/?apikey=364a927d&t=love+basketball', 'http://www.omdbapi.com/?apikey=364a927d&t=brokeback+mountain', 'http://www.omdbapi.com/?apikey=364a927d&t=an+officer+and+a+gentleman', 'http://www.omdbapi.com/?apikey=364a927d&t=roman+holiday', 'http://www.omdbapi.com/?apikey=364a927d&t=love+story', 'http://www.omdbapi.com/?apikey=364a927d&t=gone+with+the+wind', 'http://www.omdbapi.com/?apikey=364a927d&t=carol']

//const rand_ro_movie = RO_URL[(Math.random() * RO_URL.length) | 0]
//console.log(rand_ro_movie);
//comedy movies
const CO_URL = []
const rand_co_movie = CO_URL[(Math.random() * CO_URL.length) | 0]
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
const $modal = $('#modal');
// Attached Event Listeners
$romance.on('click', handleClick);
// Functions
function handleClick() {
    //fetch data using AJAX 
    
    const rand_ro_movie = RO_URL[(Math.random() * RO_URL.length) | 0]
    
    $.ajax(rand_ro_movie).then(function (data) {
        // take the returned data and assign it to a global vairable
        romanceMovieData = data;
        //call render and tell the function that it needs to display a modal
       render(true);
       console.log(data);
        //call render to visualize it to the DOM
        //render();

    }, function (error) {
        console.log('error: ', error);
    });

}




    //map over the objects inside of the movieData results array
    // dynamically generate html for each element in the arraymodal(handleClick);
    //add that html to our collection elememt
    //const html = RomanceMovieData.results.map(movie => {
    function render(showModal) {
     if(showModal === true) {
         //show modal 
         //generate the html for the inner content for the modal
         //call the modal function on the modal element
         const $modalContent = $(`
            <img src="${romanceMovieData.Poster}"/>
            <h5>${romanceMovieData.Title}</h5>
            <p>Plot: ${romanceMovieData.Plot} </p>
            
         `);
         const $modal = $('#moviemodal')
         $modal.html($modalContent)
         $modal.modal();
     } 
     // return 
    }
