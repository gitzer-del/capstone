const form = document.getElementById('form');
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    formData.append("access_key", "1b720571-9530-42e8-845b-c925fab35985");

    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            alert("Success! Your message has been sent.");
            form.reset();
        } else {
            alert("Error: " + data.message);
        }

    } catch (error) {
        alert("Something went wrong. Please try again.");
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});





$(".dark-btn").click(
    function(){
        $(".box").toggleClass("dark");
        $(".container").toggleClass("dark");
    }
);


$(".spin-btn").click(
        function(){
            $(".box").toggleClass("spin");
        }
)

$(".reveal-btn").click(
    function(){
//    $(".chair").css("display", "block");
//    $(".chair").toggleClass("reveal");      
      $(".chair").show(); 
      $(".reveal-btn").hide();
    }
)

//$(".chair").draggable();
$(".draggable").draggable();

/* 

$("button").click(
    function(){
    $("p").toggleClass("main");
    }
); 

$ will target every of these p elements

*/
