

function SearchedModal (props) {
  return (
    <div ref={props.modal} className='search-modal-container'>
      <ul>
        {props.cities.map((city, i) => {
          return <li onClick={(e) => props.setCity(e, i)} key={city.title}>{city.title}</li>
        })}
      </ul>
    </div>
  )
}

export default SearchedModal