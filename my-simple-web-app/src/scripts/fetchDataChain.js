export const fetchDataChain = (input, setNewData, setIsModalOpen) => {
  // SOURCE: https://gomakethings.com/waiting-for-multiple-all-api-responses-to-complete-with-the-vanilla-js-promise.all-method/

  // CREATE EMTY DATA OBJ
  let dataRes = {
    val1: "",
    val2: "",
    val3: "",
    val4: "",
    val5: "",
  };

  // FIRST FETCH
  fetch(
    "http://192.168.64.3/mvj-danske-bank-test/my-backend/person/index.php?$input$=" +
      input
  )
    .then((response) => response.json())
    .then((result) => {
      // COLLECT DATA FROM FIRST FETCH
      dataRes.val1 = result.val1;
      dataRes.val2 = result.val2;

      // FETCH MULTIPLE END POINTS SIMULTANEOUSLY
      Promise.all([
        fetch(
          "http://192.168.64.3/mvj-danske-bank-test/my-backend/facility/index.php?$val1$=" +
            result.val1
        ),
        fetch(
          "http://192.168.64.3/mvj-danske-bank-test/my-backend/exposure/index.php?$val2$=" +
            result.val2
        ),
      ])
        .then(function (responses) {
          // Get a JSON object from each of the responses
          return Promise.all(
            responses.map(function (response) {
              return response.json();
            })
          );
        })
        .then(function (data) {
          // COLLECT DATA FROM SECOND FETCH CHAIN
          dataRes.val3 = data[0].val3;
          dataRes.val4 = data[0].val4;
          dataRes.val5 = data[1].val5;
          // UPDATE STATE WITH NEW DATA OBJ
          setNewData(dataRes);
          // OPEN MODAL
          setIsModalOpen(true);
        })
        .catch(function (error) {
          // if there's an error, log it
          console.log(error);
        });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
