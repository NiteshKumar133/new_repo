const images = require.context('./images', true);
const imageList = images.keys().map(image => images(image));
const data = [{
    "thumbnail":imageList[0],
    "title":"Natural Images",
    "description":"Collection of awesome  natural images",
    "live":'https://natural-images.vercel.app/',
    "see_live":true,
    "code":'https://github.com/Niteshkumar13/natural-images',
    "tech":['https://icons.veryicon.com/png/o/business/vscode-program-item-icon/react-3.png','https://www.svgrepo.com/show/327408/logo-vercel.svg']
},{
    "thumbnail":imageList[1],
    "title":"Synonyms Quiz",
    "description":"Simple Quiz webapp for test yourself",
    "live":true,
    "see_live":false,
    "code":'https://github.com/Niteshkumar13/Synonym-quiz',
    "tech":['https://cdn-icons-png.flaticon.com/512/732/732212.png','https://cdn-icons-png.flaticon.com/512/732/732190.png','https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png','https://static-00.iconduck.com/assets.00/django-icon-1606x2048-lwmw1z73.png']
},{
    "thumbnail":imageList[2],
    "title":"Video downloader",
    "description":"Just paste youtube link and download video",
    "live":'https://youtube-video-downloader-tawny.vercel.app/',
    "see_live":true,
    "code":'https://github.com/Niteshkumar13/Youtube-video-downloader',
    "tech":['https://icons.veryicon.com/png/o/business/vscode-program-item-icon/react-3.png','https://www.svgrepo.com/show/327408/logo-vercel.svg']
},
{
    "thumbnail":imageList[3],
    "title":"USA state game",
    "description":"Play the game based on the state in USA ",
    "live":true,
    "see_live":false,
    "code":'https://github.com/Niteshkumar13/us_state_guessing_game/tree/main',
    "tech":['https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png']
},
];
export default data;
