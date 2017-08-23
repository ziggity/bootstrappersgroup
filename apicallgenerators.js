
//$ NPM install node-fetch

// yield works just as you would assume, it yields, and passes it on to the next function.
// Generators let you treat synchronous code like asych code with yields as seen below
//promises are fine too. 
// Generators are a bit more clever it seems. 
//

const fetch = require('node-fetch')

run(function *() {
    const uri = 'http://jsonplaceholder.typicode.com/posts/1'
    const response = yield fetch(uri)
    const post = yield response.json()
    const title = post.title
    return title
})
.catch( error => console.error(error.stack))
.then(x =>
    console.log('run resulted in', x)
)


function run(generator){
    const iterator = generator()
    function iterate(iteration){
  if(iteration.done) return iteration.value  
  const promise = iteration.value
  return promise.then( x => iterate(iterator.next(x)))
}
       return iterate(iterator.next())

}
