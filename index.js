

    const allBtns = document.getElementsByClassName('add-btn');

    let count = 8;
    
    for(const btn of allBtns){
       
        btn.addEventListener('click', function(e){
        count = count - 1;
   
        const totalSeats = document.getElementById("total-seats").innerText = count;
            e.target.style.backgroundColor = "#1DD100";

            if(count === 3 || count <=0){
                alert("You select Olready 4 seats");
            }

            const tottalPrise = document.getElementById("tottal-Prise").innerText;
            
            const converterTottomCost = parseInt(tottalPrise);
            document.getElementById("tottal-Prise").innerText = converterTottomCost + 550;

            const tottalPrise2 = document.getElementById("tottal-Prise2").innerText;
            
            const converterTottomCost2 = parseInt(tottalPrise2);
            document.getElementById("tottal-Prise2").innerText = converterTottomCost2 + 550;

        })
    }
  
    

