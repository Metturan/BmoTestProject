# BmoTestProject

Link to heroku: https://bmoredux.herokuapp.com/


1. I spent around 6 hours working on the coding assignment. In a real situation i would want to add more or even redo some existing functionality. Some things I may want to work on is: a) Form validation of some kind, b) Setting up pagination, c) My modal popup that chooses locations to be better integrated.


2. In Javascript a new feature that I really like is the array/object spread operator. I didn't use it much in this project but here is a snippet.

  axios.get(`https://developers.zomato.com/api/v2.1/locations?query=${e.target.value}`, {headers: config}
  ).then(res => {
    savedCities([...res.data.location_suggestions])
  })
  
  Time saving at it's best :)
  
In react - I've been learning hooks as opposed to class based components for state and lifecycle methods. For this project I learnt/used redux hooks and configure store. I'm pleasantly surprised by how much more productive you can be in react by using hooks. Although I learnt from this project that hooks makes testing a lot more complicated. I'm new to testing but not adverse to learning it. As you can see I didn't do much in the form of testing as I spent a lot of time learning about react-testing-library instead of enzyme because of hooks. I will definately put this on my list to learn over the next week.
  
3. I've had to track down memory leaks before. I used chrome dev tools by enabling javascript memory and watching in realtime. I check to see if either new objects are being created, or the existing objects are growing with the memory usage. Then there is performance through refactoring making sure to save unnecessary renders usually by watching the lifecycle methods.
  
4. I thought the API was done well and documentation was easy to use. There are a lot of functions that i never used that I feel are interesting like location details which shows nightlife index, so I can't say what I would really change without knowing more.

5. JSON for me is organized information that i can reach for whenever I need that can be imported anywhere. I've had multiple projects use JSON for storing information about sections of the site. I incorporate this a lot myself into my own projects.
