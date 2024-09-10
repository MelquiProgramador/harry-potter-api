const url = "https://hp-api.onrender.com/api/characters";

function convertPersonagemToLi(personagem) {

    function nomesAlternativos() {
        return personagem.alternate_names.map(name => `${name}<br>`).join('');
      }
    
    return `
        <li class="personagem">

            <div class="conteudo">


                <span class="name">${personagem.name}</span>
                    <hr>

                        <div class="detalhes">



                            <span class="detalhes-info">
                            <h6>SPECIES</h6>
                            <p>${personagem.species}</p>
                            </span>
                            
                            <span class="detalhes-info">
                            <h6>GENDER</h6>
                            <p>${personagem.gender}</p>
                            </span>
                            
                            <span class="detalhes-info">
                            <h6>HOUSE</h6>
                            <p>${personagem.house}</p>
                            </span>
                            
                            <span class="detalhes-info">
                            <h6>dateOfBirth</h6>
                            <p>${personagem.dateOfBirth}</p>
                            </span>

                            <span class="detalhes-info">
                            <h6>wizard</h6>
                            <p>${personagem.wizard}</p>
                            </span>

                            <span class="detalhes-info nomesAlternativos">
                            <h6>alternate-names</h6>
                            <p>${nomesAlternativos()}</p>
                            </span>


                    </div>


            </div>

            <div class="imagem-fundo">

                    <img src="${personagem.image}" alt="Não existe -> ${personagem.name}">

            </div>

            


        </li>  
    `;
}

const listaPotters = document.getElementById("lista-personagens")




fetch(url)
    .then((response) => response.json())
    .then((jsonResponse) => listaPotters.innerHTML = jsonResponse.map(convertPersonagemToLi).join(""))
    .catch((error) => console.log("Erro ao carregar os dados:", error));