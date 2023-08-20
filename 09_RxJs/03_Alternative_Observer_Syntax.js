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

observable.subscribe(
	(value) => console.log('Next Value : ', value), // next
  (err) => console.log('Something bad happened', err.message), // error
  () => console.log('Complete') // completion
);

// Only here, because this tool requires it
observable;