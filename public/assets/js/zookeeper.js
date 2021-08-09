const $zookeeperForm = document.querySelector("#zookeeper-form");

const getZookeepers = (formData = {}) => {
  let queryUrl = '/api/zookeepers?';

  Object.entries(formData).forEach(([key, value]) => {
    queryUrl += `${key}=${value}&`;
  });

  fetch(queryUrl)
    .then(response => {
      if (!response.ok) {
        return alert(`Error: ${response.statusText}`);
      }
      return response.json();
    })
    .then(zookeeperArr => {
      console.log(zookeeperArr);
      printResults(zookeeperArr);
    });
};

const handleGetZookeepersSubmit = event => {
  event.preventDefault();
  const nameHTML = $zookeeperForm.querySelector('[name="name"]');
  const name = nameHTML.value;

  const ageHTML = $zookeeperForm.querySelector('[name="age"]');
  const age = ageHTML.value;

  const zookeeperObject = { name, age };

  getZookeepers(zookeeperObject);
};

$zookeeperForm.addEventListener('submit', handleGetZookeepersSubmit);


getZookeepers();