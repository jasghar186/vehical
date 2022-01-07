$("document").ready(function () {

    let carsArr = [
        {
            name: "BMW 8-serie 2-door coupe grey ",
            img: "https://bit.ly/3n0mGl7",
            price: 62000,
            year: 2018,
            type: " automatic",
            distance: 14000
        },
        {
            name: "Mercedes Benz Amt Gt 2018 ",
            img: "https://bit.ly/3mZx5xe",
            price: 19000,
            year: 2018,
            type: " maual",
            distance: 12000
        },
        {
            name: "Porsche Macan 5-door SUV",
            img: "https://bit.ly/3G4pEwy",
            price: 16500,
            year: 2020,
            type: " automatic",
            distance: 0
        },
        {
            name: "Audi A-4 4 door",
            img: "https://bit.ly/3n1Wcj8",
            price: 81000,
            year: 2021,
            type: " automatic",
            distance: 1500
        },
        {
            name: "Ferrari LaFerarri 2-door Red",
            img: "https://bit.ly/3n3xX3Y",
            price: 71000,
            year: 2021,
            type: " automatic",
            distance: 900
        },
        {
            name: "Mercedes-Benz EQC 2019 5-Door",
            img: "https://bit.ly/3n3ydQu",
            price: 14900,
            year: 2019,
            type: " manual",
            distance: 1200
        }
    ]

    // declare variables
    let img = $(".car_img");
    let title = $(".car_title");
    let price = $(".price");
    let year = $(".year")
    let type = $(".type");
    let distance = $(".miles");
    let grid= $(".grid")


    carsArr.forEach(car => {
        let {name, img, price, year, type , distance} = car ;

        let html = ` <div class="card">
        <div class="img_container">
            <img src=${img} alt="">
            <div class="car_badge">
                <i class="fa fa-star"></i>
                <i class="fas fa-image">6</i>
            </div>
            <div class="featured">
            <p>Featured</p>
            </div>
        </div>
        <div class="content_container">
            <h2 class="car_title">
                ${name}
            </h2>
            <p class="price">
                ${price}
            </p>
            <div class="card_divider">

            </div>
            <article class="car_meta">
                <span class="year">
                   ${year}
                </span>
                <span class="miles">
                   ${distance}
                </span>
                <span class="type">
                  ${type}
                </span>
            </article>
        </div>
    </div>`



    $(grid).append(html)
    });


})