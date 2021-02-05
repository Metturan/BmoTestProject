function FoodList (props) {
  if (props.list.value) {

    return (
      <>
        <ul className='list-stores'>
          {props.list.value.map(item => {

            return (
              <li key={item.restaurant.id}>
                {item.restaurant.thumb ? <img src={item.restaurant.thumb} alt={item.restaurant.name}/> : <div className='thumbposter'></div>}
                <div className='infoBox'>
                  <p><strong>{item.restaurant.name}</strong></p>
                  <p>{item.restaurant.cuisines}</p>
                  <p>{item.restaurant.location.address}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </>
    )

  } else {
    return null
  }

}

export default FoodList;