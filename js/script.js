// IPO : Input > Process > Output

// Constants and State Variables (Data)

// Constant Data
//romance movies

const RO_URL = ['https://www.omdbapi.com/?apikey=364a927d&t=titanic&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=the+notebook&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=ghost&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=call+me+by+your+name&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=casablanca&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=moonstruck&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=dirty+dancing&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=a+star+is+born&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=brokeback+mountain&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=an+officer+and+a+gentleman&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=roman+holiday&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=love+story&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=gone+with+the+wind&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=carol&plot=full']

//comedy movies
const CO_URL = ['https://www.omdbapi.com/?apikey=364a927d&t=the+big+lebowski&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=some+like+it+hot&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=this+is+spinal+tap&plot=full','https://www.omdbapi.com/?apikey=364a927d&t=airplane&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=monty+python&y=1975&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=the+jerk&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=team+america&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=anchorman&y=2004&plot=full']

//action movies
const AC_URL = ['https://www.omdbapi.com/?apikey=364a927d&t=the+terminator&plot=full','https://www.omdbapi.com/?apikey=364a927d&t=indiana+jones&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=die+hard&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=kill+bill&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=predator&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=face%2Foff&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=seven+samurai&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=the+wild+bunch&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=police+story&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=enter+the+dragon&plot=full']

//scifi movies 
const SCI_URL = ['https://www.omdbapi.com/?apikey=364a927d&t=the+matrix&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=avatar&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=star+wars&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=blade+runner&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=alien&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=a+space+odyssey&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=star+wars+the+empire+strikes+back&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=back+to+the+future&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=et%3A+the+extra+terrestrial&plot=full']


//musicals
const MUS_URL = ['https://www.omdbapi.com/?apikey=364a927d&t=la+la+land&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=hairspray&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=cinderella&y=1997&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=moulin+rouge&y=2001&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=chicago&y=2002&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=grease&y=1978&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=rocky+horror+picture+show&y=1975&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=cabaret&y=1972&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=funny+girl&y=1968&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=the+sound+of+music&y=1965&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=singin+in+the+rain&y=1952&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=west+side+story&y=1961&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=mary+poppins&y=1964&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=the+wizard+of+oz&y=1939&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=dreamgirls&y=2006&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=the+greatest+showman&y=2017&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=enchanted&y=2007&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=annie&y=1982&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=mamma+mia&y=2008&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=my+fair+lady&y=1964&plot=full' ]

//animated movies
const AN_URL = ['https://www.omdbapi.com/?apikey=364a927d&t=up&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=the+incredibles&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=toy+story&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=pinocchio&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=the+little+mermaid&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=the+lion+king&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=beauty+and+the+beast&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=hercules&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=spirited+away&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=mulan&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=finding+nemo&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=wall-e&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=monsters+inc&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=alladin&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=dumbo&plot=full']

//dramas
const DRA_URL = ['https://www.omdbapi.com/?apikey=364a927d&t=moonlight&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=the+godfather&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=schindler%27s+list&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=goodfellas&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=the+shawshank+redemption&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=saving+private+ryan&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=a+beautiful+mind&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=forrest+gump&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=lawrence+of+arabia&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=rocky&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=the+king%27s+speech&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=fight+club&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=rain+man&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=do+the+right+thing&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=the+king%27s+speech&plot=full']

//documentaries
const DOC_URL = ['https://www.omdbapi.com/?apikey=364a927d&t=march+of+the+penguins&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=minding+the+gap&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=won%27t+you+be+my+neighbor&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=free+solo&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=when+we+were+kings&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=the+last+waltz&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=grey+gardens&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=paris+is+burning&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=13th&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=amy&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=three+identical+strangers&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=honeyland&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=the+work&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=pina&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=the+act+of+killing&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=the+central+park+five&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=i+am+not+your+negro&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=the+up+series&plot=full']

//thrillers
const THR_URL = ['https://www.omdbapi.com/?apikey=364a927d&t=inside+man&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=rififi&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=uncut+gems&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=gaslight&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=you+were+never+really+here&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=the+silence+of+the+lambs&plot=full','https://www.omdbapi.com/?apikey=364a927d&t=se7en&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=memento&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=no+country+for+old+men&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=prisoners&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=vertigo&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=nightcrawler&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=duel&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=the+night+of+the+hunter&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=13th&plot=full']

//horror
const HOR_URL = ['https://www.omdbapi.com/?apikey=364a927d&t=the+shining&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=the+exorcist&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=poltergeist&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=the+ring&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=a+nightmare+on+elm+street&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=halloween&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=a+quiet+place&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=the+blair+witch+project&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=paranormal+activity&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=get+out&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=the+texas+chain+saw+massacre&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=jaws&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=the+thing&plot=full']

//romcoms
const ROCO_URL = ['https://www.omdbapi.com/?apikey=364a927d&t=annie+hall&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=when+harry+met+sally&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=clueless&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=say+anything&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=the+apartment&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=groundhog+day&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=the+princess+bride&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=there%27s+something+about+mary&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=pretty+in+pink&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=pretty+woman&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=four+weddings+and+a+funeral&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=10+things+i+hate+about+you&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=bridget+jones%27+diary&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=crazy+stupid+love&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=13+going+on+30&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=the+proposal&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=crazy+rich+asians&plot=full']

//random
const RAND_URL = ['https://www.omdbapi.com/?apikey=364a927d&t=inglorious+bastards&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=the+devil+wears+prada&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=pulp+fiction&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=good+will+hunting&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=clueless&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=annie+hall&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=when+harry+met+sally&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=clueless&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=say+anything&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=the+apartment&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=groundhog+day&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=the+princess+bride&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=there%27s+something+about+mary&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=pretty+in+pink&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=pretty+woman&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=four+weddings+and+a+funeral&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=10+things+i+hate+about+you&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=bridget+jones%27+diary&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=crazy+stupid+love&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=13+going+on+30&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=the+proposal&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=crazy+rich+asians&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=the+shining&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=the+exorcist&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=poltergeist&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=the+ring&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=a+nightmare+on+elm+street&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=halloween&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=a+quiet+place&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=the+blair+witch+project&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=paranormal+activity&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=get+out&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=the+texas+chain+saw+massacre&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=jaws&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=the+thing&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=inside+man&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=rififi&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=uncut+gems&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=gaslight&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=you+were+never+really+here&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=the+silence+of+the+lambs&plot=full','https://www.omdbapi.com/?apikey=364a927d&t=se7en&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=memento&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=no+country+for+old+men&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=prisoners&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=vertigo&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=nightcrawler&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=duel&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=the+night+of+the+hunter&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=13th&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=march+of+the+penguins&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=minding+the+gap&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=won%27t+you+be+my+neighbor&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=free+solo&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=when+we+were+kings&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=the+last+waltz&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=grey+gardens&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=paris+is+burning&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=13th&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=amy&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=three+identical+strangers&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=honeyland&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=the+work&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=pina&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=the+act+of+killing&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=the+central+park+five&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=i+am+not+your+negro&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=the+up+series&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=moonlight&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=the+godfather&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=schindler%27s+list&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=goodfellas&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=the+shawshank+redemption&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=saving+private+ryan&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=a+beautiful+mind&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=forrest+gump&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=lawrence+of+arabia&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=rocky&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=the+king%27s+speech&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=fight+club&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=rain+man&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=do+the+right+thing&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=the+king%27s+speech&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=up&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=the+incredibles&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=toy+story&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=pinocchio&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=the+little+mermaid&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=the+lion+king&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=beauty+and+the+beast&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=hercules&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=spirited+away&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=mulan&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=finding+nemo&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=wall-e&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=monsters+inc&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=alladin&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=dumbo&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=la+la+land&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=hairspray&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=cinderella&y=1997&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=moulin+rouge&y=2001&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=chicago&y=2002&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=grease&y=1978&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=rocky+horror+picture+show&y=1975&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=cabaret&y=1972&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=funny+girl&y=1968&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=the+sound+of+music&y=1965&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=singin+in+the+rain&y=1952&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=west+side+story&y=1961&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=mary+poppins&y=1964&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=the+wizard+of+oz&y=1939&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=dreamgirls&y=2006&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=the+greatest+showman&y=2017&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=enchanted&y=2007&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=annie&y=1982&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=mamma+mia&y=2008&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=my+fair+lady&y=1964&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=the+matrix&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=avatar&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=star+wars&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=blade+runner&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=alien&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=a+space+odyssey&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=star+wars+the+empire+strikes+back&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=back+to+the+future&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=et%3A+the+extra+terrestrial&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=the+terminator&plot=full','https://www.omdbapi.com/?apikey=364a927d&t=indiana+jones&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=die+hard&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=kill+bill&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=predator&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=face%2Foff&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=seven+samurai&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=the+wild+bunch&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=police+story&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=enter+the+dragon&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=the+big+lebowski&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=some+like+it+hot&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=this+is+spinal+tap&plot=full','https://www.omdbapi.com/?apikey=364a927d&t=airplane&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=monty+python&y=1975&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=the+jerk&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=team+america&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=anchorman&y=2004&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=titanic&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=the+notebook&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=ghost&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=call+me+by+your+name&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=casablanca&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=moonstruck&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=dirty+dancing&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=a+star+is+born&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=brokeback+mountain&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=an+officer+and+a+gentleman&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=roman+holiday&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=love+story&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=gone+with+the+wind&plot=full', 'https://www.omdbapi.com/?apikey=364a927d&t=carol&plot=full']



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
$comedy.on('click', handleClickC);
$scifi.on('click', handleClickS);
$action.on('click', handleClickAc);
$musical.on('click', handleClickM);
$animation.on('click', handleClickAn);
$drama.on('click', handleClickD);
$doc.on('click', handleClickDo);
$thriller.on('click', handleClickT);
$horror.on('click', handleClickH);
$romcom.on('click', handleClickRc);
$random.on('click', handleClickRa);

// Functions
function handleClickR() {
    //fetch data using AJAX 
    $.ajax(RO_URL[(Math.random() * RO_URL.length) | 0]).then(function (data) {
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
    
function handleClickS() {

        const rand_sci_movie = SCI_URL[(Math.random() * SCI_URL.length) | 0]
        $.ajax(rand_sci_movie).then(function (data) {
            scifiMovieData = data;
            render(true);
            function render(showModal) {
                if (showModal === true) {
                    const $ScModalContent = $(`<h5>${scifiMovieData.Title}</h5><br>
                    <img src="${scifiMovieData.Poster}"/><br>
                    <p>Year: ${scifiMovieData.Year} </p><br>
                    <p>Rated: ${scifiMovieData.Rated} </p><br>
                    <p>Runtime: ${scifiMovieData.Runtime} </p><br>
                    <p>Director: ${scifiMovieData.Director} </p><br>
                    <p>Writer: ${scifiMovieData.Writer} </p><br>
                    <p>Actors: ${scifiMovieData.Actors} </p><br>
                    <p>Plot: ${scifiMovieData.Plot} </p>`);
                    const $ScModal = $('#moviemodalS')
                    $ScModal.html($ScModalContent)
                    $ScModal.modal();
                }
            }
            console.log(data);
        }, function (error) {
            console.log('error: ', error);
        });
    }

    
function handleClickAc() {
    const rand_ac_movie = AC_URL[(Math.random() * AC_URL.length) | 0]
    $.ajax(rand_ac_movie).then(function (data) {
        actionMovieData = data;
        render(true);
        function render(showModal) {
            if (showModal === true) {
                const $AcModalContent = $(`<h5>${actionMovieData.Title}</h5><br>
                <img src="${actionMovieData.Poster}"/><br>
                <p>Year: ${actionMovieData.Year} </p><br>
                <p>Rated: ${actionMovieData.Rated} </p><br>
                <p>Runtime: ${actionMovieData.Runtime} </p><br>
                <p>Director: ${actionMovieData.Director} </p><br>
                <p>Writer: ${actionMovieData.Writer} </p><br>
                <p>Actors: ${actionMovieData.Actors} </p><br>
                <p>Plot: ${actionMovieData.Plot} </p>`);
                const $AcModal = $('#moviemodalA')
                $AcModal.html($AcModalContent)
                $AcModal.modal();
            }
        }
        console.log(data);
    }, function (error) {
        console.log('error: ', error);
    });
}

function handleClickM() {
    const rand_mus_movie = MUS_URL[(Math.random() * MUS_URL.length) | 0]
    $.ajax(rand_mus_movie).then(function (data) {
        musicalMovieData = data;
        render(true);
        function render(showModal) {
            if (showModal === true) {
                const $MusModalContent = $(`<h5>${musicalMovieData.Title}</h5><br>
                <img src="${musicalMovieData.Poster}"/><br>
                <p>Year: ${musicalMovieData.Year} </p><br>
                <p>Rated: ${musicalMovieData.Rated} </p><br>
                <p>Runtime: ${musicalMovieData.Runtime} </p><br>
                <p>Director: ${musicalMovieData.Director} </p><br>
                <p>Writer: ${musicalMovieData.Writer} </p><br>
                <p>Actors: ${musicalMovieData.Actors} </p><br>
                <p>Plot: ${musicalMovieData.Plot} </p>`);
                const $MusModal = $('#moviemodalM')
                $MusModal.html($MusModalContent)
                $MusModal.modal();
            }
        }
        console.log(data);
    }, function (error) {
        console.log('error: ', error);
    });
}

function handleClickAn() {
    const rand_an_movie = AN_URL[(Math.random() * AN_URL.length) | 0]
    $.ajax(rand_an_movie).then(function (data) {
        animationMovieData = data;
        render(true);
        function render(showModal) {
            if (showModal === true) {
                const $AnModalContent = $(`<h5>${animationMovieData.Title}</h5><br>
                <img src="${animationMovieData.Poster}"/><br>
                <p>Year: ${animationMovieData.Year} </p><br>
                <p>Rated: ${animationMovieData.Rated} </p><br>
                <p>Runtime: ${animationMovieData.Runtime} </p><br>
                <p>Director: ${animationMovieData.Director} </p><br>
                <p>Writer: ${animationMovieData.Writer} </p><br>
                <p>Actors: ${animationMovieData.Actors} </p><br>
                <p>Plot: ${animationMovieData.Plot} </p>`);
                const $AnModal = $('#moviemodalAN')
                $AnModal.html($AnModalContent)
                $AnModal.modal();
            }
        }
        console.log(data);
    }, function (error) {
        console.log('error: ', error);
    });
}

function handleClickD() {
    const rand_dra_movie = DRA_URL[(Math.random() * DRA_URL.length) | 0]
    $.ajax(rand_dra_movie).then(function (data) {
        dramaMovieData = data;
        render(true);
        function render(showModal) {
            if (showModal === true) {
                const $DrModalContent = $(`<h5>${dramaMovieData.Title}</h5><br>
                <img src="${dramaMovieData.Poster}"/><br>
                <p>Year: ${dramaMovieData.Year} </p><br>
                <p>Rated: ${dramaMovieData.Rated} </p><br>
                <p>Runtime: ${dramaMovieData.Runtime} </p><br>
                <p>Director: ${dramaMovieData.Director} </p><br>
                <p>Writer: ${dramaMovieData.Writer} </p><br>
                <p>Actors: ${dramaMovieData.Actors} </p><br>
                <p>Plot: ${dramaMovieData.Plot} </p>`);
                const $DrModal = $('#moviemodalD')
                $DrModal.html($DrModalContent)
                $DrModal.modal();
            }
        }
        console.log(data);
    }, function (error) {
        console.log('error: ', error);
    });
}

function handleClickDo() {
    const rand_doc_movie = DOC_URL[(Math.random() * DOC_URL.length) | 0]
    $.ajax(rand_doc_movie).then(function (data) {
        docMovieData = data;
        render(true);
        function render(showModal) {
            if (showModal === true) {
                const $DoModalContent = $(`<h5>${docMovieData.Title}</h5><br>
                <img src="${docMovieData.Poster}"/><br>
                <p>Year: ${docMovieData.Year} </p><br>
                <p>Rated: ${docMovieData.Rated} </p><br>
                <p>Runtime: ${docMovieData.Runtime} </p><br>
                <p>Director: ${docMovieData.Director} </p><br>
                <p>Writer: ${docMovieData.Writer} </p><br>
                <p>Actors: ${docMovieData.Actors} </p><br>
                <p>Plot: ${docMovieData.Plot} </p>`);
                const $DoModal = $('#moviemodalDO')
                $DoModal.html($DoModalContent)
                $DoModal.modal();
            }
        }
        console.log(data);
    }, function (error) {
        console.log('error: ', error);
    });
}

function handleClickT() {
    const rand_thr_movie = THR_URL[(Math.random() * THR_URL.length) | 0]
    $.ajax(rand_thr_movie).then(function (data) {
        thrillerMovieData = data;
        render(true);
        function render(showModal) {
            if (showModal === true) {
                const $ThModalContent = $(`<h5>${thrillerMovieData.Title}</h5><br>
                <img src="${thrillerMovieData.Poster}"/><br>
                <p>Year: ${thrillerMovieData.Year} </p><br>
                <p>Rated: ${thrillerMovieData.Rated} </p><br>
                <p>Runtime: ${thrillerMovieData.Runtime} </p><br>
                <p>Director: ${thrillerMovieData.Director} </p><br>
                <p>Writer: ${thrillerMovieData.Writer} </p><br>
                <p>Actors: ${thrillerMovieData.Actors} </p><br>
                <p>Plot: ${thrillerMovieData.Plot} </p>`);
                const $ThModal = $('#moviemodalT')
                $ThModal.html($ThModalContent)
                $ThModal.modal();
            }
        }
        console.log(data);
    }, function (error) {
        console.log('error: ', error);
    });
}

function handleClickH() {
    const rand_hor_movie = HOR_URL[(Math.random() * HOR_URL.length) | 0]
    $.ajax(rand_hor_movie).then(function (data) {
        horrorMovieData = data;
        render(true);
        function render(showModal) {
            if (showModal === true) {
                const $HoModalContent = $(`<h5>${horrorMovieData.Title}</h5><br>
                <img src="${horrorMovieData.Poster}"/><br>
                <p>Year: ${horrorMovieData.Year} </p><br>
                <p>Rated: ${horrorMovieData.Rated} </p><br>
                <p>Runtime: ${horrorMovieData.Runtime} </p><br>
                <p>Director: ${horrorMovieData.Director} </p><br>
                <p>Writer: ${horrorMovieData.Writer} </p><br>
                <p>Actors: ${horrorMovieData.Actors} </p><br>
                <p>Plot: ${horrorMovieData.Plot} </p>`);
                const $HoModal = $('#moviemodalH')
                $HoModal.html($HoModalContent)
                $HoModal.modal();
            }
        }
        console.log(data);
    }, function (error) {
        console.log('error: ', error);
    });
}

function handleClickRc() {
    const rand_roco_movie = ROCO_URL[(Math.random() * ROCO_URL.length) | 0]
    $.ajax(rand_roco_movie).then(function (data) {
        romcomMovieData = data;
        render(true);
        function render(showModal) {
            if (showModal === true) {
                const $RcModalContent = $(`<h5>${romcomMovieData.Title}</h5><br>
                <img src="${romcomMovieData.Poster}"/><br>
                <p>Year: ${romcomMovieData.Year} </p><br>
                <p>Rated: ${romcomMovieData.Rated} </p><br>
                <p>Runtime: ${romcomMovieData.Runtime} </p><br>
                <p>Director: ${romcomMovieData.Director} </p><br>
                <p>Writer: ${romcomMovieData.Writer} </p><br>
                <p>Actors: ${romcomMovieData.Actors} </p><br>
                <p>Plot: ${romcomMovieData.Plot} </p>`);
                const $RcModal = $('#moviemodalRC')
                $RcModal.html($RcModalContent)
                $RcModal.modal();
            }
        }
        console.log(data);
    }, function (error) {
        console.log('error: ', error);
    });
}

function handleClickRa() {
    const rand_rand_movie = RAND_URL[(Math.random() * RAND_URL.length) | 0]
    $.ajax(rand_rand_movie).then(function (data) {
        randMovieData = data;
        render(true);
        function render(showModal) {
            if (showModal === true) {
                const $RaModalContent = $(`<h5>${randMovieData.Title}</h5><br>
                <img src="${randMovieData.Poster}"/><br>
                <p>Year: ${randMovieData.Year} </p><br>
                <p>Rated: ${randMovieData.Rated} </p><br>
                <p>Runtime: ${randMovieData.Runtime} </p><br>
                <p>Director: ${randMovieData.Director} </p><br>
                <p>Writer: ${randMovieData.Writer} </p><br>
                <p>Actors: ${randMovieData.Actors} </p><br>
                <p>Plot: ${randMovieData.Plot} </p>`);
                const $RaModal = $('#moviemodalRA')
                $RaModal.html($RaModalContent)
                $RaModal.modal();
            }
        }
        console.log(data);
    }, function (error) {
        console.log('error: ', error);
    });
}


