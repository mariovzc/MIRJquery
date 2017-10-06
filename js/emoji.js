var commands = [
  [ "unicorn", "🦄" ],
  [ "pizza", "🍕" ],
  [ "beer", "🍺"],
  [ "poo", "💩"]
];
/// COOL CONSOLE LOG ;
(function() {
  if(!window.console) return;

  // Create custom commands
  commands.forEach(function(command) {
    window.console[command[0]] = function() {

      // Get arguments as a string
      var args = Array.prototype.slice.call(arguments).toString().split(',').join(', ');

      // Log to the console with emoji
      console.log(command[1] + "  " + args);
    }
  });
})();