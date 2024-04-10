import React from 'react';//Подключаем библиотеку React
import { Skeleton } from './Skeleton';//Подключаем скилетон, который будет отображаться во время загрузки данных пользователей
import { User } from './User';//

export const Users = ({ items, isLoading, searchValue, onChangeSearchValue, invites, onClickInvite, onClickSendInvites }) => {//Шаблон отображения всего списка пользователя
  return (
    <>
      <div className="search">
        <input value={searchValue}//Поле ввода поиска
          onChange={onChangeSearchValue}
          type="text"
          placeholder="Найти пользователя..." />
      </div>
      {isLoading ? (//Проверка подгрузки данных с сервера (если идёт загрузка - выводим скелетоны, а если данные загружены - выводим список пользователей)
        <div className="skeleton-list">
          <Skeleton />{/*Вызов скелетонов */}
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <ul className="users-list">
          {items.filter(obj => {//фильтрация списка пользователей, по ключевому слову в поиске
            const fullName = (obj.first_name + obj.last_name).toLowerCase();//Преобразование имени и фамилии к нижнему регистру
            return (fullName.includes(searchValue.toLowerCase()) || obj.email.toLowerCase().includes(searchValue.toLowerCase()))//Поиск пользователей по имени, фамилии и адресу почты
          }).map((obj) => (<User onClickInvite={onClickInvite} isInvited={invites.includes(obj.id)} key={obj.id}
            {...obj}//загрузка всех объектов массива 
          />))}
        </ul>
      )}
      {invites.length > 0 && (//Если выбрано один или более пользователей - отображаем кнопку Отправить приглашение
        <button onClick={onClickSendInvites} className="send-invite-btn">Отправить приглашение</button>//Кнопка отправки приглашения
      )}
    </>
  );
};
