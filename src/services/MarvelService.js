import { useHttp } from "../hooks/http.hook"

const useMarvelService = () => {
    const { loading, request, error, clearError } = useHttp()

    const _apiBase = 'https://gateway.marvel.com:443/v1/public/'
    const _apiKey = 'apikey=94db72b9dea59c2098509d61e6b87d38'
    const _baseOffset = 210

    const getAllCharacters = async (offset = _baseOffset) => {
        const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`)
        return res.data.results.map(_transformCharacter)
    }

    const getCharacter = async (id) => {
        const res = await request(`${_apiBase}characters/${id}?${_apiKey}`)
        return _transformCharacter(res.data.results[0])
    }

    const getAllComics = async (offset = 0) => {
        const res = await request(`${_apiBase}comics?orderBy=issueNumber&limit=8&offset=${offset}&${_apiKey}`)
        /* console.log(res) */
        return res.data.results.map(_transformComic)
    }

    const _transformComic = (comic) => {
        return {
            title: comic.title,
            id: comic.id,
            cover: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
            price: comic.prices[0].price,
            description: comic.description || 'There is no description',
            pageCount: comic.pageCount ? `${comic.pageCount} p.` : 'No information about page count',
            language: comic.textObjects[0] ? comic.textObjects[0].language : 'en-us'
        }
    }

    const _transformCharacter = (character) => {
        return {
            name: character.name,
            id: character.id,
            description: character.description
                ? (character.description).length > 250
                    ? `${(character.description).slice(0, 250)}...`
                    : character.description
                : "no character description",
            thumbnail: `${character.thumbnail.path}.${character.thumbnail.extension}`,
            homepage: character.urls[0].url,
            wiki: character.urls[1].url,
            comics: character.comics.items
        }
    }

    return { loading, error, getAllCharacters, getCharacter, clearError, getAllComics }
}

export default useMarvelService