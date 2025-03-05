// class Video{
// constructor(title, uploader, time){
// this.title = title
// this.uploader = uploader
// this.time = time
// }
// watch(){
// return `${this.uploader} watched all ${this.time} of ${this.title}!`
// }
// }
// const myVideo = new Video("Flowers", "Maria", 60)
//     console.log(myVideo.watch())
// const myVideoOne = new Video("Wild Animals", "Roly", 120)
//  console.log(myVideoOne.watch())

// //  Bonus
// const videoData = [
//   { title: "JavaScript Basics", uploader: "Alice", time: 10 },  
//   { title: "Python Guide", uploader: "Bob", time: 20 },
//   { title: "CSS Flexbox Tutorial", uploader: "Charlie", time: 15 },  
//   { title: "React for Beginners", uploader: "David", time: 30 },  
//   { title: "Node.js Express API", uploader: "Eve", time: 25 }
// ]

// loop through them using map() to instantiate those instances and save them
// const myvideos = videoData.map(data => new Video(data.title, data.uploader, data.time))
// console.log(myvideos)

// loop through them using forEach to instantiate those instances and also save them
// const videos = []
// videoData.forEach(data => {
//   const videoInstance = new Video(data.title, data.uploader, data.time)
//   videos.push(videoInstance)
// })
// console.log(videos)

