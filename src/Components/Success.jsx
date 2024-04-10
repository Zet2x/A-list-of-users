import React from 'react';
import success from './success.svg'//Иконка с галочкой

export const Success = ({ count }) => {//Сообщение об успешной отправки приглашений
  return (
    <div class="success-block">
      <img src={success} alt="Success" />
      <h3>Успешно!</h3>
      <p>Всем {count} пользователям отправлено приглашение.</p>
      <button onClick={()=>window.location.reload()} className="send-invite-btn">Назад</button>
    </div>
  );
};
