
const btnValidate = document.querySelector("button");


/* Date de départ par défaut */
let startDate = new Date().toISOString().split("T")[0];
start_date.value = startDate;
start_date.min = startDate;

/* date d'arrivée par défaut */
let tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
let endDate = tomorrow.toISOString().split("T")[0];
end_date.value = endDate;
end_date.min = endDate;

/* changement de date d'arrivée fr */
start_date.addEventListener("input", () => {
    let startDate = new Date(start_date.value).getTime();
    let endDate = new Date(end_date.value).getTime();
    
    if (endDate < startDate) {
        let tomorrow = new Date(start_date.value);
        tomorrow.setDate(tomorrow.getDate() + 1);
        console.log(tomorrow);
        end_date.value = tomorrow.toISOString().split("T")[0];
        endDate = new Date(end_date.value).getTime();
    }

    let totalDays = Math.ceil(Math.abs((endDate - startDate)/(1000*60*60*24)));
    console.log("totalDays = " + totalDays);
})

/* changement de date de départ fr */
 end_date.addEventListener("input", () => {
    let startDate = new Date(start_date.value).getTime();
    let endDate = new Date(end_date.value).getTime();
    if (endDate <= startDate) {
        let yesterday = new Date(end_date.value);
        yesterday.setDate(yesterday.getDate() - 1);
        
        start_date.value = yesterday.toISOString().split("T")[0];

        startDate = new Date(start_date.value).getTime();
    }
        let totalDays = Math.ceil(Math.abs((endDate - startDate)/(1000*60*60*24)));
        console.log("totalDays = " + totalDays);
        total.textContent = totalDays * nightPrice.textContent;
    
 })

