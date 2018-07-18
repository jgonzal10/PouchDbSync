var db = new PouchDB('http://localhost:5984/jgodb');
db.info().then(function (info) {
  document.getElementById('display').innerHTML = 'Database was created, watch this : ' + JSON.stringify(info);
});


//create doc with predefined id
// db.put({
//   _id: 'jgoDoc',
//   title: 'Mara'
// }, function(err, response) {
//   if (err) { return console.log(err); }
//   // handle response
// });

///update doc

// db.get('jgoDoc', function(err, doc) {
//   if (err) { return console.log(err); }
//   db.put({
//     _id: 'jgoDoc',
//     _rev: doc._rev,
//     title: "Let's Dance"
//   }, function(err, response) {
//     if (err) { return console.log(err); }
//     // handle response
//   });
// });


//Create a new document and let PouchDB auto-generate an _id for it.
// db.post({
//   title: 'LUZ My mother'
// }, function (err, response) {
//   if (err) { return console.log(err); }
//   // handle response
// });
//Put vs. post: The basic rule of thumb is: put() new documents with an _id, post() new documents without an _id.

//FETCHING

// db.get('jgoDoc', function(err, doc) {
//   if (err) { return console.log(err); }
//   document.getElementById('display').innerHTML = 'Database was created, watch this : ' + JSON.stringify(doc) ;
//   // handle doc
// });

//DELETE DOC
// db.get('jgoDoc', function(err, doc) {
//   if (err) { return console.log(err); }
//   db.remove(doc, function(err, response) {
//     if (err) { return console.log(err); }
//     // handle response
//   });
// });

//delete a document by just providing an id and rev:
// db.get('jgoDoc', function(err, doc) {
//   if (err) { return console.log(err); }
//   db.remove(doc._id, doc._rev, function(err, response) {
//     if (err) { return console.log(err); }
//     // handle response
//   });
// });

//delete a document by using put() with {_deleted: true}:
// db.get('jgoDoc', function(err, doc) {
//   if (err) { return console.log(err); }
//   doc._deleted = true;
//   db.put(doc, function(err, response) {
//     if (err) { return console.log(err); }
//     // handle response
//   });
// });

// db.get('a', function(err, doc) {
//   if (err) { return console.log(err); }
//   console.log(doc)
//   doc.name = 'different name',
//   doc.newparameter='new one',
//   doc.novo={'hola':1}
//   db.put(doc, function(err, response) {
//     if (err) { return console.log(err); }
//     console.log(response)
//   });
// });

///Put some new docs, providing the _ids:
// db.bulkDocs([
//   {title : 'Jonas', _id: 'jonasDoc'},
//   {title : 'Einer', _id: 'einerDoc'}
// ], function(err, response) {
//   if (err) { return console.log(err); }
//   // handle result
// });


//Post some new docs and auto-generate the _ids:
// db.bulkDocs([
//   {title : 'Crime and Punishment'},
//   {title : 'Javacript is Awesome'}
// ], function(err, response) {
//   if (err) { return console.log(err); }
//   // handle result
// });

//update/delete many documents at once
// db.bulkDocs([
//   {
//     title  : 'Ponete la 10',
//     artist : 'Velvetpufffffb',
//     _id    : "doc1",
//     _rev   : "1-84abc2a942007bee7cf55007cba56198"
//   },
//   {
//     title  : 'Where it actually came from',
//     artist : 'Multiple inheritance JLO',
//     _id    : "doc2",
//     _rev   : "1-7b80fc50b6af7a905f368670429a757e"
//   }
// ], function(err, response) {
//   if (err) { return console.log(err); }
//   // handle result
// });

// db.bulkDocs([
//   {_id: 'a', name: 'Kangaroo', type: 'marsupial'},
//   {_id: 'b', name: 'Koala', type: 'marsupial'},
//   {_id: 'c', name: 'Platypus', type: 'monotreme'}
// ], function(err, response) {
//   if (err) { return console.log(err); }
//   // handle result
// });

///Deleting multiple
// db.bulkDocs([
//   {
//     title    : 'Lisa Says',
//     _deleted : true,
//     _id      : "doc1",
//     _rev     : "1-84abc2a942007bee7cf55007cba56198"
//   },
//   {
//     title    : 'Space Oddity',
//     _deleted : true,
//     _id      : "doc2",
//     _rev     : "1-7b80fc50b6af7a905f368670429a757e"
//   }
// ], function(err, response) {
//   if (err) { return console.log(err); }
//   // handle result
// });


//fetch a batch of documents
// db.allDocs({
//   include_docs: true,
//   attachments: true
// }, function(err, response) {
//   if (err) { return console.log(err); }
//   console.log(response)
// });

//You can use startkey/endkey to find all docs in a range:

// db.allDocs({
//   include_docs: true,
//   attachments: true,
//   startkey: 'doc2',
//   endkey: 'einerDoc'
// }, function(err, response) {
//   if (err) { return console.log(err); }
//   console.log(response)
// });
 
//Prefix search by using the special high Unicode character '\ufff0' startkey
// db.allDocs({
//   include_docs: true,
//   attachments: true,
//   startkey: 'jonas'
// }, function(err, response) {
//   if (err) { return console.log(err); }
//   console.log(response)
// });

//End key endkey

// db.allDocs({
//   include_docs: true,
//   attachments: true,
//   startkey: 'jonas',
//   endkey: 'jonas\ufff0'
// }, function(err, response) {
//   if (err) { return console.log(err); }
//   console.log(response)
// });

//CHANGES
// var changes = db.changes({
//   since: 'now',
//   live: true,
//   include_docs: true
// }).on('change', function(change) {
//   console.log(change)
// }).on('complete', function(info) {
//   console.log(info)
// }).on('error', function (err) {
//   console.log(err);
// });

// console.log(changes)

//changes.cancel();


//Filter by artist === 'Velvetpub
// db.changes({
//   filter: function (doc) {
//     console.log(doc.artist)
//     return doc.artist === 'Velvetpub';
//   }
// });

//Replicate a DATABASE local to remote
// var rep = PouchDB.replicate('jgodb', 'http://localhost:5984/jgodb', {
//   live: true,
//   retry: true
// }).on('change', function (info) {
//   // handle change
// }).on('paused', function (err) {
//   // replication paused (e.g. replication up to date, user went offline)
// }).on('active', function () {
//   // replicate resumed (e.g. new changes replicating, user went back online)
// }).on('denied', function (err) {
//   // a document failed to replicate (e.g. due to permissions)
// }).on('complete', function (info) {
//   // handle complete
// }).on('error', function (err) {
//   // handle error
// });

//rep.cancel();

//replicate to db.replicate.to(remoteDB, [options]);
//replicate from db.replicate.from(remoteDB, [options]);



//SYNC a db
//var sync = PouchDB.sync(src, target, [options])
//db.sync('jgodb', 'http://127.0.0.1:5984/jgodb');


//To enable debug mode
//PouchDB.debug.enable('*');
//disable
//ouchDB.debug.disable();


// db.put({
//   _id: 'notes',
//   notes: [
//     {
//       "0": "note1"
//     },
//     {
//       "1": "note2"
//     }]
// }, function(err, response) {
//   if (err) { return console.log(err); }
//   // handle response
// });

db.get('notes', function(err, doc) {
  if (err) { return console.log(err); }

  doc.notes.push({3:'test 3'})
  db.put(doc, function(err, response) {
    if (err) { return console.log(err); }
   // console.log(response)
    console.log(doc)
  });
});

