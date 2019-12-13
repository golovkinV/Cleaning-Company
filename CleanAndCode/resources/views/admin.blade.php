@push('scripts')
    <script src="js/admin.js"></script>
@endpush


@extends('templates.homePageTemplate')

@section('content')
    <div class="d-flex justify-content-center" style="margin: 20px">
        <div class="btn-group btn-group-lg" role="group" aria-label="Basic example">
            <button type="button" class="btn" style="background-color: #007acc; color: white;" onclick="selectBlock('#managerOrders')">
                Новые заказы
            </button>
            <button type="button" class="btn" style="background-color: #007acc; color: white;" onclick="selectBlock('#managerConfirmedOrders')">
                Подтвержденные заказы
            </button>
            <button type="button" class="btn" style="background-color: #007acc; color: white;" onclick="selectBlock('#managerCompletedOrders')">
                    Завершенные заказы
                </button>
        </div>
    </div>

    <div class="d-flex text-white justify-content-center" style="margin: 20px">
        <div class="p-2" style="width: 85%">
            <div class="d-flex text-white">

                    <div class="p-2 flex-grow-1 bg-light blockHidden" id="managerOrders" style="display: none;">
                        <div class="d-flex text-white justify-content-center" style="margin: 20px">
                            <h3 class="text-dark">Заказы, ожидающие подтверждения</h3>
                        </div>
                        <div class="d-flex text-white justify-content-center" style="margin: 20px">
                            <table class="table" style="width: 85%">
                                <thead>
                                    <tr>
                                      <th>Адрес</th>
                                      <th>Дата уборки</th>
                                      <th>Статус заказа</th>
                                      <th></th>
                                      <th></th>
                                    </tr>
                                </thead>
                                <tbody id="managerOrdersTable"></tbody>
                            </table>
                        </div>
                    </div>

                    <div class="p-2 flex-grow-1 bg-light blockHidden" id="managerConfirmedOrders">
                            <div class="d-flex text-white justify-content-center" style="margin: 20px">
                                <h3 class="text-dark">Подтвержденные заказы</h3>
                            </div>
                            <div class="d-flex text-white justify-content-center" style="margin: 20px">
                                <table class="table" style="width: 85%">
                                    <thead>
                                        <tr>
                                          <th>Адрес</th>
                                          <th>Дата уборки</th>
                                          <th>Статус заказа</th>
                                          <th></th>
                                          <th></th>
                                        </tr>
                                    </thead>
                                    <tbody id="managerConfirmedOrdersTable"></tbody>
                                </table>
                            </div>
                        </div>

                    <div class="p-2 flex-grow-1 bg-light blockHidden" id="managerCompletedOrders" style="display: none;">
                        <div class="d-flex text-white justify-content-center" style="margin: 20px">
                            <h3 class="text-dark">Завершенные заказы</h3>
                        </div>
                        <div class="d-flex text-white justify-content-center" style="margin: 20px">
                            <table class="table" style="width: 85%">
                                <thead>
                                    <tr>
                                        <th>Адрес</th>
                                        <th>Дата уборки</th>
                                        <th>Статус заказа</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody id="managerCompletedTableOrders"></tbody>
                            </table>
                        </div>
                    </div>

            </div>
        </div>
    </div>

@endsection