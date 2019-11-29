/* <article>
<h1>Titre : NEMO</h1>
<h4>Auteur : Cassidy</h4>
<h4>Prix : 2.99€</h4>
<h4>Disponibilité : oui</h4>
</article> */

function register(titre, auteur, prix, dispo)
{
    let couleur = " ";
    if(dispo == "oui")
    {
        couleur = "bggreen";
    }
    else{
        couleur = "bgred";
    }

    document.querySelector("#index").innerHTML += `
                                        <article>
                                            <h1>Titre : ${titre}</h1>
                                            <h4>Auteur : ${auteur}</h4>
                                            <h4>Prix : ${prix}€</h4>
                                            <h4 class="${couleur}">Disponibilité : ${dispo} </h4>
                                        </article>`;
    
}

function recupValeur(event){
    event.preventDefault(); 
    register(this.titre.value, this.auteur.value, this.prix.value, this.dispo.value);
}

document.forms.formule.addEventListener("submit", recupValeur);


// this.titre.textContent = 0;
// this.auteur.value = 0;
// this.prix.value = 0; 
// ${#reset}.click;




