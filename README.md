# Cleaning-Company
Проект по предмету Проектирование информационных систем


## API
Описание методов **WEB API**, написанного с помощью **ASP.NET**

**base_url**: http://cleanandcode.somee.com/api
1. Получение данных по **Заказам:**

      + GET-запросы: 
      
            1. Все заказы: /orders
            
            2. Заказ по id: /orders/{order_id}
            
            3. Заказы клиента: /orders/client_orders/{client_id}
            
            4. Заказы уборщика: /orders/cleaner_orders/{cleaner_id}
            
            5. Неподтвержденные заказы: /orders/manager_orders
      
      + POST-запросы: 
      
            1. Добавить новый заказ: /orders         
                  Модель object: 
                        let data = {
                              ClientId: 2,
                              CleanerId: 3,
                              Address: "адрес",
                              Date: "01.01.1970",
                              Time: "00:00",
                              ServiceId: 4
                         }

      + PUT-запросы
      
            1. Редактировать заказ: /orders/{order_id}
                  Модель object: 
                        let data = {
                              ClientId: 2,
                              CleanerId: 3,
                              Address: "адрес",
                              Date: "01.01.1970",
                              Time: "00:00",
                              ServiceId: 4
                         }
                         
      + DELETE-запрос: **/orders/{order_id}**

2. Получение данных по **Услугам:**

      + GET-запросы: 
      
            1. Все услуги: /services
            
            2. Услуга по id: /services/{service_id}
            
      + POST-запросы: 
      
            1. Добавить новую услугу: /services       
                  Модель object: 
                        let data = {
                              Name: "название"
                         }

      + PUT-запросы
      
            1. Редактировать услугу: /orders/{service_id}
                  Модель object: 
                        let data = {
                              Name: "название"
                         }
                         
      + DELETE-запрос: **/services/{service_id}**

3. Получение данных по **Статусам заказа:**

      + GET-запросы: 
      
            1. Все статусы: /conditions
            
            2. Статус по id: /conditions/{condition_id}
            
      + POST-запросы: 
      
            1. Добавить новую услугу: /conditions       
                  Модель object: 
                        let data = {
                              Name: "название"
                         }

      + PUT-запросы
      
            1. Редактировать услугу: /conditions/{condition_id}
                  Модель object: 
                        let data = {
                              Name: "название"
                         }
                         
      + DELETE-запрос: **/conditions/{condition_id}**
      
4. Отправка **Письма на почту клиента:**
      + POST-запрос:
            
            1. Отправить письмо: /email
                  Модель object: 
                        let data = {
                              ClientName: "ФИО",
                              Email: "client@yandex.ru",
                              Date: "01.01.1970",
                              Time: "00:00"
                        }
