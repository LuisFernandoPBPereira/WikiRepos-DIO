import * as S from "./styled"
import { Input } from "./Components/Input/Input";
import { ItemRepo } from "./Components/ItemRepo/ItemRepo";
import { useState } from "react";
import { Button } from "./Components/Button/Button";
import { api } from "./services/api";

function App() {

  const [currentRepo, setCurrentRepo] = useState("")
  const [repos, setRepos] = useState([])

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

  const handleRemoveRepo = (id) => {
    const remove = repos.find(repo => repo.id === id)

    repos.map((repo) => {
      console.log(repo.id);
      if(repo.id == remove.id){
        return(
          <h1>opa</h1>
        )
      }
    })
  }

  return (
    <S.App>
      <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/Github-Dark.svg" alt="" />
      <Input value={currentRepo} onChange={(event) => {setCurrentRepo(event.target.value)}}/>
      <Button onClick={handleSearchRepo} label={"Buscar"}/>
      {repos.map((repo, index) => {
        return(
          <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo} key={index}/>
        )
      })}
    </S.App>
  );
}

export default App;
