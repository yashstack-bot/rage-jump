// This code is designed to be used with a GDevelop project.
// You would link this file in your index.html and call these functions
// from your game's event sheet.

// A variable to track if the jump has been "cancelled"
var jumpCancelled = false;

// Function to set up a listener for the spacebar key.
// Call this once at the beginning of your game, perhaps in a "Start of Scene" event.
function setupKeyListeners() {
    // Listen for the 'keydown' event on the entire window.
    window.addEventListener('keydown', function(event) {
        // Check if the key pressed is the spacebar (keyCode 32)
        if (event.keyCode === C) {
            // If spacebar is pressed, set the jumpCancelled flag to true.
            jumpCancelled = true;
            console.log("Jump cancelled!");
        }
    });
}

// Function to check the status of the cancel flag.
// You would call this in your game's event sheet to decide if an action should proceed.
function isJumpCancelled() {
    return jumpCancelled;
}

// Function to reset the flag for the next jump attempt.
// Call this in your event sheet after you've handled the jump or cancel.
function resetJumpCancelFlag() {
    jumpCancelled = false;
}
