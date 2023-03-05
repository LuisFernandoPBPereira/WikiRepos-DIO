import * as S from "./styled"
import { Input } from "./Components/Input/Input";
import { ItemRepo } from "./Components/ItemRepo/ItemRepo";
import { useState } from "react";
import { Button } from "./Components/Button/Button";
import { api } from "./services/api";

function App() {
  const initialState = []
  const [currentRepo, setCurrentRepo] = useState("")
  const [repos, setRepos] = useState(initialState)

  const handleSearchRepo = async () => {
    const {data} = await api.get(`repos/${currentRepo}`)
    if(data.id){
      const isExist = repos.find(repo => repo.id === data.id)

      if(!isExist){
        setRepos(prev => [...prev, data])
        setCurrentRepo("")
        return
      }
    }
    alert("Repositório não encontrado/já existente")
  }
  //Função para remover um repositório
  const handleRemoveRepo = (id) => {
    setRepos(repos.filter(repos => repos.id !== id))
  }

  return (
    <S.App>
      <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/Github-Dark.svg" alt="" />
      <h2>Encontre seu Repositório</h2>
      <Input value={currentRepo} onChange={(event) => {setCurrentRepo(event.target.value)}}/>
      <Button onClick={handleSearchRepo} label={"Buscar"}/>
      {repos.map((repo, index) => {
        return(
          <>
            {repos.length == 0 ? (
              null
            ): (
              <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo} key={index}/>
            )}
          </>
        )
      })}
    </S.App>
  );
}

export default App;
