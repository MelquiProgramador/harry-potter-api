const url = "https://hp-api.onrender.com/api/characters";

function convertPersonagemToLi(personagem) {
    return `
        <li class="personagem">

                    <div class="conteudo">


                        <span class="name">${personagem.name}</span>
                        <hr>

                        <div class="detalhes">



                            <span class="species"><h6>SPECIES</h6><p>${personagem.species}</p></span>
                            <span class="gender"><h6>GENDER</h6><p>${personagem.gender}</p></span>
                            <span class="birthdate">30/07/1980</span>
                            <span class="actor">Actor<p>daniel</p></span>


                        </div>


                    </div>

                    <div class="imagem-fundo">

                        <img src="${personagem.image}" alt="">

                    </div>


                </li>  
    `;
}

const listaPotters = document.getElementById("lista_personagens")

fetch(url)
    .then((response) => response.json())
    .then((jsonResponse) => listaPotters.innerHTML += jsonResponse.map(convertPersonagemToLi).join(""))



    