// A page state
const pageState = function () {
   // constructor
   let currentState = new homeState(this); // 'this' refers to the function pageState()

   //methods
   // when called, this.init() loads the homeState
   this.init = function(){
      // used to change currentState
      this.change(new homeState);
   }

   // change ()
   this.change = function(state) {
      currentState = state;
   }
}

// Home State
const homeState = function(page){
   // modifying the output/UI depending on the current state
   document.querySelector('#heading').textContent = null; // no heading desired
   // this adds a jumbotron with new content 
   document.querySelector('#content').innerHTML = `
      <div class="jumbotron">
         <h1 class="display-4"> </h1>
         <p class="lead"> </p>
         <hr class="my-4">
         <p> </p>
         <p class="lead">
            <a class="btn btn-primary btn-lg" href="#" role="button"> </a>
         </p>
      </div>
   `;
}

// About State
const aboutState = function (page) {
   document.querySelector('#heading').textContent - 'About the Company';
   document.querySelector('#content').innerHTML = `
      <p>This is the About Page</p>
   `;
}

// Contact State
const contactState = function (page) {
   document.querySelector('#heading').textContent - 'Contact Us';
   document.querySelector('#content').innerHTML = `
      <form>
         <div class="form-group">
            <label>Name</label>
            <input type="text" class="form-control">
         </div>
         <div class="form-group">
            <label>Email Address</label>
            <input type="email" class="form-control">
         </div>
         <button type="submit" class-"btn btn-primary">Submit</button>
      </form>
   `;
}