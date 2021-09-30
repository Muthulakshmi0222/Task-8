class Movie {
        constructor(title,studio,rating="PG"){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
        }
        getPG([]){ return [].slice.call(arguments).rating() }
    }
        let myMovie1 = new Movie("Captain America","Marvel Studion");
        let myMovie2 = new Movie("Batman","DC Production","PG8");
        let myMovie3 = new Movie("Not time to die","LionsGate","PG7");
        
        console.log(myMovie2);
        let myMovie4 = new Movie("Casino Royale","Eon Productions","PG13");
        console.log(myMovie4);