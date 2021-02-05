import { useState, useRef } from 'react'
import { useDispatch } from 'react-redux';
import axios from 'axios'
import SearchedModal from './SearchedModal'
import { results } from '../reducers/counter/searchResultsSlice'

//  Would be hidden normally
const config = {
  "user-key":  "cbdcf6b6f4165a6d765cb7d6ef84ff69"
}

function SearchBar () {

const dispatch = useDispatch()

let [query, setQuery] = useState('');
let [city, setCity] = useState('');
let [entityID, setEntityID] = useState();
let [entityType, setEntityType] = useState();
let [suggestedCities, savedCities] = useState([]);

let modal = useRef();

function citySearch(e) {
  setCity(e.target.value)

  modal.current.classList.add('isOpen');

  axios.get(`https://developers.zomato.com/api/v2.1/locations?query=${e.target.value}`, {headers: config}
  ).then(res => {
    savedCities([...res.data.location_suggestions])
  })
}

function setCityFromSuggestions (e, i) {

  setCity(suggestedCities[i].title)
  setEntityID(suggestedCities[i].entity_id)
  setEntityType(suggestedCities[i].entity_type)

  removeModal();
}

function removeModal() {
  modal.current.classList.remove('isOpen');
}

function changeQuery(e) {
  setQuery(e.target.value)
}

function searchAPI () {
  let url;
  if (query) {
    url = `https://developers.zomato.com/api/v2.1/search?entity_id=${entityID}&entity_type=${entityType}&q=${query}`
  } else {
    url = `https://developers.zomato.com/api/v2.1/search?entity_id=${entityID}&entity_type=${entityType}`
  }

  axios.get(url, {headers: config}
  ).then(res => {
    dispatch(results(res.data.restaurants))
  })
  .catch(error => console.log(error))
  
  removeModal();
}

  return (
    <div style={{marginTop: '50px'}}>
      <div className="searchContainer">
        <div className='fieldGroup'>
          <label for="cityLookup">Find Location</label>
          <input id="cityLookup" onChange={citySearch} type="text" value={city} />
          <SearchedModal modal={modal} setCity={setCityFromSuggestions} cities={suggestedCities} />
        </div>
        
        
        <div className="fieldGroup">
          <label for="keywordSearch">Use any keywords</label>
          <input id="keywordSearch" onChange={changeQuery} value={query} type="text"/>
        </div>

        <button onClick={searchAPI}>Search</button>
      </div>
    </div>

  )
}

export default SearchBar;