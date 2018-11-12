// (function() {
//   var url = "https://www.healthcare.gov/api/index.json"; 

//   fetch(url)
//   .then(function(res) {
//     if (!res.ok) {
//       throw Error(res.statusText);
//     } 
//     return res.json();
//   }).then(function(res) {
//     updateUISuccess(res);
//   }).catch(function(error) {
//     updateUIError();
//   });

//   function updateUISuccess(res) {
//     var state = {
//       title: res[0].title,
//       url: res[0].url,
//       summary: res[0].bite
//     }
//     console.log(state)
//     var info = document.querySelector('#info');
//     ReactDOM.render(<Info {...state} />, info);

//     function Info(props) {
//       return (
//         <div>
//           <p><a href={props.url}>{props.title}</a></p>
//           <p>{props.summary}</p>
//         </div>
//       )
//     }
//   }

//   function updateUIError(error) {
//     console.log(error)
//   }
// })();