
// const socket = new WebSocket('ws://localhost:3001');

// socket.onmessage = (data) => ({
//   JSON.parse(data.data)
// })
// const severities = {
//   lowPrioity: [1,25],
//   mediumPrioity: [25,50],
//   highPrioity: [50,75],
//   immediatePrioity: [75,100]
// }

// let IP = [...severities.immediatePrioity];
// let HP = [...severities.highPrioity];
// let MP = [...severities.mediumPrioity];
// let LP = [...severities.lowPrioity];

// if (parsedData.queue){
//   let {queue} = parsedData;
//   let lowPrioity = [];
//   let mediumPrioity = [];
//   let highPrioity = [];
//   let immediatePrioity = [];

//   for(let key in queue){
//     if (queue[key].severity >= LP[0] && queue[key].severity < LP[1]){
//       lowPrioity = [...lowPrioity,{...queue[key], id:key}];
//     }
//     else if (queue[key].severity >= MP[0] && queue[key].severity < MP[1]){
//       mediumPrioity = [...mediumPrioity, {...queue[key], id:key}];
//     }
//     else if (queue[key].severity >= HP[0] && queue[key].severity < HP[1]){
//       highPrioity = [...highPrioity,{...queue[key], id:key}];
//     }
//     else if (queue[key].severity >= IP[0] && queue[key].severity <= IP[1]){
//       immediatePrioity = [...immediatePrioity,{...queue[key], id:key}];
//     }
//   }