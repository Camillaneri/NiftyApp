var start = new Date();
var n_queries = 0;
console.log("Query number: ", n_queries);
function addQuery(){
    n_queries+=1
    console.log("Add query");
    sessionStorage.setItem('n_queries', n_queries);
    console.log('n_queries =', n_queries)
}

console.log('Start time: ' + start);