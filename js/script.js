const app = new Vue({

    el: '#app',

    data: {
        slides: [
            {
                image: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                image: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum.',
            },
            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                image: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
            },
            {
                image: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
            }
        ],

        counter: 0,
        seconds: 3,
        mouseHover: false
    },

    methods: {
        activeChanger(index){
            if(index === this.counter){
                return 'active'
            }
        },

        counterAdd(){
            this.counter++;
            if(this.counter > this.slides.length - 1){
                this.counter = 0;
            }
            console.log(this.counter);
        },

        counterMinus(){
            this.counter--;
            if(this.counter < 0){
                this.counter = this.slides.length - 1
            }
            console.log(this.counter);
        },

        imagePicker(index){
            this.counter = 0;
            this.counter = this.counter + index;
        }
    },

    mounted(){
        setInterval(() =>{
            if(!this.mouseHover){
                this.counterAdd();
            }
        }, this.seconds * 1000)
    }

});

/*
    const slides = [
        {
            image: 'img/01.jpg',
            title: 'Svezia',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
        },
        {
            image: 'img/02.jpg',
            title: 'Svizzera',
            text: 'Lorem ipsum.',
        },
        {
            image: 'img/03.jpg',
            title: 'Gran Bretagna',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        },
        {
            image: 'img/04.jpg',
            title: 'Germania',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
        },
        {
            image: 'img/05.jpg',
            title: 'Paradise',
            text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
        }
    ];
    console.log(slides);
*/

