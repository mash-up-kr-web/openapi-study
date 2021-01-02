import React, {useState} from 'react'
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SearchInput({handleSearch}: any){

const [searchText, setSearchText] = useState('')

const search = (e) => {
    if (e.key == "Enter") {
      handleSearch(searchText);
    }
}

  return (
    <div className="box">
      <div className='search_container'>
        <FontAwesomeIcon className="icon" icon={faSearch} />
        <input 
          id = 'search'
          type='search' 
          placeholder="🎬영화🎬제목 입력해죠..Enter..plz,," 
          value={searchText} 
          onChange={(e) => setSearchText(e.target.value)}
          onKeyPress={search}
        />
      </div>
    </div>
  )
}

export default SearchInput
