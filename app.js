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
         <h1 class="display-4">Welcome to this Webpage </h1>
         <p class="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos doloremque quidem velit officia animi! Cum.</p>
         <hr class="my-4">
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, reiciendis?</p>
         <p class="lead">
            <a class="btn btn-primary btn-lg" href="#" role="button">Learn More</a>
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

// Instantiate pageState
const page = new pageState();

// Initialize the first state
page.init();

// UI variables for the nav links
const home = document.getElementById('home');
const about = document.getElementById('about');
const contact = document.getElementById('contact');

// Event Listeners
// Home
// This uses an arrow function that takes in the event object as its parameter
home.addEventListener('click', (e)=> {
   page.change(new homeState);

   e.preventDefault();
});

// About
about.addEventListener('click', (e)=> {
   page.change(new aboutState);

   e.preventDefault();
});

// Contact 
contact.addEventListener('click', (e)=> {
   page.change(new contactState);

   e.preventDefault();
});