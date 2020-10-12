import image from './assets/e55230d2770cc7f362a8318d464af171.png';
import {titleBlock, textBlock, imageBlock, columnsBlock} from './classes/blocks';

export const model =[ 
    new titleBlock ("Конструктор сайтів на JS", {tag:'h2',       
    styles:{
        background: 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)',
        color: '#fff',
        padding: '1.5rem',
        'text-align': 'center'
    }}),
    new textBlock ('here we ho from some text', { styles:{
        'text-align': 'center',
        margin: '0 auto',
        padding: '1.5rem',
       // color: '#fff'
    }}),
    new columnsBlock (["Додаток на чистому JavaScript(без бібліотек)",
    "Застосовані принципи SOLID та ООП",
    "Також тут робота за допомогою parcel"],{styles:{
        'text-align': 'center',
        background: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)',
        margin: '0 auto',
        padding: '2rem',
        'font-family': "'Source Code Pro', monospace",
        color: '#fff'
    }}),
    new imageBlock (image, {styles:{
        margin: '0 auto',
        dispay: 'flexbox',
        padding: '2rem 0',
        'justify-content': 'center'
        },
        imageStyles:{
            width: '500px',
            height: 'auto'
        },
        alt: 'picture'})
];