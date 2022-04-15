//VERSION=3

function setup() {
    return {
      input: ["B02", "B03", "B04"],
      output: { bands: 3 },
       mosaicking: "ORBIT"
    };
  }
  
  
  
  function evaluatePixel(sample) {
    return [2.5 * sample.B04, 2.5 * sample.B03, 2.5 * sample.B02];
  }
  
  function preProcessScenes (collections) {
      collections.scenes.orbits = collections.scenes.orbits.filter(function (orbit) {
          return (new Date(orbit.dateFrom) < new Date("2019-01-31T00:00:00Z")) ||
                 (new Date(orbit.dateFrom) >= new Date("2019-06-01T00:00:00Z"))
      })
      return collections
  }