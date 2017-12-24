import 'normalize.css';
import './news.scss';

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
document.body.appendChild(menu);

console.log('in news.js');