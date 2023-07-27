// Task-1.........

function reversString(str) {
  let reversStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversStr = reversStr + str[i];
  }
  return reversStr;
}

// Task---2...........

function sumOfPositive(nmbrs) {
  let n = 0;
  for (let i = 0; i <= nmbrs.length; i++) {
    if (nmbrs[i] > 0) {
      n += nmbrs[i];
    }
  }
  return n;
}

// Task------3

function findMostFrequentElement(arr) {
  let mostFrequentElement;
  let maxFrequency = 0;

  for (let i = 0; i < arr.length; i++) {
    let currentElement = arr[i];
    let currentFrequency = 0;

    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === currentElement) {
        currentFrequency++;
      }
    }

    if (currentFrequency > maxFrequency) {
      maxFrequency = currentFrequency;
      mostFrequentElement = currentElement;
    }
  }

  return mostFrequentElement;
}

//Task-4.............

function findTwoNumbersWithSum(arr, target) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }

  return "No pair is found";
}

//Task-5----------

function calculate(num1, operator, num2) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        return "Cannot divide by zero.";
      }
      return num1 / num2;
    default:
      return "Invalid operator.";
  }
}

//Task-6..................

function generateRandomPassword(length) {
  const allChars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:,.<>?";
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars.charAt(randomIndex);
  }

  return password;
}

//Task-8..............

function findSecondSmallest(arr) {
  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let num of arr) {
    if (num < smallest) {
      secondSmallest = smallest;
      smallest = num;
    } else if (num < secondSmallest && num !== smallest) {
      secondSmallest = num;
    }
  }

  return secondSmallest;
}
