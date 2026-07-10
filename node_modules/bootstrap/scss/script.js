emailjs.init({
    publicKey: "OCnGrRX1_y9aA-6Ca",
});

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const nom = document.getElementById("nom").value.trim();
    const prenom = document.getElementById("prenom").value.trim();
    const email = document.getElementById("email").value.trim();
    const sujet = document.getElementById("sujet").value;
    const message = document.getElementById("message").value.trim();

    emailjs.send(
        "service_wu9lhxw",
        "template_bv5o7ki",
        {
            nom: nom,
            prenom: prenom,
            email: email,
            sujet: sujet,
            message: message
        }
    )
        .then(() => {

            alert("Votre message a été envoyé avec succès !");

            console.log({
                nom,
                prenom,
                email,
                sujet,
                message
            });

            contactForm.reset();

        })
        .catch((error) => {

            console.error(error);

            alert("Une erreur est survenue.");

        });

});

