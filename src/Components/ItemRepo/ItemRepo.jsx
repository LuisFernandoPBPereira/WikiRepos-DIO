import { Button } from "../Button/Button"
import * as S from "./styled"

//Recebemos os dados do repositório, 
//juntamente com a função de remover o repositório
export function ItemRepo({repo, handleRemoveRepo}) {

    const handleRemove = () => {
      handleRemoveRepo(repo.id)
    }
  return (
    <S.ItemRepo>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <a href={repo.html_url} target="_blank">
          <Button label={"Ver Repositório"}/>
        </a><br />
        <Button label={"Remover"} onClick={handleRemove}/>
        <hr />
    </S.ItemRepo>
  )
}
