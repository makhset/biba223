
const data = {
    name: { value: "Али", type: "string" },
    age: { value: 25, type: "number" },
    isStudent: { value: true, type: "boolean" },
    ageAsString: { value: "25", type: "string" }
};


function displayData() {
    console.log(`Аты: ${data.name.value} | Тіпі: ${data.name.type}`);
    console.log(`Жасы: ${data.age.value} | Тіпі: ${data.age.type}`);
    console.log(`Студент пе?: ${data.isStudent.value} | Тіпі: ${data.isStudent.type}`);
    console.log(`Жасы (жол ретінде): ${data.ageAsString.value} | Тіпі: ${data.ageAsString.type}`);
}


displayData();