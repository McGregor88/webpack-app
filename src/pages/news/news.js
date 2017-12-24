import './news.scss';

import createMenu from '../../components/menu/menu';
var menu = createMenu(['Главная', 'Новости'], 'header-menu');
document.body.appendChild(menu);

console.log('in news.js');