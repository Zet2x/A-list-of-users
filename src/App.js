import React from 'react';//Импортирование библиотеки React
import './index.css';//Подключение файла стилей css
import { Success } from './Components/Success';//Импортирование компоненты сообщения успешной отправки сообщений
import { Users } from './Components/Users';//Импортирование компоненты с отображением списка всех пользователей и отправка их данных

function App() {
  const [users, setUsers] = React.useState([])//Объявление списка пользователей
  const [isLoading, setLoading] = React.useState(true);//Объявление переменной отслеживания загрузки
  const [invites, setInvites] = React.useState([])//Объявление списка приглашенных пользователей
  const [searchValue, setSearchValue] = React.useState('')//Объявление переменной для хранения значения поиска
  const [success, setSuccess] = React.useState(false)//Объявление переменной, состояние которой влияет на переключение между списком пользователей и сообщением об успешной отправки приглашений
  React.useEffect(() => {
    fetch('https://reqres.in/api/users?page=2')//ссылка на список пользователей
      .then(res => res.json())//Преобразование полученного списка в json формат
      .then(json => {
        setUsers(json.data)//Передача массива пользователей
      }).catch((err) => {
        alert('Ошибка при получении пользователя');//Вывод сообщения ошибки получения списка пользователей
      }).finally(() => setLoading(false));//Переключение от скелетона загрузки к полученному списку пользователей
  }, []);
  const onChangeSearchValue = (event) => {//Функция, вызываемая при изменении значения поиска
    setSearchValue(event.target.value);//Передача значения поиска в переменную searchValue
  }
  const onClickInvite = (id) => {//Функция обработки нажатия на кнопку +/- приглашенного пользователя
    if (invites.includes(id)) {
      setInvites(prev => prev.filter(_id => _id !== id))//установка значения -, если пользователь ещё не выбран
    } else {
      setInvites(prev => [...prev, id])//установка значения + , если пользователь был добавлен в список приглашённых
    }
  }
  const onClickInvites = () => {//Функция обработки кнопки отправить
    setSuccess(true)
  }
  return (
    <div className="App">
      {success ? (
        <Success count={invites.length}/>//Вызов компоненты с сообщением отправки
      ) : (
        <Users
          onChangeSearchValue={onChangeSearchValue}
          searchValue={searchValue}
          items={users}
          isLoading={isLoading}
          invites={invites}
          onClickInvite={onClickInvite}
          onClickSendInvites={onClickInvites}
        /> //Вызов компоненты с отображением списка всех пользователей и отправка их данных
      )}
    </div>
  );
}
export default App;
