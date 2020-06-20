$(document).ready(function() {
    var city = $(#);
    var picture = $(#);
    var description = $(#);
    var cost = $(#);
    var address = $(#);
    var rating = $(#);

    $(document).on("submit", "#location-form", handleFormSubmit);

    function handleFormSubmit(event) {
        event.preventDefault();
        // Don't do anything if the name fields hasn't been filled out
        if (!nameInput.val().trim().trim()) {
          return;
        }
        // Calling the upsertAuthor function and passing in the value of the name input
        upsertLocation({
          name: nameInput
            .val()
            .trim()
        });
      }
    
    function upsertLocation (locationData) {
        $.post("/api/locations", locationData)
    }

    displayPlanet();

    async function displayPlanet(planet) {
      const element = $(".d-block");
      const data = await $.get(`/api/planet/${planet.id}`);
      const starData = data.star;
      const starSpan = $("<span>");
      
      starSpan.text(starData);
      element.append(starSpan);
    }
});