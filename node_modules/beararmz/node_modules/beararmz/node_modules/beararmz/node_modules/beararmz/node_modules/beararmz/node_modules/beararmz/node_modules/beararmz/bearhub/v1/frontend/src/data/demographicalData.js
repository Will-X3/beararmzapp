// Function to generate mock demographic data dynamically
const generateMockDemographicData = () => {
    const data = [];
    // Define demographic categories and their corresponding values
    const categories = [
      { label: 'Age 18-25', value: getRandomInt(100, 500) },
      { label: 'Age 26-35', value: getRandomInt(100, 500) },
      { label: 'Age 36-45', value: getRandomInt(100, 500) },
      { label: 'Age 46-55', value: getRandomInt(100, 500) },
      { label: 'Age 56-65', value: getRandomInt(100, 500) },
      // Add more demographic categories as needed
    ];
    // Push each category to the data array
    categories.forEach(category => {
      data.push({
        label: category.label,
        value: category.value,
      });
    });
    return data;
  };
  
  // Function to generate a random integer between min (inclusive) and max (exclusive)
  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  
  // Example usage:
  const demographicData = generateMockDemographicData();
  console.log(demographicData);
  