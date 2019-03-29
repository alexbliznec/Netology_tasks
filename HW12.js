'use strict'

//Домашнее задание 12 (Регулярные выражения)

let codes = [
  'Madam, I’m Adam',
  'A man, a plan, a canal. Panama',
  '----<-------Eve------->-----',
  '[__777-x-44-x-777__]',
  '1234564321',
  'Olson in Oslo',
  'sesstert'
];

function palindromCheck (string){
  let stringRev = string.split('').reverse().join('');
  if (stringRev == string){
    let result = true;
    return result;
  }else{
    let result = false;
    return result;
  }
}

function chekCoupon (code){
  let result = code.match(/[A-Za0-9]/gi).join('').toLowerCase();
  if(result.length >= 10){
    return palindromCheck(result);
  }else{
    return false;
  }
}

//chekCoupon('----<-------Eve------->-----')
for (let code of codes){
  let result = chekCoupon(code) ? 'подходит' : 'не подходит';
  console.log(`купон с кодом '${code}' -- ${result}`);
}
console.log('----------------------------------------')
// Задача 2 

const texts = [
  '<strong>Наши</strong> <em>ховерборды</em> лучшие в <u>мире</u>!',
  '<EM>Световой меч</EM> в <strong>каждый</strong> дом!'
];

function stripTags (textWithTags){
  let textWithOutTags = textWithTags.replace(/\<(\/?[^\>]+)\>/gi, '')
  return textWithOutTags
}
//stripTags('<strong>Наши</strong> <em>ховерборды</em> лучшие в <u>мире</u>!')

for (let text of texts){
  console.log(stripTags(text))
}
console.log('--------------------------------------------')
// Задача 3 


const fields = [
  { name: 'name', rule: /^[a-z ]{5,}$/i },
  { name: 'email', rule: /\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6}/ },
  { name: 'phone', rule: /\+7[0-9]{7}/ },
];

const forms = [
  { name: 'Ivan Ivanov', email: 'ivan@test.co', phone: '+79212753690' },
  { name: 'III', email: 'ivan@test', phone: '11111' }
];

let booleanRes = true;
function validate(dataForm, dataRequirements){
  let res = [];
  
  dataRequirements.forEach(function(item, i, arr){
  let dataValue = dataForm[item.name];
  let formRule = item.rule;
  res.push((dataValue.match(formRule))? true : false)
  
  });
  for (let i of res){
    if (i == false){
      
      booleanRes = false;
    }else{
      booleanRes;
    }
  }
}

//validate(forms[0], fields);


for (let form of forms) {
  console.log(form);
  if (validate(form, fields)) {
    console.log('Ошибок нет');
  } else {
    console.log('Форма заполнена неверно');
  }
}



















