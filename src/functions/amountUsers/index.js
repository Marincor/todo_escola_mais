export default function getAmountUsers(array) {
  // creating arrays of user Id's //

  const arrIds = () => {
    let arrId = [];

    array.map((item) => {
      return arrId.push(item.userId);
    });

    return arrId;
  };

  // delete duiplicates of array Id's //

  const pickDuplicate = (arr) => {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
        if (!res.includes(arr[i])) {
          res.push(arr[i]);
        }
      }
    }
    return res;
  };

  // get last element of index = total of users //

  const amountUsers = pickDuplicate(arrIds())[
    pickDuplicate(arrIds()).length - 1
  ];

  return amountUsers;
}
