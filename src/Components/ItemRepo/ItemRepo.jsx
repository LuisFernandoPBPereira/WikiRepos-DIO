import * as S from "./styled"

export function ItemRepo({repo, handleRemoveRepo}) {

    const handleRemove = () => {
      handleRemoveRepo(repo.id)
    }
  return (
    <S.ItemRepo onClick={handleRemove}>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <a href={repo.html_url} target="_blank">Ver Repositório</a><br />
        <a href="" className="remove">Remover</a>
        <hr />
    </S.ItemRepo>
  )
}
