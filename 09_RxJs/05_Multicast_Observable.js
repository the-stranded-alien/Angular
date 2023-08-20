const { Observable } = Rx;
const { tap, share } = RxOperators;

const observable = new Observable((subscriber) => {
  // Throw the value into our pipeline
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  
  setTimeout(() => {
  	subscriber.next(4);
  }, 500);
  
  // Marks the observable as complete, no more values will come out
  // subscriber.complete();
 
  // emit an error, no more values will come out
  // subscriber.error(new Error('Something went wrong'));
}).pipe(
  	tap(value => console.log('From tap: ', value)),
  	share()
);

observable.subscribe(
	(value) => console.log('Next Value : ', value), // next
  (err) => console.log('Something bad happened', err.message), // error
  () => console.log('Complete') // completion
);

observable.subscribe((value) => {
	console.log('From second subscribe', value)
});

// Only here, because this tool requires it
new Observable(() => {});