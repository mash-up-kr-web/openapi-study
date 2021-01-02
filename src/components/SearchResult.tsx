import React from 'react'

function SearchResult({result, title}:any){
  return <>
  <div>{title}:</div>
   {result && result.length > 0 && result.map(({movieNm}) => {
       return <div>{movieNm}</div>
   })}

  </>
}

export default SearchResult