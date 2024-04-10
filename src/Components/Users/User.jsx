import React from 'react';
import plus from './plus.svg'//Иконка +
import minus from './minus.svg'//Иконка -

export const User = ({ id, email, first_name, last_name, avatar, onClickInvite, isInvited }) => (//Шаблон отображения элемента списка аккаунтов
  <li>
    <div>
      <img className="avatar" src={avatar} alt="User" />{/*Аватарка ползьзователя */}
      <div>
        <h3>{first_name} {last_name}</h3>{/*Имя и фамилия пользователя */}
        <p>
          {email}{/*Эллектронная почта пользователя */}
        </p>
      </div>
    </div>
    <img onClick={()=>onClickInvite(id)} className="action" src={isInvited === true ? minus : plus} alt="Action" />{/*Условие для отображения иконки + или - */}
  </li>
);
