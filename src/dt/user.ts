import { Recipes, Recipe } from "./recipes";

export interface User {
    username: string;
    name: String;
    recipes: Recipes;
    description: String;
    followers: Number;
    following: Number;
    favorites: Recipe[];
    image?: string
}

export const dummy1: User = {
    username: 'Trishaa',
    name: 'Trisha',
    recipes: {

    },
    description: 'I am the best cooker in the universe!!!! Unicorns will reign!!!!',
    followers: 1,
    following: 1002,
    favorites: [],
    image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/screen-shot-2019-10-08-at-11-29-56-1570530611.png'
}

export const dummy2: User = {
    username: 'ClaireBA',
    name: 'Claire Saffitz',
    recipes: {
    },
    description: 'Hi, Im Claire from Bon Appetit and this is Gourmet Makes... something?',
    followers: 10033,
    following: 50,
    favorites: [],
    image: 'https://external-preview.redd.it/rf2Z2kCnjR_X6vRmcZ9ep01PYxwz6K8F-oPEZsVicGk.png?auto=webp&s=1ddc95fa82b12606902b2ff24decb17425b991e1'
}

export const dummy3: User = {
    username: 'YodaBestCook',
    name: 'Baby Yoda',
    recipes: {
    },
    description: 'hello, Yoda my name is, baby i am, cook for you i will, with these recipes the force strong is',
    followers: 1000000000,
    following: 1,
    favorites: [],
    image: 'https://i2.wp.com/trecobox.com.br/wp-content/uploads/2019/11/baby-yoda-the-mandalorian-star-wars-estrategia.jpg?fit=740%2C444&ssl=1'
}

export const dummy4: User = {
    username: 'GrampaCarl',
    name: 'Carl Fisck',
    recipes: {
    },
    description: 'Hope these recipes can help you out!',
    followers: 102,
    following: 778,
    favorites: [],
    image: 'https://cdni.rbth.com/rbthmedia/images/2018.05/article/5b0821d415e9f917c2730963.jpg'
}

export const dummy5: User = {
    username: 'TodTheMan',
    name: 'Tod Motze',
    recipes: {
    },
    description: 'Hey! Im here to share all my recipes with my followers, hope you enjoy! I know i did! ',
    followers: 2,
    following: 589,
    favorites: [],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSksnscVuQQOtFg_qVRh3wXf1R1dcMIPpqAZY6_sZO3HpacNPlgWA&s'
}

export const dummy6: User = {
    username: 'AlienWoman',
    name: 'Cassie Fox',
    recipes: {
    },
    description: 'Hello fellow cooks! hope you enjoy my recipes!',
    followers: 2089,
    following: 1902,
    favorites: [],
    image: 'https://i.pinimg.com/236x/f9/47/ba/f947badcf4d14c777a9853af5d9beb6e--stockphotos-photos-google.jpg'
}

export const dummy7: User = {
    username: 'GordonRamsay',
    name: 'Gordon Ramsay',
    recipes: {
    },
    description: 'hey',
    followers: 50680,
    following: 920,
    favorites: [],
    image: 'https://media.bizj.us/view/img/11427796/gordon-ramsay-1*750xx3840-2166-0-66.jpg'
}



export const DummyUsers: User[] = [
    dummy1,
    dummy2,
    dummy3,
    dummy4,
    dummy5,
    dummy6,
    dummy7,
]