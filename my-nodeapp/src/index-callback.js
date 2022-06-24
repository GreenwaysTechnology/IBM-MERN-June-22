//non blocking api using timers 
/**
 * 1.api must schdule task to the kernal
 * 2.kernal will emit event,so that event has to be processed
 * 3.in order to process event, we need listener - callback function 
 *   callback functions are used to handle result of nonblocking operations
 */

//callback style

function blockMe(message){
    console.log(message)
}

function delay(callback) {
    //api for nonblocking api 
    setTimeout(callback, 5000, "Hello,I am non blocking")
}

blockMe('start')
delay((data) => {
  console.log(data)
})
blockMe('end')



