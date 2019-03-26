// assessment part 2 q4 

app.get('/search/events', db.searchEvents2);




const searchEvents2  = (request, response) => {

  var search = "%"+request.query.title+"%";
 
 
  const query = `SELECT * FROM events WHERE (title LIKE '${search}')`;
  console.log(search);
  console.log(query);
  pool.query(`${query}`, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
};

////

// localhost:3000/search/events?title=art
// returns a blank array, there should be 2 events. 


// i tried for many hours and couldn't figure it out. I got help on tech help but still can't answer it. 
// i would very much like to know why it's not working. 