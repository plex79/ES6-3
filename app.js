import {uniq} from 'lodash';
import insane from 'insane';
import jsonp from 'jsonp';



import User, {createURL, gravatar} from './src/user';

const me = new User('Mac Kkk', 'aaa@aaa.pl', 'aaaa.pl');
console.log(me);
const profile = createURL(me.name);
console.log(profile);
const image = gravatar(me.email);
console.log(image);