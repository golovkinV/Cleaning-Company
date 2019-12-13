@push('scripts')
    <script src="js/cleaner.js"></script>
@endpush


@extends('templates.homePageTemplate')

@section('content')
    <div class="d-flex justify-content-center" style="margin: 20px">
        <div class="btn-group btn-group-lg" role="group" aria-label="Basic example">
            <button type="button" class="btn" style="background-color: #007acc; color: white;" onclick="selectBlock('#cleanerTableAllOrders')">
                Активные заказы
            </button>
            <button type="button" class="btn" style="background-color: #007acc; color: white;" onclick="selectBlock('#cleanerTableMyOrders')">
                Мои заказы
            </button>
        </div>
    </div>

    <!-- НАЧАЛО СКРЫТОЙ ЧАСТИ -->
    <div hidden>
        <div>
            <input id="idOwner"  name="idOwner" type="text" value="{{Auth::user()->id}}" required>
        </div>
    </div>
    <!-- КОНЕЦ СКРЫТОЙ ЧАСТИ -->

    <div class="d-flex text-white justify-content-center" style="margin: 20px">
        <div class="p-2" style="width: 85%">
            <div class="d-flex text-white">


                    <div class="p-2 flex-grow-1 bg-light blockHidden" id="cleanerTableAllOrders" style="display: none">
                        <div class="d-flex text-white justify-content-center" style="margin: 20px">
                            <h3 class="text-dark">Активные заказы</h3>
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
                                <tbody id="cleanerTableActiveOrders"></tbody>
                            </table>
                        </div>
                    </div>
                             

                    <div class="p-2 flex-grow-1 bg-light blockHidden" id="cleanerTableMyOrders" style="">
                        <div class="d-flex text-white justify-content-center" style="margin: 20px">
                            <h3 class="text-dark">Мои заказы</h3>
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
                                <tbody id="cleanerTableOrders"></tbody>
                            </table>
                        </div>
                    </div>

            </div>
        </div>
    </div>
@endsection
