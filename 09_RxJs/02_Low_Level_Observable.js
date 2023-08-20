// Works on tool: https://out.stegrider.vercel.app/

const { Observable } = Rx;

const observable = new Observable((subscriber) => {
  // Throw the value into our pipeline
  subscriber.next(1);
  
  // Marks the observable as complete, no more values will come out
  subscriber.complete();
 
  // emit an error, no more values will come out
  subscriber.error(new Error('Something went wrong'));
});
//.pipe();

observable.subscribe({
	next(value) {
  	console.log('Got a value', value);
	},
  complete() {
  	console.log('Observable is complete, dont expect any more values.');
  },
  error(err) {
  	console.log('Bad thing happened', err.message);
  }
});

// Only here, because this tool requires it
observable;