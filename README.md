# Cleaning-Company
Проект по предмету Проектирование информационных систем


## API
Описание методов **WEB API**, написанного с помощью **ASP.NET**

**base_url**: http://cleanandcode.somee.com/api
1. Получение данных по **Заказам:**

      + GET-запросы: 
      
            1. Все заказы: /orders
            
            2. Заказ по id: /orders/1
            
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
