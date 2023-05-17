const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": "https://unsplash.it/300/300?image=24"
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": null
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

let postLiked = [];

const container = document.getElementById("container");

posts.forEach(element => {

    // Creo il div per il post e gli aggiungo la classe post

    const post = document.createElement("div");
    post.classList.add("post");

    // Creo il div per l'header post gli aggiungo la classe post__header

    const postHeader = document.createElement("div");
    postHeader.classList.add("post__header");

    post.appendChild(postHeader);

    // Creo il div post-meta le informazioni dell'utente e gli aggiungo la classe post-meta

    const postMeta = document.createElement("div");
    postMeta.classList.add("post-meta");

    postHeader.appendChild(postMeta);

    // Creo il div per l'icona dell'utente e gli aggiungo la classe post-meta__icon

    const postMetaIcon = document.createElement("div");
    postMetaIcon.classList.add("post-meta__icon");

    postMeta.appendChild(postMetaIcon);

    // Creo l'elemento img per inserire l'immagine e gli aggiungo la classe profile-pic

    // Controllo se l'utente ha una foto profilo in caso contrario ne assegno uan di default con le iniziali del nome e cognome

    if (element.author.image != null) {

        const profilePic = document.createElement("img");
        profilePic.classList.add("profile-pic");
        profilePic.src = element.author.image;
        
        postMetaIcon.appendChild(profilePic);

    } else {
        const profilePic = document.createElement("div");
        profilePic.classList.add("profile-pic-default");
        var user = element.author.name.split(" ");
        userName = user[0];
        userSurname = user[1];
        profilePic.innerHTML = userName[0] + userSurname[0];

        postMetaIcon.appendChild(profilePic); 
    }
    
    // Creo il div per nomee utente e data pubblicazione post e gli aggiungo la classe post-meta__data

    const postMetaData = document.createElement("div");
    postMetaData.classList.add("post-meta__data");

    postMeta.appendChild(postMetaData);

    // Creo il div per il nome dell'utente e gli aggiungo la classe post-meta__author

    const postMetaAuthor = document.createElement("div");
    postMetaAuthor.classList.add("post-meta__author");
    postMetaAuthor.innerText = element.author.name;

    postMetaData.appendChild(postMetaAuthor);

    // Creo il div per la data di pubblicazione e gli aggiungo la classe post-meta__time

    const postMetaTime = document.createElement("div");
    postMetaTime.classList.add("post-meta__time");
    let data = element.created.split("-");
    postMetaTime.innerText= data[2] + "/"+ data[1] + "/" + data[0];

    postMetaData.appendChild(postMetaTime);
    
    // Creo il div per la desrizione del post e gli aggiungo la classe post__text

    const postText = document.createElement("div");
    postText.classList.add("post__text");
    postText.innerHTML = element.content;

    post.appendChild(postText);

    // Creo il div per l'immagine del post e gli aggiungo la classe post__image

    const postImage = document.createElement("div");
    postImage.classList.add("post__image");

    post.appendChild(postImage);

    // Creo l'elemento ing per inserire l'immagine del post

    const image = document.createElement("img");
    image.src = element.media;

    postImage.appendChild(image);

    // Creo il div per il footer del post e gli aggiungo la classe post__footer

    const postFooter = document.createElement("div");
    postFooter.classList.add("post__footer");

    post.appendChild(postFooter);

    // Creo il div per i like del post e gli aggiungo la classe likes

    const likes = document.createElement("div");
    likes.classList.add("likes");

    postFooter.appendChild(likes);

    // Creo il div per il like cta del post e gli aggiungo la classe likes__cta

    const likesCta = document.createElement("div");
    likesCta.classList.add("likes__cta");

    likes.appendChild(likesCta);

    // Creo l'a per il pulsante like del post e gli aggiungo la classe like-button
    
    const likeButton = document.createElement("a");
    likeButton.classList.add("like-button");

    likesCta.appendChild(likeButton);

    // Creo l'i per l'icona like del post e gli aggiungo le classi like-button__icon, fas fa-thumbs-up

    const likeButtonIcon = document.createElement("i");
    likeButtonIcon.classList.add("like-button__icon", "fa-thumbs-up", "fas");

    likeButton.appendChild(likeButtonIcon);

    // Creo lo span per la label like del post e gli aggiungo la classe like-button__label

    const likeButtonLabel = document.createElement("span");
    likeButtonLabel.classList.add("like-button__label");

    const like = document.createTextNode(" Mi piace");

    likeButtonLabel.appendChild(like);

    likeButton.appendChild(likeButtonLabel);


    // Creo il div per il counter dei like del post e gli aggiungo la classe likes__counter

    const likeCounter = document.createElement("div");
    likeCounter.classList.add("likes__counter");

    likes.appendChild(likeCounter);

    const startSentence = document.createTextNode("Piace a ");

    likeCounter.appendChild(startSentence);

    const likeNuber = document.createElement("b");
    likeNuber.classList.add("js-likes-counter");
    likeNuber.innerHTML = element.likes;

    likeCounter.appendChild(likeNuber)

    const endSentence = document.createTextNode(" persone");

    likeCounter.appendChild(endSentence);

    // Rimani in ascolto per un eventuale click sul pulsante mi piace

    likesCta.addEventListener('click', function() {

        // controlla se l'id del post a cui l'utente a messo mi piace non è presente nell'array postLiked e in caso affermativi cambia il colore del testo "mi piace" e incremente il contatore dei like

        if(!postLiked.includes(element.id)) {
            likeButtonLabel.classList.add("like-button--liked");
            element.likes += 1;
            likeNuber.innerHTML = element.likes;
            postLiked.push(element.id);
        } else {
            likeButtonLabel.classList.remove("like-button--liked");
            element.likes -= 1;
            likeNuber.innerHTML = element.likes;
            postLiked.pop(element.id);
        }
    
    })

    container.appendChild(post);

});