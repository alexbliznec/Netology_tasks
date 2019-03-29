'use strict' 

// Домашнее  задание 14 (Иерархия прототипов и наследование)


  // Задание 1

 /* class SpaceDate extends Date {
    copy (){
      return new SpaceDate (this); 
    }
    getNextDate (){
      
    let newOrderDate = new SpaceDate(this);
    newOrderDate.setDate(newOrderDate.getDate()+1);
    return newOrderDate;
    }
    
    getPrevDate (){
      let prevDate = new SpaceDate(this);
      prevDate.setDate(prevDate.getDate()-1);
      return prevDate;
    }
    getDayBeginning (){
      let newTime = new SpaceDate(this);
      newTime.setHours(0);
      newTime.setMinutes(0);
      newTime.setSeconds(0);
      return newTime;
    }
    getDayEnd (){
      let newTime = new SpaceDate(this);
      newTime.setHours(23);
      newTime.setMinutes(59);
      newTime.setSeconds(59);
      return newTime;
    }
  }


  let dateOriginal = new SpaceDate (2017, 1, 22);
  console.log(dateOriginal);


  let dateCopy = dateOriginal.copy();
  console.log(`это клон ${dateCopy}`);
  dateCopy.setYear(2022);
  console.log(`Оригинальная дата: ${dateOriginal.toLocaleDateString('ru-Ru')}`);
  console.log(`Измененная копия: ${dateCopy.toLocaleDateString('ru-Ru')}`);
  console.log('-----------------------------------------------');

  let orderDate = new SpaceDate(2017, 2, 10);
  console.log(orderDate);
  let deliveryDate = orderDate.getNextDate();
  console.log(deliveryDate);
  console.log(`Дата заказа: ${orderDate.toLocaleDateString('ru-Ru')}`);
  console.log(`Дата доставки: ${deliveryDate.toLocaleDateString('ru-Ru')}`);
  console.log('-------------------------------------------------');

  let supplyDate = new SpaceDate(2017, 3, 3);
  let requestDate = supplyDate.getPrevDate();
  console.log(`Дата поставки: ${supplyDate.toLocaleDateString('ru-Ru')}`);
  console.log(`Дата заявки поставщику: ${requestDate.toLocaleDateString('ru-Ru')}`);
  console.log('-------------------------------------------------');

  let someDate = new SpaceDate(2017, 2, 10, 12, 44);
  let from = someDate.getDayBeginning();
  let to = someDate.getDayEnd();
  console.log(`В любое время с ${from.toLocaleString('ru-Ru')} по ${to.toLocaleString('ru-Ru')}`);


  console.log('Задача 2 -----------------------------------------------------------');

  const holidays = [
    { date: 11, month: 3 - 1 },
    { date: 23, month: 2 - 1 }
  ];

  class Calendar {
    constructor(now = new Date()) {
      this.now = now;
    }
  
    setDate(now) {
      this.now = now;
    }
  
    get today() {
      return this.now.toLocaleString('ru-Ru');
    }
  }
  
  class PaymentTerminal {
    constructor(title, calendar) {
      this.title = title;
      this.calendar = calendar;
    }
  
    get status() {
      return this.isActive ? 'работает' : 'недоступен';
    }
  
    get isActive() {
      return this.checkActive();
    }
  
    checkActive() {
      return false;
    }
  }

 class AllDayPaymentTerminal extends PaymentTerminal {

    get status() {
        return this.isActive ? 'работает' : 'недоступен';
      };
    
      get isActive() {
        return this.checkActive();
      };
    
    checkActive (){
      return true;
    };
      
  }

class AllDayExceptHolidaysPaymentTerminal extends PaymentTerminal{
    
    constructor (title, calendar, holidays) {
        super (title, calendar);
        this.holidays = holidays;
    }
    
        get status() {
      return this.isActive ? 'работает' : 'недоступен';
      }

      get isActive() {
      return this.checkActive();
      }

      checkActive() {
            for (let i in holidays){
        if (holidays[i].date == calendar.now.getDate() && holidays[i].month == calendar.now.getMonth()){
          return false;
        }else{
          return true;
        }
      }
    }
  }

class WorkspacePaymentTerminal extends PaymentTerminal {
    get status() {
        return this.isActive ? 'работает' : 'недоступен';
      };
    
      get isActive() {
        return this.checkActive();
      };
    
    checkActive () {
        let day = new Date(calendar.today);
        let time = parseInt(day.getHours());
        if (time <= 7 || time >= 17) {
            return false;
        } else {
            return true;
            
        }
             
    };
}

const calendar = new Calendar();

const terminals = [
    new WorkspacePaymentTerminal('Терминал в офисе Убербанка', calendar),
    new AllDayPaymentTerminal('Терминал в аэропорту', calendar),
    new AllDayExceptHolidaysPaymentTerminal('Терминал в торговом центре', calendar, holidays)
  ];
  

  function showTerminals(date) {
    if (date !== undefined) {
      calendar.setDate(date);
    }
    console.log(calendar.today);
    terminals
      .filter(terminal => terminal instanceof PaymentTerminal)
      .forEach(terminal => console.log(`${terminal.title} ${terminal.status}`));
  }
  
  showTerminals(new Date(2017, 2 - 1, 23));
  showTerminals(new Date(2017, 3 - 1, 11));
  showTerminals(new Date(2017, 3 - 1, 14, 18, 1));
  showTerminals(new Date(2017, 3 - 1, 14, 8, 3));
*/

// Задача 3

class RegistrationError extends Error {
    constructor(field = null) {
      super(`Ошибка в поле ${field}`);
      this.field = field;
    }
  }
  
class NotValidEmailRegistrationError extends RegistrationError {
    constructor(field, email) {
      super(field);
      this.email = email;
    }
  }
  
class NotUniqueRegistrationError extends RegistrationError {
    constructor(field, value) {
      super(field);
      this.value = value;
    }
  }
  
class NotSameRegistrationError extends RegistrationError {}
  
  function isValidEmail(email) {
    return /^\w+(\.\w+)*@\w+(\.\w+)+$/i.test(email);
  }
  
  function isUniqueLogin(login) {
    return !['admin', 'boss'].includes(login);
  }
  
  function checkPassword(original, copy) {
    return original === copy;
  }
  
  function registerNewUser(data) {
    if (!isValidEmail(data.email)) {
      throw new NotValidEmailRegistrationError('Адрес электронной почты', data.email);
    }
    if (!isUniqueLogin(data.login)) {
      throw new NotUniqueRegistrationError('Логин', data.login);
    }
    if (!checkPassword(data.password, data.passwordCopy)) {
      throw new NotSameRegistrationError('Пароль');
    }
  }

  function handleRegistration (data) {
   /* try {
        registerNewUser (data)
    } catch (error) {console.log(error instanceof NotValidEmailRegistrationError)};*/
      try {
        registerNewUser (data);
        console.log(`Пользователь успешно зарегистрирован`);
      } catch (error) { 
        if (error instanceof NotValidEmailRegistrationError) {
            console.log(`${data.email} не является адресом эл.почты`);
        }
        if (error instanceof NotUniqueRegistrationError) {
            console.log(`Пользователь c ${data.login} уже зареган`);
        }
        if (error instanceof NotSameRegistrationError) {
            console.log(`Пароли ${data.password} и ${data.passwordCopy} не совпадают`);
        }
      }
  }

  const notValidEmailUser = { email: 'test' };
  handleRegistration(notValidEmailUser);
  
  const notUniqueLoginUser = { email: 'test@test.co', login: 'boss' };
  handleRegistration(notUniqueLoginUser);
  
  const differentPwUser = { email: 'test@test.co', login: 'ivan',
    password: '123', passwordCopy: '456' };
  handleRegistration(differentPwUser);
  
  const normalUser = { email: 'test@test.co', login: 'ivan', password: '123', passwordCopy: '123' };
  handleRegistration(normalUser);
