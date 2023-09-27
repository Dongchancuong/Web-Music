const $=document.querySelector.bind(document)
const $$=document.querySelectorAll.bind(document)
const app = {
    songs: [
        {
            name: 'Hello',
            singer: 'Adele',
            path: '../music/1.mp3',
            image: '../../assets/img/Adele - Hello.jpg',
        },
        {
            name: 'Rolling in the Deep',
            singer: 'Adele',
            path: '../music/2.mp3',
            image: '../../assets/img/Adele - Rolling in the Deep.jpg',
        },
        {
            name: 'Faded',
            singer: 'Alan Walker',
            path: '../music/3.mp3',
            image: '../../assets/img/Alan Walker  - Faded.jpg',
        },
        {
            name: 'Demons',
            singer: 'Imagine Dragons',
            path: '../music/4.mp3',
            image: '../../assets/img/Imagine Dragons  - Demons.jpg',
        },
        {
            name: 'Counting Stars',
            singer: 'OneRepublic',
            path: '../music/5.mp3',
            image: '../../assets/img/OneRepublic  - Counting Stars.jpg',
        },
        {
            name: 'Fireflies',
            singer: 'Owl City',
            path: '../music/5.mp3',
            image: '../../assets/img/Owl City  - Fireflies.jpg',
        },
        {
            name: 'See You Again',
            singer: 'Wiz Khalifa, Charlie Puth',
            path: '../music/5.mp3',
            image: '../../assets/img/Wiz Khalifa - See You Again ft Charlie Puth.jpg',
        }
    ],
    render: function () {
        const htmls = this.songs.map(song => {
            return `  
                <div class="song">
                        <div class="thumb" style="background-image: url('${song.image}')">
                    </div>
                    <div class="body">
                        <h3 class="title">${song.name}</h3>
                        <p class="author">${song.singer}</p>
                    </div>
                    <div class="option">
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                </div>
            `    
        })
        $('.playlist').innerHTML = htmls.join(``)
    },
    handleEvents:function(){
        document.onscroll = function(){
            console.log(document.documentElement.scrollTop||window.scrollY)
        }
    },
    start: function () {
        this.render()
    }
}
app.start()