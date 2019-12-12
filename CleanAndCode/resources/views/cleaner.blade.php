@push('scripts')
    <script src="js/cleaner.js"></script>
@endpush


@extends('templates.homePageTemplate')

@section('content')
    <div class="d-flex justify-content-center" style="margin: 20px">
        <div class="btn-group btn-group-lg" role="group" aria-label="Basic example">
            <button type="button" class="btn" style="background-color: #007acc; color: white;" onclick="selectBlock('#cleanerOrders')">
                Мои заказы
            </button>
            <button type="button" class="btn" style="background-color: #007acc; color: white;" onclick="selectBlock('#myOrders')">
                Мои заказы
            </button>
        </div>
    </div>

    <div class="d-flex text-white justify-content-center" style="margin: 20px">
        <div class="p-2" style="width: 85%">
            <div class="d-flex text-white">


                    <div class="p-2 flex-grow-1 bg-light blockHidden" id="cleanerOrders" style="display: none">
                            <div class="d-flex text-white justify-content-center" style="margin: 20px">
                                <h3 class="text-dark">Мои заказы</h3>
                            </div>
                            <div class="d-flex text-white justify-content-center" style="margin: 20px">
                                <form class="w-75" method="POST" action="" enctype="multipart/form-data">
        
                                    <!-- НАЧАЛО СКРЫТОЙ ЧАСТИ -->
                                    <div hidden>
                                        <div>
                                            <input id="idOwner"  name="idOwner" type="text" value="{{Auth::user()->id}}" required>
                                        </div>
                                    </div>
                                    <!-- КОНЕЦ СКРЫТОЙ ЧАСТИ -->
        
                                    <div class="form-group row">
                                        <label for="addressInput" class="col-sm-2 col-form-label text-dark font-weight-bold">
                                            Ваш адрес
                                        </label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control{{ $errors->has('nameCompany') ? ' is-invalid' : '' }}"
                                                   id="addressInput" name="addressInput" placeholder="Адрес"
                                            required autofocus maxlength="50">
                                        </div>
                                    </div>
        
                                    <div class="form-group row">
                                        <label for="description" class="col-sm-2 col-form-label text-dark font-weight-bold">
                                            Комментарий
                                        </label>
                                        <div class="col-sm-10">
                                            <textarea type="text" id="description" name="description" placeholder="Комментарий"
                                                      class="form-control{{ $errors->has('description') ? ' is-invalid' : '' }}"
                                                      required maxlength="300"></textarea>
                                        </div>
                                    </div>
        
                                    <div class="form-group row">
                                        <label for="category" class="col-sm-2 col-form-label text-dark font-weight-bold">
                                            Вид услуги
                                        </label>
                                        <div class="col-sm-10">
                                            <select сlass="form-control{{ $errors->has('category') ? ' is-invalid' : '' }}"
                                                    id="category" name="category" placeholder="Категория">
                                                    <option value="1">Комната</option>
                                                    <option value="2">Квартира</option>
                                                    <option value="3">Дом</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label for="date" class="col-sm-2 col-form-label text-dark font-weight-bold">
                                            Дата и время
                                        </label>
                                        <div class="col-sm-10">
                                            <input type="datetime-local" class="form-control{{ $errors->has('webSite') ? ' is-invalid' : '' }}"
                                                    id="date" name="date"
                                            >
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <div class="col-sm-10 offset-sm-2">
                                            <button type="button" class="btn" style="background-color: #007acc; color: white"
                                                onclick="newOrder()">
                                                Оформить заявку
                                                <div class="spinner-border text-light spinner-border-sm" role="status" id="newOrderLoader" style="display: none;">
                                                    <span class="sr-only">Loading...</span>
                                                  </div>
                                            </button>
                                            
                                        </div>
                                    </div>
        
                                    {{ csrf_field() }}
                                </form>
                            </div>
        
                    </div>

                    <div class="p-2 flex-grow-1 bg-light blockHidden" id="myOrders">
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
                                <tbody id="myOrdersTable"></tbody>
                            </table>
                        </div>
                    </div>

            </div>
        </div>
    </div>
@endsection
