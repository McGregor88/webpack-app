import 'normalize.css';
import '../../sass/style.sass';

import createMenu from '../../components/menu/menu';
var menu = createMenu(
    [
        {
            title: "Главная",
            url: "index.html"
        },
        {
            title: "Новости",
            url: "news.html"
        }
    ],
    'header-menu'
);
document.getElementById("header-menu").appendChild(menu);

$(document).ready(function () {
    console.log('in news.js');
});